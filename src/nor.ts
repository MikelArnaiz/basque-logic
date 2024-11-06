import { Nor, norPronounds } from "./pronoms";
import { Type, Time } from "./type";
import { Grammar } from "./grammar";

const getMakeNor =
  (time: Time, marks: Record<Nor, string>) =>
  (nor: Nor): Grammar => {
    const isPlural = [Nor.Gu, Nor.Zuek, Nor.Haiek].includes(nor);
    const aux = marks[nor];

    return {
      type: Type.Nor,
      time,
      nork: null,
      nori: null,
      nor,
      verb: "-",
      aux,
      example: `${nor} ${isPlural ? "irakasleak" : "irakaslea"} ${aux}`,
    };
  };

export const getNorPresent = () => {
  const norMark: Record<Nor, string> = {
    Ni: "naiz",
    Hi: "haiz",
    Hura: "da",
    Gu: "gara",
    Zu: "zara",
    Zuek: "zarete",
    Haiek: "dira",
  };

  const makeNor = getMakeNor(Time.Present, norMark);
  return norPronounds.flatMap(makeNor);
};

export const getNorPast = () => {
  const norMark: Record<Nor, string> = {
    Ni: "nintzen",
    Hi: "hintzen",
    Hura: "zen",
    Gu: "ginen",
    Zu: "zinen",
    Zuek: "zineten",
    Haiek: "ziren",
  };

  const makeNor = getMakeNor(Time.Past, norMark);
  return norPronounds.flatMap(makeNor);
};
