//The purpose of this component is to display a single row out of our data into our ListView. 
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux'; //we can use the connect helper to call an action creator
import { CardSection } from './common';
import * as actions from '../actions'; // * as actions means give me everything that was exported from the actions file to get all the action creators

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { libraryProp, expanded } = this.props;
        if (expanded) {
            return (
                //remember to wrap your variables in curly braces
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 15 }}>{libraryProp.description}</Text>
                </CardSection>
            );
        }
    }

    /* The purpose of this component is also that we need to let it know wheter or not it is selected. 
    This means it needs to get access to our redux state. Once we get access to redux state, we can compare the value
    to the selected library id to this.props.library.id */
    render() {
        const { titleStyle } = styles;
        /* we now use this.props.library and will see library in our console log instead of libraries because
        we passed in the argument library to this component from the LibraryList component set to a variable called libraryProp */
        const { id, title } = this.props.libraryProp;
        //console.log(this.props);

        return (
            /* selectLibrary comes from our index.js file in the actions folder. It is our action creator. 
            When we pass in an argument and call it from the onPress function, it will generate the action and automatically
            dispatch it to all the different reducers in our application */

            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View style={{ overflow: 'hidden' }}>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

/* We use a mapStateToProps function here because we want to consume some piece of action 
level state and be able to use it within our component. Are state in the console log
only displays are keys that we set to our two reducers
in the index.js reducer folder */
const mapStateToProps = (state, ownProps) => {
    // console.log(state.selectedLibraryId);
    // console.log(ownProps);
    const expanded = state.selectedLibraryId === ownProps.libraryProp.id;
    return { expanded };
};

/* 
You dont need to create a mapStateToProps function when sending actions to components in the connect redux function.
We set null as the first argument because we aren't sending any mapStateToProps method. The second argument we pass in
our entire actions object were we imported at the top of the file. This says take these action creators and make sure that
when ever they are called the actions go to the right place, and then pass these actions down into the component as props.
*/
export default connect(mapStateToProps, actions)(ListItem);
