import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'],
  credentials: true
}));
app.use(bodyParser.json());

const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Beautah Email Server is running',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/send-chat-alert', async (req, res) => {
  try {
    const { question, visitorEmail, timestamp } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: 'Question is required'
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bsuba0387@gmail.com', // Beautah's email
      subject: '🚨 Important Question From Portfolio Chat',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
                .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0; }
                .alert { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 15px 0; }
                .question { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin: 15px 0; }
                .info-item { margin: 10px 0; }
                .label { font-weight: bold; color: #4a5568; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🔔 New Important Inquiry</h1>
                    <p>Someone has asked an important question on your portfolio website</p>
                </div>
                <div class="content">
                    <div class="alert">
                        <strong>💡 Opportunity Alert:</strong> This visitor may be interested in collaboration, employment, or important projects.
                    </div>
                    
                    <div class="question">
                        <h3>📝 Visitor's Question:</h3>
                        <p>"${question}"</p>
                    </div>

                    <div class="info-item">
                        <span class="label">📧 Visitor Email:</span> 
                        <span>${visitorEmail || 'Not provided'}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">🕒 Time:</span> 
                        <span>${new Date(timestamp).toLocaleString()}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">🌐 Source:</span> 
                        <span>Portfolio Website Chat System</span>
                    </div>

                    <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 5px;">
                        <strong>💡 Suggested Action:</strong> Consider responding to this inquiry within 24-48 hours for best engagement.
                    </div>
                </div>
            </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    
    console.log('✅ Email alert sent to Beautah:', {
      question: question.substring(0, 100) + '...',
      visitorEmail: visitorEmail || 'Not provided',
      timestamp: new Date().toISOString()
    });

    res.json({ 
      success: true, 
      message: 'Email sent successfully to Beautah' 
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

app.post('/api/send-contact-form', async (req, res) => {
  try {
    const { name, email, subject, message, timestamp } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bsuba0387@gmail.com',
      subject: `📧 New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
                .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0; }
                .message-box { background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; margin: 15px 0; }
                .info-item { margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
                .label { font-weight: bold; color: #4a5568; min-width: 120px; display: inline-block; }
                .urgent { background: #fed7d7; color: #c53030; padding: 10px; border-radius: 5px; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📧 New Contact Form Submission</h1>
                    <p>Someone has reached out through your portfolio website</p>
                </div>
                <div class="content">
                    <div class="info-item">
                        <span class="label">👤 Name:</span> 
                        <span>${name}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">📧 Email:</span> 
                        <span><a href="mailto:${email}">${email}</a></span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">📋 Subject:</span> 
                        <span>${subject}</span>
                    </div>
                    
                    <div class="info-item">
                        <span class="label">🕒 Time:</span> 
                        <span>${new Date(timestamp).toLocaleString()}</span>
                    </div>

                    <div class="message-box">
                        <h3>💬 Message:</h3>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>

                    <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 5px;">
                        <strong>💡 Quick Actions:</strong><br>
                        • <a href="mailto:${email}?subject=Re: ${subject}&body=Dear ${name},">Reply to ${name}</a><br>
                        • Save to contacts<br>
                        • Schedule follow-up
                    </div>
                </div>
            </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    
    console.log('✅ Contact form email sent to Beautah:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString()
    });

    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('❌ Contact form email failed:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit contact form',
      error: error.message 
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Beautah Portfolio Email Service',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      sendChatAlert: '/api/send-chat-alert',
      sendContactForm: '/api/send-contact-form'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/send-contact-form`);
  console.log(`🤖 Chat alert endpoint: http://localhost:${PORT}/api/send-chat-alert`);
});