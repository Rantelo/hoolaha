export enum EOrientation {
  Landscape = "landscape",
  Portrait  = "portrait"
}
export interface IRatio {
  height     : number,
  orientation: EOrientation,
  scale      : number,
  width      : number,
}

export interface IReaderProps {}
export interface IReaderState {
  ratio : IRatio,
  view_h: number,
  view_w: number,
}
