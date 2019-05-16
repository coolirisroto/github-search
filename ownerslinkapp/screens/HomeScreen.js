
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from "react-redux";
import * as actions from '../redux/global/actions';
import { SearchBar } from 'react-native-elements';
import RepositoriesList from './../components/RepositoriesList'


const WAIT_INTERVAL = 1000;

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        search: '',
    };
    this.timer = null;
  }

  updateSearch = search => {
    clearTimeout(this.timer);
    this.setState({ search });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  _onPressItem =repository =>{
      console.log(repository)
  }

  triggerChange = () =>{
    const { search } = this.state;
    if(search){
        this.props.searchRepositories(search);
        this.props.logSearch(search);
    }
}
  render() {
    const { repositories, loadingRepositories } = this.props;
    const { search } = this.state;

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search Repositories..."
                onChangeText={this.updateSearch}
                value={search}
                showLoading={loadingRepositories}
                searchIcon={true}
            />
            <RepositoriesList 
            repositories={repositories}
            onPressItem={this._onPressItem}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
});


function mapStateToProps(state) {
    const { repositories, loadingRepositories  } = state.global;
    return {
        repositories,
        loadingRepositories
    };
}
  
export default connect(mapStateToProps, {
    searchRepositories: actions.searchRepositories,
    logSearch: actions.logSearch
})(HomeScreen);