'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary} from './colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		width: null,
		height: null,
		marginTop: 40
	},
	view: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: secondary
	},
	appContainer: {
		flex: 1,
		alignItems: 'center',
	},
	app: {
		color: '#FFF',
		fontSize: 85,
		fontWeight: 'bold',
		flex: 1
	},
	form: {
		flex: 1,
		paddingTop: 40,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30
	}
});
