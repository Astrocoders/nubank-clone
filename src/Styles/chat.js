'use strict';

import {StyleSheet} from 'react-native';
import {brandPrimary as primary, brandSecondary as secondary} from './colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		width: null,
		height: null  
	},
	color: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: primary
	},
	box: {
		margin: 10
	},
	header: {
		color: '#fff',
		fontSize: 18
	},
	displayBox: {
		backgroundColor: 'transparent',
		borderRadius: 5,
		position: 'relative',
		margin: 5,
		padding: 10,
		paddingLeft: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		flexWrap: 'wrap'
	},
	icon: {
		width: 45,
		height: 45,
		justifyContent: 'center'
	},
	toolbar: {
		height: 60,
		backgroundColor: secondary,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingTop: 13,
		paddingRight: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 1.5
	},  
	subtitle : {
		color: '#fff',
		fontSize: 16,
		height: 0
	}
});