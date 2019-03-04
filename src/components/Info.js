import React from 'react'; 
import { apiCall} from "../services/api";


export default class Info extends React.Component {
	constructor() {
        super();

        
        this.state = {
            exampleItems: {}
        };
    }
    componentDidMount(){
        apiCall("get", `http://demo9197058.mockable.io/users`).then((data)=>{
			const myData=data[this.props.match.params.id-1];
			console.log(myData);
            this.setState({exampleItems: myData});
			
		});
    }
	
	render(){

		//console.log(this.props.match.params.id)
		// console.log(this.state.exampleItems)
		const item=this.state.exampleItems;
		return(
			<div>
			 <nav className={"navbar navbar-dark bg-primary"}>
                    <a className={"navbar-brand"} onClick={this.props.history.goBack} style={{color:"white"}}>
					<i class="fas fa-arrow-left"></i>
                    </a>
            </nav>
			<div className={"container text-center"}>
			<table className={'table table-striped table-ad-post'}>
                            <tbody>
                            <tr>
                                <td><strong>FirstName</strong></td>
								<td>{item.first_name}</td> 
							</tr>
							<tr>
                                <td><strong>LastName</strong></td>
								<td>{item.last_name}</td> 
							</tr>
							<tr>
                                <td><strong>CompanyName</strong></td>
								<td>{item.company_name}</td> 
							</tr>
							<tr>
                                <td><strong>City</strong></td>
								<td>{item.city}</td> 
							</tr>
							<tr>
                                <td><strong>State</strong></td>
								<td>{item.state}</td> 
							</tr>
							<tr>
                                <td><strong>Zip</strong></td>
								<td>{item.zip}</td> 
							</tr>
							<tr>
                                <td><strong>Email</strong></td>
								<td>{item.email}</td> 
							</tr>
							<tr>
                                <td><strong>Web</strong></td>
								<td><a>{item.web}</a></td> 
							</tr>
							<tr>
                                <td><strong>Age</strong></td>
								<td>{item.age}</td> 
							</tr>
                        
                            </tbody>
                        </table>
			</div>
			</div>
		);
	}
}