import {
  Nor,
  Nori,
  noriPronounds,
  Nork,
  norkPronounds,
  norPronounds,
} from "./pronoms";
import { Type, Time } from "./type";
import { Grammar } from "./grammar";

export const getNorNoriNorkPresent = (verb: string) => {
  const norMark: Record<Nor, string[]> = {
    Ni: ["di"],
    Hi: ["di"],
    Hura: ["di"],
    Gu: ["di", "zki"],
    Zu: ["di"], // TODO check
    Zuek: ["di", "zki"],
    Haiek: ["di", "zki"],
  };

  const noriMark: Record<Nori, string> = {
    Niri: "t",
    Hiri: "k/n(a/na)",
    Hari: "o",
    Guri: "gu",
    Zuri: "zu",
    Zuei: "zue",
    Haiei: "e",
  };
  const norkMark: Record<Nork, string> = {
    Nik: "t",
    Hik: "k/n",
    Hark: "",
    Guk: "gu",
    Zuk: "zu",
    Zuek: "zue",
    Haiek: "te",
  };

  const getMid = (nork: Nork, nori: Nori) => {
    const mid = noriMark[nori];

    if (nork === Nork.Hark) {
      if (nori === Nori.Niri) {
        return "da" + mid;
      }

      if (nori === Nori.Hari) {
        return "a/na" + mid;
      }
    }

    return mid;
  };

  return norPronounds.flatMap((nor) => {
    return noriPronounds.flatMap((nori) => {
      return norkPronounds.map((nork): Grammar => {
        const star = norMark[nor].join("");
        const mid = getMid(nork, nori);
        const end = norkMark[nork];

        const aux = star + mid + end;

        return {
          type: Type.NorNoriNork,
          time: Time.Present,
          nork,
          nori,
          nor,
          verb, // TODO to give something
          aux,
          example: null, // TODO
        };
      });
    });
  });
};

export const getNorNoriNorkPast = (verb: string) => {
  const norMark: Record<Nor, string[]> = {
    Ni: ["di"],
    Hi: ["di"],
    Hura: ["di"],
    Gu: ["di", "zki"],
    Zu: ["di"], // TODO check
    Zuek: ["di", "zki"],
    Haiek: ["di", "zki"],
  };

  const noriMark: Record<Nori, string> = {
    Niri: "t",
    Hiri: "k/n(a/na)",
    Hari: "o",
    Guri: "gu",
    Zuri: "zu",
    Zuei: "zue",
    Haiei: "e",
  };
  const norkMark: Record<Nork, string> = {
    Nik: "t",
    Hik: "k/n",
    Hark: "",
    Guk: "gu",
    Zuk: "zu",
    Zuek: "zue",
    Haiek: "te",
  };

  const getMid = (nork: Nork, nori: Nori) => {
    const mid = noriMark[nori];

    if (nork === Nork.Hark) {
      if (nori === Nori.Niri) {
        return "da" + mid;
      }

      if (nori === Nori.Hari) {
        return "a/na" + mid;
      }
    }

    return mid;
  };

  return norPronounds.flatMap((nor) => {
    return noriPronounds.flatMap((nori) => {
      return norkPronounds.map((nork): Grammar => {
        const star = norMark[nor].join("");
        const mid = getMid(nork, nori);
        const end = norkMark[nork];

        const aux = star + mid + end;

        return {
          type: Type.NorNoriNork,
          time: Time.Present,
          nork,
          nori,
          nor,
          verb, // TODO to give something
          aux,
          example: null, // TODO
        };
      });
    });
  });
};
