import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDictionary } from "@/lib/get-dictionary";

import MiddleGrid from "@/components/molecules/middle-grid";
import SecondMiddleGrid from "@/components/molecules/second-middle-grid";

export default function Home() {
  const { lang } = useParams();
  const locale = lang || "en-US";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mainContent, setMainContent] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const dict = await getDictionary(locale);
      setMainContent(dict.main_content || []);
    }

    loadData();
  }, [locale]);

  const firstContent = mainContent?.[0];
  const secondContent = mainContent?.[1];

  return (
    <main>
      <MiddleGrid company_prime_data={firstContent} />
      <SecondMiddleGrid secondContent={secondContent} />
    </main>
  );
}
