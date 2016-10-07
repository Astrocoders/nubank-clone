import OneSignal from 'react-native-onesignal';
import { Actions } from 'react-native-router-flux';

OneSignal.configure({
  onNotificationOpened(message, data, isActive){
    handleNotification(data);
  },
});

function handleNotification(data) {
  if(data.route){
    // We need to give some time to Actions get populated first
    setTimeout(() => {
      Actions[data.route.name](data.route.props);
    }, 1000);
  }
}
