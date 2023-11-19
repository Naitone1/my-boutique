import { MainNav } from "@/components/main-nav";
import { buttonVariants } from "../components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "public/picture/1.jpg"
import img2 from "public/picture/2.jpg"
import img3 from "public/picture/3.jpg"
import img4 from "public/picture/4.jpg"
import Galerie from "./galerie";

const SliderData = [
  {
      'src' : img1, 
      'content' : 'test',
      'href': '/'
  },
  {
      'src' : img2,
      'content' : 'test2',
      'href': '/'
  },
  {
      'src' : img3,
      'content' : 'test3',
      'href': '/'
  },
  {
      'src' : img4,
      'content' : 'test5',
      'href': '/'
  },
]

export default async function IndexPage() {

  return (
    <>
    <section className="h-screen mt-20 ml-20 overflow-hidden">
      <h1 className="text-3xl tracking-wide">Galerie</h1>
        <Galerie data={SliderData}/>
    </section>
    </>
  )
}


