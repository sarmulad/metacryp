      
export const Colors = {
  Primary: "#1199FA",
  Purple:"#672DA8",
  Link: "#93d2fd",
  PrimaryDark: "#0F1C39",
  PrimaryDisable: "#1e3f6f",
  Background: "#0D0D2F",
  White: "#FEFEFE",
  Black: "#212121",
  Border: "#e3e3e3",
  Gray: "rgb(148, 155, 164)",
  GradientsRed: "linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%)",
  GrayBG: "#f7f9fa",
  Gradients: { PrimaryToSec: ["#1199FA", "#10C0E9"] },
};

const BreakPoints = {
  MobileS: "320px",
  MobileM: "375px",
  MobileL: "425px",
  Tablet: "768px",
  Laptop: "1024px",
  LaptopL: "1440px",
  Desktop: "2560px",
};

export const Devices = {
  MobileS: `(min-width: ${BreakPoints.MobileS})`,
  MobileM: `(min-width: ${BreakPoints.MobileM})`,
  MobileL: `(min-width: ${BreakPoints.MobileL})`,
  Tablet: `(min-width: ${BreakPoints.Tablet})`,
  Laptop: `(min-width: ${BreakPoints.Laptop})`,
  LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
  Desktop: `(min-width: ${BreakPoints.Desktop})`,
};
