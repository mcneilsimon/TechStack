//The purpose of this reducer is to identify which row is selected
export default (state = null, action) => {
    //We have this to figure out what this reducer does, and what action it responds too. Our reducer needs to respond to type select_library
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
};  
