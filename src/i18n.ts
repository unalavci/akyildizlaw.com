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
        subtitle: 'Akyıldız Hukuk & Danışmanlık',
        slogan: 'Adalet, diğer tüm erdemlerin ufkudur ve onların birlikte var olabilmelerinin yasasıdır.',
        cta: 'Randevu Al',
        fullQuote: {
          title: '“Adalet, diğer tüm erdemlerin ufkudur ve onların birlikte var olabilmelerinin yasasıdır”',
          p1: 'Adalet diye bir gerçeklik kendiliğinden yoktur. Adalet tam da hiç olmadığı için yaratılması gerekenlerdendir ve ancak yaratılırsa var olacaktır. Adalet; toplumsal yararlılık işlevinden ibaret olmadığı gibi salt bir eşitliğe ve yasaya saygıya da indirgenemez. Eğilmemiz gereken yönü, adaletin erdemsel niteliği ve onun diğer yetkinliklerle ilişkisidir. Hangi erdemi ele alırsak alalım, adalet içgörüsü olmadan onu yoğuramayız. Adalet, diğer tüm erdemlerin ufkudur ve onların birlikte var olabilmelerinin yasasıdır. Bu nedenle öncelikle herkesin kendi içinde taşıdığı adaletsiz yönelimlere direnmesi gerekir.',
          p2: 'Adalet arayışının bitimsiz olduğu bilinmez değil. Ne var ki düş görmeyi güçleştiren durum ve koşullar, mücadele etmeyi engelleyemez.',
          footer: 'Adalet uğrunda yılgınlık göstermeyenlere...',
          author: 'M. UĞUR AKYILDIZ'
        }
      },
      about: {
        title: 'Hakkımızda',
        p1: 'Av. Mehmet Uğur Akyıldız 2000 yılında İstanbul’da avukatlığa başlamış, 2004 senesinde Hollanda Rotterdam’da ticaret hukuku üzerine yüksek lisansını (LL.M) tamamlamıştır.',
        p2: 'Akyıldız Hukuk Bürosu 2008 yılında Av. Mehmet Uğur Akyıldız tarafından kurulmuştur. Büro, nitelikten ödün vermeyen, emeği yücelten, avukatlık geleneğinin felsefi içeriğinin özümlenmesiyle sürdürülmesi gerektiğini savunan, çözüm arayışlarında ısrarcı yaklaşımıyla ve aynı doğrultuyu benimseyen çalışma grubuyla birlikte faaliyet göstermektedir.',
        p3: 'Av. Mehmet Uğur Akyıldız, Avrupa, Körfez ve Ortadoğu ülkelerinin farklı ölçekli şirketlerine avukatlık hizmeti vermenin yanısıra, birçok uluslararası siyasi kişiyi Türkiye’de temsil etmekte ve danışmanlığını yürütmektedir.'
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
        it_desc: 'Veri koruma ve siber hukuk alanında danışmanlık hizmetleri.',
        execution: 'İcra ve İflas Hukuku',
        execution_desc: 'Alacak takibi, icra işlemleri ve iflas süreçlerinin yönetimi.',
        inheritance: 'Miras Hukuku',
        inheritance_desc: 'Vasiyetname, miras paylaşımı ve veraset ilamı işlemleri.',
        admin: 'İdare ve Vergi Hukuku',
        admin_desc: 'İdari davalar, vergi uyuşmazlıkları ve iptal davaları.',
        kvkk: 'Kişisel Verilerin Korunması',
        kvkk_desc: 'KVKK uyum süreçleri ve veri güvenliği danışmanlığı.',
        insurance: 'Sigorta Hukuku',
        insurance_desc: 'Sigorta poliçeleri ve tazminat uyuşmazlıklarının çözümü.',
        health: 'Sağlık ve Malpraktis',
        health_desc: 'Tıbbi uygulama hataları ve hasta-hekim hakları yönetimi.'
      },
      contact: {
        title: 'İletişim',
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi!',
        error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
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
        subtitle: 'Akyıldız Law & Consultancy',
        slogan: 'Justice is the horizon of all other virtues and the law of their coexistence.',
        cta: 'Book an Appointment',
        fullQuote: {
          title: '“Justice is the horizon of all other virtues and the law of their coexistence”',
          p1: 'Justice does not exist as a reality on its own. Justice is precisely one of those things that must be created because it does not exist at all, and it will only exist if it is created. Justice is not merely a function of social utility, nor can it be reduced to a simple equality and respect for the law. The direction we must lean towards is the virtuous nature of justice and its relationship with other competencies. No matter which virtue we consider, we cannot mold it without the insight of justice. Justice is the horizon of all other virtues and the law of their coexistence. Therefore, first of all, everyone must resist the unjust tendencies they carry within themselves.',
          p2: 'It is not unknown that the search for justice is endless. However, situations and conditions that make dreaming difficult cannot prevent the struggle.',
          footer: 'To those who do not show weariness for the sake of justice...',
          author: 'M. UĞUR AKYILDIZ'
        }
      },
      about: {
        title: 'About Us',
        p1: 'Attorney Mehmet Uğur Akyıldız started working as a lawyer in Istanbul in 2000 and completed his Master’s degree (LL.M) in Commercial Law in Rotterdam, the Netherlands, in 2004.',
        p2: 'Founded in 2008 by Attorney Mehmet Uğur Akyıldız, Akyıldız Law Firm operates with a working group that does not compromise on quality and promotes dignified labor. The firm insists on creating solutions and is committed to continuing legal culture and tradition by upholding its core philosophical notions.',
        p3: 'While providing legal services to companies of various sizes from Europe, Middle East, and the Gulf States, Attorney Mehmet Uğur Akyıldız advises many international political figures and represents them in Turkey.'
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
        it_desc: 'Consultancy services in data protection and cyber law.',
        execution: 'Execution and Bankruptcy Law',
        execution_desc: 'Debt collection, execution proceedings, and bankruptcy management.',
        inheritance: 'Inheritance Law',
        inheritance_desc: 'Wills, inheritance distribution, and succession certificate procedures.',
        admin: 'Administrative and Tax Law',
        admin_desc: 'Administrative lawsuits, tax disputes, and annulment cases.',
        kvkk: 'Data Protection (KVKK)',
        kvkk_desc: 'KVKK compliance processes and data security consultancy.',
        insurance: 'Insurance Law',
        insurance_desc: 'Resolution of insurance policies and compensation disputes.',
        health: 'Health and Malpractice Law',
        health_desc: 'Medical malpractice and patient-physician rights management.'
      },
      contact: {
        title: 'Contact',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred while sending the message. Please try again.',
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
