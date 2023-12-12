import React from "react";
import Contacts from "../Components/Contacts";

const Favourites = ({ contacts, deleteContact, favToggle }) => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-col-sm-2 row-cols-md-3">
        {contacts.map((singleContact) => {
          return (
            singleContact.fav && (
              <Contacts
                key={singleContact.id}
                singleContact={singleContact}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            )
          );
        })}
        {contacts.filter((single) => single.fav).length === 0 ? (
          <h3>No favorite Contact</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Favourites;
