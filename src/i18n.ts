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
        slogan: 'Adalet, diğer tüm erdemlerin ufkudur ve onların birlikte var olabilmelerinin yasasıdır.',
        cta: 'Randevu Al'
      },
      about: {
        title: 'Hakkımızda',
        content: 'Av. Mehmet Uğur Akyıldız 2000 yılında İstanbul’da avukatlığa başlamış, 2004 senesinde Hollanda Rotterdam’da ticaret hukuku üzerine yüksek lisansını (LL.M) tamamlamıştır. Akyıldız Hukuk Bürosu 2008 yılında Av. Mehmet Uğur Akyıldız tarafından kurulmuştur. Büro, nitelikten ödün vermeyen, emeği yücelten, avukatlık geleneğinin felsefi içeriğinin özümlenmesiyle sürdürülmesi gerektiğini savunan, çözüm arayışlarında ısrarcı yaklaşımıyla ve aynı doğrultuyu benimseyen çalışma grubuyla birlikte faaliyet göstermektedir. Av. Mehmet Uğur Akyıldız, Avrupa, Körfez ve Ortadoğu ülkelerinin farklı ölçekli şirketlerine avukatlık hizmeti vermenin yanısıra, birçok uluslararası siyasi kişiyi Türkiye’de temsil etmekte ve danışmanlığını yürütmektedir.',
        stats: {
          experience: 'Yıllık Deneyim',
          cases: 'Tamamlanan Dosya',
          clients: 'Mutlu Müvekkil'
        }
      },
      practice: {
        title: 'Faaliyet Alanlarımız',
        corporate: 'Şirketler Hukuku',
        corporate_desc: 'Kurumsal yönetim, birleşme ve devralmalar süreçlerinde hukuki destek.',
        criminal: 'Ceza Hukuku',
        criminal_desc: 'Ceza yargılamalarında profesyonel savunma ve temsil hizmetleri.',
        family: 'Aile Hukuku',
        family_desc: 'Boşanma, velayet ve miras hukukuna ilişkin tüm süreçlerin yönetimi.',
        realestate: 'Gayrimenkul Hukuku',
        realestate_desc: 'Mülkiyet uyuşmazlıkları ve gayrimenkul işlem yönetimi.',
        labor: 'İş Hukuku',
        labor_desc: 'İş sözleşmeleri ve işçi-işveren uyuşmazlıklarının çözümü.',
        it: 'Bilişim Hukuku',
        it_desc: 'Veri koruma ve siber hukuk alanında danışmanlık hizmetleri.'
      },
      contact: {
        title: 'İletişim',
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi!',
        subtitle: 'Hukuki danışmanlık ihtiyacınız için bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.',
        address: 'Adres',
        phone: 'Telefon',
        fax: 'Faks',
        email_label: 'E-posta'
      },
      footer: {
        rights: 'Tüm hakları saklıdır.',
        privacy: 'Gizlilik Politikası',
        follow: 'Bizi Takip Edin'
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
        slogan: 'Justice is the horizon of all other virtues and the law of their coexistence.',
        cta: 'Book an Appointment'
      },
      about: {
        title: 'About Us',
        content: 'Attorney Mehmet Uğur Akyıldız started working as a lawyer in Istanbul in 2000 and completed his Master’s degree (LL.M) in Commercial Law in Rotterdam, the Netherlands, in 2004. Founded in 2008 by Attorney Mehmet Uğur Akyıldız, Akyıldız Law Firm operates with a working group that does not compromise on quality and promotes dignified labor. The firm insists on creating solutions and is committed to continuing legal culture and tradition by upholding its core philosophical notions. While providing legal services to companies of various sizes from Europe, Middle East, and the Gulf States, Attorney Mehmet Uğur Akyıldız advises many international political figures and represents them in Turkey.',
        stats: {
          experience: 'Years of Experience',
          cases: 'Completed Cases',
          clients: 'Happy Clients'
        }
      },
      practice: {
        title: 'Practice Areas',
        corporate: 'Corporate Law',
        corporate_desc: 'Legal support in corporate governance, mergers, and acquisitions.',
        criminal: 'Criminal Law',
        criminal_desc: 'Professional defense and representation in criminal proceedings.',
        family: 'Family Law',
        family_desc: 'Management of all processes related to divorce, custody, and inheritance law.',
        realestate: 'Real Estate Law',
        realestate_desc: 'Property disputes and real estate transaction management.',
        labor: 'Labor Law',
        labor_desc: 'Resolution of employment contracts and employee-employer disputes.',
        it: 'IT Law',
        it_desc: 'Consultancy services in data protection and cyber law.'
      },
      contact: {
        title: 'Contact',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        subtitle: 'You can contact us for your legal consultancy needs. Our expert team will get back to you as soon as possible.',
        address: 'Address',
        phone: 'Phone',
        fax: 'Fax',
        email_label: 'Email'
      },
      footer: {
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        follow: 'Follow Us'
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
