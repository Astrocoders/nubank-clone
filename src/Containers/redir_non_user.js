import { Actions } from 'react-native-router-flux';
import composeWithTracker from 'rn-meteor-containerize';
import Meteor from 'react-native-meteor';

function composer(props, onData){
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  if(!loggingIn && !user){
    Actions.login({type: 'replace'});

    return;
  }

  onData(null, {
    loggingIn,
    currentUser: user,
  });
}

export default composeWithTracker(composer);
