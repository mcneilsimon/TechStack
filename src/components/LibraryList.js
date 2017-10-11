//The purpose of this is to render our LibraryList to the user
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux'; //this allows to have access to all of our redux state object from our redux store.
import ListItem from './ListItem';

class LibraryList extends Component {
    /*
    Remember this is a lifecycle method, and just by defining it, 
    the instant that our component is about to be rendered to the device of the screen, any code that we place inside of here
    will be automatially called when this component is launched
    */
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        //initialize a data source for this list view. The purpose of this is just to display our list of data
        this.dataSource = ds.cloneWithRows(this.props.dataToShow);
        //console.log(this.props);
    }

    render() {
        return (
            <ListView 
                dataSource={this.dataSource}
                
                /* The renderRow function simply returns a component that renders the row.
                 this is kinda like a forEach loop. It automatically gets the data from dataSource and gives it to the
                 parameter set equal to render row. In this case this variable is called library
                 Here we also pass the renderRow results to our ListItem component in the name of libraryProp */
                renderRow={(library) => <ListItem libraryProp={library} />}
            />
        );
    }
}

/*the purpose of this function is to take our global state object (state) and it will map it in some fashion to
take some property of that state object and then provide them as props to our components of LibraryList*/
const mapStateToProps = state => {
    return { dataToShow: state.libraries }; //state.libraries is a reference to the key name of all objects that we saw in the console log 
    //here we are returning an object so that it can be used in our component LibraryList as a props object
};


/*the connect function goes back to the store giving us our current state function
and then the connect tags sends it down to our LibraryList component (this file) */
export default connect(mapStateToProps)(LibraryList); 

