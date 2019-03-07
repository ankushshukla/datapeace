import React from 'react';
import Pagination from './Pagination';
import { apiCall} from "../services/api";
import Search from './Search';
import {Link} from 'react-router-dom';
import Info from './Info';
import Main from './Main';
import sortBy from 'sort-by';






class Data extends React.Component {
    constructor() {
        super();

        
        this.state = {
            exampleItems: [],
            exampleItems1:[],
            pageOfItems: [],
            ankush:"false"
        };

        this.onChangePage = this.onChangePage.bind(this);
        this.sortAscending=this.sortAscending.bind(this);
        this.sortAscending1=this.sortAscending1.bind(this);
        this.sortAscending2=this.sortAscending2.bind(this);
        this.sortAscending3=this.sortAscending3.bind(this);
        this.sortAscending4=this.sortAscending4.bind(this);
        this.sortAscending5=this.sortAscending5.bind(this);
        this.sortAscending6=this.sortAscending6.bind(this);
        this.sortAscending7=this.sortAscending7.bind(this);
        this.sortAscending8=this.sortAscending8.bind(this);
        
        
    }
    componentDidMount(){
        apiCall("get", `http://demo9197058.mockable.io/users`).then((data)=>{
            this.setState({exampleItems: data})
            this.setState({exampleItems1: data})
            
            });
    }
        

    sortAscending = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
           const nameA=a.first_name.toLowerCase();
           const nameB=b.first_name.toLowerCase();
           if(nameA<nameB){
               return -1
           }
           if(nameA>nameB){
               return 1
           }
           return 0
           
        });
        
        
            this.setState({exampleItems: array3})
            this.setState({ankush: "first_name"})
    
    }
        
    sortAscending1 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
            const nameA=a.last_name.toLowerCase();
            const nameB=b.last_name.toLowerCase();
            if(nameA<nameB){
                return -1
            }
            if(nameA>nameB){
                return 1
            }
            return 0
            
         });
            this.setState({exampleItems: array3})
            this.setState({ankush: "last_name"})
    }
    sortAscending2 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
            const nameA=a.company_name.toLowerCase();
            const nameB=b.company_name.toLowerCase();
            if(nameA<nameB){
                return -1
            }
            if(nameA>nameB){
                return 1
            }
            return 0
            
         });
            this.setState({exampleItems: array3})
            this.setState({ankush: "company_name"})
    }
    sortAscending3 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
            const nameA=a.city.toLowerCase();
            const nameB=b.city.toLowerCase();
            if(nameA<nameB){
                return -1
            }
            if(nameA>nameB){
                return 1
            }
            return 0
            
         });
            this.setState({exampleItems: array3})
            this.setState({ankush: "city"})
    }
    sortAscending4 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
            const nameA=a.city.toLowerCase();
            const nameB=b.city.toLowerCase();
            if(nameA<nameB){
                return -1
            }
            if(nameA>nameB){
                return 1
            }
            return 0
            
         });
            this.setState({exampleItems: array3})
            this.setState({ankush: "state"})
    }
    sortAscending5 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
                return a.zip-b.zip
        });
            this.setState({exampleItems: array3})
            this.setState({ankush: "zip"})
    }
    sortAscending6 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
            const nameA=a.email.toLowerCase();
            const nameB=b.email.toLowerCase();
            if(nameA<nameB){
                return -1
            }
            if(nameA>nameB){
                return 1
            }
            return 0
            
         });
            this.setState({exampleItems: array3})
            this.setState({ankush: "email"})
    }
    sortAscending7 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
            const nameA=a.web.toLowerCase();
            const nameB=b.web.toLowerCase();
            if(nameA<nameB){
                return -1
            }
            if(nameA>nameB){
                return 1
            }
            return 0
            
         });
            this.setState({exampleItems: array3})
            this.setState({ankush: "web"})
    }
    sortAscending8 = ()=> {
        const array3=this.state.exampleItems1.sort(function(a,b){
                return a.age-b.age
        });
            this.setState({exampleItems: array3})
            this.setState({ankush: "age"})
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
            {console.log("Data running")}
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
                                <td onClick={this.sortAscending}><strong><a>FirstName^</a></strong></td>
                                <td onClick={this.sortAscending1}><strong><a>LastName^</a></strong></td>
                                <td onClick={this.sortAscending2}><strong><a>CompanyName^</a></strong></td>
                                <td onClick={this.sortAscending3}><strong><a>City^</a></strong></td>
                                <td onClick={this.sortAscending4}><strong><a>State^</a></strong></td>
                                <td onClick={this.sortAscending5}><strong><a>Zip^</a></strong></td>
                                <td onClick={this.sortAscending6}><strong><a>Email^</a></strong></td>
                                <td onClick={this.sortAscending7}><strong><a>Web^</a></strong></td>
                                <td onClick={this.sortAscending8}><strong><a>Age^</a></strong></td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.pageOfItems.map(function(item,index){
                            return(
                            <tr key={index} >
                            <td> <Link to={`/user/${item.id}`}>{item.first_name}</Link> </td>                           
                            <td>{item.last_name}</td>
                            <td>{item.company_name}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.zip}</td>
                            <td>{item.email}</td>
                            <td><a>{item.web}</a></td>
                            <td>{item.age}</td>
                            </tr>
                            )
                            })}
                        
                            </tbody>
                        </table>
                        <div className="container">
                        <div className="text-center">
                        <Pagination items={this.state.exampleItems} value={this.state.ankush} onChangePage={this.onChangePage} />
                        
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
