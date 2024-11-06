import { Nor, Nori, noriPronounds, norPronounds } from "./pronoms";
import { Type, Time } from "./type";
import { Grammar } from "./grammar";

const getNorNori = (
  time: Time,
  norMark: Record<Nor, string[]>,
  noriMark: Record<Nori, string[]>,
  verb: string,
  nor: Nor,
  nori: Nori
): Grammar => {
  // const isPlural = [Nori.Guri, Nori.Zuei, Nori.Haiei].includes(nori);
  const star = norMark[nor].join("");
  const end = noriMark[nori].join("");
  const aux = (star + end).replace("tute", "tuzte");

  return {
    type: Type.NorNori,
    time: time,
    nork: null,
    nori,
    nor,
    verb,
    aux,
    example: `${nori} ${
      nor === Nor.Haiek ? "sagarrak" : nor.toLowerCase()
    } gustatzen ${aux}`,
  };
};

export const getNorNoriPresent = (verb: string) => {
  const norMark: Record<Nor, string[]> = {
    Ni: ["na", "tza", ""],
    Hi: ["ha", "tza", ""],
    Hura: ["", "zai"],
    Gu: ["ga", "tza", "zki"],
    Zu: ["za", "tza", "zki"],
    Zuek: ["za", "tza", "zki"],
    Haiek: ["", "zai", "zki"],
  };

  const noriMark: Record<Nori, string[]> = {
    Niri: ["t"],
    Hiri: ["k/n"],
    Hari: ["o"],
    Guri: ["gu"],
    Zuri: ["zu"],
    Zuei: ["zue+te"], // TOD]O
    Haiei: ["e"],
  };

  return norPronounds.flatMap((nor) => {
    return noriPronounds.map((nori) => {
      return getNorNori(Time.Present, norMark, noriMark, verb, nor, nori);
    });
  });
};

export const getNorNoriPast = (verb: string) => {
  const norMark: Record<Nor, string[]> = {
    Ni: ["nin", "tzai", ""],
    Hi: ["ha", "tzai", ""],
    Hura: ["zi", "tzai", ""],
    Gu: ["gin", "tzai", "zki"],
    Zu: ["zin", "tzai", "zki"],
    Zuek: ["zin", "tzai", "zki"],
    Haiek: ["zi", "tzai", "zki"],
  };

  const noriMark: Record<Nori, string[]> = {
    Niri: ["da", "n"],
    Hiri: ["a/na", "n"],
    Hari: ["o", "n"],
    Guri: ["gu", "n"],
    Zuri: ["zu", "n"],
    Zuei: ["zue+te", "n"], // TODO
    Haiei: ["e", "n"],
  };

  return norPronounds.flatMap((nor) => {
    return noriPronounds.map((nori) => {
      return getNorNori(Time.Past, norMark, noriMark, verb, nor, nori);
    });
  });
};
