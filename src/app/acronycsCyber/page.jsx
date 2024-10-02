import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Acronis Cyber Backup Cloud",
    mainDesc:"Acronis Cyber Cloud provides secure, reliable and cost-effective cloud-based backup and disaster recovery for all your business data. Get peace of mind knowing your data is always safe and secure with the help of the leading cloud backup solution.",
    mainDesc1:"",
    mainImg:"/acronis.jpeg",
}               

function AcronycsCyber() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default AcronycsCyber;

