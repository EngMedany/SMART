document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("currentYear");
  const langToggle = document.getElementById("langToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const revealElements = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section[id]");
  const html = document.documentElement;
  const body = document.body;

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navTestimonials: "Testimonials",
      navFaq: "FAQ",
      navContact: "Contact Us",

      heroChip: "Integrated Facility Management Solutions",
      heroTitle: "Smart Operations. Reliable Teams. Better Spaces.",
      heroText:
        "Smart Touch provides modern facility management services tailored for commercial, residential, hospitality, and industrial environments with quality, safety, and consistency.",
      heroBtnPrimary: "Explore Services",
      heroBtnSecondary: "Get a Quote",
      miniStat1: "Completed Projects",
      miniStat2: "Happy Clients",
      miniStat3: "Operational Support",

      heroCardBadge: "Trusted Service Partner",
      heroCardTitle: "Facility excellence with a smarter touch",
      heroCardText:
        "From cleaning and maintenance to manpower and technical support, we help businesses run smoothly with dependable teams and measurable service quality.",
      heroList1: "Responsive support teams",
      heroList2: "Customized service plans",
      heroList3: "Safety and compliance focused",

      stat1: "Happy Clients",
      stat2: "Projects Completed",
      stat3: "Years of Experience",
      stat4: "Service Availability",

      aboutChip: "About Smart Touch",
      aboutTitle: "A dependable partner for cleaner, safer, and more efficient facilities",
      aboutText1:
        "Smart Touch is built to support organizations that need reliable facility services, consistent operations, and service delivery standards they can trust every day.",
      aboutText2:
        "Our approach combines responsive teams, preventive thinking, and quality-focused execution across maintenance, soft services, manpower, and site support operations.",
      aboutPoint1: "Reliable and quality-driven service model",
      aboutPoint2: "Tailored support for multiple facility types",
      aboutPoint3: "Trained teams with professional supervision",
      aboutBtn: "Learn More",

      servicesChip: "Our Services",
      servicesTitle: "Smart solutions for every operational need",
      servicesText:
        "We provide scalable service packages designed to support business continuity, workplace standards, and operational performance.",
      service1Title: "Facility Management",
      service1Text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio.",
      service2Title: "MEP Maintenance",
      service2Text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio.",
      service3Title: "Specialized Cleaning",
      service3Text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio.",
      service4Title: "Manpower Supply",
      service4Text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio.",
      service5Title: "Landscape Services",
      service5Text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio.",
      service6Title: "Operational Support",
      service6Text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, distinctio.",
      serviceBtn: "View Details",

      whyChip: "Why Choose Us",
      whyTitle: "Service quality backed by consistency and care",
      whyText:
        "We help clients reduce operational friction and improve service outcomes through practical execution, trained teams, and performance-focused support.",
      feature1Title: "Fast Response",
      feature1Text:
        "Quick deployment and efficient communication for urgent and routine requirements.",
      feature2Title: "Quality Standards",
      feature2Text:
        "Service procedures designed around reliability, cleanliness, and measurable outcomes.",
      feature3Title: "Flexible Solutions",
      feature3Text:
        "Custom service plans built around different sectors, property types, and operating models.",
      feature4Title: "Professional Teams",
      feature4Text:
        "Well-managed staff and supervisors focused on consistency, professionalism, and safety.",

      testimonialsChip: "Testimonials",
      testimonialsTitle: "What our clients say",
      testimonialsText:
        "We build long-term relationships through dependable service and operational excellence.",
      testimonial1Text:
        "Their team is professional, responsive, and committed to service excellence. We’ve seen real improvement in our daily operations.",
      testimonial1Name: "Operations Manager",
      testimonial1Role: "Corporate Client",
      testimonial2Text:
        "Smart Touch delivered reliable support and consistent quality across our facility requirements.",
      testimonial2Name: "Project Director",
      testimonial2Role: "Commercial Client",
      testimonial3Text:
        "We value their professionalism, flexibility, and ability to respond quickly to operational needs.",
      testimonial3Name: "Facility Supervisor",
      testimonial3Role: "Hospitality Client",

      faqChip: "FAQ",
      faqTitle: "Frequently asked questions",
      faqText:
        "Here are some common questions about our services and operating model.",
      faq1Question: "What types of facilities do you support?",
      faq1Answer:
        "We support commercial, residential, hospitality, healthcare, industrial, and mixed-use facilities.",
      faq2Question: "Can services be customized for our site needs?",
      faq2Answer:
        "Yes, we prepare tailored service packages based on your operational scope, site conditions, and priorities.",
      faq3Question: "Do you provide ongoing support and supervision?",
      faq3Answer:
        "Absolutely. Our service model includes follow-up, supervision, and quality monitoring for continuity and improvement.",

      ctaChip: "Let’s Work Together",
      ctaTitle: "Need a smarter facility service partner?",
      ctaText:
        "Talk to our team about your facility, manpower, maintenance, or operational support needs.",
      ctaBtn: "Request a Consultation",

      footerText:
        "Smart Touch provides reliable facility management solutions designed to improve service quality, operational continuity, and workplace standards.",
      contactChip: "Contact Us",
      contactTitle: "Send us your request",
      formBtn: "Submit Request",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number",
      formService: "Service Type",
      formMessage: "Write your message...",
      footerCopy: "All rights reserved."
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navServices: "الخدمات",
      navTestimonials: "آراء العملاء",
      navFaq: "الأسئلة الشائعة",
      navContact: "تواصل معنا",

      heroChip: "حلول متكاملة لإدارة المرافق",
      heroTitle: "تشغيل ذكي. فرق موثوقة. مساحات أفضل.",
      heroText:
        "تقدم Smart Touch خدمات حديثة في إدارة المرافق مصممة للقطاعات التجارية والسكنية والضيافة والصناعية مع التركيز على الجودة والسلامة والاستمرارية.",
      heroBtnPrimary: "استعرض الخدمات",
      heroBtnSecondary: "اطلب عرض سعر",
      miniStat1: "مشروعات منجزة",
      miniStat2: "عملاء سعداء",
      miniStat3: "دعم تشغيلي",

      heroCardBadge: "شريك خدمة موثوق",
      heroCardTitle: "تميّز تشغيلي بلمسة أكثر ذكاءً",
      heroCardText:
        "من خدمات التنظيف والصيانة إلى توفير العمالة والدعم الفني، نساعد الأعمال على العمل بسلاسة من خلال فرق يمكن الاعتماد عليها وجودة خدمة قابلة للقياس.",
      heroList1: "فرق دعم سريعة الاستجابة",
      heroList2: "خطط خدمة مخصصة",
      heroList3: "تركيز على السلامة والالتزام",

      stat1: "عميل سعيد",
      stat2: "مشروع مكتمل",
      stat3: "سنوات خبرة",
      stat4: "جاهزية الخدمة",

      aboutChip: "عن Smart Touch",
      aboutTitle: "شريك يمكن الاعتماد عليه لمرافق أنظف وأكثر أمانًا وكفاءة",
      aboutText1:
        "تم تأسيس Smart Touch لدعم الجهات التي تحتاج إلى خدمات مرافق موثوقة، وتشغيل مستقر، ومعايير أداء يمكن الاعتماد عليها يوميًا.",
      aboutText2:
        "يجمع أسلوبنا بين سرعة الاستجابة، والتفكير الوقائي، والتنفيذ المرتكز على الجودة عبر الصيانة والخدمات المساندة وتوفير العمالة والدعم التشغيلي.",
      aboutPoint1: "نموذج خدمة موثوق ويركز على الجودة",
      aboutPoint2: "دعم مخصص لأنواع مختلفة من المرافق",
      aboutPoint3: "فرق مدربة بإشراف احترافي",
      aboutBtn: "اعرف المزيد",

      servicesChip: "خدماتنا",
      servicesTitle: "حلول ذكية لكل احتياج تشغيلي",
      servicesText:
        "نقدم باقات خدمات مرنة قابلة للتوسع لدعم استمرارية الأعمال ومعايير بيئة العمل والأداء التشغيلي.",
      service1Title: "إدارة المرافق",
      service1Text:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبيسنج إليت. كويزكوام، ديستنكتيو.",
      service2Title: "صيانة MEP",
      service2Text:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبيسنج إليت. كويزكوام، ديستنكتيو.",
      service3Title: "التنظيف المتخصص",
      service3Text:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبيسنج إليت. كويزكوام، ديستنكتيو.",
      service4Title: "توفير العمالة",
      service4Text:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبيسنج إليت. كويزكوام، ديستنكتيو.",
      service5Title: "خدمات اللاندسكيب",
      service5Text:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبيسنج إليت. كويزكوام، ديستنكتيو.",
      service6Title: "الدعم التشغيلي",
      service6Text:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أدايبيسنج إليت. كويزكوام، ديستنكتيو.",
      serviceBtn: "عرض التفاصيل",

      whyChip: "لماذا نحن",
      whyTitle: "جودة خدمة مدعومة بالثبات والاهتمام",
      whyText:
        "نساعد العملاء على تقليل التعقيدات التشغيلية وتحسين نتائج الخدمة من خلال تنفيذ عملي وفرق مدربة ودعم يركز على الأداء.",
      feature1Title: "استجابة سريعة",
      feature1Text:
        "تنفيذ سريع وتواصل فعّال للمتطلبات العاجلة واليومية.",
      feature2Title: "معايير جودة",
      feature2Text:
        "إجراءات خدمة مصممة حول الاعتمادية والنظافة والنتائج القابلة للقياس.",
      feature3Title: "حلول مرنة",
      feature3Text:
        "خطط خدمة مخصصة حسب القطاع ونوع المنشأة وطبيعة التشغيل.",
      feature4Title: "فرق احترافية",
      feature4Text:
        "كوادر مُدارة جيدًا ومشرفون يركزون على الثبات والاحترافية والسلامة.",

      testimonialsChip: "آراء العملاء",
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonialsText:
        "نبني علاقات طويلة الأمد من خلال الخدمة الموثوقة والتميّز التشغيلي.",
      testimonial1Text:
        "فريقهم احترافي وسريع الاستجابة وملتزم بجودة الخدمة. لاحظنا تحسنًا حقيقيًا في عملياتنا اليومية.",
      testimonial1Name: "مدير العمليات",
      testimonial1Role: "عميل مؤسسي",
      testimonial2Text:
        "قدمت Smart Touch دعمًا موثوقًا وجودة ثابتة في جميع متطلبات مرافقنا.",
      testimonial2Name: "مدير مشروع",
      testimonial2Role: "عميل تجاري",
      testimonial3Text:
        "نقدّر احترافيتهم ومرونتهم وقدرتهم على الاستجابة السريعة للاحتياجات التشغيلية.",
      testimonial3Name: "مشرف مرافق",
      testimonial3Role: "عميل قطاع الضيافة",

      faqChip: "الأسئلة الشائعة",
      faqTitle: "الأسئلة الأكثر شيوعًا",
      faqText:
        "إليك بعض الأسئلة المتكررة حول خدماتنا وطريقة عملنا.",
      faq1Question: "ما أنواع المنشآت التي تدعمونها؟",
      faq1Answer:
        "ندعم المنشآت التجارية والسكنية والضيافة والصحية والصناعية ومتعددة الاستخدامات.",
      faq2Question: "هل يمكن تخصيص الخدمات حسب احتياجات الموقع؟",
      faq2Answer:
        "نعم، نقوم بإعداد باقات خدمة مخصصة حسب نطاق التشغيل وظروف الموقع والأولويات.",
      faq3Question: "هل توفرون دعمًا ومتابعة مستمرة؟",
      faq3Answer:
        "بالتأكيد، يشمل نموذج الخدمة لدينا المتابعة والإشراف ومراقبة الجودة لضمان الاستمرارية والتحسين.",

      ctaChip: "لنبدأ العمل معًا",
      ctaTitle: "هل تحتاج إلى شريك خدمات مرافق أكثر ذكاءً؟",
      ctaText:
        "تواصل مع فريقنا لمناقشة احتياجاتك في المرافق أو العمالة أو الصيانة أو الدعم التشغيلي.",
      ctaBtn: "اطلب استشارة",

      footerText:
        "تقدم Smart Touch حلولًا موثوقة في إدارة المرافق تهدف إلى تحسين جودة الخدمة واستمرارية التشغيل ومعايير بيئة العمل.",
      contactChip: "تواصل معنا",
      contactTitle: "أرسل لنا طلبك",
      formBtn: "إرسال الطلب",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formService: "نوع الخدمة",
      formMessage: "اكتب رسالتك...",
      footerCopy: "جميع الحقوق محفوظة."
    }
  };

  let currentLang = "en";

  function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key]);
      }
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
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.12
    }
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

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        currentLang === "ar"
          ? "تم تجهيز النموذج مبدئيًا. سنربطه بالإيميل وواتساب بعد إضافة البيانات النهائية."
          : "The form is ready as a placeholder. We will connect it to email and WhatsApp after adding the final contact details."
      );
    });
  }
});