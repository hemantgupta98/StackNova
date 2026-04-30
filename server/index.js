require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendWithNodemailer(adminEmail, body) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("EMAIL_USER and EMAIL_PASS must be set in environment");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const name = body.name || "Unknown";
  const from = `${name} <${user}>`;

  const adminMail = {
    from,
    to: adminEmail,
    subject: `New Client Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${body.email || ""}\nCompany: ${body.company || ""}\n\nMessage:\n${body.message || ""}`,
  };

  const userMail = {
    from: adminEmail,
    to: body.email,
    subject: "We received your message",
    text: `Hi ${name},\n\nThank you for reaching out to us. We've received your message and someone from our team will contact you shortly.\n\nIf your matter is urgent, reply to this email or contact us at ${adminEmail}.\n\n— StackNova Team`,
  };

  await transporter.sendMail(adminMail);
  await transporter.sendMail(userMail);
}

app.post("/api/contact", async (req, res) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      return res.status(500).json({ error: "ADMIN_EMAIL is not configured" });
    }

    const { name, email, company, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    await sendWithNodemailer(adminEmail, { name, email, company, message });

    return res.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: err?.message || "Internal error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
