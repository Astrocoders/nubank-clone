'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
	textInput: {
		height: 40, 
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.9)',
		paddingLeft: 40,
	},
	textInputDark: {
		height: 40, 
		backgroundColor: 'transparent',
		color: 'rgba(0, 0, 0, 0.9)',
		paddingLeft: 40
	},
	outerBorder: {
		position: 'relative',
		borderColor: 'white', 
		borderWidth: 0.8, 
		borderTopWidth: 0, 
		borderRightWidth: 0, 
		borderLeftWidth: 0, 
		margin: 15,
		marginTop: 5
	},

	outerBorderDark: {
		position:'relative',
		borderColor: secondary,
		borderWidth: 0.8, 
		borderTopWidth: 0, 
		borderRightWidth: 0, 
		borderLeftWidth: 0, 
		margin: 15,
		marginTop: 5
	}
});

