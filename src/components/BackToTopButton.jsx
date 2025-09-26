import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // يجب تثبيت react-icons

function BackToTopButton() {
  // الحالة التي تحدد ما إذا كان الزر مرئياً أم لا
  const [isVisible, setIsVisible] = useState(false);

  // دالة تمرير (Scroll) لـ JavaScript
  const toggleVisibility = () => {
    // إظهار الزر عندما يتجاوز التمرير 300 بكسل
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // دالة العودة لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // لتوفير حركة سلسة
    });
  };

  useEffect(() => {
    // إضافة مستمع لحدث التمرير عند تحميل المكون
    window.addEventListener('scroll', toggleVisibility);

    // تنظيف مستمع الحدث عند إزالة المكون (مهم لتجنب تسرب الذاكرة)
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // [] يعني أن useEffect يعمل مرة واحدة فقط عند التحميل

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;