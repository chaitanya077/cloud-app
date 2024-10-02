import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="row my-5 ">
        <div className="col-6">
          <h3>Contact</h3>
          <div>
            <h5>
              <u>Gurgaon Office</u>
            </h5>
            <h6>Upright Media Pvt. Ltd.</h6>
            <p>
              2nd floor, Tower 2 , wework, cyberhub, Gurugram, Haryana, 122018
            </p>
          </div>
          <div>
            <h5>
              <u>Hyderabad Office</u>
            </h5>
            <h6>Upright Media Pvt. Ltd.</h6>
            <p>
              Square corner, 100ft roahi-tech city metro, madhampur, 500081{" "}
            </p>
          </div>
          <div>
            <h5>
              <u>UK-London Office</u>{" "}
            </h5>
            <h6>Upright Media Pvt. Ltd.</h6>
            <p>36A, First floor, Brick Lane, Spitalfields, London </p>
          </div>
          <div>
            <h5>
              <u>Pune office</u>
            </h5>
            <h6>Upright Media Pvt. Ltd.</h6>
            <p>
              Plot no. 75, first floor, Audambar , Bkarve Nagar, Pune 411052{" "}
            </p>
          </div>
        </div>
        <div className="col-6 text-center">
          <h3>About us</h3>
          <ul>
            <Link href={"/privacyPolicy"}>
              {" "}
              <li style={{ listStyleType: "none" , padding:"40px 0"}}>
                <u>Privacy Policy</u>
              </li>
            </Link>
            <Link href={"/companyPolicy"}>
              <li style={{ listStyleType: "none" , padding:"40px 0"}}>
                <u>Company Policy</u>
              </li>
            </Link>
            <Link href={"/refundPolicy"}>
              <li style={{ listStyleType: "none", padding:"40px 0" }}>
                <u>Refund Policy</u>
              </li>
            </Link>

            <Link href={"/ContactForm"}>
              {" "}
              <li style={{ listStyleType: "none" , padding:"40px 0"}}>
                <u>Contact Us</u>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div>©2023 Upright Media All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
