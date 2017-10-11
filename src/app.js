import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; /*is JSX code. It works together with the store. The store is what holds our application state
The purpose of the provider is what translates all the data into the store so that it can be used on the react side of our application. 
So the store is the thing that holds our state, while provider is communication glue with react. 
*/
import { createStore } from 'redux'; //createStore is what creates our store objects like we saw in the Redux online example
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        /*here we created a store (this is created when the app launches) and passed it to the provider tag. 
        We also created a reducer (reducers) and also passed it to the store from the createStore property as a parameter */

        /* A provider can only have one child component. To fix this, wrap the header component inside a view tag, 
            and other tags you will use. Provider tag is all about facilating communication  between react and redux.
            Important to note that reducers are what produces are application 'state'. As in data that automatically gets stored
            within our app. */
        <Provider store={createStore(reducers)}>
             <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
