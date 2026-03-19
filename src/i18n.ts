import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      nav: {
        home: 'Anasayfa',
        about: 'Hakkımızda',
        practice: 'Faaliyet Alanlarımız',
        contact: 'İletişim'
      },
      hero: {
        title: 'Adalet ve Güvenin Buluştuğu Nokta',
        subtitle: 'Akyıldız Hukuk Bürosu olarak, karmaşık hukuki süreçlerinizde profesyonel ve çözüm odaklı yaklaşımımızla yanınızdayız.',
        cta: 'Randevu Al'
      },
      about: {
        title: 'Hakkımızda',
        content: 'Akyıldız Hukuk Bürosu, kuruluşundan bu yana müvekkillerine yüksek kalitede hukuki danışmanlık ve avukatlık hizmeti sunmaktadır. Deneyimli kadromuzla, hukukun her alanında etik değerlere bağlı kalarak en etkili çözümleri üretiyoruz.',
        stats: {
          experience: 'Yıllık Deneyim',
          cases: 'Tamamlanan Dosya',
          clients: 'Mutlu Müvekkil'
        }
      },
      practice: {
        title: 'Faaliyet Alanlarımız',
        corporate: 'Şirketler Hukuku',
        criminal: 'Ceza Hukuku',
        family: 'Aile Hukuku',
        realestate: 'Gayrimenkul Hukuku',
        labor: 'İş Hukuku',
        it: 'Bilişim Hukuku'
      },
      contact: {
        title: 'İletişim',
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi!',
        address: 'Adres',
        phone: 'Telefon',
        email_label: 'E-posta'
      },
      footer: {
        rights: 'Tüm hakları saklıdır.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        practice: 'Practice Areas',
        contact: 'Contact'
      },
      hero: {
        title: 'Where Justice Meets Trust',
        subtitle: 'As Akyildiz Law Firm, we stand by you in your complex legal processes with our professional and solution-oriented approach.',
        cta: 'Book an Appointment'
      },
      about: {
        title: 'About Us',
        content: 'Since its establishment, Akyildiz Law Firm has been providing high-quality legal consultancy and advocacy services to its clients. With our experienced staff, we produce the most effective solutions in all areas of law by adhering to ethical values.',
        stats: {
          experience: 'Years of Experience',
          cases: 'Completed Cases',
          clients: 'Happy Clients'
        }
      },
      practice: {
        title: 'Practice Areas',
        corporate: 'Corporate Law',
        criminal: 'Criminal Law',
        family: 'Family Law',
        realestate: 'Real Estate Law',
        labor: 'Labor Law',
        it: 'IT Law'
      },
      contact: {
        title: 'Contact',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        address: 'Address',
        phone: 'Phone',
        email_label: 'Email'
      },
      footer: {
        rights: 'All rights reserved.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
