import React from "react";
import Title from "./../../Components/Title";

const Contacts = () => {
  return (
    <section id="contact" className="mb-32">
      <Title title="CONTACTS" />
      <div className="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-third-color min-w-[400px]">
          <form>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-transparent 
        border border-solid border-secondary-color
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-transparent focus:border-fourth-color focus:outline-none"
                id="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-transparent
        border border-solid border-secondary-color
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-transparent focus:border-fourth-color focus:outline-none"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-transparent
        border border-solid border-secondary-color
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-transparent focus:border-fourth-color focus:outline-none
      "
                id="message"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="
      w-full
      px-6
      py-2.5
      bg-secondary-color
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
