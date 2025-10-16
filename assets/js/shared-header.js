// نظام الهيدر المشترك - Shared Header System
class SharedHeader {
    constructor() {
        this.isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        this.init();
    }
    
    init() {
        this.createHeader();
        // Back button functionality removed
        this.adjustPageLayout();
        this.setupMobileNavigation();
    }
    
    createHeader() {
        const headerHTML = `
            <!-- ======= Header ======= -->
            <header id="header" class="fixed-top d-flex align-items-center header-transparent">
                <div class="container d-flex align-items-center justify-content-between">
                    <div class="logo">
                        <a href="${this.isHomePage ? '#' : 'index.html'}" ${this.isHomePage ? 'onclick="return false;"' : ''}>
                            <img src="assets/img/logo.png" alt="" class="img-fluid">
                        </a>
                    </div>
                    
                    <div style="white-space: nowrap; margin-right: 20px; margin-left: auto;">
                        <p style="margin-bottom: 0;" data-i18n="my_resume">سيرتي الذاتية</p>
                    </div>
                    
                    ${this.isHomePage ? this.getHomeNavigation() : this.getSubPageNavigation()}
                    
                </div>
            </header><!-- End Header -->
            
            <!-- Modern Mobile Navigation -->
            <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
            <div class="mobile-nav-panel" id="mobileNavPanel">
                <div class="mobile-nav-header">
                    <button class="mobile-nav-close" id="mobileNavClose">
                        <i class="bi bi-x"></i>
                    </button>
                    <div class="mobile-nav-content">
                        <div class="mobile-nav-title" data-i18n="mobile_nav_title">القائمة</div>
                        <div class="mobile-nav-subtitle" data-i18n="mobile_nav_subtitle">اختر القسم المطلوب</div>
                    </div>
                </div>
                ${this.getMobileNavMenu()}
            </div>
        `;
        
        // Insert header at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
    
    getHomeNavigation() {
        return `
            <nav id="navbar" class="navbar justify-content-center">
                <ul>
                    <li><a class="nav-link scrollto active" href="#hero" data-i18n="nav_home">الرئيسية</a></li>
                    <li><a class="nav-link scrollto" href="#who_us" data-i18n="nav_about">نبذة عني</a></li>
                    <li><a class="nav-link scrollto" href="#latest_works" data-i18n="nav_works">أعمالي</a></li>
                    <li><a class="nav-link scrollto" href="#skills" data-i18n="nav_education">تعليمي</a></li>
                    <li><a class="nav-link scrollto" href="#experience" data-i18n="nav_experience">خبراتي</a></li>
                    <li><a class="nav-link scrollto" href="#certificates" data-i18n="nav_certificates">شهاداتي</a></li>
                    <li><a class="nav-link scrollto" href="#contact" data-i18n="nav_contact">تواصل معي</a></li>
                </ul>
                <div class="modern-hamburger mobile-nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav><!-- .navbar -->
        `;
    }
    
    getSubPageNavigation() {
        return `
            <nav id="navbar" class="navbar justify-content-center">
                <ul>
                    <li><a class="nav-link" href="index.html" data-i18n="nav_home">الرئيسية</a></li>
                    <li><a class="nav-link" href="index.html#who_us" data-i18n="nav_about">نبذة عني</a></li>
                    <li><a class="nav-link" href="index.html#latest_works" data-i18n="nav_works">أعمالي</a></li>
                    <li><a class="nav-link" href="index.html#skills" data-i18n="nav_education">تعليمي</a></li>
                    <li><a class="nav-link" href="index.html#experience" data-i18n="nav_experience">خبراتي</a></li>
                    <li><a class="nav-link" href="index.html#certificates" data-i18n="nav_certificates">شهاداتي</a></li>
                    <li><a class="nav-link" href="index.html#contact" data-i18n="nav_contact">تواصل معي</a></li>
                </ul>
                <div class="modern-hamburger mobile-nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav><!-- .navbar -->
        `;
    }
    
    getMobileNavMenu() {
        if (this.isHomePage) {
            return `
                <ul class="mobile-nav-menu">
                    <li><a href="#hero" class="mobile-nav-link" data-i18n="nav_home">الرئيسية</a></li>
                    <li><a href="#who_us" class="mobile-nav-link" data-i18n="nav_about">نبذة عني</a></li>
                    <li><a href="#latest_works" class="mobile-nav-link" data-i18n="nav_works">أعمالي</a></li>
                    <li><a href="#skills" class="mobile-nav-link" data-i18n="nav_education">تعليمي</a></li>
                    <li><a href="#experience" class="mobile-nav-link" data-i18n="nav_experience">خبراتي</a></li>
                    <li><a href="#certificates" class="mobile-nav-link" data-i18n="nav_certificates">شهاداتي</a></li>
                    <li><a href="#contact" class="mobile-nav-link" data-i18n="nav_contact">تواصل معي</a></li>
                </ul>
            `;
        } else {
            return `
                <ul class="mobile-nav-menu">
                    <li><a href="index.html" class="mobile-nav-link" data-i18n="nav_home">الرئيسية</a></li>
                    <li><a href="index.html#who_us" class="mobile-nav-link" data-i18n="nav_about">نبذة عني</a></li>
                    <li><a href="index.html#latest_works" class="mobile-nav-link" data-i18n="nav_works">أعمالي</a></li>
                    <li><a href="index.html#skills" class="mobile-nav-link" data-i18n="nav_education">تعليمي</a></li>
                    <li><a href="index.html#experience" class="mobile-nav-link" data-i18n="nav_experience">خبراتي</a></li>
                    <li><a href="index.html#certificates" class="mobile-nav-link" data-i18n="nav_certificates">شهاداتي</a></li>
                    <li><a href="index.html#contact" class="mobile-nav-link" data-i18n="nav_contact">تواصل معي</a></li>
                </ul>
            `;
        }
    }
    
    // setupBackButton method removed - no longer needed
    
    adjustPageLayout() {
        // Add proper spacing for fixed header
        if (!document.querySelector('.header-spacing-added')) {
            const style = document.createElement('style');
            style.className = 'header-spacing-added';
            style.textContent = `
                body {
                    padding-top: ${this.isHomePage ? '0px' : '80px'};
                }
                
                /* Ensure main content has proper spacing on sub-pages */
                ${!this.isHomePage ? `
                main, .certificate-detail, .experience-detail, section:first-of-type {
                    margin-top: 0px;
                    padding-top: 20px;
                    position: relative;
                }
                
                /* Back button styles removed */
                ` : ''}
                
                @media (max-width: 768px) {
                    body {
                        padding-top: ${this.isHomePage ? '0px' : '70px'};
                    }
                    
                    ${!this.isHomePage ? `
                    main, .certificate-detail, .experience-detail, section:first-of-type {
                        margin-top: 0px;
                        padding-top: 15px;
                        position: relative;
                    }
                    
                    /* Back button mobile styles removed */
                    ` : ''}
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Method to be called after i18n is loaded
    updateTranslations() {
        if (window.i18n) {
            window.i18n.updateTranslations();
        }
    }
    
    // Initialize AOS animations
    initializeAnimations() {
        // Wait for AOS to be loaded
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        } else {
            // Retry after a short delay if AOS isn't loaded yet
            setTimeout(() => {
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }, 500);
        }
    }
    
    // Setup mobile navigation events
    setupMobileNavigation() {
        // Wait for elements to be created
        setTimeout(() => {
            const mobileToggle = document.querySelector('.mobile-nav-toggle');
            const overlay = document.querySelector('#mobileNavOverlay');
            const panel = document.querySelector('#mobileNavPanel');
            const closeBtn = document.querySelector('#mobileNavClose');
            const mobileLinks = document.querySelectorAll('.mobile-nav-link');
            
            if (mobileToggle && overlay && panel) {
                // Open mobile menu
                mobileToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    overlay.classList.add('active');
                    panel.classList.add('active');
                    mobileToggle.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
                
                // Close mobile menu function
                const closeMobileNav = () => {
                    overlay.classList.remove('active');
                    panel.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    document.body.style.overflow = '';
                };
                
                // Close on overlay click
                overlay.addEventListener('click', closeMobileNav);
                
                // Close on close button click
                if (closeBtn) {
                    closeBtn.addEventListener('click', closeMobileNav);
                }
                
                // Close on link click
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        setTimeout(closeMobileNav, 100);
                    });
                });
                
                // Close on escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        closeMobileNav();
                    }
                });
            }
        }, 100);
    }
}

// Initialize shared header when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.sharedHeader = new SharedHeader();
    
    // If i18n is already loaded, update translations
    if (window.i18n) {
        setTimeout(() => {
            window.sharedHeader.updateTranslations();
        }, 100);
    }
    
    // Initialize animations after everything is loaded
    setTimeout(() => {
        window.sharedHeader.initializeAnimations();
    }, 200);
});