import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, gdprConsent } = body;

        // Basic validation
        if (!name || !email || !message || !gdprConsent) {
            return NextResponse.json(
                { error: 'Wszystkie pola są wymagane.' },
                { status: 400 }
            );
        }

        // Configure transporter (Google Workspace / Gmail / SMTP)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must be authenticated user for Gmail)
            to: "support@wb-partners.pl", // Receiver address
            replyTo: email, // Actual sender's email
            subject: `Nowa wiadomość od: ${name}`,
            html: `
                <h2>Nowe zgłoszenie z formularza kontaktowego</h2>
                <p><strong>Imię i Nazwisko:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Wiadomość:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    ${message.replace(/\n/g, '<br>')}
                </blockquote>
                <br>
                <p style="font-size: 12px; color: #888;">Zgoda RODO: ${gdprConsent ? 'TAK' : 'NIE'}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Błąd podczas wysyłania wiadomości.' },
            { status: 500 }
        );
    }
}
