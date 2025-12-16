import { useState, useRef, useEffect } from "react";
import styles from "./LanguageSelector.module.scss";

const LANGUAGES = {
  it: {
    label: "Italian",
    flag: "fi fi-it",
  },
  en: {
    label: "English",
    flag: "fi fi-gb",
  },
};

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle language selection
  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className={styles.selector} ref={ref}>
      {/* Trigger Button */}
      <button
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={LANGUAGES[lang].label}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={LANGUAGES[lang].flag} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className={styles.menu}>
          <button
            className={styles.option}
            onClick={() => handleSelect("it")}
          >
            <span className="fi fi-it" />
            <span>Italian</span>
          </button>

          <button
            className={styles.option}
            onClick={() => handleSelect("en")}
          >
            <span className="fi fi-gb" />
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
}
