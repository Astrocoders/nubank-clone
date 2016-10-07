'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from "react-native";
import Meteor from 'react-native-meteor';
import Moment from 'moment';
import { Actions } from 'react-native-router-flux';

// Components
import AppEventEmitter from '~/Services/AppEventEmitter';

// Styles
import sidebar from '~/Styles/sidebar';

class Sidebar extends Component {
  static contextTypes = {
    drawer: PropTypes.object,
  };

  currentDate() {
    return Moment().format('MM/DD/YYYY');
  }

  _logout(){
    Alert.alert('Logout', 'Leave the app?', [
      {text: 'Yes', onPress: () => Meteor.logout()},
      {text: 'Nevermind'},
    ])
  }

  _closeDrawer(){
    this.context.drawer.close();
    return true;
  }

  render() {
    return (
      <View
        style={sidebar.container}
      >
        <ScrollView>
          <View style={sidebar.header}>
            <Text style={sidebar.featuredTitle}>Astro</Text>
            <Text style={sidebar.currentDate}>{this.currentDate()}</Text>
          </View>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              style={sidebar.link}
              underlayColor="#2D2D30"
              onPress={() => this._closeDrawer() && this._logout()}>
              <View>
                <Text style={sidebar.linkText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Sidebar;
