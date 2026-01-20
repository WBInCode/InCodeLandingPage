export default function CookiePolicy() {
    return (
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Polityka Cookies</h1>
            <p className="text-sm text-gray-500 mb-12">Ostatnia aktualizacja: 11 grudnia 2025</p>

            <div className="space-y-12 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Czym są pliki cookies?</h2>
                    <p>
                        Pliki cookies to małe pliki tekstowe, które są przechowywane na Twoim komputerze lub urządzeniu mobilnym podczas odwiedzania strony internetowej.
                        Są powszechnie stosowane, aby strony działały efektywniej i dostarczały informacji właścicielom witryn.
                    </p>
                    <p className="mt-4">
                        Cookies pomagają nam zrozumieć, jak korzystasz z naszej strony, zapamiętać Twoje preferencje i poprawić ogólne doświadczenie.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Rodzaje plików cookies</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl text-white font-semibold mb-2">Niezbędne cookies</h3>
                            <p>Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony. Umożliwiają podstawowe funkcje, takie jak nawigacja po stronach i dostęp do bezpiecznych obszarów.</p>
                        </div>
                        <div>
                            <h3 className="text-xl text-white font-semibold mb-2">Analityczne cookies</h3>
                            <p>Te pliki cookies pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, zbierając i raportując informacje anonimowo.</p>
                        </div>
                        <div>
                            <h3 className="text-xl text-white font-semibold mb-2">Funkcjonalne cookies</h3>
                            <p>Te pliki cookies umożliwiają rozszerzoną funkcjonalność i personalizację, taką jak zapamiętywanie Twoich preferencji i ustawień.</p>
                        </div>
                        <div>
                            <h3 className="text-xl text-white font-semibold mb-2">Marketingowe cookies</h3>
                            <p>Te pliki cookies mogą być ustawiane przez partnerów reklamowych w celu tworzenia profilu Twoich zainteresowań i wyświetlania odpowiednich reklam na innych stronach.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Lista plików cookies</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><code>_ga</code> (Google Analytics)</li>
                        <li><code>_gid</code> (Google Analytics)</li>
                        <li><code>cookie_consent</code> (Zgoda na cookies)</li>
                        <li><code>session_id</code> (Sesja)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Zarządzanie plikami cookies</h2>
                    <p className="mb-4">Możesz kontrolować i zarządzać plikami cookies na różne sposoby:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Większość przeglądarek pozwala odrzucić lub zaakceptować cookies, usunąć istniejące i ustawić preferencje dla określonych stron.</li>
                        <li>Przy pierwszej wizycie na naszej stronie możesz wybrać, które rodzaje cookies akceptujesz.</li>
                        <li>Dla cookies analitycznych możesz użyć narzędzi jak Google Analytics Opt-out Browser Add-on.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-500">Uwaga: Wyłączenie niektórych cookies może wpłynąć na funkcjonalność naszej strony.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Instrukcje dla przeglądarek</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
                        <li>Ustawienia → Prywatność i bezpieczeństwo → Ciasteczka</li>
                        <li>Preferencje → Prywatność → Zarządzaj danymi witryn</li>
                        <li>Ustawienia → Pliki cookie i uprawnienia witryn</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Aktualizacje polityki</h2>
                    <p>
                        Możemy od czasu do czasu aktualizować niniejszą Politykę Cookies, aby odzwierciedlić zmiany w naszych praktykach lub z powodów operacyjnych, prawnych lub regulacyjnych.
                        Zachęcamy do okresowego przeglądania tej polityki.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Kontakt</h2>
                    <p className="mb-4">Jeśli masz pytania dotyczące naszego wykorzystania plików cookies, skontaktuj się z nami:</p>
                    <address className="not-italic">
                        <strong>InCode sp. z o.o.</strong><br />
                        <a href="mailto:support@wb-partners.pl" className="text-primary hover:underline">support@wb-partners.pl</a>
                    </address>
                </section>
            </div>
        </section>
    );
}
