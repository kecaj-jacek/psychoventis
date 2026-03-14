export function renderHeader() {
  const headerHtml = `
    <!-- TopNavBar -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/20">
      <div class="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-2 md:gap-4 shrink-0">
          <img alt="Psychoventis Logo" class="h-12 md:h-16 w-auto object-contain rounded-lg" src="./assets/logo.jpg"/>
          <span class="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-primary uppercase" style="font-family: 'Montserrat', sans-serif;">Psychoventis</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8">
          <a class="nav-link text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="index.html">Strona główna</a>
          <a class="nav-link text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="o-mnie.html">O mnie</a>
          <a class="nav-link text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="oferta.html">Oferta</a>
          <a class="nav-link text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="cennik.html">Cennik</a>
          <a class="nav-link text-label font-medium text-on-surface-variant hover:text-primary transition-colors" href="szkolenia.html">Szkolenia</a>
        </div>
        
        <div class="hidden md:block shrink-0 ml-4">
            <a href="umow-wizyte.html" class="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary px-6 py-2.5 rounded-full font-semibold transition-all editorial-shadow inline-block">
                Umów wizytę
            </a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="lg:hidden p-2 text-primary focus:outline-none shrink-0" aria-label="Menu">
          <span class="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-surface/95 backdrop-blur-md z-40 transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6 pb-6 h-screen overflow-y-auto">
      <div class="flex flex-col gap-6 text-center mt-8">
        <a class="nav-link text-2xl font-bold text-on-surface-variant hover:text-primary transition-colors" href="index.html">Strona główna</a>
        <a class="nav-link text-2xl font-bold text-on-surface-variant hover:text-primary transition-colors" href="o-mnie.html">O mnie</a>
        <a class="nav-link text-2xl font-bold text-on-surface-variant hover:text-primary transition-colors" href="oferta.html">Oferta</a>
        <a class="nav-link text-2xl font-bold text-on-surface-variant hover:text-primary transition-colors" href="cennik.html">Cennik</a>
        <a class="nav-link text-2xl font-bold text-on-surface-variant hover:text-primary transition-colors" href="szkolenia.html">Szkolenia</a>
        
        <div class="mt-8">
            <a href="umow-wizyte.html" class="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-xl inline-block w-full">
                Umów wizytę
            </a>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHtml);

  // Mobile menu toggle logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">close</span>';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
        document.body.style.overflow = '';
      }
    });
  }

  // Set active state for the current page link
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html'; 
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentFile || (currentFile === '' && linkHref === 'index.html')) {
      link.classList.remove('text-on-surface-variant');
      link.classList.add('text-primary');
      link.classList.add('font-bold');
    }
  });
}
