import React, { useState, useEffect, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Scale, 
  Shield, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  Gavel,
  Users,
  Loader2,
  CheckCircle2,
  ArrowUp,
  Printer,
  Linkedin,
  Twitter,
  Instagram,
  ScrollText,
  Landmark,
  Lock,
  Umbrella,
  Stethoscope,
  AlertCircle
} from 'lucide-react';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold z-[1000] origin-left"
      style={{ scaleX }}
    />
  );
};

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }, 3000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center text-white pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Scale className="w-16 h-16 text-gold mb-6 animate-pulse" />
            <h1 className="font-serif text-4xl font-bold tracking-tighter mb-2">
              AKYILDIZ<span className="text-gold">LAW</span>
            </h1>
            <div className="w-48 h-0.5 bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 h-full w-1/2 bg-gold"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'practice', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.practice'), href: '#practice', id: 'practice' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Scale className="w-8 h-8 text-navy" />
          <span className="font-serif text-2xl font-bold tracking-tighter text-navy">
            AKYILDIZ<span className="text-gold">LAW</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest transition-all relative group ${activeSection === link.id ? 'text-gold' : 'text-navy/80 hover:text-gold'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest border border-navy/20 px-3 py-1 rounded-full hover:bg-navy hover:text-white transition-all cursor-pointer"
          >
            <Globe className="w-3 h-3" />
            {i18n.language === 'tr' ? 'ENG' : 'TR'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy p-2 hover:bg-navy/5 rounded-full transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-10 px-8 md:hidden flex flex-col gap-8 border-t border-navy/5"
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                variants={itemVariants}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-serif transition-colors flex items-center justify-between group ${activeSection === link.id ? 'text-gold' : 'text-navy hover:text-gold'}`}
              >
                {link.name}
                <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${activeSection === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </motion.a>
            ))}
            <motion.div variants={itemVariants} className="pt-4 border-t border-navy/5">
              {i18n.isInitialized && (
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gold hover:text-navy transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  {i18n.language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-20">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/scroll-bg.png" 
          alt="Akyıldız Law Firm Tradition" 
          className="w-full h-full object-cover opacity-25 scale-110 contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/0 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 py-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block text-gold font-bold uppercase tracking-[0.3em] text-sm font-sans"
          >
            {t('hero.subtitle')}
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-xl md:text-3xl text-navy font-serif italic leading-tight text-balance">
              {t('hero.fullQuote.title')}
            </h1>
            
            <div className="space-y-6 text-navy/90 font-sans leading-relaxed text-lg md:text-xl text-justify max-w-2xl">
              <p>{t('hero.fullQuote.p1')}</p>
              <p>{t('hero.fullQuote.p2')}</p>
            </div>

            <div className="pt-6 space-y-2">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gold font-bold uppercase tracking-[0.2em] text-xs italic font-sans"
              >
                {t('hero.fullQuote.footer')}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-navy font-bold uppercase tracking-[0.3em] text-sm font-sans"
              >
                {t('hero.fullQuote.author')}
              </motion.p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="w-3/4 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-paper relative group">
            <img 
              src="/images/scroll-bg.png" 
              alt="Akyıldız Law Tradition" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-navy">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <div className="space-y-6 text-lg text-navy/70 leading-relaxed mb-12 text-justify">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </motion.div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-navy/5 transition-all duration-500"
            >
              <img 
                src="/images/lawyer-portrait.png" 
                alt="Av. Mehmet Uğur Akyıldız" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-navy/5 md:mt-16 transition-all duration-500"
            >
              <img 
                src="/images/office-desk.png" 
                alt="Akyıldız Law Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const { t } = useTranslation();
  
  const areas = [
    { icon: Briefcase, title: t('practice.corporate'), desc: t('practice.corporate_desc') },
    { icon: Scale, title: t('practice.criminal'), desc: t('practice.criminal_desc') },
    { icon: Users, title: t('practice.family'), desc: t('practice.family_desc') },
    { icon: MapPin, title: t('practice.realestate'), desc: t('practice.realestate_desc') },
    { icon: Shield, title: t('practice.labor'), desc: t('practice.labor_desc') },
    { icon: Globe, title: t('practice.it'), desc: t('practice.it_desc') },
    { icon: Gavel, title: t('practice.execution'), desc: t('practice.execution_desc') },
    { icon: ScrollText, title: t('practice.inheritance'), desc: t('practice.inheritance_desc') },
    { icon: Landmark, title: t('practice.admin'), desc: t('practice.admin_desc') },
    { icon: Lock, title: t('practice.kvkk'), desc: t('practice.kvkk_desc') },
    { icon: Umbrella, title: t('practice.insurance'), desc: t('practice.insurance_desc') },
    { icon: Stethoscope, title: t('practice.health'), desc: t('practice.health_desc') },
  ];

  return (
    <section id="practice" className="py-24 bg-paper scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img 
          src="/images/scroll-bg.png" 
          alt="Practice Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-navy">{t('practice.title')}</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-navy/5 group relative overflow-hidden h-80 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-paper rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-sans font-semibold text-navy group-hover:opacity-0 transition-opacity duration-300 px-4">{area.title}</h3>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-navy p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = i18n.language === 'tr' ? 'Lütfen adınızı giriniz.' : 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errors.email = i18n.language === 'tr' ? 'Lütfen e-posta adresinizi giriniz.' : 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = i18n.language === 'tr' ? 'Geçerli bir e-posta adresi giriniz.' : 'Please enter a valid email.';
    }
    if (!formData.message.trim()) {
      errors.message = i18n.language === 'tr' ? 'Lütfen mesajınızı giriniz.' : 'Please enter your message.';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    setError(null);
    
    // Simulate a brief delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-24 bg-navy text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="/images/stone-columns.png" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{t('contact.title')}</h2>
            <p className="text-white/60 mb-12 max-w-md">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">{t('contact.address')}</div>
                  <div className="text-sm">Büyükdere Cad, Stad Han, 85/14B, Şişli/İSTANBUL- TÜRKİYE</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">{t('contact.phone')}</div>
                  <div className="text-sm">+90212 296 21 36 (3 lines)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">{t('contact.fax')}</div>
                  <div className="text-sm">+90212 233 39 53</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">{t('contact.email_label')}</div>
                  <div className="text-sm">info@akyildizlaw.com</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl text-navy shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{t('contact.success')}</h3>
                  <p className="text-navy/60 text-sm">En kısa sürede size geri dönüş yapacağız.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">{t('contact.name')}</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border-b py-2 outline-none transition-colors ${validationErrors.name ? 'border-red-400' : 'border-navy/10 focus:border-gold'}`} 
                      />
                      <AnimatePresence>
                        {validationErrors.name && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center gap-1 text-red-500 text-[10px] font-bold"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {validationErrors.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">{t('contact.email')}</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border-b py-2 outline-none transition-colors ${validationErrors.email ? 'border-red-400' : 'border-navy/10 focus:border-gold'}`} 
                      />
                      <AnimatePresence>
                        {validationErrors.email && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center gap-1 text-red-500 text-[10px] font-bold"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {validationErrors.email}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40">{t('contact.message')}</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full border-b py-2 outline-none transition-colors resize-none ${validationErrors.message ? 'border-red-400' : 'border-navy/10 focus:border-gold'}`} 
                    />
                    <AnimatePresence>
                      {validationErrors.message && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex items-center gap-1 text-red-500 text-[10px] font-bold"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {validationErrors.message}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {error && (
                    <div className="bg-red-50 border border-red-100 p-3 rounded-lg flex items-center gap-2 text-red-600 text-xs font-bold">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-navy text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('contact.sending')}
                      </>
                    ) : (
                      t('contact.send')
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 bg-paper border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@akyildizlaw.com"
              className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors shadow-lg group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center hover:bg-navy transition-colors shadow-lg group"
              aria-label="Scroll to top"
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest font-bold text-navy/40 text-center font-sans">
            © {new Date().getFullYear()} AKYILDIZ LAW FIRM. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-white">
      <ScrollProgressBar />
      <PageLoader />
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      <Footer />
    </div>
  );
}
