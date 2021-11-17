import { createStore } from "redux";
import reducers from './reducers';
const debag = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers , {} , debag);

export default store;