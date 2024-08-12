import React from "react";
import "../Components/userpage.css";
import AddPost from "../Components/AddPost";

function UserPage2() {
  return (
    <>
      <h2 className="welcome-id">Welcome User</h2>
      <p id="name">Hello Ghost....</p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cum culpa
        similique, voluptatum voluptas dolor labore architecto accusantium
        suscipit dolorem modi. Ab quae eum iure voluptatibus explicabo
        reiciendis, magnam enim ullam voluptas suscipit aliquam sed quas,
        dolores nisi recusandae? In exercitationem quibusdam eos quidem aut.
        Voluptates tempore delectus cupiditate necessitatibus, ea eligendi
        placeat ipsam vitae sequi, exercitationem illo voluptate, quod at atque.
        Excepturi, ut, aperiam nobis, sit modi deserunt laboriosam ipsam eveniet
        hic nostrum aliquid corrupti similique voluptatum dolores ullam
        temporibus recusandae ex voluptas exercitationem odit. Eligendi optio
        tenetur alias placeat dicta totam voluptatibus vel itaque nulla minima.
        Quaerat, corrupti?
      </p>
      <AddPost id="post" />
    </>
  );
}

export default UserPage2;
