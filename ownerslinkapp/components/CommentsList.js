import React, { Component } from 'react';
import { 
  FlatList,
 } from 'react-native';

 import CommentBox  from './CommentBox'

export default class CommentsList extends Component {
  state = {
    selected : null
  }


  _keyExtractor = (item, index) => `list-item-${index}`;

  _renderItem = (item, index) => (
    <CommentBox
      id={item.id}
      index={index}
      comment={item}
    />
  );


  render() {
    const { comments } = this.props;

    return (
        <FlatList
        data={comments}
        renderItem={({ item, index }) => this._renderItem(item, index)}
        keyExtractor={this._keyExtractor} // dont'forget to declare _keyExtractor
        onEndReachedThreshold={0.5}
        />
    );
  }
}