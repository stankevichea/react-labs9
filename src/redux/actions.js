import { EMPLOYEES_LOADED,EMPLOYEES_CREATED } from './constants';

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