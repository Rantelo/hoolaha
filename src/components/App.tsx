import * as React from 'react';
import { IReaderProps, IReaderState, EOrientation } from '../interfaces/ReaderInterface';
import book1 from '../samplebook/book1.js';
import { calculateRatio } from '../utils'
import '../styles/app.css';

class Reader extends React.Component<IReaderProps, IReaderState> {
  constructor(props: IReaderProps) {
    super(props);
    this.state = {
      ratio: {
        width: 0,
        height: 0,
        orientation: EOrientation.Portrait,
        scale: 1
      },
      view_w: 0,
      view_h: 0
    }
  }
  componentDidMount() {
    const { width: book_w, height: book_h } = book1.aspectRatio;
    const view_w = window.innerWidth;
    const view_h = window.innerHeight;

    const ratio = calculateRatio(book_w, book_h, view_w, view_h);

    this.setState({
      ratio,
      view_w,
      view_h
    })
  }

  render() {
    const { view_w, view_h } = this.state;
    const { width, height } = this.state.ratio;
    const style = { width, height };
    const styleWrapper = {
      width: view_w,
      height: view_h
    }

    return (
      <div className="reader-wrapper" style={styleWrapper}>
        <div className="reader" style={style} >
        </div>
      </div>
    )
  }
}

export default Reader;