export interface IText {
  alignment : TTextAlignment,
  content   : string,
  decoration: ETextDecoration,
  font      : ETextFonts,        //web fonts || importe,
  size      : number,
  style     : ETextStyle,
  weight    : number,
  width     : number
  x         : number,
  y         : number,
}

export interface ITextProps {
  alignment : TTextAlignment,
  color     : IColor,
  content   : string,
  ratioScale: number,
  size      : number,
  width     : number
  x         : number,
  y         : number,
};
export interface ITextState {};

export enum ETextFonts {
  OpenSans = "Open Sans",
}
export enum ETextDecoration { }
export type TTextAlignment = "center" | "justify" | "left" | "right";
export enum ETextStyle {
  Normal = "normal",
  Italic = "italic"
}
export enum ETextWeight {
  Light     = 300,
  Regular   = 400,
  SemiBold  = 600,
  Bold      = 700,
  ExtraBold = 800,
}
export interface IColor {
  r: number,
  g: number,
  b: number,
  a: number,
}