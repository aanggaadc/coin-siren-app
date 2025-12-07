import HeroJumbotron from "../organisms/hero-jumbotron";
import Navbar from "../organisms/navbar";

export default async function TopNavHero({ lang }: { lang: string }) {
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5173";
  const navUrl = `${baseUrl}/api/nav-data?locale=${lang}`;
  const heroUrl = `${baseUrl}/api/hero-data?locale=${lang}`;

  const [navResponse, heroResponse] = await Promise.all([
    fetch(navUrl),
    fetch(heroUrl),
  ]);
  const navData = await navResponse.json();
  const heroData = await heroResponse.json();
  const { heroContent, heroContent2 } = heroData ?? {};

  return (
    <section className="main_jumbotron max-lg:pb-[60px] pb-[108px]">
      <Navbar navContent={navData} />
      <HeroJumbotron leftContent={heroContent} rightContent={heroContent2} />
    </section>
  );
}
