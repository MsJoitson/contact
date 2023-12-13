import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Link, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const url = "http://localhost:3002/contacts";
function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getContacts();
  }, []);

  const formSub = async (data) => {
    console.log(data);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const resultData = await res.json();
    setContacts([...contacts, resultData]);
  };

  const fetchContacts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  // console.log(data);
  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:3002/contacts/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      let newContacts = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContacts);
    }
  };
  async function getContact(id) {
    const res = await fetch(`http://localhost:3002/contacts/${id}`);
    const data = await res.json();
    return data;
  }

  const favToggle = async (id) => {
    const singlCon = await getContact(id);
    const updatedFav = { ...singlCon, fav: !singlCon.fav };

    const res = await fetch(`http://localhost:3002/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedFav),
    });
    if (res.status === 200) {
      let newContact = contacts.map((singleContact) => {
        return singleContact.id === id
          ? { ...singleContact, fav: !singleContact.fav }
          : singleContact;
      });
      setContacts(newContact);
    }
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
