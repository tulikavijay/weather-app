import React from 'react';

class StandardButton extends React.Component {


	render() {

		
		return (
				<button className={this.props.cssClass} value={this.props.value} title={this.props.title} onClick={this.props.onclick} >{this.props.value}</button>
			);
	}
}

export default StandardButton;