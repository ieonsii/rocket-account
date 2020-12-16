import { useState } from 'react';

import './App.css';

import Header from './components/header/Header';
import Overview from './components/account/overview';
import Edit from './components/account/edit';

function App() {
  const [account, setAccount] = useState({
    firstName: 'Bruce',
    lastName: 'Banner',
    email: 'bruce.banner@avengers.com',
    phone: '0400 000 000',
    dob: Date('2020-01-01'),
    bio:
      'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
  });
  return (
    <>
      <Header />
      <Overview account={account} />
      <Edit account={account} setAccount={setAccount} />
    </>
  );
}

export default App;
