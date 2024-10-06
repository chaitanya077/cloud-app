import React from 'react'
import Image from 'next/image'

function PageComponent(props) {
  return (
    <div>
        <div className="row">
        <div className="col-12 col-sm-12 col-md-6 p-5 mt-3 text-center text-md-start">
          <h1>{props.title}</h1>
          <p>
            {props.mainDesc}
          </p>
          <p>{props.mainDesc1}</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 pt-5">
          <Image
            src={props.mainImg}
            alt="linux vps image"
            // layout="responsive"
            sizes="(max-width: 768px) 100vw, 33vw"            
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="text-center row">
        <h3 className="mt-5">What We Focus on</h3>
        <p className="col-12 col-sm-12 col-md-6 p-4">
          Our Windows Dedicated Hosting is served with solid performance which
          is perfect for large websites and applications which need to handle
          more traffic at a single time.
        </p>
        <p className="col-12 col-sm-12 col-md-6 p-4">
          Get the most out of your server with a Windows Dedicated Server.
          Windows Dedicated Servers gives you easy-to-use management tools that
          give you the power to manage and monitor your servers quickly and
          easily. With dedicated resources, you can enjoy fast speeds, reliable
          performance, and secure hosting all under one roof. Then get the
          dedicated hosting solution today!
        </p>
        <div>
          </div>
          </div>
      
    </div>
  )
}

export default PageComponent
