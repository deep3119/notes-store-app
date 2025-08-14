import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export const sendPurchaseEmail = async (req, res) => {
  const { email, noteId, noteName } = req.body;

  try {
    const qrImagePath = path.resolve("qrcode.jpg");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const confirmLink = `http://localhost:5000/note/confirm-payment?email=${email}&noteId=${noteId}`;

    const mailOptions = {
      from: `"Notes Store" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Buy "${noteName}" - Payment Instructions`,
      html: `
        <h3>Hello,</h3>
        <p>Please scan the QR code below to pay for <strong>${noteName}</strong>:</p>
        <img src="cid:qrimage" alt="QR Code" style="width:200px;" />
        <p>Once paid, wait for admin confirmation.</p>
        <hr/>
        <p style="font-size:12px;color:gray;">Admin only: <a href="${confirmLink}">Confirm Payment</a></p>
      `,
      attachments: [
        {
          filename: "qrcode.jpg",
          path: qrImagePath,
          cid: "qrimage", // must match the img cid
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent with QR code!" });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ message: "Failed to send mail", error });
  }
};
