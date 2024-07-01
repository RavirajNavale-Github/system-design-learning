import { useTranslation } from "react-i18next";
import "./App.css";
import './i18n.js';

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
];

function App() {
  const { t } = useTranslation();  //return a function
  const {i18n} = useTranslation();
  // console.log("========", useTranslation());
  // console.log("i18n:",i18n);
  // console.log("t:",t);

  const chooseLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("greeting")}</h1>
        <div className="lang-btn">
          {languages.map((lng) => {
            return (
              <button key={lng.code} onClick={() => chooseLanguage(lng.code)}>
                {lng.lang}
              </button>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
