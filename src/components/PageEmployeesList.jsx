import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { fetchEmployees } from "../redux/actions";


const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  componentDidMount() {
    if (this.props.was_in_the_list === true) {
       console.log(employees);
       console.log("yes");
      return;
    }
    this.props.fetchEmployees();
  }

  render() {
    const { user } = this.props;
    const { isLoading } = this.props;
    const { employees } = this.props;


    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
         <div style={{position: "absolute", top: 0,right: 0, width: "200px", textAlign:'right'}}>
        <h1> {user!=null?user.full_name:""}</h1>
  </div>
        <h1>Employees List:</h1>
        {console.log(employees)}
        {employees && employees.map((employee =>  <EmployeeLine   key={employee.id } employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    was_in_the_list:state.was_in_the_list,
    isLoading: state.isLoading,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)