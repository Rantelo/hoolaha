export enum EOrientation {
  Landscape = "landscape",
  Portrait = "portrait"
}
export interface IRatio {
  width: number,
  height: number,
  orientation: EOrientation,
  scale: number
}

export interface IReaderProps {}
export interface IReaderState {
  ratio: IRatio,
  view_w: number,
  view_h: number
}
