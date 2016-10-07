'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
	title: {
		padding: 15
	},
	titleText: {
		fontSize: 18,
		color: secondary
	},
	titleIcon: {
		position: 'absolute',
		top: 12.5,
		right: 15
	},
	content: {
		borderBottomColor: '#DDD',
		borderBottomWidth: 1,
		paddingHorizontal: 15,
		paddingBottom: 15
	},
	contentText: {
		color: '#999',
		fontSize: 14,
	}
});