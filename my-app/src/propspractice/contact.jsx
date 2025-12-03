
import React from "react";
import { contactInfo } from "./propsData";

export default function Contact({ phone, email }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p>Phone: {contactInfo.phone}</p>
      <p>Email: {contactInfo.email}</p>
       <p>Address: {contactInfo.address}</p>
    </div>
  );
}
