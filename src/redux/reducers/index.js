import { combineReducers } from 'redux';
import page from './page';
import bake from './bake';
import step from './step';

export default combineReducers({
  page,
  bake,
  step,
})