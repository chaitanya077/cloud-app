import React from "react";
import linuxVps from "public/linuxvps.svg";
import Image from "next/image";

export default function BuySsl() {
  return (
    <div>
      <div className="row">
        <div className="col-6 pt-5 mt-3">
          <h1>Buy SSL Certificate</h1>
          <p>
            Buy SSL Certificate Very cheap price from Upright Media. Protect
            your website, data and customers with our 4096-bit encryption
            certificates.{" "}
          </p>
          <p>Get a secure and certified SSL certificate now! </p>
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
          Our Windows Dedicated Hosting is served with solid performance which
          is perfect for large websites and applications which need to handle
          more traffic at a single time.
        </h5>
        <h5 className="col-6 p-4">
          Get the most out of your server with a Windows Dedicated Server.
          Windows Dedicated Servers gives you easy-to-use management tools that
          give you the power to manage and monitor your servers quickly and
          easily. With dedicated resources, you can enjoy fast speeds, reliable
          performance, and secure hosting all under one roof. Then get the
          dedicated hosting solution today!
        </h5>
        <div>
          </div>
        </div>
      </div>
    // </div>
  );
}
