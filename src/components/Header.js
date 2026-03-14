export function renderHeader() {
  const headerHtml = `
    <!-- TopNavBar -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/20">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img alt="Psychoventis Logo" class="h-16 w-auto object-contain rounded-lg" src="/assets/logo.jpg"/>
          <span class="text-2xl md:text-3xl font-black tracking-tighter text-primary uppercase" style="font-family: 'Montserrat', sans-serif;">Psychoventis</span>
        </div>
        <div class="hidden md:flex items-center gap-8">
          <a class="text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="index.html">Strona główna</a>
          <a class="text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="o-mnie.html">O mnie</a>
          <a class="text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="oferta.html">Oferta</a>
          <a class="text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="cennik.html">Cennik</a>
          <a class="text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="szkolenia.html">Szkolenia</a>
        </div>
        <a href="umow-wizyte.html" class="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary px-6 py-2.5 rounded-full font-semibold transition-all editorial-shadow inline-block">
            Umów wizytę
        </a>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHtml);

  // Set active state for the current page link
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html'; 
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentFile) {
      link.classList.remove('text-on-surface-variant');
      link.classList.add('text-primary');
      link.classList.add('font-bold');
    }
  });
}
