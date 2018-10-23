import React from 'react';
import Button from './StandardButton';

class ToggleTheme extends React.Component {

	constructor(props){
		super(props);

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(event) {

		const selectedTheme = event.target.value;
		document.body.removeAttribute("class"); 
		document.body.classList.add("js-theme-" + selectedTheme);

	}

	render() {
		const btns = [
		{id: 1, value: 'dark', title: 'Enable dark theme'},
		{id: 2, value: 'light', title: 'Enable light theme'}
	];

		const themeBtns = btns.map ((btn, index) => 
			      	 <li className="theme__item"  key={index}>
			      	 	<Button key={btn.id} cssClass="theme__button js-theme-button" value={btn.value} title={btn.title} onclick={this.handleToggle} />
			      	 </li>
			      	 );
		return (
				<div className="theme">
			      <ul className="theme__list">
			      	{themeBtns}
			      </ul>
			    </div>
			);
	}
}

export default ToggleTheme;