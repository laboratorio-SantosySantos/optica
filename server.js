const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

app.post("/send-email", async (req, res) => {
  try {
    const { subject, html, pdfBase64, filename } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL_TO || "santosysantosredes@gmail.com",
      subject: subject || "Nueva receta oftálmica",
      html: html || "<p>Se adjunta receta.</p>",
      attachments: pdfBase64
        ? [{
            filename: filename || "receta.pdf",
            content: pdfBase64.split(",").pop(),
            encoding: "base64"
          }]
        : []
    });

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Servidor activo en puerto " + PORT)};
