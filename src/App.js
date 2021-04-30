import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import List from './components/List'
function App() {
  return (
    <Provider store={store} className="App">
      <List />
    </Provider>
  );
}

export default App;
