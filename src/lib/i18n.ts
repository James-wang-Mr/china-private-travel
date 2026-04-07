import { type Locale, locales } from '@/config/i18n'

export type TranslationKeys = {
  common: {
    appName: string
    home: string
    destinations: string
    blog: string
    contact: string
    login: string
    register: string
    logout: string
    admin: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    featured: {
      title: string
      subtitle: string
    }
    process: {
      title: string
      subtitle: string
      step1: { title: string; desc: string }
      step2: { title: string; desc: string }
      step3: { title: string; desc: string }
      step4: { title: string; desc: string }
    }
    activities: {
      title: string
      subtitle: string
    }
    reviews: {
      title: string
      subtitle: string
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  destinations: {
    title: string
    subtitle: string
    bookNow: string
    from: string
    perPerson: string
    days: string
    guests: string
    highlights: string
    included: string
    notIncluded: string
    activities: string
    reviews: string
    selectDate: string
    selectGuests: string
    addActivities: string
    totalPrice: string
    proceedToCheckout: string
  }
  checkout: {
    title: string
    contactInfo: string
    specialRequests: string
    payment: string
    completeBooking: string
    success: string
    successMessage: string
  }
  account: {
    title: string
    orders: string
    profile: string
  }
  admin: {
    dashboard: string
    orders: string
    products: string
    users: string
    totalRevenue: string
    totalOrders: string
    totalUsers: string
  }
}

const translations: Record<Locale, TranslationKeys> = {
  en: {
    common: {
      appName: 'China Private Travel',
      home: 'Home',
      destinations: 'Destinations',
      blog: 'Blog',
      contact: 'Contact',
      login: 'Login',
      register: 'Sign Up',
      logout: 'Logout',
      admin: 'Admin',
    },
    home: {
      hero: {
        title: 'Your Private China Adventure Awaits',
        subtitle: 'Experience the wonders of China with personalized itineraries, expert guides, and unforgettable memories.',
        cta: 'Start Your Journey',
      },
      featured: {
        title: 'Popular Destinations',
        subtitle: 'Discover the most enchanting corners of China',
      },
      process: {
        title: 'How It Works',
        subtitle: 'Your dream trip, simplified in four easy steps',
        step1: { title: 'Choose Your Destination', desc: 'Select from our curated collection of stunning locations across China' },
        step2: { title: 'Customize Your Experience', desc: 'Add optional activities like hiking, climbing, or cave exploration' },
        step3: { title: 'Book & Confirm', desc: 'Secure your trip with easy online payment' },
        step4: { title: 'Travel with Confidence', desc: 'Your personal guide and driver await your arrival' },
      },
      activities: {
        title: 'Adventure Activities',
        subtitle: 'Enhance your journey with exciting optional experiences',
      },
      reviews: {
        title: 'What Travelers Say',
        subtitle: 'Real stories from our adventurers',
      },
      cta: {
        title: 'Ready for the Adventure of a Lifetime?',
        subtitle: 'Join thousands of happy travelers who have experienced China with us',
        button: 'Plan Your Trip Today',
      },
    },
    destinations: {
      title: 'Choose Your Destination',
      subtitle: 'Explore our handpicked destinations across China',
      bookNow: 'Book Now',
      from: 'From',
      perPerson: '/person',
      days: 'days',
      guests: 'guests',
      highlights: 'Highlights',
      included: 'What\'s Included',
      notIncluded: 'Not Included',
      activities: 'Optional Activities',
      reviews: 'Reviews',
      selectDate: 'Select Travel Date',
      selectGuests: 'Number of Guests',
      addActivities: 'Add Activities',
      totalPrice: 'Total Price',
      proceedToCheckout: 'Proceed to Checkout',
    },
    checkout: {
      title: 'Complete Your Booking',
      contactInfo: 'Contact Information',
      specialRequests: 'Special Requests',
      payment: 'Payment',
      completeBooking: 'Complete Booking',
      success: 'Booking Confirmed!',
      successMessage: 'Thank you for choosing China Private Travel. Check your email for confirmation details.',
    },
    account: {
      title: 'My Account',
      orders: 'My Orders',
      profile: 'Profile',
    },
    admin: {
      dashboard: 'Dashboard',
      orders: 'Orders',
      products: 'Products',
      users: 'Users',
      totalRevenue: 'Total Revenue',
      totalOrders: 'Total Orders',
      totalUsers: 'Total Users',
    },
  },
  es: {
    common: {
      appName: 'China Viaje Privado',
      home: 'Inicio',
      destinations: 'Destinos',
      blog: 'Blog',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
      logout: 'Cerrar Sesión',
      admin: 'Admin',
    },
    home: {
      hero: {
        title: 'Tu Aventura Privada en China Te Espera',
        subtitle: 'Experimenta las maravillas de China con itinerarios personalizados, guías expertos y recuerdos inolvidables.',
        cta: 'Comienza Tu Viaje',
      },
      featured: {
        title: 'Destinos Populares',
        subtitle: 'Descubre los rincones más encantadores de China',
      },
      process: {
        title: 'Cómo Funciona',
        subtitle: 'Tu viaje soñado, simplificado en cuatro pasos',
        step1: { title: 'Elige Tu Destino', desc: 'Selecciona de nuestra colección curada de lugares impresionantes' },
        step2: { title: 'Personaliza Tu Experiencia', desc: 'Agrega actividades opcionales como senderismo, escalada o exploración de cuevas' },
        step3: { title: 'Reserva y Confirma', desc: 'Asegura tu viaje con pago en línea fácil' },
        step4: { title: 'Viaja con Confianza', desc: 'Tu guía personal y conductor te esperan' },
      },
      activities: {
        title: 'Actividades de Aventura',
        subtitle: 'Mejora tu viaje con experiencias opcionales emocionantes',
      },
      reviews: {
        title: 'Lo Que Dicen los Viajeros',
        subtitle: 'Historias reales de nuestros aventureros',
      },
      cta: {
        title: '¿Listo para la Aventura de Tu Vida?',
        subtitle: 'Únete a miles de viajeros felices que han experimentado China con nosotros',
        button: 'Planifica Tu Viaje Hoy',
      },
    },
    destinations: {
      title: 'Elige Tu Destino',
      subtitle: 'Explora nuestros destinos seleccionados en China',
      bookNow: 'Reservar Ahora',
      from: 'Desde',
      perPerson: '/persona',
      days: 'días',
      guests: 'invitados',
      highlights: 'Destacados',
      included: 'Incluido',
      notIncluded: 'No Incluido',
      activities: 'Actividades Opcionales',
      reviews: 'Reseñas',
      selectDate: 'Selecciona Fecha',
      selectGuests: 'Número de Invitados',
      addActivities: 'Agregar Actividades',
      totalPrice: 'Precio Total',
      proceedToCheckout: 'Proceder al Pago',
    },
    checkout: {
      title: 'Completa Tu Reserva',
      contactInfo: 'Información de Contacto',
      specialRequests: 'Solicitudes Especiales',
      payment: 'Pago',
      completeBooking: 'Completar Reserva',
      success: '¡Reserva Confirmada!',
      successMessage: 'Gracias por elegir China Viaje Privado. Revisa tu correo para los detalles.',
    },
    account: {
      title: 'Mi Cuenta',
      orders: 'Mis Reservas',
      profile: 'Perfil',
    },
    admin: {
      dashboard: 'Panel',
      orders: 'Reservas',
      products: 'Productos',
      users: 'Usuarios',
      totalRevenue: 'Ingresos Totales',
      totalOrders: 'Total de Reservas',
      totalUsers: 'Total de Usuarios',
    },
  },
  pt: {
    common: {
      appName: 'China Viagem Privada',
      home: 'Início',
      destinations: 'Destinos',
      blog: 'Blog',
      contact: 'Contato',
      login: 'Entrar',
      register: 'Cadastrar',
      logout: 'Sair',
      admin: 'Admin',
    },
    home: {
      hero: {
        title: 'Sua Aventura Privada na China Aguarda',
        subtitle: 'Experimente as maravilhas da China com itinerários personalizados, guias especialistas e memórias inesquecíveis.',
        cta: 'Comece Sua Jornada',
      },
      featured: {
        title: 'Destinos Populares',
        subtitle: 'Descubra os cantos mais encantadores da China',
      },
      process: {
        title: 'Como Funciona',
        subtitle: 'Sua viagem dos sonhos, simplificada em quatro passos',
        step1: { title: 'Escolha Seu Destino', desc: 'Selecione de nossa coleção de locais impressionantes' },
        step2: { title: 'Personalize Sua Experiência', desc: 'Adicione atividades opcionais como trilhas, escalada ou exploração de cavernas' },
        step3: { title: 'Reserve e Confirme', desc: 'Garanta sua viagem com pagamento online fácil' },
        step4: { title: 'Viaje com Confiança', desc: 'Seu guia pessoal e motorista aguardam sua chegada' },
      },
      activities: {
        title: 'Atividades de Aventura',
        subtitle: 'Aprimore sua jornada com experiências opcionais emocionantes',
      },
      reviews: {
        title: 'O Que Dizem os Viajantes',
        subtitle: 'Histórias reais de nossos aventureiros',
      },
      cta: {
        title: 'Pronto para a Aventura de Sua Vida?',
        subtitle: 'Junte-se a milhares de viajantes felizes que experimentaram a China conosco',
        button: 'Planeje Sua Viagem Hoje',
      },
    },
    destinations: {
      title: 'Escolha Seu Destino',
      subtitle: 'Explore nossos destinos selecionados na China',
      bookNow: 'Reservar Agora',
      from: 'A partir de',
      perPerson: '/pessoa',
      days: 'dias',
      guests: 'convidados',
      highlights: 'Destaques',
      included: 'Incluído',
      notIncluded: 'Não Incluído',
      activities: 'Atividades Opcionais',
      reviews: 'Avaliações',
      selectDate: 'Selecione a Data',
      selectGuests: 'Número de Convidados',
      addActivities: 'Adicionar Atividades',
      totalPrice: 'Preço Total',
      proceedToCheckout: 'Ir para o Pagamento',
    },
    checkout: {
      title: 'Complete Sua Reserva',
      contactInfo: 'Informações de Contato',
      specialRequests: 'Solicitações Especiais',
      payment: 'Pagamento',
      completeBooking: 'Completar Reserva',
      success: 'Reserva Confirmada!',
      successMessage: 'Obrigado por escolher China Viagem Privada. Verifique seu email para os detalhes.',
    },
    account: {
      title: 'Minha Conta',
      orders: 'Minhas Reservas',
      profile: 'Perfil',
    },
    admin: {
      dashboard: 'Painel',
      orders: 'Reservas',
      products: 'Produtos',
      users: 'Usuários',
      totalRevenue: 'Receita Total',
      totalOrders: 'Total de Reservas',
      totalUsers: 'Total de Usuários',
    },
  },
  fr: {
    common: {
      appName: 'Chine Voyage Privé',
      home: 'Accueil',
      destinations: 'Destinations',
      blog: 'Blog',
      contact: 'Contact',
      login: 'Connexion',
      register: 'S\'inscrire',
      logout: 'Déconnexion',
      admin: 'Admin',
    },
    home: {
      hero: {
        title: 'Votre Aventure Privée en Chine Vous Attend',
        subtitle: 'Vivez les merveilles de la Chine avec des itinéraires personnalisés, des guides experts et des souvenirs inoubliables.',
        cta: 'Commencer Votre Voyage',
      },
      featured: {
        title: 'Destinations Populaires',
        subtitle: 'Découvrez les coins les plus enchanteurs de Chine',
      },
      process: {
        title: 'Comment Ça Marche',
        subtitle: 'Votre voyage de rêve, simplifié en quatre étapes',
        step1: { title: 'Choisissez Votre Destination', desc: 'Sélectionnez parmi notre collection de lieux époustouflants' },
        step2: { title: 'Personnalisez Votre Expérience', desc: 'Ajoutez des activités optionnelles comme la randonnée, l\'escalade ou l\'exploration de grottes' },
        step3: { title: 'Réservez et Confirmez', desc: 'Sécurisez votre voyage avec un paiement en ligne facile' },
        step4: { title: 'Voyagez en Confiance', desc: 'Votre guide personnel et votre chauffeur vous attendent' },
      },
      activities: {
        title: 'Activités d\'Aventure',
        subtitle: 'Enrichissez votre voyage avec des expériences optionnelles passionnantes',
      },
      reviews: {
        title: 'Ce Que Disent les Voyageurs',
        subtitle: 'Histoires réelles de nos aventuriers',
      },
      cta: {
        title: 'Prêt pour l\'Aventure de Votre Vie?',
        subtitle: 'Rejoignez des milliers de voyageurs heureux qui ont découvert la Chine avec nous',
        button: 'Planifiez Votre Voyage Aujourd\'hui',
      },
    },
    destinations: {
      title: 'Choisissez Votre Destination',
      subtitle: 'Explorez nos destinations sélectionnées en Chine',
      bookNow: 'Réserver',
      from: 'À partir de',
      perPerson: '/personne',
      days: 'jours',
      guests: 'invités',
      highlights: 'Points Forts',
      included: 'Inclus',
      notIncluded: 'Non Inclus',
      activities: 'Activités Optionnelles',
      reviews: 'Avis',
      selectDate: 'Sélectionnez la Date',
      selectGuests: 'Nombre d\'Invités',
      addActivities: 'Ajouter des Activités',
      totalPrice: 'Prix Total',
      proceedToCheckout: 'Procéder au Paiement',
    },
    checkout: {
      title: 'Complétez Votre Réservation',
      contactInfo: 'Informations de Contact',
      specialRequests: 'Demandes Spéciales',
      payment: 'Paiement',
      completeBooking: 'Confirmer la Réservation',
      success: 'Réservation Confirmée!',
      successMessage: 'Merci d\'avoir choisi Chine Voyage Privé. Vérifiez votre email pour les détails.',
    },
    account: {
      title: 'Mon Compte',
      orders: 'Mes Réservations',
      profile: 'Profil',
    },
    admin: {
      dashboard: 'Tableau de Bord',
      orders: 'Réservations',
      products: 'Produits',
      users: 'Utilisateurs',
      totalRevenue: 'Revenus Totaux',
      totalOrders: 'Total des Réservations',
      totalUsers: 'Total des Utilisateurs',
    },
  },
  de: {
    common: {
      appName: 'China Privatreise',
      home: 'Startseite',
      destinations: 'Reiseziele',
      blog: 'Blog',
      contact: 'Kontakt',
      login: 'Anmelden',
      register: 'Registrieren',
      logout: 'Abmelden',
      admin: 'Admin',
    },
    home: {
      hero: {
        title: 'Ihre Private China-Abenteuer Wartet',
        subtitle: 'Erleben Sie die Wunder Chinas mit personalisierten Reiserouten, erfahrenen Guides und unvergesslichen Erinnerungen.',
        cta: 'Ihre Reise Beginnen',
      },
      featured: {
        title: 'Beliebte Reiseziele',
        subtitle: 'Entdecken Sie die bezauberndsten Ecken Chinas',
      },
      process: {
        title: 'So Funktioniert Es',
        subtitle: 'Ihre Traumreise in vier einfachen Schritten',
        step1: { title: 'Wählen Sie Ihr Reiseziel', desc: 'Wählen Sie aus unserer kuratierten Sammlung beeindruckender Orte' },
        step2: { title: 'Personalisieren Sie Ihre Erfahrung', desc: 'Fügen Sie optionale Aktivitäten wie Wandern, Klettern oder Höhlenforschung hinzu' },
        step3: { title: 'Buchen und Bestätigen', desc: 'Sichern Sie Ihre Reise mit einfacher Online-Zahlung' },
        step4: { title: 'Reisen Sie mit Vertrauen', desc: 'Ihr persönlicher Guide und Fahrer warten auf Sie' },
      },
      activities: {
        title: 'Abenteueraktivitäten',
        subtitle: 'Bereichern Sie Ihre Reise mit aufregenden optionalen Erlebnissen',
      },
      reviews: {
        title: 'Was Reisende Sagen',
        subtitle: 'Echte Geschichten von unseren Abenteurern',
      },
      cta: {
        title: 'Bereit für das Abenteuer Ihres Lebens?',
        subtitle: 'Schließen Sie sich tausenden glücklichen Reisenden an, die China mit uns erlebt haben',
        button: 'Planen Sie Ihre Reise Heute',
      },
    },
    destinations: {
      title: 'Wählen Sie Ihr Reiseziel',
      subtitle: 'Entdecken Sie unsere ausgewählten Reiseziele in China',
      bookNow: 'Jetzt Buchen',
      from: 'Ab',
      perPerson: '/Person',
      days: 'Tage',
      guests: 'Gäste',
      highlights: 'Höhepunkte',
      included: 'Enthalten',
      notIncluded: 'Nicht Enthalten',
      activities: 'Optionale Aktivitäten',
      reviews: 'Bewertungen',
      selectDate: 'Reisedatum Wählen',
      selectGuests: 'Anzahl der Gäste',
      addActivities: 'Aktivitäten Hinzufügen',
      totalPrice: 'Gesamtpreis',
      proceedToCheckout: 'Zur Kasse',
    },
    checkout: {
      title: 'Buchen Sie Ihre Reise',
      contactInfo: 'Kontaktinformationen',
      specialRequests: 'Besondere Wünsche',
      payment: 'Zahlung',
      completeBooking: 'Buchung Abschließen',
      success: 'Buchung Bestätigt!',
      successMessage: 'Vielen Dank für Ihre Wahl von China Privatreise. Prüfen Sie Ihre E-Mail für die Details.',
    },
    account: {
      title: 'Mein Konto',
      orders: 'Meine Buchungen',
      profile: 'Profil',
    },
    admin: {
      dashboard: 'Dashboard',
      orders: 'Buchungen',
      products: 'Produkte',
      users: 'Benutzer',
      totalRevenue: 'Gesamtumsatz',
      totalOrders: 'Buchungen Gesamt',
      totalUsers: 'Benutzer Gesamt',
    },
  },
  ar: {
    common: {
      appName: 'رحلات الصين الخاصة',
      home: 'الرئيسية',
      destinations: 'الوجهات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      logout: 'تسجيل الخروج',
      admin: 'الإدارة',
    },
    home: {
      hero: {
        title: 'مغامرتك الخاصة في الصين تنتظرك',
        subtitle: 'اختبر عجائب الصين مع مسارات مخصصة، مرشدين محترفين وذكريات لا تُنسى.',
        cta: 'ابدأ رحلتك',
      },
      featured: {
        title: 'الوجهات الشائعة',
        subtitle: 'اكتشف أجمل مناطق الصين',
      },
      process: {
        title: 'كيف يعمل',
        subtitle: 'رحلة حلمك في أربع خطوات بسيطة',
        step1: { title: 'اختر وجهتك', desc: 'اختر من مجموعتنا المختارة من المواقع المذهلة' },
        step2: { title: 'خصص تجربتك', desc: 'أضف أنشطة اختيارية مثل المشي، تسلق الصخور أو استكشاف الكهوف' },
        step3: { title: 'احجز وتأكيد', desc: 'secure رحلتك بالدفع عبر الإنترنت' },
        step4: { title: 'سافر بثقة', desc: 'مرشدك الشخصي وسائقك ينتظران وصولك' },
      },
      activities: {
        title: 'أنشطة المغامرات',
        subtitle: 'ثراء رحلتك بتجارب اختيارية مثيرة',
      },
      reviews: {
        title: 'ماذا يقول المسافرون',
        subtitle: 'قصص حقيقية من مغامرين ا',
      },
      cta: {
        title: 'هل أنت مستعد لمغامرة حياتك؟',
        subtitle: 'انضم إلى آلاف المسافرين السعداء الذين اختبروا الصين معنا',
        button: 'خطط لرحلتك اليوم',
      },
    },
    destinations: {
      title: 'اختر وجهتك',
      subtitle: 'استكشف وجهاتنا المختارة في الصين',
      bookNow: 'احجز الآن',
      from: 'يبدأ من',
      perPerson: '/شخص',
      days: 'أيام',
      guests: 'ضيوف',
      highlights: 'أبرز المعالم',
      included: 'مشمول',
      notIncluded: 'غير مشمول',
      activities: 'أنشطة اختيارية',
      reviews: 'التقييمات',
      selectDate: 'اختر التاريخ',
      selectGuests: 'عدد الضيوف',
      addActivities: 'إضافة أنشطة',
      totalPrice: 'السعر الإجمالي',
      proceedToCheckout: 'المتابعة للدفع',
    },
    checkout: {
      title: 'أكمل حجزك',
      contactInfo: 'معلومات الاتصال',
      specialRequests: 'طلبات خاصة',
      payment: 'الدفع',
      completeBooking: 'تأكيد الحجز',
      success: 'تم تأكيد الحجز!',
      successMessage: 'شكراً لاختيارك رحلات الصين الخاصة. راجع بريدك الإلكتروني للتفاصيل.',
    },
    account: {
      title: 'حسابي',
      orders: 'حجوزاتي',
      profile: 'الملف الشخصي',
    },
    admin: {
      dashboard: 'لوحة التحكم',
      orders: 'الحجوزات',
      products: 'المنتجات',
      users: 'المستخدمين',
      totalRevenue: 'إجمالي الإيرادات',
      totalOrders: 'إجمالي الحجوزات',
      totalUsers: 'إجمالي المستخدمين',
    },
  },
  ru: {
    common: {
      appName: 'Китай Приватное Путешествие',
      home: 'Главная',
      destinations: 'Направления',
      blog: 'Блог',
      contact: 'Контакты',
      login: 'Войти',
      register: 'Регистрация',
      logout: 'Выйти',
      admin: 'Админ',
    },
    home: {
      hero: {
        title: 'Ваше Приватное Приключение в Китае Ждёт',
        subtitle: 'Откройте чудеса Китая с персональными маршрутами, опытными гидами и незабываемыми воспоминаниями.',
        cta: 'Начать Путешествие',
      },
      featured: {
        title: 'Популярные Направления',
        subtitle: 'Откройте самые очаровательные уголки Китая',
      },
      process: {
        title: 'Как Это Работает',
        subtitle: 'Ваша мечта, упрощённая в четыре шага',
        step1: { title: 'Выберите Направление', desc: 'Выберите из нашей коллекции потрясающих мест' },
        step2: { title: 'Настройте Опыт', desc: 'Добавьте опциональные активности: хайкинг, скалолазание, спелеология' },
        step3: { title: 'Забронируйте', desc: 'Защитите поездку простой онлайн-оплатой' },
        step4: { title: 'Путешествуйте Уверенно', desc: 'Ваш персональный гид и водитель ждут вас' },
      },
      activities: {
        title: 'Приключенческие Активности',
        subtitle: 'Улучшите путешествие захватывающими опциями',
      },
      reviews: {
        title: 'Что Говорят Путешественники',
        subtitle: 'Реальные истории от наших искателей приключений',
      },
      cta: {
        title: 'Готовы к Приключению Жизни?',
        subtitle: 'Присоединяйтесь к тысячам счастливых путешественников',
        button: 'Запланировать Поездку Сегодня',
      },
    },
    destinations: {
      title: 'Выберите Направление',
      subtitle: 'Исследуйте наши лучшие направления в Китае',
      bookNow: 'Забронировать',
      from: 'От',
      perPerson: '/человек',
      days: 'дней',
      guests: 'гостей',
      highlights: 'Основные точки',
      included: 'Включено',
      notIncluded: 'Не включено',
      activities: 'Опциональные Активности',
      reviews: 'Отзывы',
      selectDate: 'Выберите Дату',
      selectGuests: 'Количество Гостей',
      addActivities: 'Добавить Активности',
      totalPrice: 'Итого',
      proceedToCheckout: 'К Оплате',
    },
    checkout: {
      title: 'Завершить Бронирование',
      contactInfo: 'Контактная Информация',
      specialRequests: 'Особые Пожелания',
      payment: 'Оплата',
      completeBooking: 'Подтвердить Бронирование',
      success: 'Бронирование Подтверждено!',
      successMessage: 'Спасибо за выбор Китай Приватное Путешествие. Проверьте email для деталей.',
    },
    account: {
      title: 'Мой Аккаунт',
      orders: 'Мои Заказы',
      profile: 'Профиль',
    },
    admin: {
      dashboard: 'Панель',
      orders: 'Заказы',
      products: 'Продукты',
      users: 'Пользователи',
      totalRevenue: 'Общий Доход',
      totalOrders: 'Всего Заказов',
      totalUsers: 'Всего Пользователей',
    },
  },
}

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.en
}
