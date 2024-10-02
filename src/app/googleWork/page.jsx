import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Google Workspace (G Suite) Tools - Boost Business Productivity",
    mainDesc:"Google Workspace (formerly G Suite) is a cloud-based productivity suite that brings together everything you need to get work done. Get reliable, secure business email, video conferencing, online storage, and file sharing with Google Workspace.",
    mainDesc1:"",
    mainImg:"/googleWork.png",
}               

function Microsoft() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default Microsoft;

