import React, { Component } from 'react';
import { 
  FlatList,
 } from 'react-native';

 import RepositoryBox  from './RepositoryBox'

export default class RepositoriesList extends Component {
  state = {
    selected : null
  }

 
  _keyExtractor = (item, index) => `list-item-${index}`;

  _renderItem = (item, index) => (
    <RepositoryBox
      id={item.id}
      index={index}
      onPressItem={this.props.onPressItem}
      repository={item}
    />
  );


  render() {
    const { repositories } = this.props;
    return (
        <FlatList
        data={repositories}
        renderItem={({ item, index }) => this._renderItem(item, index)}
        keyExtractor={this._keyExtractor} // dont'forget to declare _keyExtractor
        onEndReachedThreshold={0.5}
        />
    );
  }
}