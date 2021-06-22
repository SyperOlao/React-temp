import {createStore} from 'redux'
import {reducers} from './reducers/reducers';

export let store = createStore(reducers);