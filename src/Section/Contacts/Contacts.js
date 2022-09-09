import React from "react";
import Title from "./../../Components/Title";

const Contacts = () => {
  return (
    <section id="contact">
      <Title title="CONTACTS" />
      <div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-full">
          <input className="w-full text-black rounded-full" type="text" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
