import { combineReducers } from 'redux';
 /*combineReducers is a property out of the redux library. This allows us to use more than one reducer when we create our store */

import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//We assign our different reducers to a specific key value.
export default combineReducers({
    /* Here we created a reducer that has a key named libraries and selectedLibraryId. 
    A reducer is a function that returns some amount of data. In this case
    the data returns the LibraryReducer and the SelectionReducer info in an array.
    The key is important because w/e name we provide it, is how it will show up on our state object */ 
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
