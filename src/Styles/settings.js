'use strict';

import {StyleSheet} from 'react-native';
import {brandPrimary as primary, brandSecondary as secondary} from './colors';

export default StyleSheet.create({
	sectionTitle: {
		backgroundColor: '#EEEFF1',
		paddingVertical: 7,
		paddingHorizontal: 15,
	},
	sectionTitleText: {
		fontSize: 12,
		color: secondary
	},
	sectionItem: {
		borderBottomColor: '#DDD',
		borderBottomWidth: 0.5,
		padding: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
	},
	sectionItemTextLeft: {
		flex: 1,
		color: '#777',
		fontSize: 15,
	},
});
