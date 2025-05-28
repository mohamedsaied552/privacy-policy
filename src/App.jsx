import React from 'react';
import { Helmet } from 'react-helmet';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="سياسة الخصوصية لتطبيق مهارات جذب النساء الجميلة" />
        <title>سياسة الخصوصية - مهارات جذب النساء الجميلات</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <PrivacyPolicy />
    </>
  );
}

export default App; 