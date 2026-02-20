export default function PrivacyPolicy() {
    return (
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Polityka Prywatności</h1>
            <p className="text-sm text-gray-500 mb-12">Ostatnia aktualizacja: 11 grudnia 2025</p>

            <div className="space-y-12 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Wprowadzenie</h2>
                    <p>
                        WB PARTNERS Sp. z o.o. („my”, „nasz” lub „nas”) zobowiązuje się do ochrony Twojej prywatności.
                        Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, ujawniamy i chronimy Twoje dane podczas korzystania z naszej strony internetowej lub usług.
                    </p>
                    <p className="mt-4">
                        Prosimy o uważne zapoznanie się z niniejszą polityką prywatności. Jeśli nie zgadzasz się z warunkami tej polityki, prosimy o niekorzystanie z serwisu.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Zbierane informacje</h2>
                    <h3 className="text-xl text-white mb-2">Dane osobowe</h3>
                    <p className="mb-4">Możemy zbierać dane osobowe, które dobrowolnie nam przekazujesz, gdy:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Wypełniasz formularz kontaktowy</li>
                        <li>Zapisujesz się do naszego newslettera</li>
                        <li>Prosisz o wycenę lub konsultację</li>
                        <li>Komunikujesz się z nami przez e-mail lub telefon</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Jak wykorzystujemy Twoje dane</h2>
                    <p className="mb-4">Wykorzystujemy zebrane informacje w różnych celach, w tym:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Odpowiadanie na Twoje zapytania i zapewnienie obsługi klienta</li>
                        <li>Wysyłanie informacji o naszych usługach</li>
                        <li>Ulepszanie naszej strony i usług</li>
                        <li>Wypełnianie obowiązków prawnych</li>
                        <li>Ochrona naszych praw i zapobieganie oszustwom</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Przechowywanie danych</h2>
                    <p>
                        Będziemy przechowywać Twoje dane osobowe tylko tak długo, jak jest to konieczne do celów określonych w niniejszej Polityce Prywatności.
                        Będziemy przechowywać i wykorzystywać Twoje dane w zakresie niezbędnym do wypełnienia naszych obowiązków prawnych, rozstrzygania sporów i egzekwowania naszych zasad.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Bezpieczeństwo danych</h2>
                    <p>
                        Wdrażamy odpowiednie techniczne i organizacyjne środki bezpieczeństwa w celu ochrony Twoich danych osobowych przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem.
                        Jednak żadna metoda transmisji przez Internet ani elektronicznego przechowywania nie jest w 100% bezpieczna i nie możemy zagwarantować absolutnego bezpieczeństwa.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Twoje prawa</h2>
                    <p className="mb-4">Zgodnie z RODO przysługują Ci następujące prawa:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Możesz żądać kopii swoich danych osobowych</li>
                        <li>Możesz żądać korekty niedokładnych danych</li>
                        <li>Możesz żądać usunięcia swoich danych osobowych</li>
                        <li>Możesz żądać ograniczenia przetwarzania danych</li>
                        <li>Możesz żądać transferu swoich danych</li>
                        <li>Możesz sprzeciwić się przetwarzaniu swoich danych osobowych</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Kontakt</h2>
                    <p className="mb-4">Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub naszych praktyk w zakresie danych, skontaktuj się z nami:</p>
                    <address className="not-italic">
                        <strong className="block text-white mb-1"></strong>
                        <p className="mb-4">WB PARTNERS Sp. z o.o.</p>

                        <strong className="block text-white mb-1">Adres</strong>
                        <p className="mb-4">ul. Słowackiego 24/11<br />35-060 Rzeszów</p>

                        <strong className="block text-white mb-1">Email kontaktowy</strong>
                        <a href="mailto:technical-support@wb-partners.pl" className="text-primary hover:underline mb-4 block">technical-support@wb-partners.pl</a>

                        <strong className="block text-white mb-1">Telefon kontaktowy</strong>
                        <a href="tel:+48 570 034 367" className="text-primary hover:underline mb-4 block">+48 570 034 367</a>

                        <strong className="block text-white mb-1">Dane rejestrowe</strong>
                        <p className="mb-1">NIP: 5170455185</p>
                        <p className="mb-1">REGON: 540735769</p>
                        <p>KRS: 0001151642</p>
                    </address>
                </section>
            </div>
        </section>
    );
}
