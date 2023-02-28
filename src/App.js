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
    const contactArray = [...contacts]
    const sortedPopularity = contactArray.sort((a, b) => {return b.popularity - a.popularity})
    setContacts(sortedPopularity)
  }

  const sortName = () => {
    const contactArray = [...contacts]
    contactArray.sort((a, b) => {
      if(a.name>b.name){
        return 1;
      } else if (a.name<b.name) {
        return -1;
      }
    })

    setContacts(contactArray)
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
          <th>Delete</th>
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
