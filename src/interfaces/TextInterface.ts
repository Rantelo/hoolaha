export interface ITextProps {
  content: string,
  size: number,
  x: number,
  y: number
};
export interface ITextState {};

export enum ETextFonts {
  OpenSans = "Open Sans",
}
export enum ETextDecoration { }
export enum ETextAlignment { }
export enum ETextStyle {
  Normal = "normal",
  Italic = "italic"
}
export enum ETextWeight {
  Light = 300,
  Regular = 400,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,

}

export interface IText {
  content: string,
  font: ETextFonts,  //web fonts || importe,
  size: number,
  decoration: ETextDecoration,
  alignment: ETextAlignment,
  weight: number,
  style: ETextStyle,
  x: number,
  y: number,
  width: number
}