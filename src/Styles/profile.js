'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
	topHeaderColored: {
		backgroundColor: secondary,
		height: 85
	},
	topHeader: {
		height: 170,
		backgroundColor: '#EEEFF1'
	},
	userName: {
		fontSize: 22,
		color: secondary,
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 65
	},
	userLocation: {
		fontSize: 10,
		color: '#7B7C7E',
		textAlign: 'center',
		marginTop: 12
	},
	userImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginTop: -170-60,
		marginBottom: 110,
		alignSelf: 'center',
		borderColor: '#CECFD3',
		borderWidth: 5
	}
});