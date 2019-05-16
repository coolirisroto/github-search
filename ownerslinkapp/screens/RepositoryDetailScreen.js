import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Linking
} from 'react-native';
import { connect } from "react-redux";
import { Icon, Avatar, Divider } from 'react-native-elements';
import * as actions from '../redux/global/actions';
import CommentsList from './../components/CommentsList';
import Moment from 'moment';

class RepositoryDetailScreen extends Component {
    constructor(props) {
        super(props);
        const { repository, getComments } = this.props;
        getComments(repository.owner.login, repository.name);
      }
    static navigationOptions = ({ navigation }) => ({
        title: `Repository ${navigation.state.params.title}`,
        headerLeft: (
            <View style={{paddingLeft:15}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Icon color="#FFFFFF" name="close" />
                </TouchableOpacity>
            </View>
        ),
        headerRight: null
    })

    _goToURL(url) {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log('Don\'t know how to open URI');
          }
        });
      }    
    render() {
        const { repository } = this.props;
        if(!repository){
            return null
        }
        const renderComments = ()=>{
            const { comments } = this.props;
            if(comments.length<=0){
                return (<Text>No comments</Text>);
            }
            else{
                return (<CommentsList comments={comments}/>)
            }
        }
        console.log(repository)
        return (
        <View style={styles.container}>
            <Avatar
            rounded
            source={{
                uri:
                repository.owner.avatar_url,
            }}
            /> 
            <Text>Owner: {repository.owner.login}</Text>
            <Text>Licence: {repository.license.name}</Text>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={styles.textRow}>Repository: {repository.name}</Text>
            <Text style={styles.textRow}>{repository.description}</Text>
            <Text style={{color: 'blue'}}
                onPress={() => this._goToURL(repository.html_url)}>
                Github
            </Text>            
            <Text style={styles.textRow}>Created at: {Moment(repository.created_at).format('llll')}</Text>

            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={styles.textRow}>Comments:</Text>
            {renderComments()}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        width: null,
        height: null,        
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        backgroundColor:"#ffffff"
    },
    textRow:{
        fontSize:14,
        marginBottom:5,
        marginTop:5
    }
});

function mapStateToProps(state) {
    const { currentRepository, comments  } = state.global;
    return {
        repository: currentRepository,
        comments
    };
}
  
export default connect(mapStateToProps, {
    getComments: actions.getComments,
})(RepositoryDetailScreen);
