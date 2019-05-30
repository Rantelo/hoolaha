import * as React from 'react';

export interface IImageProps {
  height: TImageHeight,
  ratioScale: number,
  src   : string,
  width : number,
  x     : number,
  y     : number,
}
export type TImageHeight = number | "auto";
export interface IImageState {}

class Image extends React.Component<IImageProps, IImageState> {
  static defaultProps = {
    height: "auto",
    src   : "https://firebasestorage.googleapis.com/v0/b/hoolaha-10g.appspot.com/o/pics%2Fcolibri.jpg?alt=media&token=be905693-2057-4468-8dd1-846ea6267248",
    width : 300,
    x     : 20,
    y     : 20,
  }

  render() {
    const { height, ratioScale, src, width, x, y } = this.props;
    const styleImg = {
      width : ratioScale * width,
      height: (typeof height === "number") ? ratioScale * height: height,
      top   : y,
      left  : x,
    }

    return (
      <img
        className="image"
        src={src}
        style={styleImg}
        alt="hoolaha image"
      />
    )
  }
}

export default Image;