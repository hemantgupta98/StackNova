import { Resend } from "resend";

async function sendWithResend(adminEmail, body) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY must be set in environment");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const senderEmail = process.env.RESEND_FROM_EMAIL || adminEmail;
  const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || adminEmail;

  const name = body.name || "Unknown";

  const adminMail = {
    from: `StackNova <${senderEmail}>`,
    to: recipientEmail,
    subject: `🚀 New Client Inquiry from ${name}`,
    replyTo: body.email,
    html: `
  <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#4f46e5,#06b6d4); color:#ffffff; padding:20px; text-align:center;">
        <h2 style="margin:0;">📩 New Client Inquiry</h2>
        <p style="margin:5px 0 0;">You have received a new message</p>
      </div>

      <!-- Body -->
      <div style="padding:20px; color:#333;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${body.email || "N/A"}</p>
        <p><strong>Company:</strong> ${body.company || "N/A"}</p>
        
        <div style="margin-top:15px;">
          <p><strong>Message:</strong></p>
          <div style="background:#f9fafb; padding:15px; border-left:4px solid #4f46e5; border-radius:5px;">
            ${body.message || "No message provided"}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#666;">
        <p style="margin:0;">This message was sent from your website contact form</p>
        <p style="margin:5px 0 0;">© ${new Date().getFullYear()} StackNova</p>
      </div>

    </div>
  </div>
  `,
  };

  const userMail = {
    from: `StackNova <${senderEmail}>`,
    to: recipientEmail,
    subject: "✨ We received your message — StackNova",
    replyTo: recipientEmail,
    html: `
  <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1); color:#ffffff; padding:25px; text-align:center;">
        <h2 style="margin:0;">StackNova 🚀</h2>
        <p style="margin:5px 0 0;">We’ve received your message</p>
      </div>

      <!-- Body -->
      <div style="padding:25px; color:#333;">
        <p style="font-size:16px;">Hi <strong>${name}</strong>,</p>
        
        <p style="margin-top:10px; line-height:1.6;">
          Thank you for reaching out to us. We’ve successfully received your message and our team will review it shortly.
        </p>

        <div style="background:#f9fafb; padding:15px; border-radius:8px; margin:20px 0;">          <p style="margin:0; font-weight:bold;">📋 Your Submission Details:</p>
          <div style="margin-top:10px; font-size:14px;">
            <p style="margin:5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin:5px 0;"><strong>Email:</strong> ${body.email || "N/A"}</p>
            <p style="margin:5px 0;"><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p style="margin:5px 0;"><strong>Message:</strong></p>
            <div style="background:#fff; padding:10px; border-left:3px solid #6366f1; margin-top:5px;">
              ${body.message || "No message provided"}
            </div>
          </div>
        </div>

        <div style="background:#f9fafb; padding:15px; border-radius:8px; margin:20px 0;">          <p style="margin:0; font-weight:bold;">⏳ What happens next?</p>
          <ul style="margin:10px 0 0; padding-left:18px;">
            <li>Our team will review your request</li>
            <li>We’ll get back to you within 24 hours</li>
            <li>We may contact you for more details if needed</li>
          </ul>
        </div>

        <p style="line-height:1.6;">
          If your matter is urgent, feel free to reply to this email or contact us directly at:
        </p>

        <p style="margin:10px 0;">
          📧 <a href="mailto:${adminEmail}" style="color:#6366f1; text-decoration:none;">${adminEmail}</a>
        </p>

        <!-- Button -->
        <div style="text-align:center; margin-top:25px;">
          <a href="mailto:${adminEmail}" 
             style="background:#6366f1; color:#fff; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:bold;">
            Contact Us
          </a>
        </div>

        <p style="margin-top:25px;">Best regards,<br><strong>StackNova Team</strong></p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#666;">
        <p style="margin:0;">This is an automated response confirming your message.</p>
        <p style="margin:5px 0 0;">© ${new Date().getFullYear()} StackNova. All rights reserved.</p>
      </div>

    </div>
  </div>
  `,
  };

  const res1 = await resend.emails.send(adminMail);
  console.log("Admin mail:", res1);

  const res2 = await resend.emails.send(userMail);
  console.log("User mail:", res2);
}

export default sendWithResend;
