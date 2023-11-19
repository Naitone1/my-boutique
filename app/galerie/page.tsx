
import React from "react";

import GalerieContent from "./galerieContent";




export default async function IndexPage() {

  return (
    <>
    <section className="h-screen mt-20 ml-20 overflow-hidden">
      <h1 className="text-3xl tracking-wide">Galerie</h1>
        <GalerieContent />
    </section>
    </>
  )
}


