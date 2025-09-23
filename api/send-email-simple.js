// Simple email API without OAuth2 - for testing
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
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  try {
    const { email } = req.body;

    console.log('Simple API - Received email:', email);

    if (!email) {
      return res.status(400).json({ message: 'Email is required', success: false });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format', success: false });
    }

    // For now, just log the email and return success
    // In production, you can integrate with services like:
    // - SendGrid
    // - Mailgun  
    // - AWS SES
    // - Or use a form service like Formspree, Netlify Forms, etc.
    
    console.log('📧 New signup:', {
      email: email,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent']
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ 
      message: 'Email received successfully! (Check server logs)',
      success: true,
      email: email,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Simple API error:', error);
    res.status(500).json({ 
      message: 'Server error occurred',
      error: error.message,
      success: false 
    });
  }
}