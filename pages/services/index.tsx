import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import { LeftSide } from '@/components/LeftSide'
import { RightSide } from '@/components/RightSide'
import Footer from '@/components/Footer'


const services = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMore,setShowMore] = useState(false);
  return (
    <>
    <main className="w-full h-screen font-bodyFont bg-slate-100 text-black overflow-x-hidden overflow-y-scroll">
      <Navbar />

      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
            </div>

      <section id='services' className='max-w-contentContainer mx-auto lgl:px-12 py-20 text-black'>
        <SectionTitle title='Services' />

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 text-white'>
           <ServiceCard title='Cloud Solution'
                        des='Lift and Shift quick migration Rearchitected Cloud Implementations Micro Service based Implementations.'
                        link='' />
            <ServiceCard title='DevOps'
                        des='Our certified DevOps engineers and SREs have expertise in:
                        -CI/CD implementations
                        -Terraform(IaC)
                        -Kubernetes implementations'
                        link='' />
            <ServiceCard title='Cyber Security Services'
                        des='We provide End To End Cyber Security Solutions to our customer'
                        link='' />
            <ServiceCard title='Development & Testing'
                        des='Java, C, C++, Angular JS, Python, .net, Mobility (Andriod, IoS) Automation (Selenium, QTP etc.), Non-functional (Performance, Security etc.)'
                        link='' />
            <ServiceCard title='Data Analytic, Machine Learning & IOT'
                        des='Hadoop, ETL, R, Python, Spark, Kafka, Flume, RaspBerry-Visualization: Qlik, Tableau, cognos etc.'
                        link='' />
            <ServiceCard title='ERP'
                        des='SAP,
                        Oracle,
                        Salesforce'
                        link='' />

            {
                showMore && (
                    <>
                    <ServiceCard title='JavaSript'
                        des='We provide End To End Cyber Security Solutions to our customer'
                        link='' />
                    <ServiceCard title='ML'
                        des='lorem10jvbjfbifhuffkndokfkojffoigj'
                        link='' />
                    <ServiceCard title='test'
                        des='dejfnrnofrgrmrefoifjreitgjtrmgkgmkofgrjgi,
                        tkgjtgji'
                        link='' />
             
                    </>
                )
            }

        </div>
        <div className='mt-12 flex items-center justify-center'>
            {
                showMore ? <button 
                onClick={()=>setShowMore(false)}
                className='w-36 h-12 rounded-md text-slate-500 text-[13px] border border-black 
                hover:bg-hoverColor duration-300'>Show Less</button> 
                    :
                <button 
                onClick={()=>setShowMore(true)}
                className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-black 
                hover:bg-hoverColor duration-300'>Show More</button>
            }
        </div>
    </section>

    <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
        <Footer />
    </main>
    </>
  )
}

export default services