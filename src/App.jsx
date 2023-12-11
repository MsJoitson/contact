import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Link, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { useState } from "react";
import { set } from "react-hook-form";

function App() {
  const [contacts, setContacts] = useState([]);

  const formSub = (data) => {
    console.log(data);
    setContacts([...contacts, data]);
  };
  // console.log(data);
  const deleteContact = (id) => {
    let newContacts = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
    setContacts(newContacts);
  };
  const favToggle = (id) => {
    let newContact = contacts.map((singleContact) => {
      return singleContact.id === id
        ? { ...singleContact, fav: !singleContact.fav }
        : singleContact;
    });
    setContacts(newContact);
  };

  return (
    <div>
      <Navigation />
      {/* <ul>
        <Link to="/">Home</Link>
        <Link to="favorites">Favourites</Link>
      </ul> */}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                formSub={formSub}
                contacts={contacts}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            }
          />
          <Route
            path="favourites"
            element={
              <Favourites
                contacts={contacts}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
