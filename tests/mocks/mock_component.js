import React from 'react';

export default function getMockComponent(name){
  return React.createClass({
    displayName: name,
    propTypes: {
      children: React.PropTypes.node,
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>;
    }
  });
}
