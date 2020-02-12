import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore() {
  let store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
  return {store};
}

export default configureStore;
