import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'



const Services = () => {
    const [showMore,setShowMore]= useState(false)
  return (
    <section id='services' className='max-w-contentContainer mx-auto lgl:px-12 py-20'>
        <SectionTitle title='Services' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
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
                        des='dejfnrnofrgrmrefoifjreitgjtrmgkgmkofgrjgitkgjtgji'
                        link='' />
             
                    </>
                )
            }
        </div>
        <div className='mt-12 flex items-center justify-center'>
            {
                showMore ? <button 
                onClick={()=>setShowMore(false)}
                className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textBlue 
                hover:bg-hoverColor duration-300'>Show Less</button> 
                    :
                <button 
                onClick={()=>setShowMore(true)}
                className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textBlue 
                hover:bg-hoverColor duration-300'>Show More</button>
            }
        </div>
    </section>
  )
}

export default Services