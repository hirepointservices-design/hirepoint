import React from "react";
import orgImg from "/assets/organisation.webp";  // <- rename image after placing in public/assets

export default function OrganisationStructure() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex justify-center">
      <img
        src={orgImg}
        alt="Organisation Structure"
        className="max-w-full md:max-w-3xl drop-shadow-lg"
      />
    </section>
  );
}
