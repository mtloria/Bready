import { combineReducers } from 'redux';
import page from './page';
import bake from './bake';

export default combineReducers({
  page,
  bake
})