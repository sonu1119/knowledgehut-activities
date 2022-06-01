import { useState } from 'react';
import { Success } from './components/Authenticate';
import { Forms } from './components/Forms';
import { Person } from './components/Conditional'
import { User } from './components/InlineEvent';

function App() {
 return (<div className = 'container-fluid'>
   <User />
   <Success />
   <Forms />
   <Person />
 </div>)
}

export default App;   