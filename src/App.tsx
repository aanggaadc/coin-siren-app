import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/home";
import TopNavHero from "./components/templates/top-hero.";
import Text from "./components/atoms/text";

import "material-symbols";

function Layout({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();
  const currentLang = lang || "ko-KR";

  return (
    <html lang={currentLang} className="font-poppins">
      <body>
        <main className="bg-slight_light">
          <header>
            <TopNavHero />
          </header>

          {children}

          <footer className="pt-9 pb-[60px] md:pt-12 md:pb-20 px-4 max-w-[1201.5px] mx-auto">
            <Text variant="lightest_dark" className="text-[13px] font-black">
              &copy; {new Date().getFullYear()} Hyperhire
            </Text>
          </footer>
        </main>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/:lang?"
          element={
            <Layout>
              <PageWrapper />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function PageWrapper() {
  return (
    <Routes>
      <Route path="/:lang?" element={<Home />} />
    </Routes>
  );
}
