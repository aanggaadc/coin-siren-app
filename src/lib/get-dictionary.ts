// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: any = {
  "en-US": () =>
    import("@/data/locales/en.json").then((module) => module.default),
  "ko-KR": () =>
    import("@/data/locales/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  dictionaries[locale] ? dictionaries[locale]() : dictionaries["en-US"]();
