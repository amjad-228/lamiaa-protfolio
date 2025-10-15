// نظام الهيدر المشترك - Shared Header System
class SharedHeader {
    constructor() {
        this.isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        this.init();
    }
    
    init() {
        this.createHeader();
        this.setupBackButton();
        this.adjustPageLayout();
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
    
    setupBackButton() {
        if (!this.isHomePage) {
            // Update existing back button or create one if it doesn't exist
            let backButton = document.querySelector('.back-button-container');
            if (backButton) {
                const backLink = backButton.querySelector('.back-button');
                if (backLink) {
                    // Add translation attributes to existing back button
                    backLink.innerHTML = `
                        <i class="bi bi-arrow-right"></i>
                        <span data-i18n="back_to_home">العودة للرئيسية</span>
                    `;
                }
            } else {
                // Create back button if it doesn't exist
                const backButtonHTML = `
                    <div class="back-button-container">
                        <a href="index.html" class="back-button">
                            <i class="bi bi-arrow-right"></i>
                            <span data-i18n="back_to_home">العودة للرئيسية</span>
                        </a>
                    </div>
                `;
                
                // Insert after header
                const header = document.getElementById('header');
                if (header) {
                    header.insertAdjacentHTML('afterend', backButtonHTML);
                }
            }
        }
    }
    
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
                    margin-top: 60px;
                    padding-top: 20px;
                    position: relative;
                }
                ` : ''}
                
                @media (max-width: 768px) {
                    body {
                        padding-top: ${this.isHomePage ? '0px' : '70px'};
                    }
                    
                    ${!this.isHomePage ? `
                    main, .certificate-detail, .experience-detail, section:first-of-type {
                        margin-top: 50px;
                        padding-top: 15px;
                        position: relative;
                    }
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