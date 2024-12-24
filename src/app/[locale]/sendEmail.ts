"use server";

import nodemailer from "nodemailer";

export async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      //   user: "shraxx7@gmail.com",
      //   pass: "padw pkkc ndap lffu",
    },
  });

  const mailOptions = {
    from: "shraxx7@gmail.com",
    to: "shraxx7@gmail.com",
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
}
