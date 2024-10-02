
import React from "react";
import linuxVps from "public/linuxvps.svg";
import Image from "next/image";

export default function WindowDedicated() {
  return (
    <div>
      <div className="row">
        <div className="col-6 pt-5 mt-3">
          <h1>Window Dedicated Server India</h1>
          <p>
          Get reliable and secure managed Windows dedicated server hosting in India
          </p>
          <p>
          Enjoy the benefits of high-performance servers at affordable prices.
          </p>
        </div>
        <div className="col-6">
          <Image
            src={linuxVps}
            alt="linux vps image"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="text-center row">
        <h3 className="mt-5">What We Focus on</h3>
        <h5 className="col-6 p-4">
         
Our Windows Dedicated Hosting is served with solid performance which is perfect for large websites and applications which need to handle more traffic at a single time.
        </h5>
        <h5 className="col-6 p-4">
        Get the most out of your server with a Windows Dedicated Server. Windows Dedicated Servers gives you easy-to-use management tools that give you the power to manage and monitor your servers quickly and easily. With dedicated resources, you can enjoy fast speeds, reliable performance, and secure hosting all under one roof. Then get the dedicated hosting solution today!
        </h5>
        <div>
          <h3>Completely Managed Linux VPS Hosting Server</h3>
          <p>
          Ready to make your dream of a mechanized India a reality? Our totally managed Linux VPS Server is designed to provide you with the best show and versatility, all while holding your monetary arrangement under close restrictions. With our on-demand support and 24/7 checking, you can trust us to manage all your web hosting necessities and assurance that your business moves along true to form. Contact us today and get ready to get the advantages of achievement!
          </p>
          <div className="row">
            <div className="col-6 border border-3 p-3">
              <h5>Reliable Linux Hosting Solutions</h5>
              <p>
              Get reliable Linux hosting solutions with maximum uptime and high performance. Our packages are designed to meet the needs of any business, from small websites to large enterprise applications. With top-notch security, scalability, and storage options, we make sure your business runs smoothly.
              </p>
            </div>
            <div className="col-6 border border-3 p-3">
              <h5>24/7 Technical Support</h5>
              <p>
              Get technical support any time, day or night. Our team of highly trained technical experts is available 24/7 to assist you with any requests or issues you may have. We provide quality and solid support to help your business move forward as planned.
              </p>
            </div>
            <div className="">
              <h1>Benefits</h1>
              <div className="row">
                <div className="col-lg-12 col-sm-6 col-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf">
                    24/7/365 Ticket Support Services
                  </h4>
                  <p className="text-body-excerpt color-gray-600 mt-15">
                    Our first response comes within 10 minutes and our certified
                    cloud server tech support team provides you the instant
                    solutions of your issues.
                  </p>
                </div>
                <div className="col-lg-12 col-sm-6 col-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf">
                    Live Chat Support 24/7/365
                  </h4>
                  <p className="text-body-excerpt color-gray-600 mt-15">
                    Our live chat tech support team makes sure that your managed
                    cloud and dedicated server never face any downtime and serve
                    the quick solutions on live chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
