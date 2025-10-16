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
                'topic_5_desc': 'إجراء جردًا تفصيليًا وتسجيلًا لجميع الأجهزة الإلكترونية في المستشفى، مع توحيد البيانات وحفظها في ملفات Excel للمتابعة.',
                
                // E-DEVER Experience Page
                'edever_title': 'التدريب الشخصي – شركة E-Dever لهندسة البرمجيات',
                'edever_description': 'كان هدفي من التدريب فهم المقرر الجامعي هندسة البرمجيات بشكل عملي، وخلاله تمكنت من اكتساب خبرة في تطوير البرامج والمواقع منذ المراحل الأولى وحتى الإطلاق بأسلوب هندسي متكامل، مما ساعدني على الحصول على درجة ممتاز وتوصية علمية من الدكتورة.',
                'training_certificate': 'شهادة التدريب',
                
                // E-DEVER Training Topics
                'edever_topic_1_title': 'تصميم واجهة المستخدم',
                'edever_topic_1_desc': 'تعلم تناسق الألوان والأشكال بما يناسب طبيعة الموقع أو التطبيق والفئة المستهدفة. كما استخدمت Figma لتطبيق هذه المفاهيم في تصاميم عملية.',
                'edever_topic_2_title': 'برمجة التطبيقات والمواقع',
                'edever_topic_2_desc': 'برمجة Front-End، Back-End باستخدام لغات JavaScript وC++ وHTML. كما استخدمت منصة Visual Studio لتطوير وتنفيذ المشاريع البرمجية بشكل متكامل.',
                'edever_topic_3_title': 'قواعد البيانات و API',
                'edever_topic_3_desc': 'العمل على قواعد البيانات باستخدام SQL، وربطها مع التطبيقات بشكل متكامل. كما استخدمت واجهات برمجية (APIs) لتنفيذ خدمات مثل أنظمة الدفع الإلكتروني.',
                'edever_topic_4_title': 'اختبار البرنامج والتحقق من الجودة',
                'edever_topic_4_desc': 'التحقق من وظائف النظام واكتشاف الأخطاء، وتطبيق مبادئ ضمان الجودة لضمان عمل البرامج بكفاءة عالية قبل الإطلاق.',
                'edever_topic_5_title': 'إدارة مهام الفريق والتعاون',
                'edever_topic_5_desc': 'إدارة مهام الفريق وتابعت إنجازها عبر أداة Planner، مع التأكد من دقة التنفيذ والالتزام بالوقت. كما ساعدني ذلك على تعزيز روح العمل الجماعي.',
                
                // Attaa Digital Certificates Page
                'attaa_cert_1_title': 'تطبيقات الذكاء الاصطناعي',
                'attaa_cert_1_org': 'العطاء الرقمي',
                'attaa_cert_1_desc': 'تركز هذه الدوره على التطبيقات العملية للذكاء الاصطناعي في مجالات مختلفة مثل الأعمال، الرعاية الصحية، والتكنولوجيا. كما يسلط الضوء على فهم تأثير الذكاء الاصطناعي على الصناعات الحديثة.',
                'attaa_cert_2_title': 'استراتيجيات أمان الإنترنت',
                'attaa_cert_2_org': 'العطاء الرقمي',
                'attaa_cert_2_desc': 'تناولت هذه المحاضرة استراتيجيات تأمين المعلومات على الإنترنت، مع التركيز على مبادئ الأمن السيبراني مثل التشفير، اكتشاف التهديدات، وتدابير الاستجابة، مما يساعد الأفراد والشركات على تأمين بيئاتهم الرقمية.',
                'attaa_cert_3_title': 'مستقبل التوظيف والمهارات اللازمة',
                'attaa_cert_3_org': 'العطاء الرقمي',
                'attaa_cert_3_desc': 'تم التركيز على أهمية مواكبة التقنيات الحديثة مثل الذكاء الاصطناعي والبرمجة. العطاء في هذا المجال يتطلب تطوير المهارات التقنية والشخصية مثل التفكير النقدي والعمل الجماعي لضمان النجاح في سوق العمل المستقبلي.',
                'certificate_image': 'صورة الشهادة',
                
                // Doroob Certificates
                'doroob_powerpoint_title': 'دورة PowerPoint دروب',
                'doroob_powerpoint_desc': 'تقدم هذه الدورة تدريبًا على استخدام PowerPoint لإنشاء عروض تقديمية فعالة ومهنية. يستعرض المتعلمون الأدوات والتقنيات اللازمة لتصميم شرائح جذابة بصريًا، مما يعزز مهاراتهم في تقديم العروض.',
                'doroob_skills_title': 'المهارات الأساسية للعمل',
                'doroob_skills_org': 'درووب',
                'doroob_skills_desc': 'تعلمت لتعزيز المهارات الأساسية للعمل، مع التركيز على تحسين التواصل، إدارة الوقت، والعمل الجماعي. يهدف إلى تجهيز الأفراد لسوق العمل الحديث من خلال تعزيز المهارات المهنية الأساسية.',
                
                // IBM Certificates  
                'ibm_hardware_title': 'مقدمة في الأجهزة وأنظمة التشغيل',
                'ibm_ml_title': 'تعلم الآلة باستخدام بايثون',
                'ibm_org': 'شركة آي بي إم',
                
                // University Certificates
                'minnesota_cert_title': 'جامعة مينيسوتا – شهادة إتمام',
                'minnesota_course_title': 'المقرر: ممارسات هندسية لبناء برمجيات عالية الجودة',
                'minnesota_title': 'ممارسات الهندسة لبناء برمجيات عالية الجودة',
                'minnesota_org': 'جامعة مينيسوتا',
                'minnesota_desc': 'الأساليب العملية والمعايير الصناعية لتطوير أنظمة برمجية عالية الجودة. يشمل استراتيجيات الاختبار، مراجعة الأكواد، إدارة الإصدارات، وممارسات التكامل المستمر. يركز البرنامج على بناء برمجيات موثوقة، قابلة للصيانة، وقابلة للتوسع. وقد تم تقديمه عبر منصة كورسيرا وباعتماد من جامعة مينيسوتا.',
                'jindal_title': 'الذكاء الاصطناعي',
                'jindal_org': 'جامعة جيندال العالمية',
                
                // Graduation
                'graduation_title': 'وثيقة التخرج',
                'graduation_university': 'جامعة طيبة – المملكة العربية السعودية',
                'graduation_degree_info': 'بكالوريوس علوم الحاسب سبتمبر 2019 – ديسمبر 2024 المعدل: 4.24 / 5',
                
                // Aiamen (Volunteer)
                'aiamen_title': 'شهادة تطوع - أيامن',
                'aiamen_org': 'منظمة أيامن التطوعية',
                
                // General terms
                'certificate_description': 'وصف الشهادة',
                'certificate_details': 'تفاصيل الشهادة'
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
                'topic_5_desc': 'Conducting detailed inventory and registration of all electronic devices in the hospital, standardizing data and saving it in Excel files for follow-up.',
                
                // E-DEVER Experience Page
                'edever_title': 'Personal Training – E-Dever Software Engineering Company',
                'edever_description': 'My goal from the training was to understand the university software engineering course practically. Through it, I was able to gain experience in developing programs and websites from the initial stages to launch with an integrated engineering approach, which helped me get an excellent grade and academic recommendation from the professor.',
                'training_certificate': 'Training Certificate',
                
                // E-DEVER Training Topics
                'edever_topic_1_title': 'User Interface Design',
                'edever_topic_1_desc': 'Learning color and shape harmony suitable for the nature of the website or application and the target audience. I also used Figma to apply these concepts in practical designs.',
                'edever_topic_2_title': 'Applications and Websites Programming',
                'edever_topic_2_desc': 'Front-End and Back-End programming using JavaScript, C++, and HTML languages. I also used Visual Studio platform to develop and implement programming projects comprehensively.',
                'edever_topic_3_title': 'Databases and API',
                'edever_topic_3_desc': 'Working on databases using SQL and integrating them with applications comprehensively. I also used APIs to implement services such as electronic payment systems.',
                'edever_topic_4_title': 'Software Testing and Quality Verification',
                'edever_topic_4_desc': 'Verifying system functions and discovering errors, applying quality assurance principles to ensure programs work with high efficiency before launch.',
                'edever_topic_5_title': 'Team Task Management and Collaboration',
                'edever_topic_5_desc': 'Managing team tasks and following up on their completion through Planner tool, ensuring execution accuracy and time commitment. This also helped me enhance teamwork spirit.',
                
                // Attaa Digital Certificates Page
                'attaa_cert_1_title': 'Artificial Intelligence Applications',
                'attaa_cert_1_org': 'Digital Giving',
                'attaa_cert_1_desc': 'This course focuses on practical applications of artificial intelligence in various fields such as business, healthcare, and technology. It also highlights understanding the impact of artificial intelligence on modern industries.',
                'attaa_cert_2_title': 'Internet Security Strategies',
                'attaa_cert_2_org': 'Digital Giving',
                'attaa_cert_2_desc': 'This lecture covered information security strategies on the Internet, focusing on cybersecurity principles such as encryption, threat detection, and response measures, helping individuals and companies secure their digital environments.',
                'attaa_cert_3_title': 'Future of Employment and Required Skills',
                'attaa_cert_3_org': 'Digital Giving',
                'attaa_cert_3_desc': 'The focus was on the importance of keeping up with modern technologies such as artificial intelligence and programming. Giving in this field requires developing technical and personal skills such as critical thinking and teamwork to ensure success in the future job market.',
                'certificate_image': 'Certificate Image',
                
                // Doroob Certificates
                'doroob_powerpoint_title': 'PowerPoint Course - Doroob',
                'doroob_powerpoint_desc': 'This course provides training on using PowerPoint to create effective and professional presentations. Learners explore the tools and techniques needed to design visually appealing slides, enhancing their presentation skills.',
                'doroob_skills_title': 'Basic Work Skills',
                'doroob_skills_org': 'Doroob',
                'doroob_skills_desc': 'I learned to enhance basic work skills, focusing on improving communication, time management, and teamwork. It aims to prepare individuals for the modern job market by strengthening essential professional skills.',
                
                // IBM Certificates  
                'ibm_hardware_title': 'Introduction to Hardware and Operating Systems',
                'ibm_ml_title': 'Machine Learning with Python',
                'ibm_org': 'IBM Corporation',
                
                // University Certificates
                'minnesota_cert_title': 'University of Minnesota – Certificate of Completion',
                'minnesota_course_title': 'Course: Engineering Practices for Building Quality Software',
                'minnesota_title': 'Engineering Practices for Building Quality Software',
                'minnesota_org': 'University of Minnesota',
                'minnesota_desc': 'Practical methods and industry standards for developing high-quality software systems. Includes testing strategies, code reviews, version management, and continuous integration practices. The program focuses on building reliable, maintainable, and scalable software. It was delivered through Coursera platform and accredited by the University of Minnesota.',
                'jindal_title': 'Artificial Intelligence',
                'jindal_org': 'Jindal Global University',
                
                // Graduation
                'graduation_title': 'Graduation Document',
                'graduation_university': 'Taibah University – Kingdom of Saudi Arabia',
                'graduation_degree_info': 'Bachelor of Computer Science September 2019 – December 2024 GPA: 4.24 / 5',
                
                // Aiamen (Volunteer)
                'aiamen_title': 'Volunteer Certificate - Aiamen',
                'aiamen_org': 'Aiamen Volunteer Organization',
                
                // General terms
                'certificate_description': 'Certificate Description',
                'certificate_details': 'Certificate Details'
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
            
            // Dispatch language change event for AOS refresh
            const languageChangeEvent = new CustomEvent('languageChanged', {
                detail: { language: lang }
            });
            document.dispatchEvent(languageChangeEvent);
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