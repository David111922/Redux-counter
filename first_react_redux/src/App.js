import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoComponent from './todoComponent';
import Counter from './Counter'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
        <TodoComponent />
      </div>
    </Provider>
  );
}

export default App;
