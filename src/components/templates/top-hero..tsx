/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDictionary } from "@/lib/get-dictionary";

import HeroJumbotron from "../organisms/hero-jumbotron";
import Navbar from "../organisms/navbar";

export default function TopNavHero() {
  const { lang } = useParams();
  const locale = lang || "en-US";

  const [navData, setNavData] = useState<any>(null);
  const [heroContent, setHeroContent] = useState<any>(null);
  const [heroContent2, setHeroContent2] = useState<any>(null);

  useEffect(() => {
    async function loadDictionary() {
      const dictionary = await getDictionary(locale);

      const navbarData = dictionary.navbar ?? [];

      console.log(navbarData);

      const leftContentData = dictionary.left_content || [];
      const rightContentData = dictionary.right_content || [];

      setNavData(navbarData);
      setHeroContent(leftContentData);
      setHeroContent2(rightContentData);
    }

    loadDictionary();
  }, [locale]);

  if (!navData || !heroContent) {
    return <section className="main_jumbotron pb-[108px] h-screen"></section>;
  }

  return (
    <section className="main_jumbotron max-lg:pb-[60px] pb-[108px]">
      <Navbar navContent={navData} />
      <HeroJumbotron leftContent={heroContent} rightContent={heroContent2} />
    </section>
  );
}
