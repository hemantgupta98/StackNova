import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import sendWithResend from "./service/contactMail.js";
import sendWithQuery from "./service/queryMail.js";

dotenv.config({ override: true });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/mail", async (req, res) => {
  try {
    const adminEmail =
      process.env.CONTACT_RECEIVER_EMAIL || process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      return res
        .status(500)
        .json({ error: "CONTACT_RECEIVER_EMAIL is not configured" });
    }

    const { name, email, company, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    await sendWithQuery(adminEmail, { name, email, company, message });

    return res.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: err?.message || "Internal error" });
  }
});

app.post("/query", async (req, res) => {
  try {
    const data = req.body;
    console.log("📩 New Form Data Received:\n", JSON.stringify(data, null, 2));

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({
        error: "Required fields missing",
      });
    }

    // Validate email format
    if (!validateEmail(data.email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // All fields from queryMail: name, email, company, projectType, budget, timeline, message
    await sendWithQuery(process.env.ADMIN_EMAIL, {
      name: data.name,
      email: data.email,
      company: data.company || "N/A",
      projectType: data.projectType || "Not specified",
      budget: data.budget || "Not specified",
      timeline: data.timeline || "Not specified",
      message: data.message,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
