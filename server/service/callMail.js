import { Resend } from "resend";

async function sendWithCall(adminEmail, body) {
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
    subject: `🚀 New Client Call Inquiry from ${name}`,
    replyTo: body.email,

    html: `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f4f6f8; padding:30px;">
      <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08);">

        <!-- Header -->
        <div style="background:linear-gradient(135deg,#4f46e5,#06b6d4); color:#fff; padding:25px; text-align:center;">
          <h2 style="margin:0;">🚀 New Client Call Inquiry</h2>
          <p style="margin-top:5px; font-size:14px;">StackNova Website Form</p>
        </div>

        <!-- Body -->
        <div style="padding:25px; color:#333;">

          <h3 style="margin-bottom:15px;">👤 Client Details</h3>

          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            <tr>
              <td style="padding:8px; font-weight:bold;">Name:</td>
              <td style="padding:8px;">${name}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:8px; font-weight:bold;">Email:</td>
              <td style="padding:8px;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold;">Phone:</td>
              <td style="padding:8px;">${body.phone || "N/A"}</td>
            </tr>
          </table>

          <h3 style="margin:20px 0 10px;">📊 Project Info</h3>

          

          <h3 style="margin:20px 0 10px;">💬 Message</h3>

          <div style="
            background:#f1f5f9;
            padding:15px;
            border-left:4px solid #4f46e5;
            border-radius:6px;
            line-height:1.6;
          ">
            ${body.message || "No message provided"}
          </div>

        </div>

        <!-- Footer -->
        <div style="background:#f8fafc; padding:15px; text-align:center; font-size:12px; color:#666;">
          <p style="margin:0;">Sent from StackNova Website</p>
          <p style="margin-top:5px;">© ${new Date().getFullYear()} StackNova</p>
        </div>

      </div>
    </div>
    `,
  };

  const res = await resend.emails.send(adminMail);
  console.log("Admin mail sent:", res);
}

export default sendWithCall;
