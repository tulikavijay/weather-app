import React from 'react';

class Icon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <img src={this.props.icon} />
      </div>
    )
  }
}

export default Icon
