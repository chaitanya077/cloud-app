"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import iotIcon from "../../public/iot-icon.svg";
import cyberIcon from "../../public/cyber-security-icon.svg";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Menu } from "@mui/material";
import Link from "next/link";

const cardDesc = [
  {
    image: "/microsoft-1.png",
    title: "Microsoft Azure Cloud",
    desc: "Upright Media serves the cloud computing platform Microsoft Azure Cloud to ensure that you can build your great ideas on amazing platforms.",
    buttonDesc: "Azure",
    url: "/azureWork",
  },
  {
    image: "/aws-1.png",
    title: "AWS",
    desc: "Switch to Amazon Cloud Services Today and Explore Serverless Technology with AWS Credits POC. Hire Well-Experienced and Certified AWS Solution Architect.",
    buttonDesc: "AWS",
    url: "/awsWork",
  },
  {
    image: "/sophos-home-icon.png",
    title: "Endpoints Security",
    desc: "Protects Your Sensitive Data and Stop Malicious Software with Application Control to Provide maximum visibility.",
    buttonDesc: "Endpoints",
    url: "/endpointSecurity",
  },
  {
    image: "/google-1.png",
    title: "Google Work Space",
    desc: "Upright Media G Suite Plans are Designed for Innovating the Experience of Users With World-Class Security, Cloud Service & Ingenious Apps.",
    buttonDesc: "G Suite",
    url: "/azureWork",
  },
  {
    image: "/m-office365-icon.png",
    title: "Microsoft office 365",
    desc: "upright Media Office 365 Plans are Designed for Innovating the Experience of Users With World-Class Security, Cloud Service & Ingenious Office apps.",
    buttonDesc: "Microsof tLicence",
    url: "/azureWork",
  },
  {
    image: "/linux-home-icon.jpg",
    title: "Linux Cloud Server",
    desc: "High performing Dedicated Server in India by adding the advanced features for the customers to customize the plans of the servers as per the size and need of the businesses.",
    buttonDesc: "Server",
    url: "/linuxVps",
  },
];

const cardDesc2 = [
  {
    image: "/aws-1.png",
    title: "AWS",
    desc: "Switch to Amazon Cloud Services Today and Explore Serverless Technology with AWS Credits POC",
  },
  {
    image: "/google-1.png",
    title: "Google",
    desc: "G Suite Plans are Designed for Innovating the Experience of Users With World-Class Security",
  },
  {
    image: "/m-office365-icon.png",
    title: "Microsoft",
    desc: "Office 365 Plans are Designed for Innovating the Experience of Users With World-Class Security",
  },
];

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className={styles.container0}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Best Vps and Dedicated Service Provider.
          </h1>
          <p className={styles.desc}>
            We serve businesses of all sizes and sectors
          </p>
          {/* <Button url="/portfolio" text="See Our Works" /> */}
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      </div>
      <div className="my-5">
        <h1 className={styles.desc1}>Our Services</h1>
        <h2 className={styles.desc1}>Services we can help with you</h2>
        <h5 className={styles.desc1}>
          We at Upright Media, we are experts in understanding your objectives
          and designing a custom solution that will help you meet your business
          goals more quickly.
        </h5>
      </div>
      <div className="row">

        {cardDesc.map((card) => (
          <div className="col-4">
          <Card
            // key={""}
            image={card.image}
            title={card.title}
            desc={card.desc}
            buttonDesc={card.buttonDesc}
            url={card.url}
          />
          </div>
        ))}
      </div>
      <div className="row p-5">
        <div className="col-1"></div>
        <div className="col-4">
          <Image
            className="rounded rounded-3"
            src="/download.jpeg"
            alt="managed cloud services"
            width={300}
            height={300}
          />
        </div>
        <div className="col-6">
          <h1>Accelerate your growth with AWS Activate</h1>
          <h5 className="pt-3">
            Benefits for Activate members transcend credit packages. Join now to
            access exclusive offers from AWS partners worth up to $800,000,
            premium training content, curated accelerator programs, and more.
          </h5>
        </div>
      </div>
      <div className="p-5 text-center">
        <h1>Top Technology Partners choose Upright Media</h1>
        <p>World best cloud partner with us, together we make best solution</p>
        <div className={styles.container1}>
          {cardDesc2.map((card1) => (
            <Card
              image={card1.image}
              title={card1.title}
              desc={card1.desc}
              url=""
            />
          ))}
        </div>
      </div>
      <div className="text-center p-5">
        <h1>Discover powerful services to boost your business</h1>
        <h4 className="mb-4">Checkout our main featured services</h4>
        <div className="row  d-flex justify-content-around">
          <div className="row col-5 border border-5 p-3">
            <h1>IOT</h1>
            <p>
              Upright Media Providing a Proactive Solution that Keep on
              Monitoring and Managing Your whm/cpanel server & Windows Server
              Management. Our Services Always keeps You Ahead of Your Competitor
              at Reasonable Cost.
            </p>
            <a>Read Mode</a>
            <Image className="my-3" priority src={iotIcon} alt="iot icon" />
          </div>
          <div className="row col-5 border border-5 p-3">
            <h1>Cyber Security</h1>
            <p>
              Upright Media Providing a Proactive Solution that Keep on
              Monitoring and Managing Your whm/cpanel server & Windows Server
              Management. Our Services Always keeps You Ahead of Your Competitor
              at Reasonable Cost.
            </p>
            <a>Read Mode</a>
            <Image className="my-3" priority src={cyberIcon} alt="cyber icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
