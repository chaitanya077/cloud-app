import React from "react";
import linuxVps from "public/linuxvps.svg";
import Image from "next/image";

export default function LinuxVps() {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 pt-5 my-3 text-center text-md-start">
          <h1>Linux VPS Hosting in India</h1>
          <p>
            Get the best managed vps hosting for website hosting in India with
            99.99% uptime, 1GBPS network and unlimited bandwidth
          </p>
          <p>
            Our servers are fast and secure. so you can focus on your business
            without worrying about server maintenance.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 my-3">
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
        <p className="col-12 col-sm-12 col-md-4 p-4">
          Upriht Media provides the best VPS hosting in India and it has 3 USPs.
          It is simple, fast, reliable and economical.
        </p>
        <p className="col-12 col-sm-12 col-md-4 p-4">
          We will provide best linux VPS server which is built with advanced
          cloud-based infrastructure.
        </p>
        <p className="col-12 col-sm-12 col-md-4 p-4">
          Revamp your website with our fastest Linux VPS hosting in India. Our
          advanced features Online business of every size can add more cheese to
          their website.
        </p>
        <div>
          <h3>Completely Managed Linux VPS Hosting Server</h3>
          <p>
          Ready to make your dream of a mechanized India a reality? Our totally managed Linux VPS Server is designed to provide you with the best show and versatility, all while holding your monetary arrangement under close restrictions. With our on-demand support and 24/7 checking, you can trust us to manage all your web hosting necessities and assurance that your business moves along true to form. Contact us today and get ready to get the advantages of achievement!
          </p>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 p-3">
              <div className="border border-3 m-3 p-3">
              <h5>Reliable Linux Hosting Solutions</h5>
              <p>
              Get reliable Linux hosting solutions with maximum uptime and high performance. Our packages are designed to meet the needs of any business, from small websites to large enterprise applications. With top-notch security, scalability, and storage options, we make sure your business runs smoothly.
              </p>
              </div>

              
            </div>
            <div className="col-12 col-sm-12 col-md-6  p-3">
              <div className="border border-3 m-3 h-20vh p-3">

              <h5>24/7 Technical Support</h5>
              <p>
              Get technical support any time, day or night. Our team of highly trained technical experts is available 24/7 to assist you with any requests or issues you may have. We provide quality and solid support to help your business move forward as planned.
              </p>
              </div>
            </div>
            <div className="">
              <h1>Benefits</h1>
              <div className="row">
                <div className="col-lg-12 col-sm-6 col-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf p-3">
                    24/7/365 Ticket Support Services
                  </h4>
                  <p className="text-body-excerpt color-gray-600  ">
                    Our first response comes within 10 minutes and our certified
                    cloud server tech support team provides you the instant
                    solutions of your issues.
                  </p>
                </div>
                <div className="col-lg-12 col-sm-6 col-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf p-3">
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
