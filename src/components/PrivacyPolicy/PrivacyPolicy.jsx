import React, { useState, useEffect, Suspense } from 'react';
import { FaEnvelope, FaChevronUp, FaSpinner } from 'react-icons/fa';
import styles from './PrivacyPolicy.module.css';

// Lazy load sections for better performance
const sections = [
  { id: 1, title: "المعلومات التي نقوم بجمعها" },
  { id: 2, title: "كيف نستخدم المعلومات" },
  { id: 3, title: "مشاركة المعلومات" },
  { id: 4, title: "أمان البيانات" },
  { id: 5, title: "التبليغ عن محتوى أو إساءة" },
  { id: 6, title: "التغييرات على سياسة الخصوصية" },
  { id: 7, title: "التواصل معنا" }
];

// Loading component
const LoadingSpinner = () => (
  <div className={styles.loadingContainer}>
    <FaSpinner className={styles.spinner} />
    <p>جاري التحميل...</p>
  </div>
);

// Error component
const ErrorMessage = ({ message, onRetry }) => (
  <div className={styles.errorContainer}>
    <p>{message}</p>
    <button onClick={onRetry} className={styles.retryButton}>
      إعادة المحاولة
    </button>
  </div>
);

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = async (sectionId) => {
    try {
      setIsLoading(true);
      setError(null);
      setActiveSection(sectionId);
      const element = document.getElementById(`section-${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      setError('حدث خطأ أثناء تحميل المحتوى');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    handleSectionClick(activeSection);
  };

  const renderSection = (sectionId) => {
    if (error) {
      return <ErrorMessage message={error} onRetry={handleRetry} />;
    }

    if (isLoading) {
      return <LoadingSpinner />;
    }

    switch (sectionId) {
      case 1:
        return (
          <section id="section-1" className={styles.section}>
            <h2>1. المعلومات التي نقوم بجمعها</h2>
            <p>نقوم بجمع المعلومات التالية لأغراض تطوير وتحسين تجربة المستخدم:</p>
            <ul>
              <li>معلومات غير شخصية: نوع الجهاز، إصدار نظام التشغيل، اللغة، بيانات الاستخدام (مثل مدة الجلسة وأخطاء التطبيق).</li>
              <li>الموقع التقريبي: في بعض الحالات، قد نستخدم بيانات الموقع التقريبي لتحسين المحتوى الموجه.</li>
            </ul>
            <p>ملاحظة: لا نقوم بجمع معلومات شخصية مثل الاسم، البريد الإلكتروني، أو الصور الشخصية.</p>
          </section>
        );
      case 2:
        return (
          <section id="section-2" className={styles.section}>
            <h2>2. كيف نستخدم المعلومات</h2>
            <p>يتم استخدام المعلومات التي نجمعها من أجل:</p>
            <ul>
              <li>تحسين أداء التطبيق.</li>
              <li>تحليل الاستخدام وتصحيح الأخطاء التقنية.</li>
              <li>تطوير ميزات جديدة وتحسين المحتوى التعليمي داخل التطبيق.</li>
            </ul>
          </section>
        );
      case 3:
        return (
          <section id="section-3" className={styles.section}>
            <h2>3. مشاركة المعلومات</h2>
            <p>لا نشارك معلوماتك مع أي جهة خارجية، باستثناء الحالات الضرورية التالية:</p>
            <ul>
              <li>الامتثال للقوانين واللوائح.</li>
              <li>حماية حقوقنا القانونية في حال انتهاك شروط الاستخدام.</li>
              <li>التعاون مع مزودي خدمات موثوقين لتحسين أداء التطبيق.</li>
            </ul>
          </section>
        );
      case 4:
        return (
          <section id="section-4" className={styles.section}>
            <h2>4. أمان البيانات</h2>
            <p>نستخدم وسائل حماية تقنية وتنظيمية لحماية بياناتك من الوصول غير المصرح به أو الاستخدام غير المشروع.</p>
          </section>
        );
      case 5:
        return (
          <section id="section-5" className={styles.section}>
            <h2>5. التبليغ عن محتوى أو إساءة</h2>
            <p>نحن نأخذ بلاغات المستخدمين بجدية. إذا واجهت محتوى غير مناسب أو أي إساءة داخل التطبيق، يمكنك التواصل معنا مباشرة عبر البريد التالي:</p>
            <a href="mailto:ahmadyassinq@gmail.com" className={styles.emailLink}>
              ahmadyassinq@gmail.com
            </a>
            <p>يرجى تزويدنا بالتفاصيل الكافية لنتمكن من معالجة البلاغ بسرعة وكفاءة.</p>
          </section>
        );
      case 6:
        return (
          <section id="section-6" className={styles.section}>
            <h2>6. التغييرات على سياسة الخصوصية</h2>
            <p>قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إشعار المستخدمين بأي تغييرات جوهرية عبر التطبيق أو صفحة المتجر.</p>
          </section>
        );
      case 7:
        return (
          <section id="section-7" className={styles.section}>
            <h2>7. التواصل معنا</h2>
            <p>للاستفسارات أو الملاحظات حول سياسة الخصوصية، يمكنك التواصل معنا عبر:</p>
            <a href="mailto:ahmadyassinq@gmail.com" className={styles.emailLink}>
              البريد الإلكتروني: ahmadyassinq@gmail.com
            </a>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container} dir="rtl">
      <header className={styles.header}>
        <h1>سياسة الخصوصية لتطبيق "مهارات جذب النساء الجميلات"</h1>
        <p className={styles.updateDate}>آخر تحديث: 21 مايو 2025</p>
      </header>

      <div className={styles.contentWrapper}>
        <nav className={styles.sidebar} aria-label="قائمة المحتويات">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`${styles.sidebarButton} ${activeSection === section.id ? styles.active : ''}`}
                  onClick={() => handleSectionClick(section.id)}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                >
                  {section.id}. {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className={styles.mainContent}>
          <Suspense fallback={<LoadingSpinner />}>
            {renderSection(activeSection)}
          </Suspense>
        </main>
      </div>

      <button 
        className={`${styles.contactButton} ${styles.floating}`}
        onClick={() => window.location.href = 'mailto:ahmadyassinq@gmail.com'}
        aria-label="تواصل معنا"
      >
        <FaEnvelope /> تواصل معنا
      </button>

      {showScrollTop && (
        <button 
          className={`${styles.scrollTop} ${styles.floating}`}
          onClick={scrollToTop}
          aria-label="العودة إلى أعلى الصفحة"
        >
          <FaChevronUp />
        </button>
      )}

      <footer className={styles.footer}>
        <p>© 2025 مهارات جذب النساء الجميلة. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy; 