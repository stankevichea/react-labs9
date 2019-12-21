import { EMPLOYEES_LOADED, EMPLOYEES_CREATED,EMPLOYEES_BEFORE_LOAD,EMPLOYEES_LOAD_ERROR} from './constants';

export const initialState = {
  employees: [],
  was_int_the_list:false,
  isLoading:true,
  error: null

};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) { 

    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees,was_int_the_list:true, isLoading: false });
    }
    case EMPLOYEES_CREATED: {
   
      const newEmployee = action.payload;
      const newEmployees = [...state.employees, newEmployee];
      return Object.assign({}, state, { employees: newEmployees });
    }
    case EMPLOYEES_BEFORE_LOAD: {
      return Object.assign({}, state, { error:null,isLoading: true  });
    }

    case EMPLOYEES_LOAD_ERROR: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }
    default:
        return state
  }
}

export default appReducer;