import { Provider } from 'react-redux';
import { store } from './store';
import RouterSetup from './RouterSetup';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <RouterSetup />
    </Provider>
  )
}

export default App;
