import {
  AsyncStorage,
} from 'react-native';
import _ from 'lodash';
import {
  Actions,
} from 'react-native-router-flux';
import { compose } from 'react-komposer';
import Loader from '~/Components/Loader';
import Meteor from 'react-native-meteor';

function composer(props, onData){
  if(props.hasStoredUser || props.loadingStoredUser){
    onData(null, {});
    return;
  };

  onData(null, {
    loadingStoredUser: true,
  });

  const TOKEN_KEY = 'reactnativemeteor_usertoken';
  AsyncStorage.getItem(TOKEN_KEY, (error, storedUser) => {
    if(error){
      console.warn(error);
      return;
    }
    
    onData(null, {
      loadingStoredUser: false,
      hasStoredUser: storedUser,
    });

    if(storedUser){
      Actions.dashboard({type: 'replace'});
    } else {
      Actions.login({type: 'replace'});
    }
  });
}

export default compose(composer, Loader, Loader);
