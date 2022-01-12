import { Provider } from 'react-redux';

import Test from './Components/Test'
import store from './Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div >
        <Test />
      </div>
    </Provider>
  );
}

export default App;
