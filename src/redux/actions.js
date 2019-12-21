import { EMPLOYEES_LOADED,EMPLOYEES_CREATED,EMPLOYEES_BEFORE_LOAD,EMPLOYEES_LOAD_ERROR } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}
export const employeesCreated = (employee) => {
  return {
    type: EMPLOYEES_CREATED,
    payload: {
      employee
    }
  };
}
export const employeesbeforeLoad = () => {
  return {
    type: EMPLOYEES_BEFORE_LOAD,
    payload: {}
  };
};
export const employeesLoadError = (error) => {
  return {
    type: EMPLOYEES_LOAD_ERROR,
    payload: {
      error
    }
  };
};

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(employeesbeforeLoad());
    return fetch('http://localhost:3004/employees')
      .then((data) => data.json())
      .then(
        (employees) => dispatch(employeesLoaded(employees)),
        (error) => dispatch(employeesLoadError(error))
      )
  } 
};
