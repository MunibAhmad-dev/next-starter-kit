import { NextResponse } from 'next/server';
import { sendEmail } from '@/modules/email/resend';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const result = await sendEmail({
      to: email,
      subject: 'Test Email from SaaS Starter Kit',
      html: '<p>This is a test email sent from your SaaS starter kit!</p>',
    });

    if (result.success) {
      return NextResponse.json({ success: true, data: result.data });
    }

    return NextResponse.json({ error: result.error }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
