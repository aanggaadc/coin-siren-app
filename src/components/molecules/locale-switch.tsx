import { useState } from "react";
import type { MouseEvent } from "react";

const LocaleSwitch = () => {
  const [locale, setLocale] = useState(() => {
    const path = window.location.pathname;
    return path.split("/")[1] || "en-US";
  });

  const [pathname] = useState(() => window.location.pathname);

  const handleLocaleChange = (
    e: MouseEvent<HTMLButtonElement>,
    selectedLocale: string
  ) => {
    e.preventDefault();

    const newPath = `/${selectedLocale}${pathname.slice(locale.length + 1)}`;
    window.location.assign(newPath);
    setLocale(selectedLocale);
  };

  const localeFlag = locale === "en-US" ? "/usa_flag.png" : "/kor_flag.png";

  return (
    <button
      onClick={(e) =>
        handleLocaleChange(e, locale === "en-US" ? "ko-KR" : "en-US")
      }
    >
      <img src={`images/${localeFlag}`} alt={locale} width={20} height={20} />
    </button>
  );
};

export default LocaleSwitch;
