import * as React from 'react';
import { IReaderProps, IReaderState, EOrientation } from '../interfaces/ReaderInterface';
import Text from './Text';
import Image, { TImageHeight} from './Image';
import book1 from '../samplebook/book1.js';
import { calculateRatio } from '../utils'
import '../styles/app.css';
import { TTextAlignment } from '../interfaces/TextInterface';

let w: number = 0;
let h: number = 0;
class Reader extends React.Component<IReaderProps, IReaderState> {
  constructor(props: IReaderProps) {
    super(props);
    this.state = {
      ratio: {
        height     : 0,
        orientation: EOrientation.Portrait,
        scale      : 1,
        width      : 0,
      }
    }
  }
  componentWillMount() {
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
  componentDidMount() {
    const { width: book_w, height: book_h } = book1.aspectRatio;
    const ratio = calculateRatio(book_w, book_h, w, h);

    this.setState({ ratio })
  }

  render() {
    const { width, height, scale } = this.state.ratio;
    const style = { width, height };
    const styleWrapper = {
      height: h,
      width: w,
    }

    const text_props = book1.pages[0]["0"];
    const image_props = book1.pages[0]["1"];

    return (
      <div className="reader-wrapper" style={styleWrapper}>
        <div className="reader" style={style} >
          <Text
            {...text_props}
            alignment={text_props.alignment as TTextAlignment}
            ratioScale={scale}
          />
          <Image
            {...image_props}
            height={image_props.height as TImageHeight}
            ratioScale={scale}
          />
        </div>
      </div>
    )
  }
}

export default Reader;