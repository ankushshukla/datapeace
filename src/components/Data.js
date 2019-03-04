import React from 'react';
import Pagination from './Pagination';
import { apiCall} from "../services/api";
import Search from './Search';
import {Link} from 'react-router-dom';
import Info from './Info';
import Main from './Main';






class Data extends React.Component {
    constructor() {
        super();

        
        this.state = {
            exampleItems: [],
            exampleItems1:[],
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
        
    }
    componentDidMount(){
        apiCall("get", `http://demo9197058.mockable.io/users`).then((data)=>{
            this.setState({exampleItems: data})
            this.setState({exampleItems1: data})
            
            console.log(this.state.exampleItems)});
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }
    onUpdateUser(term){
        console.log(term);
        
            const array=[];
                this.state.exampleItems1.map((ankush) => {
                        if(ankush.first_name.toLowerCase().indexOf(term.toLowerCase()) !== -1){
                                array.push(ankush);
                        }
                })
                        this.setState({exampleItems: array})

        
    }

    render() {
      
        return (
            <div>

            <div>
            <nav className={"navbar navbar-dark bg-primary"}>
                    <a className={"navbar-brand"} href="#" style={{color:"white"}}>
                    DataPeace
                    </a>
            </nav>
            <Search onSearchTermChange={term=> this.onUpdateUser(term)} auto={this.state.exampleItems}/>
            </div>
            <div className={'container'}>
            
            <div className={"card postcd"}>
            
                    <div>
                        <table className={'table table-striped table-ad-post'}>
                            <thead>
                            <tr>
                                <td><strong>FirstName</strong></td>
                                <td><strong>LastName</strong></td>
                                <td><strong>CompanyName</strong></td>
                                <td><strong>City</strong></td>
                                <td><strong>State</strong></td>
                                <td><strong>Zip</strong></td>
                                <td><strong>Email</strong></td>
                                <td><strong>Web</strong></td>
                                <td><strong>Age</strong></td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.pageOfItems.map(item =>
                            <tr >
                           <td><Link to={`/user/${item.id}`}>{item.first_name}</Link> </td>                           
                            <td>{item.last_name}</td>
                            <td>{item.company_name}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.zip}</td>
                            <td>{item.email}</td>
                            <td><a>{item.web}</a></td>
                            <td>{item.age}</td>
                            </tr>
                            
                            )}
                        
                            </tbody>
                        </table>
                        <div className="container">
                        <div className="text-center">
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                        
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        );
    }
}

export default Data;
