'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	wrapper: {
		flex: 1
	},
	item: {
		backgroundColor: '#FFF',
		borderBottomColor: '#CCC',
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 0.3,
    marginBottom: 1,
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	image: {
		height: 50,
		borderRadius: 25,
		width: 50,
		marginTop: 10,
		marginLeft: 10
	},
	details: {
		marginLeft: 15,
		marginTop: 10,
		marginBottom: 10,
		flex: 1
	},
	itemTitle: {
		color: '#333',
		fontSize: 18
	},
	itemSubtitle: {
		marginTop: 3,
		color: '#333',
		lineHeight: 20
	}
});
