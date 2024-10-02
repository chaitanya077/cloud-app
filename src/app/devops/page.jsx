import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Hire DevOps Engineers USA",
    mainDesc:"Hire the DevOps Engineers services provider company in the USA for framework computerization, ceaseless reconciliation, and cloud the board. Our group has practical experience in smoothing out development processes and further developing effectiveness, guaranteeing the ideal fit for your business needs.",
    mainDesc1:"",
    mainImg:"/devops.jpg",
}               

function DevOps() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default DevOps;

