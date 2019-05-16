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
} from 'react-native';
import { ListItem } from 'react-native-elements'
import Moment from 'moment';

export default class CommentBox extends Component {

    render() {
        const { comment, index } = this.props;
        if (!comment) {
            return null
        } else {
            return (
                    <ListItem
                        roundAvatar
                        topDivider
                        leftAvatar={{ source: { uri: comment.user.avatar_url } }}
                        containerStyle={{ backgroundColor: index % 2 === 0 ? '#eff0f1' : '#ffffff' }}
                        title={comment.body}
                        subtitle={
                            <View style={styles.subtitleView}>
                                <Text style={[styles.subtitleText, { fontWeight: 'bold' }]}>{Moment(comment.created_at).format('llll')}</Text>
                            </View>
                        }
                    />
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
