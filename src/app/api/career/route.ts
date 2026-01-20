import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const position = formData.get('position') as string;
        const motivation = formData.get('motivation') as string || '';
        const gdprConsent = formData.get('gdprConsent') as string;
        const cvFile = formData.get('cv') as File | null;

        if (!name || !email || !position || !gdprConsent || !cvFile) {
            return NextResponse.json(
                { error: 'Wymagane pola nie zostały wypełnione.' },
                { status: 400 }
            );
        }

        // Convert File to Buffer
        const bytes = await cvFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name} (Rekrutacja)" <${process.env.SMTP_USER}>`,
            to: "support@wb-partners.pl",
            replyTo: email,
            subject: `Aplikacja na stanowisko: ${position} - ${name}`,
            html: `
                <h2>Nowe zgłoszenie rekrutacyjne</h2>
                <p><strong>Stanowisko:</strong> ${position}</p>
                <hr>
                <p><strong>Imię i Nazwisko:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone || 'Brak'}</p>
                <p><strong>List motywacyjny / Opis:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    ${motivation.replace(/\n/g, '<br>')}
                </blockquote>
                <br>
                <p style="font-size: 12px; color: #888;">Zgoda RODO: ${gdprConsent ? 'TAK' : 'NIE'}</p>
            `,
            attachments: [
                {
                    filename: cvFile.name,
                    content: buffer,
                },
            ],
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Application sent successfully' });

    } catch (error) {
        console.error('Error sending application:', error);
        return NextResponse.json(
            { error: 'Błąd podczas wysyłania aplikacji.' },
            { status: 500 }
        );
    }
}
