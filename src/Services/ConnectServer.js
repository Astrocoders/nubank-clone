import Meteor from 'react-native-meteor';
import CONSTANTS from './Constants';

export default () => Meteor.connect(CONSTANTS.METEOR_SERVER);
