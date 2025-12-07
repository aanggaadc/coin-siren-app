import CardBox from "../atoms/card-box";
import Text from "../atoms/text";

import type { ISubLink } from "@/types";

export default function NavDropdown({ sublinks }: { sublinks?: ISubLink[] }) {
  return (
    <CardBox className="absolute top-full left-0 hidden group-hover:flex flex-col shadow-md">
      {sublinks?.map((link, index) => (
        <a href={"#"} className="py-2.5" key={index}>
          <Text variant={"secondary"} size={"sm"} className="font-bold">
            {link?.title}
          </Text>
        </a>
      ))}
    </CardBox>
  );
}
