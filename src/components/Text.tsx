import * as React from 'react';
import { ITextProps, ITextState } from '../interfaces/TextInterface';
import { calculateColor } from '../utils';

class Text extends React.Component<ITextProps, ITextState> {
  constructor(props: ITextProps) {
    super(props);
  }
  static defaultProps = {
    alignment: 'left',
    content  : 'text',
    size     : 14,
    width    : 100,
    x        : 0,
    y        : 0,
  }

  render() {
    const { alignment, color, content, ratioScale, size, width, x, y } = this.props;
    const styleP = {
      fontSize : ratioScale * size,
      left     : ratioScale * x,
      textAlign: alignment,
      top      : ratioScale * y,
      width    : ratioScale * width,
      color    : calculateColor(color)
    };

    return (
      <p className="text" style={styleP} >
        {content}
      </p>
    );
  }
}

export default Text;