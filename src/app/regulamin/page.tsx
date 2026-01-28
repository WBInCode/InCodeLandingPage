export default function TermsOfService() {
    return (
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Warunki Korzystania</h1>
            <p className="text-sm text-gray-500 mb-12">Ostatnia aktualizacja: 11 grudnia 2025</p>

            <div className="space-y-12 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Akceptacja warunków</h2>
                    <p>
                        Korzystając z usług świadczonych przez InCode sp. z o.o. („Firma”, „my”, „nas” lub „nasz”), zgadzasz się na przestrzeganie niniejszych Warunków Korzystania („Warunki”).
                        Jeśli nie zgadzasz się z jakąkolwiek częścią tych warunków, nie masz prawa korzystać z naszych usług.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Usługi</h2>
                    <p>
                        InCode świadczy usługi rozwoju produktów cyfrowych, w tym między innymi: tworzenie stron internetowych, aplikacji mobilnych, projektowanie UI/UX oraz konsultacje IT.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Obowiązki Klienta</h2>
                    <p>
                        Jako klient zgadzasz się dostarczać niezbędne materiały, informacje i dostępy w terminie, aby umożliwić nam realizację usług. Zobowiązujesz się również do terminowego regulowania płatności.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Własność intelektualna</h2>
                    <p className="mb-4">Po pełnej zapłacie klienci otrzymują prawa własności do produktów zgodnie z umową projektową. Jednakże:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Zachowujemy prawa do wszelkich wcześniej istniejących materiałów, narzędzi lub frameworków</li>
                        <li>Możemy wykorzystywać zanonimizowane informacje o projekcie w naszym portfolio</li>
                        <li>Komponenty open-source pozostają objęte odpowiednimi licencjami</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Warunki płatności</h2>
                    <p className="mb-4">Warunki płatności są określone w indywidualnych umowach projektowych. Ogólnie:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Zaliczka może być wymagana przed rozpoczęciem prac</li>
                        <li>Faktury płatne w ciągu 14 dni od wystawienia</li>
                        <li>Opóźnione płatności mogą być obciążone odsetkami</li>
                        <li>Prace mogą zostać wstrzymane przy zaległych płatnościach</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Poufność</h2>
                    <p>
                        Traktujemy wszystkie informacje klienta jako poufne. Nie będziemy ujawniać Twoich informacji zastrzeżonych stronom trzecim bez Twojej zgody, z wyjątkiem przypadków wymaganych przez prawo.
                        Ten obowiązek pozostaje w mocy po zakończeniu naszej współpracy biznesowej.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Ograniczenie odpowiedzialności</h2>
                    <p>
                        W maksymalnym zakresie dozwolonym przez prawo, InCode nie ponosi odpowiedzialności za jakiekolwiek szkody pośrednie, przypadkowe, szczególne, wynikowe lub karne,
                        w tym utratę zysków, danych lub możliwości biznesowych, wynikające z korzystania z naszych usług.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Rozwiązanie umowy</h2>
                    <p>
                        Każda ze stron może rozwiązać umowę o świadczenie usług za pisemnym wypowiedzeniem zgodnie z warunkami określonymi w umowie projektowej.
                        Po rozwiązaniu umowy klient jest odpowiedzialny za zapłatę za wszystkie prace wykonane do dnia rozwiązania.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Prawo właściwe</h2>
                    <p>
                        Niniejsze Warunki podlegają prawu polskiemu i będą interpretowane zgodnie z nim. Wszelkie spory wynikające z niniejszych Warunków podlegają wyłącznej jurysdykcji sądów w Polsce.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Informacje kontaktowe</h2>
                    <p className="mb-4">W przypadku pytań dotyczących niniejszych Warunków Korzystania, prosimy o kontakt:</p>
                    <address className="not-italic">
                        <strong className="block text-white mb-1"></strong>
                        <p className="mb-4">WB PARTNERS Sp. z o.o.</p>

                        <strong className="block text-white mb-1">Adres</strong>
                        <p className="mb-4">ul. Słowackiego 24/11<br />35-060 Rzeszów</p>

                        <strong className="block text-white mb-1">Email kontaktowy</strong>
                        <a href="mailto:support@wb-partners.pl" className="text-primary hover:underline mb-4 block">support@wb-partners.pl</a>

                        <strong className="block text-white mb-1">Telefon kontaktowy</strong>
                        <a href="tel:+48 570 028 761" className="text-primary hover:underline mb-4 block">+48 570 028 761</a>
                    </address>
                </section>
            </div>
        </section>
    );
}
