import { MainNav } from "@/components/main-nav";
import { buttonVariants } from "../components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImgSlider from "@/components/imgSlider";



export default async function IndexPage() {

  return (
    <>
    <MainNav items={siteConfig.mainNav} />
    <section className="h-screen -mt-20 ml-20 overflow-hidden">
      <h1 className="text-3xl">Boutique</h1>
    </section>
    </>
  )
}
