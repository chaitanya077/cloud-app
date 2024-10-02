import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Microsoft Volume Licensing - Simplify Your Software Management",
    mainDesc:"Upright Media offers Microsoft Volume Licensing solutions to simplify your software management and reduce costs. Our licensing experts can help you select the right program to meet your organization's needs and guide you through the licensing process.",
    mainDesc1:"",
    mainImg:"/microsoft-volume-licensing.png",
}               

function MicrosoftLicence() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default MicrosoftLicence;

