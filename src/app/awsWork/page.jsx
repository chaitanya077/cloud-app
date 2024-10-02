import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"AWS Cloud Hosting In India",
    mainDesc:"Get reliable and secure cloud services with AWS Managed Cloud. Our team of experts offers complete setup, configuration, and management of your cloud environment. Rely on us to handle the heavy lifting so you can focus on growing your business.",
    mainDesc1:"",
    mainImg:"/aws-cloud.png",
}               

function AwsWork() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default AwsWork;

