import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // Walidacja wymaganych pól
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Wypełnij wszystkie wymagane pola' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Nieprawidłowy adres email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sprawdź czy klucz API jest skonfigurowany
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const contactEmail = import.meta.env.CONTACT_EMAIL || 'kontakt@incode.pl';

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      // W trybie deweloperskim zwróć sukces bez wysyłania
      if (import.meta.env.DEV) {
        console.log('DEV MODE - Email would be sent:', { name, email, phone, service, message });
        return new Response(
          JSON.stringify({ success: true, message: 'DEV: Email logged to console' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
      return new Response(
        JSON.stringify({ error: 'Konfiguracja serwera nieprawidłowa' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(resendApiKey);

    // Mapowanie usług na polskie nazwy
    const serviceNames: Record<string, string> = {
      'strona-www': 'Strona internetowa',
      'sklep': 'Sklep e-commerce',
      'aplikacja': 'Aplikacja webowa',
      'inne': 'Inne',
    };

    const serviceName = service ? serviceNames[service] || service : 'Nie wybrano';

    // Wysłanie emaila
    const { error } = await resend.emails.send({
      from: 'InCode Formularz <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `Nowe zapytanie od ${name} - InCode`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #30e87a;">Nowe zapytanie z formularza kontaktowego</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Imię i nazwisko:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Nie podano'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Usługa:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceName}</td>
            </tr>
          </table>
          
          <h3 style="color: #333;">Wiadomość:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            Ta wiadomość została wysłana z formularza kontaktowego na stronie InCode.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Nie udało się wysłać wiadomości' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Wiadomość wysłana pomyślnie' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Wystąpił błąd serwera' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

