import { MainNav } from "@/components/main-nav";
import { buttonVariants } from "../components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import ImgSlider from "@/components/imgSlider";



export default async function IndexPage() {

  return (
    <>
    <MainNav items={siteConfig.mainNav} />
    <section className="h-screen -mt-20 ml-20 overflow-hidden bg-white dark:bg-black">
      <div className="pt-20 px-4 py-8 mx-auto static flex">
        <div className="pt-20 h-screen w-96 z-10 bg-white dark:bg-black">
          <div className="absolute">
          <h1 className="tracking-wide text-5xl font-extrabold leading-tight ">
            Naitone <br className="hidden sm:inline" />
          </h1>
          <h2 className="text-2xl mt-2 leading-tight tracking-tighter font-serif">
            Your friendly neiborhood photographer 🔸
          </h2>
          <p className="max-w-[250px] text-md text-muted-foreground my-4 mt-10">
          Bienvenue dans mon univers ! <br /> 
          Je suis Naitone, un photographe passionné qui capture la beauté du monde à travers mon objectif. 
          Explorez mon travail et découvrez des moments captivants figés dans le temps.
          </p>
          <div className="flex gap-4 mt-10">
            <Link
              href={siteConfig.links.docs}
              // target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>

          </div>
          </div>
        </div>
        <div className="w-screen flex h-screen bg-slate-50 dark:bg-slate-900">
          <ImgSlider />
        </div>
      </div>
    </section>
    </>
  )
}
