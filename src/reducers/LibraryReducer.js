/*A reducer is something that returns some amount of data. A reducer will be run as soon as our application boots up. We have to make
sure we return some amount of initial state like we did here with the initial data from the json library*/
import data from './LibraryList.json';

//when this is runned the reducer will return a library of objects by default since there is no specific action implemented
export default () => data; //simple reducer, when ever it runs, it returns the information in the LibraryList.json file
