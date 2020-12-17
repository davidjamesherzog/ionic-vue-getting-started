import { createStore } from 'vuex';
import Memories from './memories';

const store = createStore({});

// tslint:disable-next-line:no-unused-expression
new Memories({ store, name: 'memories' });

export default store;
