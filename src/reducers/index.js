import { ADD_TODO } from '../actions/index';
import {  RENDER_TODO_LIST } from '../actions/index';

const initialState = {
    toDoList: []
  };

const toDoApp = (state = initialState, action) =>{
    const newState = {...state};
    console.log({newState});
    
    switch (action.type) {
        case ADD_TODO:

          let newToDoList = [
            ...state.toDoList,
            {
              ...action.toDoItems
            }
          ];
          return {
            ...state,
            toDoList: newToDoList
          };
        
        case  RENDER_TODO_LIST: 
          return {
              ...state,
              toDoList: action.toDoList
          }
        default:
          return newState;
      }
}

export default toDoApp;