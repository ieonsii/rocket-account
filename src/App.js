import './App.css';

import Header from './components/header/Header';
import Overview from './components/account/overview';
import Edit from './components/account/edit';

function App() {
  return (
    <>
      <Header />
      <Overview />
      <Edit />
    </>
  );
}

export default App;
