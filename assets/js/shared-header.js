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
                    
                            ${this.getUnifiedNavigation()}
                    
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
        
        // Create footer for all pages
        this.createFooter();
        
        // Create back button for sub-pages only
        if (!this.isHomePage) {
            this.createBackButton();
        }
    }
    
    getUnifiedNavigation() {
        // Use the same navigation for all pages - always link to homepage sections
        return `
            <nav id="navbar" class="navbar justify-content-center">
                <ul>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto active' : ''}" href="${this.isHomePage ? '#hero' : 'index.html'}" data-i18n="nav_home">الرئيسية</a></li>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto' : ''}" href="${this.isHomePage ? '#who_us' : 'index.html#who_us'}" data-i18n="nav_about">نبذة عني</a></li>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto' : ''}" href="${this.isHomePage ? '#latest_works' : 'index.html#latest_works'}" data-i18n="nav_works">أعمالي</a></li>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto' : ''}" href="${this.isHomePage ? '#skills' : 'index.html#skills'}" data-i18n="nav_education">تعليمي</a></li>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto' : ''}" href="${this.isHomePage ? '#experience' : 'index.html#experience'}" data-i18n="nav_experience">خبراتي</a></li>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto' : ''}" href="${this.isHomePage ? '#certificates' : 'index.html#certificates'}" data-i18n="nav_certificates">شهاداتي</a></li>
                    <li><a class="nav-link ${this.isHomePage ? 'scrollto' : ''}" href="${this.isHomePage ? '#contact' : 'index.html#contact'}" data-i18n="nav_contact">تواصل معي</a></li>
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
        // Unified mobile navigation for all pages
        return `
            <ul class="mobile-nav-menu">
                <li><a href="${this.isHomePage ? '#hero' : 'index.html'}" class="mobile-nav-link" data-i18n="nav_home">الرئيسية</a></li>
                <li><a href="${this.isHomePage ? '#who_us' : 'index.html#who_us'}" class="mobile-nav-link" data-i18n="nav_about">نبذة عني</a></li>
                <li><a href="${this.isHomePage ? '#latest_works' : 'index.html#latest_works'}" class="mobile-nav-link" data-i18n="nav_works">أعمالي</a></li>
                <li><a href="${this.isHomePage ? '#skills' : 'index.html#skills'}" class="mobile-nav-link" data-i18n="nav_education">تعليمي</a></li>
                <li><a href="${this.isHomePage ? '#experience' : 'index.html#experience'}" class="mobile-nav-link" data-i18n="nav_experience">خبراتي</a></li>
                <li><a href="${this.isHomePage ? '#certificates' : 'index.html#certificates'}" class="mobile-nav-link" data-i18n="nav_certificates">شهاداتي</a></li>
                <li><a href="${this.isHomePage ? '#contact' : 'index.html#contact'}" class="mobile-nav-link" data-i18n="nav_contact">تواصل معي</a></li>
            </ul>
        `;
    }
    
    createFooter() {
        // Create unified footer for all pages
        const footerHTML = `
            <!-- ======= Footer ======= -->
            <footer id="footer">
                <div class="footer-main">
                    <div class="container">
                        <div class="row">
                            <!-- Right Column - Branding -->
                            <div class="col-lg-4 col-md-6">
                                <div class="footer-brand">
                                    <h3 data-i18n="footer_resume">سيرة ذاتية</h3>
                                    <h4 data-i18n="footer_cs">تخصص علوم الحاسب</h4>
                                    <div class="footer-logo">
                                        <img src="assets/img/logo.png" alt="شعار لمياء العمري" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Middle Column - Navigation -->
                            <div class="col-lg-4 col-md-6">
                                <div class="footer-nav">
                                    <h3 data-i18n="footer_content">محتوى سيرتي الذاتية</h3>
                                    <ul>
                                        <li><a href="${this.isHomePage ? '#about' : 'index.html#about'}" data-i18n="footer_about">تعريف عني</a></li>
                                        <li><a href="${this.isHomePage ? '#latest_works' : 'index.html#latest_works'}" data-i18n="footer_works">اعمالي</a></li>
                                        <li><a href="${this.isHomePage ? '#experience' : 'index.html#experience'}" data-i18n="footer_experience">خبراتي</a></li>
                                        <li><a href="${this.isHomePage ? '#digital-vision' : 'index.html#digital-vision'}" data-i18n="footer_message">رسالتي</a></li>
                                        <li><a href="${this.isHomePage ? '#education' : 'index.html#education'}" data-i18n="footer_recommendations">التوصيات العلمية</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <!-- Left Column - Contact -->
                            <div class="col-lg-4 col-md-12">
                                <div class="footer-contact">
                                    <h3 data-i18n="footer_contact">تواصل معي</h3>
                                    <p>xlamyaa@outlook.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Media Icons -->
                        <div class="footer-social">
                            <a href="mailto:xlamyaa@outlook.com" class="social-icon" target="_blank">
                                <i class="bi bi-envelope"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lamyaa-alamri-5b563b236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" class="social-icon" target="_blank">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="https://wa.me/966507872908" class="social-icon" target="_blank">
                                <i class="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://x.com/lam2yaa?s=21" class="social-icon" target="_blank">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="https://github.com/lamyaa2030" class="social-icon" target="_blank">
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom Strip -->
                <div class="footer-bottom">
                    <div class="container">
                        <div class="copyright">
                            &copy; Copyright <strong><span>لمياء العمري</span></strong>. <span data-i18n="footer_copyright">جميع الحقوق محفوظة</span>
                        </div>
                    </div>
                </div>
            </footer><!-- End Footer -->
        `;
        
        // Insert footer before the back-to-top button or at the end of body
        const backToTop = document.querySelector('.back-to-top');
        const existingFooter = document.querySelector('#footer');
        
        // Only create footer if it doesn't already exist
        if (!existingFooter) {
            if (backToTop) {
                backToTop.insertAdjacentHTML('beforebegin', footerHTML);
            } else {
                document.body.insertAdjacentHTML('beforeend', footerHTML);
            }
        }
    }
    
    createBackButton() {
        // Create back button for sub-pages only
        const backButtonHTML = `
            <!-- ======= Back Button ======= -->
            <div class="back-button-container">
                <button class="back-button" onclick="window.sharedHeader.goBack()">
                    <i class="bi bi-arrow-right"></i>
                    <span data-i18n="back_to_home">العودة للرئيسية</span>
                </button>
            </div>
        `;
        
        // Insert at the beginning of main content
        const main = document.querySelector('main, section:first-of-type, .certificate-detail, .experience-detail, .recommendations-detail');
        if (main) {
            main.insertAdjacentHTML('afterbegin', backButtonHTML);
        } else {
            // Fallback: insert after header if no main content found
            const header = document.querySelector('#header');
            if (header) {
                header.insertAdjacentHTML('afterend', backButtonHTML);
            }
        }
    }
    
    goBack() {
        // Smart back navigation: go to previous page or homepage
        if (document.referrer && document.referrer.includes(window.location.origin)) {
            // If came from within the same site, go back
            window.history.back();
        } else {
            // Otherwise, go to homepage
            window.location.href = 'index.html';
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
                main, .certificate-detail, .experience-detail, section:first-of-type, .recommendations-detail {
                    margin-top: 0px;
                    padding-top: 0px;
                    position: relative;
                }
                
                /* Ensure back button is inside content area */
                .back-button-container {
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
                ` : ''}
                
                @media (max-width: 768px) {
                    body {
                        padding-top: ${this.isHomePage ? '0px' : '70px'};
                    }
                    
                    ${!this.isHomePage ? `
                    main, .certificate-detail, .experience-detail, section:first-of-type, .recommendations-detail {
                        margin-top: 0px;
                        padding-top: 0px;
                        position: relative;
                    }
                    
                    /* Back button mobile spacing */
                    .back-button-container {
                        margin-top: 15px;
                        margin-bottom: 15px;
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
    
    // If i18n is already loaded, update translations and language toggle
    if (window.i18n) {
        setTimeout(() => {
            window.sharedHeader.updateTranslations();
            // Ensure language toggle shows correct state
            if (window.i18n.updateLanguageToggle) {
                window.i18n.updateLanguageToggle();
            }
        }, 100);
    }
    
    // Listen for language changes to update header if needed
    document.addEventListener('languageChanged', function(e) {
        // Update any dynamic content in header if needed
        if (window.i18n) {
            setTimeout(() => {
                window.sharedHeader.updateTranslations();
            }, 50);
        }
    });
    
    // Initialize animations after everything is loaded
    setTimeout(() => {
        window.sharedHeader.initializeAnimations();
    }, 200);
});