import { combineReducers } from '@reduxjs/toolkit';
import Dog from './dog/reducer';
import NetworkState from './network/reducer';

export default combineReducers({ Dog, NetworkState });