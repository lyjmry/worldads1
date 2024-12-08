import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppEn from './App.en.jsx'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import './index.css'

function Root() {
  const { language } = useLanguage();
  return language === 'zh' ? <App /> : <AppEn />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <Root />
    </LanguageProvider>
  </React.StrictMode>,
)
