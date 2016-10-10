import React from 'react'
import { isBoolean } from 'lodash'

import Loader from './Loader'
import Nothing from './Nothing'

export default props => {
  if(props.isLoading || !isBoolean(props.isLoading)) return <Loader/>
  if(props.isNothing) return <Nothing message={props.nothingMessage}/>
  return props.children;
};
