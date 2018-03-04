import React from 'react';

class Icon extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.icon)
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
