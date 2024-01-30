import React from "react";

const Footer = () => {
  return (
    <section id="__footer" className="py-5">
      <div className="text-center text-sm text-slate-400">
        <p className="opacity-90">
          Get 15 Minutes{" "}
          <a
            href="https://calendly.com/devhasibulislam/15min"
            target="_blank"
            className="text-sky-400"
          >
            Free Consultation
          </a>.{" "}
          Regards{" "}
          <a
            href="https://bento.me/devhasibulislam"
            target="_blank"
            className="text-sky-400"
          >
            Hasibul Islam.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
