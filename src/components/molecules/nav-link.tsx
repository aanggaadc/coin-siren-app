import cn from "@/lib/utils";
import type { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  className?: string;
}

export default function NavLink({ children, className = "" }: NavLinkProps) {
  return (
    <li
      className={`${cn(
        "list-none flex gap-2 items-center relative group cursor-pointer",
        className
      )}`}
    >
      {children}
    </li>
  );
}
