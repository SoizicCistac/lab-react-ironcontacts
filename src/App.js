import './App.css';
import { useState } from 'react';
import contactData from "./contacts.json"

function App() {

  const [contacts, setContacts] = useState(contactData.slice(0,5))

  const handleAddRandomContact = () => {
    const randomContact = contactData[Math.floor(Math.random() * contactData.length)]
    
    if (contacts.some((contact) => contact.id === randomContact.id)){
      return null
    } else {
      setContacts([...contacts, randomContact])
    }
  }

  const sortPopularity = () => {
    const sortedPopularity = contacts.slice().sort((a, b) => {return b.popularity - a.popularity})
    setContacts(sortedPopularity)
  }

  const sortName = () => {

  }

  const handleDelete = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id)
    setContacts(newContactList)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return <tr>
              <td><img src={contact.pictureUrl} alt={contact.name} id="picture"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🌟" : null}</td>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </tr>
            
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
