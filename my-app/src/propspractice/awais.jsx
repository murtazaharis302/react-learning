// src/propspractice/awais.jsx
import React from "react";
import { awaisData } from "./propsData";

export default function Awais() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User: {awaisData.name}</h1>
      <p>Role: {awaisData.role}</p>
      <p>Email: {awaisData.email}</p>
    </div>
  );
}
