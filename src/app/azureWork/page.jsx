import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Microsoft Azure Managed Cloud - Elevating Your Azure Experience",
    mainDesc:"Upright Media offers managed Microsoft Managed Azure cloud services solutions for businesses, which is a cost-effective way to leverage the power of this powerful cloud computing platform without the burden of managing it internally. It provides access to expert support services while allowing organisations to focus on their core business objectives.",
    mainDesc1:"",
    mainImg:"/azure.png",
}               

function AzureWork() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default AzureWork;

