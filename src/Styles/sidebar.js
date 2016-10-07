'use strict';

import {StyleSheet} from 'react-native';
import {brandSecondary as secondary, brandSidebar as sidebar} from './colors';

export default StyleSheet.create({
	container: {
		padding: 10,
		paddingRight: 0,	        
		paddingTop: 30,
 		backgroundColor: sidebar,
 		flex: 1
	},
	header: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginBottom: 35
	},
	featuredTitle: {
		color: '#FFF',
		fontSize: 65,
		lineHeight: 67,
		fontWeight: 'bold',
		marginLeft: 15,
		flex: 1
	},
	currentDate: {
		fontSize: 14,
		lineHeight: 16,
		color: '#FFF',
		marginRight: 20
	},
	controlPanelText: {
		color:'white'
	},
	linkText: {
		fontSize: 16,
		color: '#fff',
		position: 'absolute',
		left: 15
	},
	link: {
		position: 'relative',
		borderWidth: 1,
		paddingTop: 14,
		height: 50,        
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: '#333136'
	},
	badge: {
		alignSelf: 'flex-end',
		marginRight: 15,
		width: 25,
		height: 25,
		backgroundColor: secondary,
		borderRadius: 12,
		justifyContent: 'center',
		bottom: 5
	},
	badgeText: {
		alignSelf: 'center',
		color: '#fff'
	}
});
