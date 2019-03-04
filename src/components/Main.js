import React from "react";
import Data from "./Data";
import Info from "./Info";
import { Switch, Route, withRouter} from "react-router-dom";



class Main extends React.PureComponent {
  // constructor(){
  //   this.state={ankush:{}}
  // }
  render(){
  return (
      <div>
      <Switch>
          <Route  path={'/'} exact component={Data}/>
          <Route  path={'/user/:id'} exact component={Info}/>


          {/* <Route  path={'/user/:id'} render={props => {
            return (
              <Info 
                data={item}
                {...props}
              />
            );
          }}/> */}


      </Switch>
    </div>
  );
};
}

export default withRouter(Main);
