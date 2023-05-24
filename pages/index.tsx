
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import FooterHome from "@/components/FooterHome";
import Gallery from "@/components/Gallery";
import Journey from "@/components/Journey";
import { Navbar } from "@/components/Navbar";


import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>G company</title>
    </Head>
    <main>
      <Navbar />

      <div>
        <Banner />
        <Expertise />
        <Journey />
        <Gallery />
        <FooterHome />
      </div>    
    </main>

    </>
  )
}
