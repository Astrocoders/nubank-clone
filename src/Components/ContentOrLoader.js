import Loader from './Loader';
import Nothing from './Nothing';
import React from 'react';
import {
  isBoolean,
} from 'lodash';

export default props => {
  if(props.isLoading || !isBoolean(props.isLoading)) return <Loader/>;
  if(props.isNothing) return <Nothing message={props.nothingMessage}/>
  return props.children;
};
