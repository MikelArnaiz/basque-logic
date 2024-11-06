import { Nor, Nork, norkPronounds, norPronounds } from "./pronoms";
import { Type, Time } from "./type";
import { Grammar } from "./grammar";

const getNorNork = (
  time: Time,
  verb: string,
  nor: Nor,
  nork: Nork,
  getMarks: (
    nor: Nor,
    nork: Nork
  ) => {
    nor: string[];
    nork: string[];
  }
): Grammar => {
  const marks = getMarks(nor, nork);
  const star = marks.nor.join("");
  const end = marks.nork.join();
  const aux = star + end;
  // .replace("tute", "tuzte"); TODO this only in present?

  return {
    type: Type.NorNork,
    time,
    nork,
    nori: null,
    nor,
    verb,
    aux,
    example: `${nork} ${nor} ${verb} ${aux}`,
  };
};

export const getNorNorkPresent = (verb: string) => {
  const getMarks = (nor: Nor, nork: Nork) => {
    const norMark: Record<Nor, string[]> = {
      Ni: ["na", "", "u", ""],
      Hi: ["ha", "", "u", ""],
      Hura: ["d", "", "u", ""],
      Gu: ["ga", "it", "u", ""],
      Zu: ["za", "it", "u", ""],
      Zuek: ["za", "it", "u", "zte"],
      Haiek: ["d", "it", "u", ""],
    };

    const norkMark: Record<Nork, string[]> = {
      Nik: ["t"],
      Hik: ["k/n"],
      Hark: [""],
      Guk: ["gu"],
      Zuk: ["zu"],
      Zuek: ["zue"],
      Haiek: ["te"], // -z- if has tute
    };

    return {
      nor: norMark[nor],
      nork: norkMark[nork],
    };
  };

  return norPronounds.flatMap((nor) => {
    return norkPronounds.map((nork) => {
      return getNorNork(Time.Present, verb, nor, nork, getMarks);
    });
  });
};

export const getNorNorkPast = (verb: string) => {
  const getMarks = (
    nor: Nor,
    nork: Nork
  ): {
    nor: string[];
    nork: string[];
  } => {
    if (nor === Nor.Hura) {
      // prettier-ignore
      const norHuraMark: Record<Nor, string[]> = {
        Ni:   ['nu',  '',   '',   'en'],
        Hi:   ['hu',  '',   '',   'en'],
        Hura: ['zu',  '',   '',   'en'],
        Gu:   ['ge',  'nu', '',   'en'],
        Zu:   ['ze',  'nu', '',   'en'],
        Zuek: ['ze',  'nu', 't',  'en'],
        Haiek:['zu',  '',   't',  'en'],
      }

      return {
        nor: norHuraMark[nor],
        nork: [""],
      };
    }

    if (nor === Nor.Haiek) {
      // prettier-ignore
      const norHaiekMark: Record<Nor, string[]> = {
        Ni:     ["ni", "",    "tu", "en"],
        Hi:     ["hi", "",    "tu", "en"],
        Hura:   ["zi", "",    "tu", "en"],
        Gu:     ["ge", "ni",  "tu", "en"],
        Zu:     ["ze", "nu",  "",   "en"],
        Zuek:   ["ze", "nu",  "t",  "en"],
        Haiek:  ["zu", "",    "t",  "en"],
      };

      return {
        nor: norHaiekMark[nor],
        nork: [""],
      };
    }

    const norMarkFirstAndSecondPerson: Record<
      Exclude<Nor, Nor.Hura | Nor.Haiek>,
      string[]
    > = {
      Ni: ["nind", "u"],
      Hi: ["hind", "u"],
      // Hura: ["d", "", "u", ""],
      Gu: ["gin", "u"],
      Zu: ["zint", "u"],
      Zuek: ["zint", "u", "zte"],
      // Haiek: ["d", "it", "u", ""],
    };

    // prettier-ignore
    const norkMark: Record<Nork, string[]> = {
      Nik: ["da",   "n"],
      Hik: ["a/na", "n"],
      Hark: [""],
      Guk: ["gu",   "n"],
      Zuk: ["zu",   "n"],
      Zuek: ["zue", "n"],
      Haiek: [""],
    };

    return {
      nor: norMarkFirstAndSecondPerson[nor],
      nork: norkMark[nork],
    };
  };

  return norPronounds.flatMap((nor) => {
    return norkPronounds.map((nork) => {
      return getNorNork(Time.Past, verb, nor, nork, getMarks);
    });
  });
};
