import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Eksik bilgi." });
    }

    try {
      // SMTP configuration with provided credentials
      const transporter = nodemailer.createTransport({
        host: "mail.akyildizlaw.com",
        port: 587,
        secure: false, // false for 587, true for 465
        auth: {
          user: "website@akyildizlaw.com",
          pass: "0-Vt=4j7_lM:YpM6",
        },
        tls: {
          // Bazı özel sunucularda sertifika hatalarını önlemek için
          rejectUnauthorized: false
        }
      });

      const mailOptions = {
        from: `"Akyıldız Law Website" <website@akyildizlaw.com>`,
        to: "info@akyildizlaw.com",
        replyTo: email,
        subject: `Yeni İletişim Formu Mesajı: ${name}`,
        text: `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`,
        html: `
          <h3>Yeni İletişim Formu Mesajı</h3>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("E-posta gönderme hatası:", error);
      res.status(500).json({ error: "E-posta gönderilemedi." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
