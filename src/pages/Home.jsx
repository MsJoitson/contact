import React from "react";
import Form from "../Components/Form";
import Contacts from "../Components/Contacts";
const Home = ({ formSub, contacts, deleteContact, favToggle }) => {
  return (
    <div className="container">
      <div className="row justify-content-sm-center">
        <Form formSub={formSub} />
      </div>
      <div className="row row-cols-1 row-col-sm-2 row-cols-md-3">
        {contacts.map((singleContact) => {
          return (
            <Contacts
              key={singleContact.id}
              singleContact={singleContact}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
