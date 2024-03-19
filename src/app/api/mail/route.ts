import { EmailForm } from '@/types';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_ID,
    pass: process.env.NEXT_PUBLIC_GMAIL_PWD,
  },
});

export async function POST(req: Request) {
  const { name, email, message }: EmailForm = await req.json();
  const mailOptions = {
    from: {
      name: name,
      address: email,
    },
    to: process.env.NEXT_PUBLIC_GMAIL_ID,
    subject: name + '님이 전송한 메일 [포트폴리오]',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);

    return Response.json({ message: '메일 전송 완료' });
  } catch (error) {
    return Response.json({ message: `메일 전송 실패`, error });
  }
}
