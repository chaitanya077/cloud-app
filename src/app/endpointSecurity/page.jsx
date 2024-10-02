import React from 'react'
import PageComponent from '@/components/pageComponent/PageComponent'
// import mainImage from "@public/acronis.jpeg";

const data={
    title:"Sophos Endpoint Security India",
    mainDesc:"Avoid unauthorized access Ransomware, and Data Loss with Sophos Endpoint Security. Sophos Intercept X provides incomparable security against advanced attacks. It employs a wide collection sophisticated technologies block a wide variety of threats before they affect the functioning of your systems effective endpoint detection and response and XDR tools enable your organization to search for investigate, and react to suspicious activity and indicators of attack.",
    mainDesc1:"",
    mainImg:"/endpoint-security.jpg",
}               

function EndpointSecuity() {
  return (
    <div>
        <PageComponent title={data.title} mainDesc={data.mainDesc} mainDesc1={data.mainDesc1} mainImg={data.mainImg}/>
      
    </div>
  )
}

export default EndpointSecuity;

