  
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { save_user_in_the_store } from '../redux/actions'



class PageEmployeesLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: ""
          }
        this.onLogin = this.onLogin.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
    
        
      }
      usernameChanged(e)
      {
        this.setState({username: e.target.value});
      }

      onLogin(e)
      {
        e.preventDefault();
        let user_reg;
        fetch('http://localhost:3004/users')
          .then((data) => data.json())
          .then(
              (users) => { 
                user_reg = users.find((user) => user.username == this.state.username );
                if(user_reg)
                {
                    console.log(user_reg);
                  this.props.save_user_in_the_store(user_reg);
                  this.props.history.push("/list");
                }
              }
          )
      }
    
    



    render() {
        return (
          <div >
            <h1>Login</h1>
            <form onSubmit={e => this.onLogin(e)}>
                <div className="form-group">
                  <input onChange={this.usernameChanged}
                    type="text"
                    className="form-control"
                   />
                 </div>
                 <button type="submit">
                 login
            </button>
              </form>
            </div>
       
        );
      }
}
const mapStateToProps = (state /* , ownProps */) => {
    return {
        user: state.user
      };
  };
  const mapDispatchToProps = (dispatch) => ({
    save_user_in_the_store: user => dispatch(save_user_in_the_store(user))
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(PageEmployeesLogin));

