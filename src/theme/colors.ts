import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FFC730",
  primaryBright: "#FFC730",
  primaryDark: "#FFC730",
  secondary: "#007A5E",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
  cardgang: '#0F6DEC', //blue
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  success: '#FFB400',
  primary: "#FFC730", // main 1
  secondary: "#FFB400", // main 1
  background: "#F9F9FA",
  backgroundDisabled: "#F9F9FA",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#5C3904",
  textDisabled: "#AB955E",
  textSubtle: "#B97309",
  borderColor: "#E9EAEB",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  success: '#FFB400',// main 1
  primary: "#FFC730", // main 1-2
  secondary: "#FFB400", // main 1
  // background: "#22262D", // 더어두운거
  background: "#343941", // 배경
  // backgroundDisabled: "#3c3742",
  backgroundDisabled: "#343941",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#ffffff",
  textDisabled: "#AB955E", // disabled
  textSubtle: "#B97309", // dark1
  borderColor: "#524B63",
  card: "#22262D", // 더 어두운거
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
