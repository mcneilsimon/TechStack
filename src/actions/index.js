//An action creator is a JS function. Remember to immediately export it. Below is an action creator function.

/*
    An action creator is a JS function that is also used to perform an action. When ever we call an action the returned function
    will be dispatched to us and returned to all the reducers. The payload value libraryId is the parameter that we send in.
    Meaning that when we call selectLibrary in some component and pass in an argument, payload will have the argument value assigned
    to it.
*/
export const selectLibrary = (libraryId) => {
    return {
        //an object with a type property is an action. The action is wrapped by a function which is reffered to an action creator
        type: 'select_library',
        payload: libraryId,
    };
};

