import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/Form';


function App() {
  const [ collaborators, setCollaborators ] = useState([]);

  function toNewContributorAdded(collaborator) {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form toRegisteredEmployee={collaborator => toNewContributorAdded(collaborator)}/>
    </div>
  );
}

export default App;
