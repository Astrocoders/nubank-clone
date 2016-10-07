import composeWithTracker from 'rn-meteor-containerize';
import Meteor from 'react-native-meteor';

function composer(props, onData){
  const handle = Meteor.subscribe('users.single', Meteor.userId());
  const curUser = Meteor.user();

  if(handle.ready()){
    onData(null, {
      user: curUser,
      loading: false,
    });
  } else {
    onData(null, {
      loading: true,
    });
  }
}

export default composeWithTracker(composer);
