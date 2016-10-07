import Meteor from 'react-native-meteor';
import OneSignal from 'react-native-onesignal';

export default function SetupOneSignal(){
  OneSignal.idsAvailable(credentials => {
    console.log('[OneSignal] Sending crendetials to server');
    Meteor.call('oneSignal/saveCredentials', credentials);
  });
};
