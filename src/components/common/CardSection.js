//Adds more detail to each Card, and allows us to add specific content within each card area

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5, //provides spacing between the content inside the border
        backgroundColor: '#fff',
        justifyContent: 'flex-start', //flex-box property to position elements on the left side
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
};

export { CardSection };
