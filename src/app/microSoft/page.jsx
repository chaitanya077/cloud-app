import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Microsoft office 365 India",
    mainDesc:"Get the best of Microsoft Office 365 for your business. With Office 365 plans in India, you get features like secure cloud storage, collaboration tools, business intelligence and more. Upgrade your business with the power of Office 365 today.",
    mainDesc1:"",
    mainImg:"/office-365 -1.svg",
}               

function Microsoft() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default Microsoft;

