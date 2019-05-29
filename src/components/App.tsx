import * as React from 'react';
import { IReaderProps, IReaderState, EOrientation } from '../interfaces/ReaderInterface';
import Text from './Text';
import book1 from '../samplebook/book1.js';
import { calculateRatio } from '../utils'
import '../styles/app.css';
import { TTextAlignment } from '../interfaces/TextInterface';

class Reader extends React.Component<IReaderProps, IReaderState> {
  constructor(props: IReaderProps) {
    super(props);
    this.state = {
      ratio: {
        height     : 0,
        orientation: EOrientation.Portrait,
        scale      : 1,
        width      : 0,
      },
      view_w: 0,
      view_h: 0,
    }
  }
  componentDidMount() {
    const { width: book_w, height: book_h } = book1.aspectRatio;
    const view_w = window.innerWidth;
    const view_h = window.innerHeight;

    const ratio = calculateRatio(book_w, book_h, view_w, view_h);

    this.setState({
      ratio,
      view_h,
      view_w,
    })
  }

  render() {
    const { view_w, view_h } = this.state;
    const { width, height, scale } = this.state.ratio;
    const style = { width, height };
    const styleWrapper = {
      height: view_h,
      width: view_w,
    }

    return (
      <div className="reader-wrapper" style={styleWrapper}>
        <div className="reader" style={style} >
          <Text
            {...book1.pages[0][0]}
            alignment={book1.pages[0][0].alignment as TTextAlignment}
            ratioScale={scale}
          />
        </div>
      </div>
    )
  }
}

export default Reader;