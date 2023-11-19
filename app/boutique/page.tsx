import React from "react";
import DisplayData from "./displayData";

export default async function IndexPage() {

  return (
    <>
    
    <section className="h-screen mt-20 ml-20 overflow-hidden">
      <h1 className="text-3xl">Boutique</h1>
      <DisplayData />
    </section>
    </>
  )
}
