// redux/store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Asegúrate de que la ruta sea correcta

const store = createStore(rootReducer);

export default store;