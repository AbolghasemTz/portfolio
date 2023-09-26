import React from "react";

function Contact(props) {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 lg:py-24 flex flex-col gap-4 
              mdl:gap-10 xl:px-4 items-center justify-center
              "
    >
      <p className="text-lg text-textGreen font-semibold flex items-center tracking-wide">
        Whats Next
      </p>
      <h2 className="text-4xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I'm currently looking for any new opportunities, my inbox is always
        open.
      </p>
      <a href="mailto:abolghasemtazikijelini@gmail.com">
        <button
          className="w-40 h-14 border border-textGreen mt-6 text-sm 
            text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300
            "
        >
         Send Email
        </button>
      </a>
    </section>
  );
}

export default Contact;
