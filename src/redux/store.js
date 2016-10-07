import { 
  createStore,
} from 'redux';
import reducers from './reducers';

const store = createStore(reducer);

export default store;
