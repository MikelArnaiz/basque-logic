import { Type, Time } from "./type";
import { Nor, Nori, Nork } from "./pronoms";

export type Grammar = {
  time: Time;
  verb: string;
  aux: string;
  example: string | null;
} & (
  | {
      type: Type.Nor;
      nork: null;
      nori: null;
      nor: Nor;
    }
  | {
      type: Type.NorNori;
      nork: null;
      nori: Nori;
      nor: Nor;
    }
  | {
      type: Type.NorNork;
      nork: Nork;
      nori: null;
      nor: Nor;
    }
  | {
      type: Type.NorNoriNork;
      nork: Nork;
      nori: Nori;
      nor: Nor;
    }
);
