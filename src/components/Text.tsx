import * as React from 'react';
import { ITextProps, ITextState } from '../interfaces/TextInterface';

class Text extends React.Component<ITextProps, ITextState> {
  constructor(props: ITextProps) {
    super(props);
  }
  static defaultProps = {
    x: 0,
    y: 0,
    content: 'text',
    size: 14
  }

  render() {
    const { size, x, y, content } = this.props;

    return (
      <p
        className="text"
        style={{
          fontSize: size,
          left: x,
          top: y
        }}
      >
        {content}
      </p>
    );
  }
}

export default Text;