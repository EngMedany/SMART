document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("currentYear");
  const langToggle = document.getElementById("langToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const revealElements = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section[id]");
  const html = document.documentElement;
  const body = document.body;

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navTestimonials: "Testimonials",
      navFaq: "FAQ",
      navContact: "Contact Us",

      heroChip: "Integrated Facility Management Solutions",
      heroTitle: "We make our mark today... to shape tomorrow.",
      heroText:
        "Smart Touch is specialized in integrated solutions for cleaning, maintenance, facility management and operations, general supplies, landscaping, and pest control through a modern professional approach built on efficiency, organization, and sustainability.",
      heroBtnPrimary: "Explore Services",
      heroBtnSecondary: "Get a Quote",
      miniStat1: "Core Services",
      miniStat2: "Operational Follow-up",
      miniStat3: "Commitment to Quality",

      heroCardBadge: "Smart Touch Promise",
      heroCardTitle: "Cleaner spaces. Safer operations. Better outcomes.",
      heroCardText:
        "We focus on the finest operational details to build smart systems that enhance facility performance, improve service quality, and reduce operating costs with trained teams and clear work plans.",
      heroList1: "Clear plans and organized workflows",
      heroList2: "Periodic follow-up and performance evaluation",
      heroList3: "Trained teams and smart service solutions",

      stat1: "Integrated Services",
      stat2: "Rapid Response",
      stat3: "Quality Commitment",
      stat4: "Trusted Service Partner",

      aboutChip: "About Smart Touch",
      aboutTitle: "Integrated facility services built on efficiency, quality, and sustainability",
      aboutText1:
        "Smart Touch is a specialized company delivering integrated solutions in cleaning, maintenance, facility management and operations, general supplies, landscaping, and pest control.",
      aboutText2:
        "We believe that the quality of the work environment directly reflects on people performance and business continuity, so we focus on smart operational systems that raise efficiency and improve service.",
      aboutPoint1: "Vision: to become a trusted leader in integrated facility solutions",
      aboutPoint2: "Mission: professional service through planning, follow-up, and innovation",
      aboutPoint3: "Values: quality, commitment, transparency, teamwork, and client satisfaction",
      aboutBtn: "Learn More",

      servicesChip: "Our Services",
      servicesTitle: "Integrated services that support every part of your facility",
      servicesText:
        "We provide practical, professional, and scalable service models designed to maintain assets, improve daily operations, and ensure clean, safe, and organized environments.",
      service1Title: "Facility Management",
      service1Text:
        "Daily building operations, contractor supervision, asset follow-up, emergency response, and full site management with quality and safety control.",
      service2Title: "Cleaning Services",
      service2Text:
        "Integrated cleaning solutions for facilities, offices, residential units, deep cleaning, post-finishing cleaning, glass, floors, and sanitization.",
      service3Title: "Technical Maintenance",
      service3Text:
        "Preventive and corrective maintenance covering electrical works, plumbing, HVAC systems, and light civil maintenance with trained technicians.",
      service4Title: "General Supplies",
      service4Text:
        "Supply of cleaning tools, consumables, office items, hospitality needs, PPE, maintenance materials, and operational supplies with reliable delivery.",
      service5Title: "Pest Control",
      service5Text:
        "Safe and effective pest control services using approved materials, preventive spraying, emergency intervention, and regular technical follow-up.",
      service6Title: "Landscaping",
      service6Text:
        "Landscaping, green area development, irrigation systems, planting, maintenance, and enhancement of outdoor spaces with sustainable care.",
      serviceBtn: "View Details",

      whyChip: "Why Choose Us",
      whyTitle: "A professional methodology that creates long-term value",
      whyText:
        "Our work model is based on clear plans, continuous monitoring, trained teams, quality assurance, and smart operational thinking that helps clients improve performance and reduce costs.",
      feature1Title: "Quality & Professionalism",
      feature1Text:
        "Executing all work to clear standards with stable performance levels and reliable supervision.",
      feature2Title: "Commitment",
      feature2Text:
        "Respecting timelines, budgets, and client requirements with disciplined service delivery.",
      feature3Title: "Transparency",
      feature3Text:
        "Clear reporting, full follow-up visibility, and honest communication across every service stage.",
      feature4Title: "Continuous Improvement",
      feature4Text:
        "Ongoing development, smart solutions, and trained teams that support sustainable operations.",

      methodologyChip: "Professional Methodology",
      methodologyTitle: "How we deliver consistent service quality",
      methodologyText:
        "Our operating model is built on planning, technical assessment, continuous supervision, and measurable quality standards.",
      methodology1Title: "Site Assessment",
      methodology1Text:
        "We start with a full site review to understand facility needs, technical requirements, and client priorities before execution.",
      methodology2Title: "Operational Planning",
      methodology2Text:
        "We prepare tailored work plans, schedules, and service models according to the nature of each site and the approved budget.",
      methodology3Title: "Follow-up & Reporting",
      methodology3Text:
        "We ensure continuous monitoring, regular reporting, quality checks, and fast handling of any observation or emergency case.",

      trainingChip: "Training & Performance",
      trainingTitle: "Service quality starts with trained people",
      trainingText:
        "Smart Touch gives special attention to selecting and training its teams because human performance is the foundation of successful operations.",
      trainingPoint1:
        "Training on modern cleaning methods and safe use of tools and materials.",
      trainingPoint2:
        "Training on HSE rules and safety procedures inside work sites.",
      trainingPoint3:
        "Improving time management, communication, and professional conduct.",
      trainingPoint4:
        "Weekly and monthly evaluation with direct feedback and continuous improvement.",
      trainingBadge: "Quality Focus",
      trainingCardTitle: "A trained, disciplined, and qualified team",
      trainingCardText:
        "We aim to build a professional team capable of delivering stable service quality across all sites, supporting operational continuity, and improving the image of each facility.",
      trainingList1: "Careful selection of workers and technicians",
      trainingList2: "Continuous practical training programs",
      trainingList3: "Field supervision and immediate corrective action",

      equipmentChip: "Equipment & Materials",
      equipmentTitle: "Reliable tools and materials for dependable performance",
      equipmentText:
        "We support our service model with professional equipment, approved materials, and continuous replacement of consumables to maintain efficiency and quality.",
      equipment1Title: "Professional Machines",
      equipment1Text:
        "Floor polishing machines, vacuum systems, blowers, and specialized cleaning equipment.",
      equipment2Title: "Safe Materials",
      equipment2Text:
        "Approved detergents, disinfectants, glass cleaners, air fresheners, and safe treatment materials.",
      equipment3Title: "Monthly Replacement",
      equipment3Text:
        "Continuous replacement of consumables such as mops, cloths, buckets, and waste bags.",
      equipment4Title: "Maintenance Readiness",
      equipment4Text:
        "Periodic maintenance and immediate replacement of damaged tools to preserve service efficiency.",

      testimonialsChip: "Our Promise",
      testimonialsTitle: "Built for trust, continuity, and service excellence",
      testimonialsText:
        "Even as a growing company, Smart Touch aims to build long-term partnerships through quality, discipline, and fast response across every client site.",
      testimonial1Text:
        "We focus on building smart operational systems that improve service levels and reflect a professional image for every facility we serve.",
      testimonial1Name: "Smart Touch",
      testimonial1Role: "Operational Excellence",
      testimonial2Text:
        "Our trained teams and follow-up processes are designed to ensure consistent quality and better performance across all sites.",
      testimonial2Name: "Smart Touch",
      testimonial2Role: "Quality Commitment",
      testimonial3Text:
        "We do not only provide services; we build long-term partnerships based on trust, quality, and a true understanding of client needs.",
      testimonial3Name: "Smart Touch",
      testimonial3Role: "Long-Term Partnership",

      faqChip: "FAQ",
      faqTitle: "Frequently asked questions",
      faqText:
        "Here are some common questions about our services, operations, and service model.",
      faq1Question: "What services does Smart Touch provide?",
      faq1Answer:
        "We provide facility management, cleaning, maintenance, general supplies, landscaping, and pest control services.",
      faq2Question: "How do you maintain service quality?",
      faq2Answer:
        "Through trained staff, clear work plans, field supervision, periodic evaluation, and continuous improvement systems.",
      faq3Question: "Can services be customized for each site?",
      faq3Answer:
        "Yes. We assess every site first, then prepare a tailored operational plan based on facility type and client requirements.",

      ctaChip: "Start Your Partnership",
      ctaTitle: "We’re ready to start when you are",
      ctaText:
        "Let’s discuss how Smart Touch can support your facility with reliable, organized, and high-quality service solutions.",
      ctaBtn: "Request a Consultation",

      footerText:
        "We do not just provide services — we build long-term partnerships based on quality, commitment, and a real understanding of client needs.",
      contactChip: "Contact Us",
      contactTitle: "Send us your request",
      formBtn: "Submit Request",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number",
      formService: "Service Type",
      formMessage: "Write your message...",
      footerCopy: "All rights reserved.",


      facilityChip: "Facility Management",
facilityModalTitle: "Integrated management for efficient, safe, and organized facilities",
facilityModalIntro: "Smart Touch provides integrated facility management services designed to ensure the optimal operation of buildings and sites, improve performance efficiency, protect assets, and support business continuity through a professional operating model focused on quality, safety, and cost control.",
facilityCoverTitle: "What this service covers",
facilityCover1: "Daily building operations and full site coordination.",
facilityCover2: "Supervision of cleaning, maintenance, and support services.",
facilityCover3: "Vendor and contractor coordination and follow-up.",
facilityCover4: "Asset and equipment monitoring.",
facilityCover5: "Handling reports, complaints, and emergency cases.",
facilityCover6: "Monitoring energy and water consumption to improve efficiency and reduce waste.",
facilityMethodTitle: "Our methodology",
facilityMethod1: "Comprehensive site assessment before starting service.",
facilityMethod2: "Tailored operational plan according to facility nature and client priorities.",
facilityMethod3: "Preventive and periodic maintenance schedules.",
facilityMethod4: "Continuous supervision and documented operational follow-up.",
facilityMethod5: "Periodic management reports covering performance and quality indicators.",
facilityBenefitsTitle: "Value to the client",
facilityBenefits1: "Improved operational efficiency and reduced service interruptions.",
facilityBenefits2: "Longer asset life cycle and lower repair frequency.",
facilityBenefits3: "Reduced operating costs through better planning and control.",
facilityBenefits4: "One reliable service partner coordinating multiple functions.",
facilityBenefits5: "A safer, cleaner, and better organized environment.",

cleaningChip: "Cleaning Services",
cleaningModalTitle: "Professional cleaning solutions for healthy and presentable environments",
cleaningModalIntro: "Smart Touch delivers integrated cleaning services aimed at maintaining cleanliness, improving the hygienic condition of facilities, and preserving the professional image of each site through trained teams, approved materials, and operating plans tailored to every facility.",
cleaningScopeTitle: "Service scope",
cleaningScope1: "Post-construction and post-finishing cleaning.",
cleaningScope2: "Daily operational cleaning for offices, facilities, and common areas.",
cleaningScope3: "Weekly and monthly deep cleaning programs.",
cleaningScope4: "Glass, façade, marble, granite, parquet, and metal surface cleaning.",
cleaningScope5: "Bathroom and pantry sanitization according to health standards.",
cleaningScope6: "Furniture, carpet, curtain, and upholstery care.",
cleaningMethodTitle: "Execution and follow-up",
cleaningMethod1: "Approved cleaning plans and schedules for each site.",
cleaningMethod2: "Use of safe and suitable cleaning materials for each surface.",
cleaningMethod3: "Field supervision to ensure execution quality.",
cleaningMethod4: "Periodic reports and immediate handling of client remarks.",
cleaningMethod5: "Flexible service according to site nature and occupancy level.",
cleaningBenefitsTitle: "Why clients choose this service",
cleaningBenefits1: "Fast response to client requirements.",
cleaningBenefits2: "Consistent service quality and stable performance.",
cleaningBenefits3: "Specialized and trained cleaning teams.",
cleaningBenefits4: "Full integration with maintenance and supply services.",
cleaningBenefits5: "Professional image and healthier work environment.",

maintenanceChip: "Technical Maintenance",
maintenanceModalTitle: "Preventive and corrective maintenance that protects operations",
maintenanceModalIntro: "Smart Touch provides technical and operational maintenance services through an integrated framework that preserves asset efficiency, reduces sudden breakdowns, and supports safe and continuous facility operation through planning, technical expertise, and fast response.",
maintenanceScopeTitle: "Maintenance scope",
maintenanceScope1: "Preventive maintenance based on approved schedules.",
maintenanceScope2: "Corrective and emergency maintenance for unexpected faults.",
maintenanceScope3: "Electrical maintenance for lighting, switches, wiring, and panels.",
maintenanceScope4: "Plumbing maintenance for leaks, drainage, water networks, and fixtures.",
maintenanceScope5: "HVAC inspection, cleaning, and basic servicing.",
maintenanceScope6: "Light civil works such as paint touch-ups, flooring, carpentry, and aluminum repairs.",
maintenanceMethodTitle: "Execution and monitoring",
maintenanceMethod1: "Initial asset review and technical assessment of the site.",
maintenanceMethod2: "A maintenance plan tailored to the facility nature.",
maintenanceMethod3: "Field supervision and periodic technical follow-up.",
maintenanceMethod4: "Periodic reports on maintenance status and performance.",
maintenanceMethod5: "Full commitment to occupational safety procedures.",
maintenanceBenefitsTitle: "Service value",
maintenanceBenefits1: "Reduced downtime and emergency failures.",
maintenanceBenefits2: "Better asset reliability and lower repair costs.",
maintenanceBenefits3: "Fast response to urgent technical issues.",
maintenanceBenefits4: "Transparent reporting and follow-up.",
maintenanceBenefits5: "Integration with cleaning and supply functions.",

suppliesChip: "General Supplies",
suppliesModalTitle: "Reliable operational supplies that support daily site needs",
suppliesModalIntro: "Smart Touch provides general supply services as part of an integrated operating model that supports day-to-day facility needs with quality, timely delivery, and budget awareness while reducing the administrative burden on the client.",
suppliesScopeTitle: "Supply categories",
suppliesScope1: "Cleaning tools, consumables, and disinfectants.",
suppliesScope2: "Bathroom consumables such as soap, tissues, and air fresheners.",
suppliesScope3: "Office stationery, printing paper, and toner supplies.",
suppliesScope4: "Hospitality items and pantry supplies.",
suppliesScope5: "PPE and health & safety supplies.",
suppliesScope6: "Maintenance-related technical materials and spare items.",
suppliesMethodTitle: "Supply process",
suppliesMethod1: "Assessment of actual site needs before procurement.",
suppliesMethod2: "Clear quotations and transparent planning.",
suppliesMethod3: "Commitment to agreed delivery schedules.",
suppliesMethod4: "Quality inspection before final delivery.",
suppliesMethod5: "Flexible monthly or on-demand supply cycles.",
suppliesBenefitsTitle: "Why this service matters",
suppliesBenefits1: "One point of contact for services and supplies.",
suppliesBenefits2: "Reduced delays in daily operations.",
suppliesBenefits3: "Better cost control and procurement efficiency.",
suppliesBenefits4: "Reliable quality aligned with site requirements.",
suppliesBenefits5: "Full alignment with cleaning and maintenance plans.",

pestChip: "Pest Control",
pestModalTitle: "Safe and effective pest control with continuous protection",
pestModalIntro: "Smart Touch provides integrated pest control and pesticide spraying services using safe, approved, and effective methods to maintain healthy and pest-free environments without harming people, operations, or property.",
pestScopeTitle: "Service scope",
pestScope1: "Control of crawling and flying insects such as cockroaches, ants, flies, mosquitoes, and fleas.",
pestScope2: "Rodent control using safe and effective methods.",
pestScope3: "Use of approved pesticides aligned with health and environmental standards.",
pestScope4: "Modern equipment to treat hidden and critical areas.",
pestScope5: "Preventive spraying plans and ongoing follow-up.",
pestScope6: "Technical reports after treatment when needed.",
pestMethodTitle: "Operational approach",
pestMethod1: "Regular preventive spraying according to site needs.",
pestMethod2: "Immediate treatment of affected areas when pests appear.",
pestMethod3: "Fast response as part of the service commitment.",
pestMethod4: "Full compliance with safety and hygiene procedures.",
pestBenefitsTitle: "Client outcomes",
pestBenefits1: "Healthier and safer working environments.",
pestBenefits2: "Lower risk of pest-related contamination and disruption.",
pestBenefits3: "Higher user comfort and hygiene standards.",
pestBenefits4: "Reliable treatment supported by follow-up and professional handling.",

landscapeChip: "Landscaping",
landscapeModalTitle: "Outdoor spaces designed for beauty, comfort, and sustainability",
landscapeModalIntro: "Smart Touch offers integrated landscaping services designed to create attractive, comfortable, and safe outdoor environments that improve the overall image of the site and elevate the experience of users and visitors.",
landscapeScopeTitle: "What we provide",
landscapeScope1: "Landscape planning and green area development.",
landscapeScope2: "Tree, palm, shrub, and seasonal plant installation.",
landscapeScope3: "Natural or artificial grass solutions according to site needs.",
landscapeScope4: "Modern irrigation systems including drip and sprinkler solutions.",
landscapeScope5: "Routine maintenance including trimming, fertilizing, irrigation, and pruning.",
landscapeScope6: "Rehabilitation and enhancement of existing gardens and green zones.",
landscapeBenefitsTitle: "Service advantages",
landscapeBenefits1: "Selection of plant types suitable for climate and site conditions.",
landscapeBenefits2: "Specialized landscaping and gardening teams.",
landscapeBenefits3: "Commitment to schedules and maintenance plans.",
landscapeBenefits4: "Strong focus on appearance, sustainability, and site value.",
landscapeBenefits5: "Tailored solutions based on the character of each project.",
landscapeResultsTitle: "Results for the client",
landscapeResults1: "Improved site appearance and visual identity.",
landscapeResults2: "More comfortable and pleasant external environments.",
landscapeResults3: "Higher property and brand value.",
landscapeResults4: "Better sustainability of green spaces over time.",

facilityTitle: "Facility Management",
facilityText: "Integrated solutions for efficient facility operation, asset protection, and service coordination.",
cleaningTitle: "Cleaning Services",
cleaningText: "Professional cleaning services for healthier, cleaner, and more presentable spaces.",
maintenanceTitle: "Technical Maintenance",
maintenanceText: "Preventive and corrective maintenance that reduces downtime and improves reliability.",
suppliesTitle: "General Supplies",
suppliesText: "Reliable operational supplies to support daily facility requirements with speed and quality.",
pestTitle: "Pest Control",
pestText: "Safe and effective pest control programs for healthier and protected environments.",
landscapeTitle: "Landscaping",
landscapeText: "Green spaces and outdoor care solutions that improve site image and comfort.",
viewDetails: "View Details",
heroKicker: "Integrated Facility Services",
heroTitle: "Smart operational solutions for cleaner, safer, and better managed spaces",
heroText: "We provide facility management, cleaning, maintenance, pest control, supplies, and landscaping services tailored to modern business environments.",
exploreServices: "Explore Services",
requestQuote: "Request a Quote",
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "عن الشركة",
      navServices: "الخدمات",
      navTestimonials: "وعدنا",
      navFaq: "الأسئلة الشائعة",
      navContact: "تواصل معنا",

      heroChip: "حلول متكاملة لإدارة المرافق",
      heroTitle: "نضع لمستنا اليوم... لنصنع الفارق للغد.",
      heroText:
        "سمارت تاتش شركة متخصصة في تقديم حلول متكاملة في مجالات النظافة، والصيانة، وإدارة وتشغيل المرافق، والتوريدات العمومية، واللاندسكيب، وخدمات مكافحة الآفات، وذلك بأسلوب احترافي حديث يعتمد على الكفاءة والتنظيم والاستدامة.",
      heroBtnPrimary: "استكشف الخدمات",
      heroBtnSecondary: "اطلب عرض سعر",
      miniStat1: "خدمات رئيسية",
      miniStat2: "متابعة تشغيلية",
      miniStat3: "التزام بالجودة",

      heroCardBadge: "وعد سمارت تاتش",
      heroCardTitle: "مساحات أنظف. تشغيل أكثر أمانًا. نتائج أفضل.",
      heroCardText:
        "نركز على أدق التفاصيل التشغيلية لبناء منظومات ذكية ترفع كفاءة المنشآت وتحسن مستوى الخدمة وتقلل التكلفة التشغيلية من خلال كوادر مدربة وخطط عمل واضحة.",
      heroList1: "خطط واضحة وسير عمل منظم",
      heroList2: "متابعة دورية وتقييم مستمر للأداء",
      heroList3: "كوادر مدربة وحلول ذكية لتحسين الخدمة",

      stat1: "خدمات متكاملة",
      stat2: "استجابة سريعة",
      stat3: "التزام بالجودة",
      stat4: "شريك خدمة موثوق",

      aboutChip: "عن سمارت تاتش",
      aboutTitle: "خدمات مرافق متكاملة قائمة على الكفاءة والجودة والاستدامة",
      aboutText1:
        "سمارت تاتش هي شركة متخصصة في تقديم حلول متكاملة في مجالات النظافة، والصيانة، وإدارة وتشغيل المرافق، والتوريدات العمومية، واللاندسكيب، وخدمات مكافحة الآفات.",
      aboutText2:
        "نؤمن في سمارت تاتش أن جودة بيئة العمل تنعكس مباشرة على كفاءة الأفراد واستمرارية الأعمال؛ لذلك نركز على بناء منظومات تشغيل ذكية ترفع الكفاءة وتحسن مستوى الخدمة.",
      aboutPoint1: "الرؤية: أن نكون من الشركات الرائدة والشريك الموثوق في الحلول التشغيلية المتكاملة",
      aboutPoint2: "الرسالة: تقديم خدمات احترافية تعتمد على التخطيط والمتابعة والابتكار",
      aboutPoint3: "القيم: الجودة، الالتزام، الشفافية، العمل الجماعي، ورضا العميل",
      aboutBtn: "اعرف المزيد",

      servicesChip: "خدماتنا",
      servicesTitle: "خدمات متكاملة تدعم كل جانب من جوانب منشأتك",
      servicesText:
        "نقدم نماذج خدمة عملية واحترافية وقابلة للتوسع للحفاظ على الأصول، وتحسين التشغيل اليومي، وضمان بيئات نظيفة وآمنة ومنظمة.",
      service1Title: "إدارة المرافق",
      service1Text:
        "تشغيل يومي للمباني، وإشراف على المقاولين، ومتابعة الأصول، والتعامل مع الطوارئ، وإدارة كاملة للموقع مع رقابة على الجودة والسلامة.",
      service2Title: "خدمات النظافة",
      service2Text:
        "حلول نظافة متكاملة للمنشآت والمكاتب والوحدات السكنية، تشمل النظافة العميقة، وما بعد التشطيب، والزجاج، والأرضيات، وأعمال التعقيم.",
      service3Title: "الصيانة الفنية",
      service3Text:
        "صيانة وقائية وتصحيحية تشمل الأعمال الكهربائية، والسباكة، وأنظمة التكييف والتهوية، وأعمال الصيانة المدنية الخفيفة بواسطة فنيين متخصصين.",
      service4Title: "التوريدات العمومية",
      service4Text:
        "توريد أدوات النظافة، والمواد الاستهلاكية، والمستلزمات المكتبية، واحتياجات الضيافة، ومهمات السلامة، ومواد الصيانة مع التزام في التوريد.",
      service5Title: "مكافحة الحشرات",
      service5Text:
        "خدمات آمنة وفعالة لمكافحة الحشرات باستخدام مواد معتمدة، مع الرش الوقائي، والتدخل السريع، والمتابعة الفنية المنتظمة.",
      service6Title: "اللاندسكيب",
      service6Text:
        "تنسيق المساحات الخضراء، وأنظمة الري، والزراعة، والصيانة، وتطوير المساحات الخارجية مع عناية مستدامة ومظهر جمالي مميز.",
      serviceBtn: "عرض التفاصيل",

      whyChip: "لماذا نحن",
      whyTitle: "منهجية احترافية تصنع قيمة طويلة الأمد",
      whyText:
        "يعتمد نموذج عملنا على خطط واضحة، ومتابعة مستمرة، وكوادر مدربة، وضمان للجودة، وتفكير تشغيلي ذكي يساعد العملاء على تحسين الأداء وتقليل التكاليف.",
      feature1Title: "الجودة والاحترافية",
      feature1Text:
        "تنفيذ جميع الأعمال وفق معايير واضحة ومستويات أداء ثابتة مع إشراف موثوق.",
      feature2Title: "الالتزام",
      feature2Text:
        "احترام الجداول الزمنية والميزانيات ومتطلبات العميل من خلال خدمة منضبطة.",
      feature3Title: "الشفافية",
      feature3Text:
        "وضوح كامل في التقارير وآليات المتابعة والتواصل في جميع مراحل الخدمة.",
      feature4Title: "التطوير المستمر",
      feature4Text:
        "تحسين متواصل، وحلول ذكية، وكوادر مدربة تدعم استدامة التشغيل.",

      methodologyChip: "المنهجية المهنية",
      methodologyTitle: "كيف نقدم جودة خدمة ثابتة",
      methodologyText:
        "يعتمد نموذج التشغيل لدينا على التخطيط، والدراسة الفنية، والإشراف المستمر، ومعايير جودة قابلة للقياس.",
      methodology1Title: "تقييم الموقع",
      methodology1Text:
        "نبدأ بمعاينة شاملة للموقع لفهم احتياجات المنشأة والمتطلبات الفنية وأولويات العميل قبل التنفيذ.",
      methodology2Title: "التخطيط التشغيلي",
      methodology2Text:
        "نعد خطط عمل وجداول تشغيل ونماذج خدمة مخصصة حسب طبيعة كل موقع والميزانية المعتمدة.",
      methodology3Title: "المتابعة والتقارير",
      methodology3Text:
        "نضمن متابعة مستمرة، وتقارير دورية، وقياسًا للجودة، وسرعة في التعامل مع أي ملاحظات أو حالات طارئة.",

      trainingChip: "التدريب ورفع الكفاءة",
      trainingTitle: "جودة الخدمة تبدأ من جودة العنصر البشري",
      trainingText:
        "تولي سمارت تاتش اهتمامًا خاصًا باختيار وتدريب فرق العمل، لأن أداء العنصر البشري هو الأساس الحقيقي لنجاح التشغيل.",
      trainingPoint1:
        "التدريب على أساليب النظافة الحديثة والاستخدام الآمن للأدوات والخامات.",
      trainingPoint2:
        "التدريب على قواعد الصحة والسلامة المهنية وإجراءات السلامة داخل مواقع العمل.",
      trainingPoint3:
        "رفع كفاءة إدارة الوقت، والتواصل، والسلوك المهني أثناء العمل.",
      trainingPoint4:
        "تقييم أسبوعي وشهري مع تغذية راجعة مباشرة وتحسين مستمر.",
      trainingBadge: "تركيز على الجودة",
      trainingCardTitle: "فريق مدرب ومنضبط ومؤهل",
      trainingCardText:
        "نستهدف بناء فريق محترف قادر على تقديم جودة خدمة ثابتة في جميع المواقع، ودعم استمرارية التشغيل، وتحسين الصورة العامة للمنشأة.",
      trainingList1: "اختيار دقيق للعمالة والفنيين",
      trainingList2: "برامج تدريب عملية مستمرة",
      trainingList3: "إشراف ميداني ومعالجة فورية للملاحظات",

      equipmentChip: "المعدات والخامات",
      equipmentTitle: "أدوات وخامات موثوقة لأداء يمكن الاعتماد عليه",
      equipmentText:
        "ندعم نموذج الخدمة لدينا بمعدات احترافية، وخامات معتمدة، واستبدال مستمر للمواد الاستهلاكية بما يحافظ على الكفاءة والجودة.",
      equipment1Title: "معدات احترافية",
      equipment1Text:
        "ماكينات جلي وتلميع، وأنظمة شفط، وأجهزة بلاور، ومعدات متخصصة لأعمال النظافة.",
      equipment2Title: "خامات آمنة",
      equipment2Text:
        "منظفات ومعقمات ومواد تلميع زجاج ومعطرات ومواد معالجة معتمدة وآمنة.",
      equipment3Title: "استبدال شهري",
      equipment3Text:
        "استبدال مستمر للمواد الاستهلاكية مثل الفوط والمماسح والجرادل وأكياس النفايات.",
      equipment4Title: "جاهزية تشغيلية",
      equipment4Text:
        "صيانة دورية للمعدات واستبدال فوري للأدوات التالفة للحفاظ على كفاءة الخدمة.",

      testimonialsChip: "وعدنا",
      testimonialsTitle: "نبني الثقة والاستمرارية والتميّز في الخدمة",
      testimonialsText:
        "حتى مع حداثة التأسيس، تهدف سمارت تاتش إلى بناء شراكات طويلة الأمد من خلال الجودة والانضباط وسرعة الاستجابة داخل مواقع العملاء.",
      testimonial1Text:
        "نركز على بناء منظومات تشغيل ذكية ترفع مستوى الخدمة وتعكس الصورة الاحترافية لكل منشأة نخدمها.",
      testimonial1Name: "سمارت تاتش",
      testimonial1Role: "تميّز تشغيلي",
      testimonial2Text:
        "كوادرنا المدربة وآليات المتابعة لدينا مصممة لضمان جودة ثابتة وأداء أفضل في جميع المواقع.",
      testimonial2Name: "سمارت تاتش",
      testimonial2Role: "التزام بالجودة",
      testimonial3Text:
        "نحن لا نقدم مجرد خدمات، بل نبني شراكات طويلة الأمد قائمة على الثقة والجودة والفهم الحقيقي لاحتياجات العملاء.",
      testimonial3Name: "سمارت تاتش",
      testimonial3Role: "شراكة طويلة الأمد",

      faqChip: "الأسئلة الشائعة",
      faqTitle: "الأسئلة الأكثر شيوعًا",
      faqText: "إليك بعض الأسئلة المتكررة حول خدماتنا وآلية التشغيل ونموذج العمل.",
      faq1Question: "ما الخدمات التي تقدمها سمارت تاتش؟",
      faq1Answer:
        "نقدم خدمات إدارة المرافق، والنظافة، والصيانة، والتوريدات العمومية، واللاندسكيب، ومكافحة الحشرات.",
      faq2Question: "كيف تحافظون على جودة الخدمة؟",
      faq2Answer:
        "من خلال كوادر مدربة، وخطط عمل واضحة، وإشراف ميداني، وتقييم دوري، وأنظمة تحسين مستمر.",
      faq3Question: "هل يمكن تخصيص الخدمات لكل موقع؟",
      faq3Answer:
        "نعم، نقوم أولًا بتقييم الموقع ثم إعداد خطة تشغيلية مناسبة حسب طبيعة المنشأة واحتياجات العميل.",

      ctaChip: "ابدأ شراكتك معنا",
      ctaTitle: "نحن جاهزون للبدء عندما تكونون جاهزين",
      ctaText:
        "دعنا نناقش كيف يمكن لسمارت تاتش دعم منشأتك من خلال حلول خدمة موثوقة ومنظمة وعالية الجودة.",
      ctaBtn: "اطلب استشارة",

      footerText:
        "نحن لا نقدم مجرد خدمات، بل نبني شراكات طويلة الأمد قائمة على الجودة والالتزام والفهم الحقيقي لاحتياجات العملاء.",
      contactChip: "تواصل معنا",
      contactTitle: "أرسل لنا طلبك",
      formBtn: "إرسال الطلب",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formService: "نوع الخدمة",
      formMessage: "اكتب رسالتك...",
      footerCopy: "جميع الحقوق محفوظة.",



      facilityChip: "إدارة المرافق",
facilityModalTitle: "إدارة متكاملة لمرافق أكثر كفاءةً وأمانًا وتنظيمًا",
facilityModalIntro: "تقدم سمارت تاتش خدمات متكاملة في إدارة المرافق تهدف إلى ضمان التشغيل الأمثل للمباني والمنشآت، ورفع كفاءة الأداء، والحفاظ على الأصول، ودعم استمرارية الأعمال من خلال منظومة تشغيل احترافية تركّز على الجودة والسلامة وضبط التكاليف.",
facilityCoverTitle: "نطاق الخدمة",
facilityCover1: "الإدارة اليومية للمباني والتنسيق الكامل داخل الموقع.",
facilityCover2: "الإشراف على خدمات النظافة والصيانة والخدمات المساندة.",
facilityCover3: "التنسيق والمتابعة مع الموردين والمقاولين.",
facilityCover4: "متابعة الأصول والمعدات.",
facilityCover5: "التعامل مع البلاغات والشكاوى والحالات الطارئة.",
facilityCover6: "متابعة استهلاك الطاقة والمياه لتحسين الكفاءة وتقليل الهدر.",
facilityMethodTitle: "منهجية العمل",
facilityMethod1: "تقييم شامل للموقع قبل بدء الخدمة.",
facilityMethod2: "خطة تشغيل مخصصة حسب طبيعة المنشأة وأولويات العميل.",
facilityMethod3: "جداول صيانة وقائية ودورية.",
facilityMethod4: "إشراف مستمر ومتابعة موثقة لكافة الأعمال التشغيلية.",
facilityMethod5: "تقارير دورية للإدارة توضح مستوى الأداء ومؤشرات الجودة.",
facilityBenefitsTitle: "القيمة المضافة للعميل",
facilityBenefits1: "تحسين كفاءة التشغيل وتقليل انقطاعات الخدمة.",
facilityBenefits2: "إطالة العمر الافتراضي للأصول وتقليل تكرار الإصلاحات.",
facilityBenefits3: "خفض التكاليف التشغيلية من خلال التخطيط والرقابة الأفضل.",
facilityBenefits4: "شريك خدمة موثوق يدير عدة وظائف من نقطة اتصال واحدة.",
facilityBenefits5: "بيئة أكثر أمانًا ونظافةً وتنظيمًا.",

cleaningChip: "خدمات النظافة",
cleaningModalTitle: "حلول نظافة احترافية لبيئات صحية ومنظمة",
cleaningModalIntro: "تقدم سمارت تاتش خدمات نظافة متكاملة تهدف إلى الحفاظ على نظافة المنشآت، ورفع المستوى الصحي للموقع، والحفاظ على الصورة الاحترافية لكل منشأة من خلال فرق مدربة، ومواد معتمدة، وخطط تشغيل مناسبة لطبيعة كل موقع.",
cleaningScopeTitle: "نطاق الخدمة",
cleaningScope1: "أعمال النظافة التأسيسية وتنظيف ما بعد التشطيب.",
cleaningScope2: "أعمال النظافة اليومية للمكاتب والمنشآت والمناطق المشتركة.",
cleaningScope3: "برامج تنظيف عميق أسبوعية وشهرية.",
cleaningScope4: "تنظيف الزجاج والواجهات والأسطح الرخامية والجرانيت والباركيه والمعادن.",
cleaningScope5: "تعقيم الحمامات والبوفيهات وفق معايير الصحة والسلامة.",
cleaningScope6: "العناية بالأثاث والسجاد والستائر والمفروشات.",
cleaningMethodTitle: "آلية التنفيذ والمتابعة",
cleaningMethod1: "خطط تشغيل وجداول تنظيف معتمدة لكل موقع.",
cleaningMethod2: "استخدام مواد تنظيف آمنة ومناسبة لكل نوع من الأسطح.",
cleaningMethod3: "إشراف ميداني لضمان جودة التنفيذ.",
cleaningMethod4: "تقارير دورية ومعالجة فورية لملاحظات العميل.",
cleaningMethod5: "مرونة في التشغيل حسب طبيعة الموقع وكثافة الاستخدام.",
cleaningBenefitsTitle: "لماذا يختار العملاء هذه الخدمة",
cleaningBenefits1: "استجابة سريعة لمتطلبات العميل.",
cleaningBenefits2: "جودة خدمة ثابتة ومستوى أداء مستقر.",
cleaningBenefits3: "فرق نظافة متخصصة ومدرّبة.",
cleaningBenefits4: "تكامل كامل مع خدمات الصيانة والتوريدات.",
cleaningBenefits5: "صورة احترافية للموقع وبيئة عمل أكثر صحة.",

maintenanceChip: "الصيانة الفنية",
maintenanceModalTitle: "صيانة وقائية وتصحيحية تحافظ على استمرارية التشغيل",
maintenanceModalIntro: "تقدم سمارت تاتش خدمات الصيانة الفنية والتشغيلية ضمن منظومة متكاملة تحافظ على كفاءة الأصول، وتقلل الأعطال المفاجئة، وتدعم استمرارية التشغيل الآمن للمنشآت من خلال التخطيط والخبرة الفنية وسرعة الاستجابة.",
maintenanceScopeTitle: "نطاق أعمال الصيانة",
maintenanceScope1: "صيانة وقائية وفق جداول زمنية معتمدة.",
maintenanceScope2: "صيانة تصحيحية وطارئة للأعطال المفاجئة.",
maintenanceScope3: "صيانة كهربائية تشمل الإضاءة والمفاتيح والأسلاك واللوحات.",
maintenanceScope4: "صيانة السباكة للتسريبات وشبكات المياه والصرف والتركيبات.",
maintenanceScope5: "فحص وتنظيف وصيانة أساسية لأنظمة التكييف والتهوية.",
maintenanceScope6: "أعمال مدنية خفيفة مثل الدهانات الجزئية وصيانة الأرضيات والنجارة والألومنيوم.",
maintenanceMethodTitle: "آلية التنفيذ والمتابعة",
maintenanceMethod1: "حصر مبدئي للأصول وتقييم فني للموقع.",
maintenanceMethod2: "إعداد خطة صيانة مناسبة لطبيعة المنشأة.",
maintenanceMethod3: "إشراف فني ومتابعة دورية للأعمال.",
maintenanceMethod4: "تقارير دورية عن حالة التشغيل والصيانة.",
maintenanceMethod5: "التزام كامل بإجراءات السلامة المهنية.",
maintenanceBenefitsTitle: "القيمة المضافة للخدمة",
maintenanceBenefits1: "تقليل الأعطال المفاجئة وفترات التوقف.",
maintenanceBenefits2: "رفع اعتمادية الأصول وخفض تكاليف الإصلاح.",
maintenanceBenefits3: "استجابة سريعة للمشكلات الفنية العاجلة.",
maintenanceBenefits4: "شفافية في المتابعة والتقارير.",
maintenanceBenefits5: "تكامل مع خدمات النظافة والتوريدات.",

suppliesChip: "التوريدات العمومية",
suppliesModalTitle: "توريدات تشغيلية موثوقة تدعم الاحتياجات اليومية للموقع",
suppliesModalIntro: "تقدم سمارت تاتش خدمات التوريدات العمومية كجزء من منظومة تشغيل متكاملة تدعم الاحتياجات اليومية للمنشآت بجودة عالية والتزام بمواعيد التسليم ومراعاة الميزانية، مع تقليل العبء الإداري على العميل.",
suppliesScopeTitle: "فئات التوريد",
suppliesScope1: "أدوات النظافة والخامات الاستهلاكية والمعقمات.",
suppliesScope2: "مستلزمات الحمامات مثل الصابون والمناديل ومعطرات الجو.",
suppliesScope3: "الأدوات المكتبية وأوراق الطباعة وأحبار الطابعات.",
suppliesScope4: "مستلزمات الضيافة والبوفيه.",
suppliesScope5: "مستلزمات الصحة والسلامة المهنية ووسائل الوقاية.",
suppliesScope6: "مواد فنية وقطع غيار مرتبطة بأعمال الصيانة.",
suppliesMethodTitle: "آلية التوريد",
suppliesMethod1: "دراسة احتياجات الموقع الفعلية قبل التوريد.",
suppliesMethod2: "عروض أسعار واضحة وتخطيط شفاف.",
suppliesMethod3: "الالتزام بمواعيد التسليم المتفق عليها.",
suppliesMethod4: "فحص الجودة قبل التسليم النهائي.",
suppliesMethod5: "مرونة في التوريد الشهري أو حسب الطلب.",
suppliesBenefitsTitle: "أهمية هذه الخدمة",
suppliesBenefits1: "نقطة اتصال واحدة للخدمات والتوريدات.",
suppliesBenefits2: "تقليل التأخير في العمليات اليومية.",
suppliesBenefits3: "تحكم أفضل في التكلفة وكفاءة أعلى في الشراء.",
suppliesBenefits4: "جودة موثوقة متوافقة مع احتياجات الموقع.",
suppliesBenefits5: "تكامل كامل مع خطط النظافة والصيانة.",

pestChip: "مكافحة الآفات",
pestModalTitle: "مكافحة آفات آمنة وفعالة بحماية مستمرة",
pestModalIntro: "تقدم سمارت تاتش خدمات متكاملة لمكافحة الآفات ورش المبيدات باستخدام أساليب آمنة ومعتمدة وفعالة للحفاظ على بيئة صحية وخالية من الحشرات دون الإضرار بالأفراد أو التشغيل أو الممتلكات.",
pestScopeTitle: "نطاق الخدمة",
pestScope1: "مكافحة الحشرات الزاحفة والطائرة مثل الصراصير والنمل والذباب والبعوض والبراغيث.",
pestScope2: "مكافحة القوارض بطرق آمنة وفعالة.",
pestScope3: "استخدام مبيدات معتمدة ومتوافقة مع معايير الصحة والبيئة.",
pestScope4: "استخدام معدات حديثة للوصول إلى المناطق الحرجة والمخفية.",
pestScope5: "خطط رش وقائي ومتابعة مستمرة.",
pestScope6: "تقارير فنية بعد عمليات المكافحة عند الحاجة.",
pestMethodTitle: "آلية التنفيذ",
pestMethod1: "رش وقائي منتظم حسب احتياجات الموقع.",
pestMethod2: "تدخل فوري لعلاج المناطق المتضررة عند ظهور الآفات.",
pestMethod3: "سرعة استجابة كجزء من التزام الخدمة.",
pestMethod4: "التزام كامل بإجراءات السلامة والنظافة.",
pestBenefitsTitle: "نتائج الخدمة للعميل",
pestBenefits1: "بيئات عمل أكثر صحة وأمانًا.",
pestBenefits2: "تقليل مخاطر التلوث والاضطراب المرتبط بالآفات.",
pestBenefits3: "رفع مستوى راحة المستخدمين ومعايير النظافة.",
pestBenefits4: "خدمة مكافحة موثوقة مدعومة بالمتابعة والتنفيذ الاحترافي.",

landscapeChip: "اللاندسكيب",
landscapeModalTitle: "مساحات خارجية مصممة للجمال والراحة والاستدامة",
landscapeModalIntro: "تقدم سمارت تاتش خدمات لاندسكيب متكاملة تهدف إلى إنشاء مساحات خارجية جذابة ومريحة وآمنة، تعزز الصورة العامة للموقع وترفع تجربة المستخدمين والزوار.",
landscapeScopeTitle: "ما الذي نقدمه",
landscapeScope1: "تخطيط اللاندسكيب وتطوير المساحات الخضراء.",
landscapeScope2: "زراعة الأشجار والنخيل والشجيرات والنباتات الموسمية.",
landscapeScope3: "حلول النجيلة الطبيعية أو الصناعية حسب احتياجات الموقع.",
landscapeScope4: "أنظمة ري حديثة تشمل التنقيط والرشاشات.",
landscapeScope5: "صيانة دورية تشمل القص والتسميد والري والتقليم.",
landscapeScope6: "إعادة تأهيل وتطوير الحدائق والمناطق الخضراء القائمة.",
landscapeBenefitsTitle: "مميزات الخدمة",
landscapeBenefits1: "اختيار نباتات مناسبة للمناخ وطبيعة الموقع.",
landscapeBenefits2: "فرق متخصصة في أعمال اللاندسكيب والبستنة.",
landscapeBenefits3: "الالتزام بالجداول الزمنية وخطط الصيانة.",
landscapeBenefits4: "اهتمام كبير بالمظهر العام والاستدامة وقيمة الموقع.",
landscapeBenefits5: "حلول مخصصة حسب طبيعة كل مشروع.",
landscapeResultsTitle: "النتائج للعميل",
landscapeResults1: "تحسين الشكل العام والهوية البصرية للموقع.",
landscapeResults2: "مساحات خارجية أكثر راحة وجاذبية.",
landscapeResults3: "رفع القيمة العقارية والتسويقية للموقع.",
landscapeResults4: "استدامة أفضل للمساحات الخضراء على المدى الطويل.",

facilityTitle: "إدارة المرافق",
facilityText: "حلول متكاملة لتشغيل المرافق بكفاءة، وحماية الأصول، وتنسيق الخدمات.",
cleaningTitle: "خدمات النظافة",
cleaningText: "خدمات نظافة احترافية لبيئات أكثر صحةً ونظافةً ومظهرًا أفضل.",
maintenanceTitle: "الصيانة الفنية",
maintenanceText: "صيانة وقائية وتصحيحية تقلل الأعطال وتدعم استمرارية التشغيل.",
suppliesTitle: "التوريدات العمومية",
suppliesText: "توريدات تشغيلية موثوقة تدعم احتياجات الموقع اليومية بسرعة وجودة.",
pestTitle: "مكافحة الآفات",
pestText: "برامج مكافحة آفات آمنة وفعالة لبيئات أكثر صحةً وحماية.",
landscapeTitle: "اللاندسكيب",
landscapeText: "حلول للمساحات الخضراء والعناية الخارجية تعزز صورة الموقع وراحة المستخدمين.",
viewDetails: "عرض التفاصيل",
heroKicker: "خدمات مرافق متكاملة",
heroTitle: "حلول تشغيل ذكية لمواقع أكثر نظافةً وأمانًا وتنظيمًا",
heroText: "نقدم خدمات إدارة المرافق، والنظافة، والصيانة، ومكافحة الآفات، والتوريدات، واللاندسكيب بما يناسب بيئات الأعمال الحديثة.",
exploreServices: "استكشف الخدمات",
requestQuote: "اطلب عرض سعر",

      
    },
 

    
  };

  let currentLang = "en";

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) element.textContent = translations[lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) element.setAttribute("placeholder", translations[lang][key]);
    });

    if (lang === "ar") {
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
      body.classList.add("ar");
      if (langToggle) langToggle.textContent = "EN";
    } else {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
      body.classList.remove("ar");
      if (langToggle) langToggle.textContent = "AR";
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "en" ? "ar" : "en";
      applyTranslations(currentLang);
    });
  }

  applyTranslations(currentLang);

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  function setActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");

      if (
        (currentSection && href === `#${currentSection}`) ||
        (currentSection === "home" && href === "index.html")
      ) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);
  setActiveNav();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

//   const contactForm = document.querySelector(".contact-form");
//   if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       alert(
//         currentLang === "ar"
//           ? "تم تجهيز النموذج مبدئيًا. سيتم ربطه بالإيميل أو واتساب بعد إضافة بيانات الربط النهائية."
//           : "The form is prepared as a placeholder. It will be connected to email or WhatsApp after adding the final integration details."
//       );
//     });
//   }
});


const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    contactForm.classList.add("was-validated");
  });
}


const floatingSocialWrap = document.getElementById("floatingSocialWrap");
const floatingSocialToggle = document.getElementById("floatingSocialToggle");
const closeFloatingSocial = document.getElementById("closeFloatingSocial");

if (floatingSocialToggle && floatingSocialWrap) {
  floatingSocialToggle.addEventListener("click", () => {
    floatingSocialWrap.classList.toggle("active");
  });
}

if (closeFloatingSocial && floatingSocialWrap) {
  closeFloatingSocial.addEventListener("click", () => {
    floatingSocialWrap.classList.remove("active");
  });
}