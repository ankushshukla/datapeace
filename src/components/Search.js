import React from 'react'; 

export default class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {term: ''}
        this.onInputChange = this.onInputChange.bind(this);
		
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render(){
		const array1=[];
		return(
			<div className="float-left">
				<input
				placeholder="Search(By FirstName)"
				value={this.state.term}
				onChange ={event => this.onInputChange(event.target.value)} />
				<p>{this.props.auto.length} Items Found</p>
			</div>
		);
	}
}