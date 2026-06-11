import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config();

console.log("Config loaded:");
console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "********" : "undefined");
console.log("SMTP_FROM:", process.env.SMTP_FROM);
console.log("NOTIFICATION_EMAIL:", process.env.NOTIFICATION_EMAIL);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function testConnection() {
  try {
    console.log("Verifying transporter connection...");
    await transporter.verify();
    console.log("Transporter connection verified successfully!");

    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Quartz Test" <no-reply@quartzinternational.ca>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: "Nodemailer Test Email",
      text: "This is a test email from the Quartz International app.",
      html: "<b>This is a test email from the Quartz International app.</b>",
    });
    console.log("Email sent successfully! Message ID:", info.messageId);
  } catch (error) {
    console.error("Error occurred during email test:", error);
  }
}

testConnection();
