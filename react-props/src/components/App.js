import React, { Component } from 'react';
import { RandomColor } from './RandomColor';

const colors = [];
//css that lives in react
//express colors as a hex?
//express colors as 

const getRandomColor = () => {
//takes in colors array, outputs a random one
};

export default class App extends Component {
    state = {
      color: getRandomColor(),
    }

    selectColor = color => {
      this.setState({ color });
    }

    componentDidUpdate(prevProps, prevState) {
      const { prevColor } = prevState;
      const { color } = this.state;
      (color === prevColor) && this.setState({ background: 'cssbasedbackgroundstuff' });
      (color !== prevColor) && this.setState({ background: color });
    }

    render() {
      const { background } = this.state;
      return < RandomColor background={background} />;
    }
}
