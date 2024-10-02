import React from "react";
import Image from "next/image";
import winVps from "public/windows-vps.png";
import Card2 from "@/components/Card2/Card2";

// const cardData = [{}];

function WindowVps() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="my-4 pt-5">Windows VPS Server India</h1>
        <h4>Fully Managed Windows VPS Server for Your</h4>
        <h4>
          Highest degree of protection, unlimited 1Gbps data transfer, NVME
          Storage
        </h4>
      </div>
      <div className="col-6">
        <Image src={winVps} alt="window vps" width={500} height={300} />
      </div>
      <div className="text-center row">
        <h3 className="mt-5">What We Focus on</h3>
        <p className="col-4 p-4">
          Panels of Windows VPS Hosting Server India are easy to use and allow
          you to manage your business website on your own.
        </p>
        <p className="col-4 p-4">
          Clients receive a complimentary 24-hour technical support. We will
          provide guidance and support for running panels flexible.
        </p>
        <p className="col-4 p-4">
          Additionally, our support team experts will introduce you to each
          feature on our panel to ensure you never miss any Upright Media
          advanced features.
        </p>
      </div> 
    </div>
  );
}

export default WindowVps;
