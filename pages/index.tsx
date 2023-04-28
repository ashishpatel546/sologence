import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import { LeftSide } from "@/components/LeftSide";
import { Navbar } from "@/components/Navbar";
import { RightSide } from "@/components/RightSide";
import Services from "@/components/Services";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>G company</title>
    </Head>
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
            </div>
        <div className="h-[110vh]  mx-auto p-2">
          <Banner />
          <About />
          <Services />
          <Contact />
        </div>
        <div className="xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </div>
    </main>

    </>
  )
}
