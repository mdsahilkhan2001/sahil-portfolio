import React, { useEffect } from "react";
import Services from "../components/Services/Services";
import ContactForm from "../components/Contact/ContactForm";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Services />
      <ContactForm />
    </>
  );
}
