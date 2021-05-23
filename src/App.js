import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Products from './components/Products'
function App() {
  return (
    <Provider store={store} className="App">
      <Products />
    </Provider>
  );
}

export default App;
