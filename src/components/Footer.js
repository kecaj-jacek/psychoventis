export function renderFooter() {
  const footerHtml = `
    <!-- Footer -->
    <footer class="bg-surface-container-lowest py-16 px-6 border-t border-outline-variant/20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-4 mb-6">
              <img alt="Psychoventis Logo" class="h-12 w-auto object-contain rounded-lg" src="/assets/logo.jpg"/>
              <span class="text-2xl font-black tracking-tighter text-primary uppercase" style="font-family: 'Montserrat', sans-serif;">Psychoventis</span>
            </div>
            <p class="text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              Profesjonalne wsparcie psychologiczne w Krakowie i online. Specjalizacja: terapia indywidualna, interwencja kryzysowa i well-being biznesowy.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-6">Szybkie Linki</h4>
            <ul class="space-y-4">
              <li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Kontakt</a></li>
              <li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Polityka Prywatności</a></li>
              <li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Regulamin</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-6">Gabinet</h4>
            <p class="text-on-surface-variant mb-4 leading-relaxed">
              ul. Przykładowa 12/4<br/>
              31-000 Kraków, Polska
            </p>
            <div class="flex gap-4">
              <a class="text-primary hover:scale-110 transition-transform" href="#"><span class="material-symbols-outlined">mail</span></a>
              <a class="text-primary hover:scale-110 transition-transform" href="#"><span class="material-symbols-outlined">share</span></a>
            </div>
          </div>
        </div>
        <div class="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-on-surface-variant">© 2026 Psychoventis Paweł Łata. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHtml);
}
