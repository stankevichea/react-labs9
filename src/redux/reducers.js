import { EMPLOYEES_LOADED, EMPLOYEES_CREATED} from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {  
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case EMPLOYEES_CREATED: {
   
      const newEmployee = action.payload;
      const newEmployees = [...state.employees, newEmployee];
      return Object.assign({}, state, { employees: newEmployees });
    }
    default:
        return state
  }
}

export default appReducer;