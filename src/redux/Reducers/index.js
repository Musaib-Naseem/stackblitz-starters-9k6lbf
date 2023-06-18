import { combineReducers } from 'redux';
import { productReducer,selectedReducer} from './productReducer';

const rootReducers = combineReducers({
  allProducts:productReducer,
  selproducts:selectedReducer,
});

export default rootReducers;
