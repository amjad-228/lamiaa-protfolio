// نظام الترجمة للموقع - i18n System
class I18n {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.translations = {
            ar: {
                // Header & Navigation
                'site_title': 'سيرة ذاتية لمياء العمري',
                'my_resume': 'سيرتي الذاتية',
                'nav_home': 'الرئيسية',
                'nav_about': 'نبذة عني',
                'nav_works': 'أعمالي',
                'nav_education': 'تعليمي',
                'nav_experience': 'خبراتي',
                'nav_certificates': 'شهاداتي',
                'nav_contact': 'تواصل معي',
                
                // Hero Section
                'hero_name': 'لمياء العمري',
                'hero_title': 'علوم حاسب',
                'hero_contact_btn': 'تواصل',
                
                // About Section
                'about_title': 'تعريف عني',
                'about_who_title': 'مين',
                'about_who_desc': 'شغوفة بتخصص علوم الحاسب فحصلت على درجة بكالوريوس بمعدل مرتفع. أتمتع بخبرة واسعة في مختلف التقنيات ولدي مهارات قوية في البرمجة، تحليل وتصميم الحلول التقنية، بالإضافة إلى القدرة على شرح المفاهيم التقنية بوضوح. كما أنني أمتلك مهارات تواصل فعّالة وبحث مستمر يساعدني على التكيف والتطوير في هذا المجال.',
                'about_why_title': 'لماذا',
                'about_why_desc': 'لان أمتلك تعليم جامعي مع توصيات علمية وشهادات ودورات و خبرات متخصصة في تطوير البرمجيات والمواقع وفي الأمن السيبراني والشبكات. أستطيع استخدام برامج مايكروسوفت بفعالية، وأتقن اللغة الإنجليزية بمستوى متقدم، حيث اجتزت اختبار ستيب بنجاح.',
                'about_where_title': 'اين',
                'about_where_desc': 'بالمدينة المنورة في السعودية، وبامكانكم التواصل معي من اي مكان',
                
                // Works Section
                'works_title': 'بعض أعمالي',
                'works_graduation_project': 'مشروع التخرج',
                'works_exam_website': 'موقع اختبارات',
                'works_movie_website': 'موقع افلام',
                'works_notes_app': 'دفتر ملاحظات',
                'works_mario_game': 'لعبة ماريو',
                'works_toca_game': 'لعبة توكا بوكا',
                'works_solar_system': 'المجموعة الشمسية',
                'video_text': 'فيديو',
                'video_tooltip': 'مشاهدة الفيديو',
                
                // Experience Section
                'experience_title': 'خبراتي',
                'experience_ksmc': 'مدينة الملك سلمان بن عبد العزيز',
                'experience_ksmc_date': '2024 Aug - Jun',
                'experience_ksmc_desc': 'دعم فني وشبكات وامن سيبراني',
                'experience_edever': 'شركة هندسة البرمجيات E-DEVER',
                'experience_edever_date': '2023 Mar - 2022 Dec',
                'experience_edever_desc': 'بناء وتطوير مواقع وبرامج تصميم وبرمجة',
                'learn_more': 'معرفة المزيد',
                
                // Certificates Section
                'certificates_title': 'شهاداتي ودوراتي',
                'cert_attaa_title': 'شهادات العطاء الرقمي',
                'cert_attaa_ai': 'تطبيقات الذكاء الاصطناعي',
                'cert_attaa_security': 'استراتيجيات امان الانترنت',
                'cert_attaa_future': 'مستقبل التوظيف والمهارات اللازمة',
                'cert_doroob_title': 'شهادات هدف',
                'cert_doroob_presentations': 'إنشاء عروض تقديمية',
                'cert_doroob_skills': 'المهارات الأساسية للعمل',
                'cert_minnesota_title': 'شهادة احترافية من جامعة - MINNESOTA',
                'cert_ibm_title': 'شهادات احترافية من IBM',
                'cert_jindal_title': 'شهادة احترافية من جامعة - JINDAL GLOBAL',
                'cert_volunteer_title': 'ايامن',
                'cert_volunteer_desc': 'عمل تطوعي',
                
                // Digital Vision Section
                'vision_quote1': 'الحاسب لغة المستقبل التي نكتب بها قصة وطننا الرقمي ونبني عبرها جسور التطور',
                'vision_quote2': 'أطمح أن أكون جزءًا من هذا التطور، أزرع بصمتي الرقمية، وأحول الشغف بالمعرفة إلى إنجازات تخدم وطني وتصل به إلى آفاق أبعد.',
                
                // Education Section
                'education_title': 'تعليمي و التوصيات العلمية',
                'education_university': 'جامعة طيبة - المملكة العربية السعودية',
                'education_degree': 'بكالوريوس علوم الحاسب',
                'education_date': 'سبتمبر 2019 - ديسمبر 2024',
                'education_gpa': 'المعدل: 4.24 / 5',
                'education_recommendations': 'ثمانية توصيات علمية',
                'education_recommendations_desc': 'منها توصية رئيس قسم الحاسب و رئيسة عمادة تقنية المعلومات',
                
                // Skills Section
                'skills_title': 'مهاراتي',
                'skill_commitment': 'الالتزام بالعمل',
                'skill_microsoft': 'برامج مايكروسوفت',
                'skill_research': 'البحث',
                'skill_programming': 'برمجة تطبيقات ومواقع',
                'skill_teamwork': 'العمل مع الفريق',
                'skill_teaching': 'القدرة على التعليم والإقناع',
                'skill_management': 'الإدارة وتخطيط الجدول الزمني',
                'skill_english': 'اللغة الإنجليزية',
                
                // Partners Section
                'partners_title': 'شركاء نجاحي',
                
                // Contact Section
                'contact_title': 'تواصل معي',
                'contact_subtitle': 'تواصلكم خطوة نحو شراكة تلهم وتبني المستقبل',
                
                // Footer
                'footer_resume': 'سيرة ذاتية',
                'footer_cs': 'تخصص علوم الحاسب',
                'footer_content': 'محتوى سيرتي الذاتية',
                'footer_about': 'تعريف عني',
                'footer_works': 'اعمالي',
                'footer_experience': 'خبراتي',
                'footer_message': 'رسالتي',
                'footer_recommendations': 'التوصيات العلمية',
                'footer_contact': 'تواصل معي',
                'footer_copyright': 'جميع الحقوق محفوظة',
                
                // Mobile Navigation
                'mobile_nav_title': 'القائمة',
                'mobile_nav_subtitle': 'اختر القسم المطلوب',
                
                // Back Button
                'back_to_home': 'العودة للرئيسية',
                
                // Page Titles
                'graduation_page_title': 'شهادة التخرج - لمياء العمري',
                'certificates_page_title': 'الشهادات - لمياء العمري',
                'experience_page_title': 'التدريب التعاوني - مدينة الملك سلمان الطبية - لمياء العمري',
                'recommendations_page_title': 'التوصيات العلمية - لمياء العمري',
                
                // KSMC Experience Page
                'ksmc_title': 'التدريب التعاوني – مدينة الملك سلمان الطبية قسم التقنية',
                'ksmc_description': 'قدّمت دعمًا لأنظمة تقنية المعلومات وحل المشكلات، وعملت على الأنظمة الصحية الإلكترونية وتدفقات بيانات المرضى بالتعاون مع فرق متعددة التخصصات. نفذت مهامًا في الشبكات والأمن السيبراني، وأدرت جرد الأجهزة والأصول التقنية في بيئة المستشفى.',
                'training_topics_title': 'مواضيع خطة التدريب',
                'programs_tools_title': 'البرامج والأدوات المستخدمة',
                'zoom_image': 'تكبير الصورة',
                
                // Training Topics
                'topic_1_title': 'الدعم الفني والصيانة',
                'topic_1_desc': 'تهيئة نظام Windows وتنزيل تحديثاته، وتثبيت البرامج المضادّات للفيروسات ومع إعداد الطابعات والماسحات الضوئية، وإجراء صيانة دورية للأجهزة، والتأكد من بقاء جميع الأنظمة مُحدَّثة.',
                'topic_2_title': 'الشبكات',
                'topic_2_desc': 'اضافة الأجهزة إلى شبكة الوزارة، ومراقبه أداء الشبكة، وتفعيل النقاط الحديثة للإنترنت،تعلم عن غرفة السيرفر أساسيات إعداد الموجّهات والمبدّلات وتنظيم وترقيم الكوابل، وضبط المنافذ وVLANs ايضاً متابعة الطاقة.',
                'topic_3_title': 'الأنظمة',
                'topic_3_desc': 'إنشاء مستخدمين ومنح الصلاحيات، وتعيين كلمات المرور للأنظمة، كما ساهمت في إنشاء عيادات وأقسام جديدة داخل النظام وحل مشاكل الأنظمة عند ظهورها.',
                'topic_4_title': 'أمن الحاسوب',
                'topic_4_desc': 'حماية الأنظمة والبيانات عبر إصلاح مشكلات الشاشة الزرقاء، وتثبيت برامج الحماية من الفيروسات، وإعادة تعيين كلمات المرور عند الحاجة.',
                'topic_5_title': 'جرد الأجهزة',
                'topic_5_desc': 'إجراء جردًا تفصيليًا وتسجيلًا لجميع الأجهزة الإلكترونية في المستشفى، مع توحيد البيانات وحفظها في ملفات Excel للمتابعة.'
            },
            en: {
                // Header & Navigation
                'site_title': 'Lamyaa Al-Amri Resume',
                'my_resume': 'My Resume',
                'nav_home': 'Home',
                'nav_about': 'About Me',
                'nav_works': 'My Works',
                'nav_education': 'Education',
                'nav_experience': 'Experience',
                'nav_certificates': 'Certificates',
                'nav_contact': 'Contact Me',
                
                // Hero Section
                'hero_name': 'Lamyaa Al-Amri',
                'hero_title': 'Computer Science',
                'hero_contact_btn': 'Contact',
                
                // About Section
                'about_title': 'About Me',
                'about_who_title': 'Who',
                'about_who_desc': 'Passionate about computer science, I obtained a bachelor\'s degree with a high GPA. I have extensive experience in various technologies and strong programming skills, analysis and design of technical solutions, in addition to the ability to explain technical concepts clearly. I also have effective communication skills and continuous research that helps me adapt and develop in this field.',
                'about_why_title': 'Why',
                'about_why_desc': 'Because I have university education with academic recommendations, certificates, courses, and specialized experience in software and website development, cybersecurity and networks. I can use Microsoft programs effectively, and I am proficient in English at an advanced level, having successfully passed the STEP test.',
                'about_where_title': 'Where',
                'about_where_desc': 'In Medina, Saudi Arabia, and you can contact me from anywhere',
                
                // Works Section
                'works_title': 'Some of My Works',
                'works_graduation_project': 'Graduation Project',
                'works_exam_website': 'Exam Website',
                'works_movie_website': 'Movie Website',
                'works_notes_app': 'Notes App',
                'works_mario_game': 'Mario Game',
                'works_toca_game': 'Toca Boca Game',
                'works_solar_system': 'Solar System',
                'video_text': 'Video',
                'video_tooltip': 'Watch Video',
                
                // Experience Section
                'experience_title': 'My Experience',
                'experience_ksmc': 'King Salman Medical City',
                'experience_ksmc_date': 'Jun 2024 - Aug 2024',
                'experience_ksmc_desc': 'Technical Support, Networks and Cybersecurity',
                'experience_edever': 'E-DEVER Software Engineering Company',
                'experience_edever_date': 'Dec 2022 - Mar 2023',
                'experience_edever_desc': 'Building and developing websites and programs, design and programming',
                'learn_more': 'Learn More',
                
                // Certificates Section
                'certificates_title': 'My Certificates & Courses',
                'cert_attaa_title': 'Digital Giving Certificates',
                'cert_attaa_ai': 'Artificial Intelligence Applications',
                'cert_attaa_security': 'Internet Security Strategies',
                'cert_attaa_future': 'Future of Employment and Required Skills',
                'cert_doroob_title': 'Hadaf Certificates',
                'cert_doroob_presentations': 'Creating Presentations',
                'cert_doroob_skills': 'Basic Work Skills',
                'cert_minnesota_title': 'Professional Certificate from University of MINNESOTA',
                'cert_ibm_title': 'Professional Certificates from IBM',
                'cert_jindal_title': 'Professional Certificate from JINDAL GLOBAL University',
                'cert_volunteer_title': 'Aiamen',
                'cert_volunteer_desc': 'Volunteer Work',
                
                // Digital Vision Section
                'vision_quote1': 'Computer is the language of the future with which we write the story of our digital nation and build bridges of development through it',
                'vision_quote2': 'I aspire to be part of this development, plant my digital fingerprint, and turn my passion for knowledge into achievements that serve my country and reach further horizons.',
                
                // Education Section
                'education_title': 'My Education & Academic Recommendations',
                'education_university': 'Taibah University - Kingdom of Saudi Arabia',
                'education_degree': 'Bachelor of Computer Science',
                'education_date': 'September 2019 - December 2024',
                'education_gpa': 'GPA: 4.24 / 5',
                'education_recommendations': 'Eight Academic Recommendations',
                'education_recommendations_desc': 'Including recommendations from the Head of Computer Department and Dean of Information Technology',
                
                // Skills Section
                'skills_title': 'My Skills',
                'skill_commitment': 'Work Commitment',
                'skill_microsoft': 'Microsoft Programs',
                'skill_research': 'Research',
                'skill_programming': 'Applications & Websites Programming',
                'skill_teamwork': 'Teamwork',
                'skill_teaching': 'Teaching & Persuasion Ability',
                'skill_management': 'Management & Time Planning',
                'skill_english': 'English Language',
                
                // Partners Section
                'partners_title': 'Success Partners',
                
                // Contact Section
                'contact_title': 'Contact Me',
                'contact_subtitle': 'Your communication is a step towards a partnership that inspires and builds the future',
                
                // Footer
                'footer_resume': 'Resume',
                'footer_cs': 'Computer Science Major',
                'footer_content': 'My Resume Content',
                'footer_about': 'About Me',
                'footer_works': 'My Works',
                'footer_experience': 'Experience',
                'footer_message': 'My Message',
                'footer_recommendations': 'Academic Recommendations',
                'footer_contact': 'Contact Me',
                'footer_copyright': 'All Rights Reserved',
                
                // Mobile Navigation
                'mobile_nav_title': 'Menu',
                'mobile_nav_subtitle': 'Choose the desired section',
                
                // Back Button
                'back_to_home': 'Back to Home',
                
                // Page Titles
                'graduation_page_title': 'Graduation Certificate - Lamyaa Al-Amri',
                'certificates_page_title': 'Certificates - Lamyaa Al-Amri',
                'experience_page_title': 'Cooperative Training - King Salman Medical City - Lamyaa Al-Amri',
                'recommendations_page_title': 'Academic Recommendations - Lamyaa Al-Amri',
                
                // KSMC Experience Page
                'ksmc_title': 'Cooperative Training – King Salman Medical City IT Department',
                'ksmc_description': 'Provided support for information technology systems and problem-solving, worked on electronic health systems and patient data flows in collaboration with multidisciplinary teams. Implemented tasks in networking and cybersecurity, and managed inventory of devices and technical assets in the hospital environment.',
                'training_topics_title': 'Training Plan Topics',
                'programs_tools_title': 'Programs and Tools Used',
                'zoom_image': 'Zoom Image',
                
                // Training Topics
                'topic_1_title': 'Technical Support and Maintenance',
                'topic_1_desc': 'Windows system setup and updates, installing antivirus software and configuring printers and scanners, performing routine device maintenance, and ensuring all systems remain updated.',
                'topic_2_title': 'Networks',
                'topic_2_desc': 'Adding devices to the ministry network, monitoring network performance, activating modern internet points, learning about server room basics of router and switch setup, cable organization and numbering, port configuration and VLANs, and power monitoring.',
                'topic_3_title': 'Systems',
                'topic_3_desc': 'Creating users and granting permissions, setting passwords for systems, contributing to creating new clinics and departments within the system, and solving system problems when they arise.',
                'topic_4_title': 'Computer Security',
                'topic_4_desc': 'Protecting systems and data by fixing blue screen issues, installing antivirus protection software, and resetting passwords when needed.',
                'topic_5_title': 'Device Inventory',
                'topic_5_desc': 'Conducting detailed inventory and registration of all electronic devices in the hospital, standardizing data and saving it in Excel files for follow-up.'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setLanguage(this.currentLanguage);
        this.setupLanguageToggle();
    }
    
    setLanguage(lang) {
        // Save current scroll position
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update HTML attributes smoothly
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update page title
        document.title = this.translations[lang]['site_title'];
        
        // Update Bootstrap CSS for RTL/LTR
        this.updateBootstrapCSS(lang);
        
        // Update all translatable elements
        this.updateTranslations();
        
        // Update language toggle button
        this.updateLanguageToggle();
        
        // Update carousel RTL settings
        this.updateCarouselSettings(lang);
        
        // Restore scroll position after a brief delay to allow CSS to load
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 100);
    }
    
    updateBootstrapCSS(lang) {
        const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
        if (bootstrapLink) {
            const currentHref = bootstrapLink.href;
            const newHref = lang === 'ar' 
                ? 'assets/vendor/bootstrap/css/bootstrap.rtl.min.css'
                : 'assets/vendor/bootstrap/css/bootstrap.min.css';
            
            // Only update if the href is different to avoid unnecessary reloads
            if (!currentHref.includes(newHref.split('/').pop())) {
                // Create a new link element to avoid page jump
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = newHref;
                
                // Insert the new link before the old one
                bootstrapLink.parentNode.insertBefore(newLink, bootstrapLink);
                
                // Remove the old link after the new one loads
                newLink.onload = () => {
                    setTimeout(() => {
                        if (bootstrapLink.parentNode) {
                            bootstrapLink.parentNode.removeChild(bootstrapLink);
                        }
                    }, 50);
                };
            }
        }
    }
    
    updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
        
        // Update title attributes
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (this.translations[this.currentLanguage][key]) {
                element.setAttribute('title', this.translations[this.currentLanguage][key]);
            }
        });
    }
    
    updateLanguageToggle() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            const flag = toggleBtn.querySelector('.flag');
            const text = toggleBtn.querySelector('.lang-text');
            
            if (this.currentLanguage === 'ar') {
                flag.textContent = '🇺🇸';
                text.textContent = 'EN';
            } else {
                flag.textContent = '🇸🇦';
                text.textContent = 'ع';
            }
        }
    }
    
    setupLanguageToggle() {
        // Create language toggle button if it doesn't exist
        if (!document.getElementById('languageToggle')) {
            this.createLanguageToggle();
        }
        
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const newLang = this.currentLanguage === 'ar' ? 'en' : 'ar';
                this.setLanguage(newLang);
            });
        }
    }
    
    createLanguageToggle() {
        const header = document.querySelector('#header .container');
        if (header) {
            const toggleHTML = `
                <button id="languageToggle" class="language-toggle">
                    <span class="flag">🇺🇸</span>
                    <span class="lang-text">EN</span>
                </button>
            `;
            
            // Insert before the navbar
            const navbar = header.querySelector('#navbar');
            if (navbar) {
                navbar.insertAdjacentHTML('beforebegin', toggleHTML);
            }
        }
    }
    
    updateCarouselSettings(lang) {
        // Update Owl Carousel RTL settings without causing jumps
        setTimeout(() => {
            if (window.$ && $('.owl-carousel').length) {
                $('.owl-carousel').each(function() {
                    const owl = $(this).data('owl.carousel');
                    if (owl && owl.settings.rtl !== (lang === 'ar')) {
                        // Store current slide
                        const currentSlide = owl.current();
                        
                        // Update RTL setting
                        owl.settings.rtl = (lang === 'ar');
                        
                        // Refresh without animation to prevent jumps
                        owl.invalidate('all');
                        owl.refresh();
                        
                        // Go back to the same slide
                        owl.to(currentSlide, 0); // 0 = no animation
                    }
                });
            }
        }, 150);
    }
    
    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize i18n system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.i18n = new I18n();
});