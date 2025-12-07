import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface IButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ITextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    ButtonHTMLAttributes<HTMLParagraphElement> {}

export interface IBoxProps
  extends HTMLAttributes<HTMLDivElement>,
    ButtonHTMLAttributes<HTMLDivElement> {}

export interface IFuncLangParams {
  params: {
    lang: string;
  };
}
