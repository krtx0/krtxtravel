class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav id="navbar"
      class="fixed top-0 left-0 w-full z-50
             bg-brand-dark/90 backdrop-blur-xl
             border-b border-white/10">

      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="flex items-center justify-between h-16">

          <!-- LEFT: Logo -->
          <div class="flex items-center gap-3">
            <i data-lucide="compass" class="w-7 h-7 text-brand-gold"></i>

            <div class="flex flex-col leading-none">
              <span class="font-serif text-lg font-semibold tracking-wide text-white">
                KRTX
              </span>
              <span class="text-[10px] tracking-[0.25em] text-white/70 uppercase">
                Travel
              </span>
            </div>
          </div>

          <!-- CENTER: Desktop Menu -->
          <div class="hidden md:flex items-center
                      text-sm uppercase tracking-wider
                      text-white/80 gap-8">

            <a href="#experiences" class="hover:text-brand-gold transition">Experiences</a>
            <a href="#process" class="hover:text-brand-gold transition">Process</a>
            <a href="#testimonials" class="hover:text-brand-gold transition">Stories</a>
            <a href="#about" class="hover:text-brand-gold transition">About</a>
            <a href="#contact" class="hover:text-brand-gold transition">Contact</a>

          </div>

          <!-- RIGHT: Mobile Button -->
          <button id="mobile-menu-btn"
            class="md:hidden w-10 h-10 flex items-center justify-center
                   rounded-lg border border-white/10 bg-white/5">
            <i data-lucide="menu" class="w-6 h-6 text-white"></i>
          </button>

        </div>

      </div>

      <!-- MOBILE MENU (CENTERED STYLE) -->
      <div id="mobile-menu"
        class="hidden md:hidden
               bg-brand-dark/95 backdrop-blur-xl
               border-t border-white/10">

        <div class="flex flex-col items-center text-center
                    text-sm uppercase tracking-wider
                    py-8 space-y-6 text-white/90">

          <a href="#experiences" class="hover:text-brand-gold transition">Experiences</a>
          <a href="#process" class="hover:text-brand-gold transition">Process</a>
          <a href="#testimonials" class="hover:text-brand-gold transition">Stories</a>
          <a href="#about" class="hover:text-brand-gold transition">About</a>
          <a href="#contact" class="hover:text-brand-gold transition">Contact</a>

        </div>

      </div>

    </nav>
    `;

    // mobile toggle
    const btn = this.querySelector("#mobile-menu-btn");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
