import '../styles/globals.css';
import rootReducer from '../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  )
}

export default MyApp
