/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements'

export default class RepositoryBox extends Component {

    _onPress = () => {
        this.props.onPressItem(this.props.repository);
    };

    render() {
        const { repository, index } = this.props;
        if (!repository) {
            return null
        } else {
            return (
                <TouchableOpacity onPress={this._onPress}>
                    <ListItem
                        roundAvatar
                        topDivider
                        leftAvatar
                        containerStyle={{ backgroundColor: index % 2 === 0 ? '#eff0f1' : '#ffffff' }}
                        title={repository.name}
                        subtitle={
                            <View style={styles.subtitleView}>
                                <Text style={[styles.subtitleText, { fontWeight: 'bold' }]}>{repository.owner.login}</Text>
                            </View>
                        }
                    />
                </TouchableOpacity>
            );

        }
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'column',
        paddingTop: 5,

    },
    subtitleText: {
        color: 'grey'
    }
});
