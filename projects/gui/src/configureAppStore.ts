import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [],
    enhancers: []
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
