import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Log for debugging
    console.log('Received email submission:', email);
    console.log('Environment variables check:', {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasClientId: !!process.env.GMAIL_CLIENT_ID,
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      hasRefreshToken: !!process.env.GMAIL_REFRESH_TOKEN
    });

    if (!email) {
      return res.status(400).json({ message: 'Email is required', success: false });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format', success: false });
    }

    // Check if all environment variables are present
    if (!process.env.GMAIL_USER || !process.env.GMAIL_CLIENT_ID || !process.env.GMAIL_CLIENT_SECRET || !process.env.GMAIL_REFRESH_TOKEN) {
      console.error('Missing environment variables');
      return res.status(500).json({ message: 'Server configuration error', success: false });
    }

    // Create OAuth2 client
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN
    });

    // Get access token
    console.log('Getting access token...');
    const accessToken = await oauth2Client.getAccessToken();
    console.log('Access token obtained successfully');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: 'New Divine Energy Collective Signup!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FFD700; margin: 0; font-size: 28px;">Divine Energy Collective</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Member Interest</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 8px; backdrop-filter: blur(10px);">
            <h2 style="color: #FFD700; margin-top: 0; font-size: 20px;">New Email Signup</h2>
            <p style="font-size: 18px; margin: 15px 0;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 14px; opacity: 0.8; margin: 20px 0 0 0;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString('en-PK', { 
    timeZone: 'Asia/Karachi',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
            <p style="margin: 0; font-size: 14px; opacity: 0.7;">
              This email was sent from your Divine Energy Collective landing page
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    console.log('Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    res.status(200).json({ 
      message: 'Email sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Failed to send email',
      error: error.message,
      success: false 
    });
  }
}