"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@mui/material";
import { Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";

const serverLinks = [
  {
    title: "Windows VPS Server",
    url: "/windowVps",
    key:""
  },
  {
    title: "Linux VPS Server",
    url: "/linuxVps",
key:""
    // url: ["Windows VPS Server","Linux VPS Server","Windows Dedicated Server"],
  },
  {
    title: "Windows Dedicated Server",
    url: "/windowDedicated",
    key:""
  },
  {
    title: "Linux Dedicated Server",
    url: "/linuxDedicated",
    key:""
  },
];

// {
//   title: "HP Servers",
//   url: "/",
//   key:""
// },

const backupLinks = [
  {
    title: "SSL Certificate",
    url: "/buySsl",
  },
  {
    title: "Acronis Cyber Backup",
    url: "/acronycsCyber",

    // url: ["Windows VPS Server","Linux VPS Server","Windows Dedicated Server"],
  },
  {
    title: "Endpoint Security",
    url: "/endpointSecurity",
  },
];

const awsLinks = [
  {
    title: "Managed AWS Cloud",
    url: "/awsWork",
  },
  {
    title: "Managed Azure Cloud",
    url: "/azureWork",

    // url: ["Windows VPS Server","Linux VPS Server","Windows Dedicated Server"],
  },
  {
    title: "Microsoft Volume Licensing",
    url: "/microsoftLicence",
  },
];

const emailLinks = [
  {
    title: "Microsoft Office 365",
    url: "/microSoft",
  },
  {
    title: "Google Workspace",
    url: "/googleWork",
  },
];

const Navbar = () => {
  const session = useSession();
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  const [anchorEl4, setAnchorEl4] = useState(null);
  const open4 = Boolean(anchorEl4);


  const handleClickServer = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseServer = () => {
    setAnchorEl1(null);
  };

  const handleClickBackup = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseBackup = () => {
    setAnchorEl2(null);
    console.log("working")
  };

  const handleClickEmail = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleCloseEmail = () => {
    setAnchorEl3(null);
  };

  const handleClickAws = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleCloseAws = () => {
    setAnchorEl4(null);
  };
  return (

    <div className="row my-2">
      <div className="col-12 col-sm-12 col-md-2 align-items-center align-items-md-start ">
        <div>
      <Link href="/" className="">
      <Image
      src="/logo.png"
      width={150}
      height={60}
      alt="Main Pic"
      />
        {/* Upright Media */}
      </Link>
      </div>
      </div>
      <div className=" col-12 col-sm-12 col-md-12 col-lg-10  d-flex flex-column  flex-sm-row flex-md-row justify-content-around my-3 align-items-center align-items-md-start">
        <DarkModeToggle />
        <div>
          <Button
            id="fade-button"
            aria-controls={open1 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? "true" : undefined}
            onClick={handleClickServer}
            sx={{color : "black"}}
            className=""
            >
            Server & Cloud
            <ExpandMoreIcon/>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl1}
            open={open1}
            key={""}
            onClose={handleCloseServer}
            TransitionComponent={Fade}
            sx={{color : "black", textDecoration:"none"}}

          >
            {serverLinks.map((link) => (
              <MenuItem onClick={()=> setAnchorEl1(null)} ><Link href={link.url}   sx={{color : "black", textDecoration:"none"}}>{link.title}</Link></MenuItem>
            ))}
          </Menu>
        </div>

        <div>
          <Button
            id="fade-button"
            aria-controls={open2 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClickBackup}
            sx={{color : "black"}}
            >
            Backup & Security
            <ExpandMoreIcon/>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl2}
            open={open2}
            key={""}
            onClose={handleCloseBackup}
            TransitionComponent={Fade}
            sx={{color : "black", textDecoration:"none"}}

          >
            {backupLinks.map((link) => (
                <MenuItem onClick={handleCloseBackup}  sx={{color : "black", textDecoration:"none"}}>
              <Link href={link.url}>
                {link.title}
                </Link>
                </MenuItem>
            ))}
          </Menu>
        </div>

        <div>
          <Button
            id="fade-button"
            aria-controls={open3 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open3 ? "true" : undefined}
            onClick={handleClickEmail}
            sx={{color : "black"}}
          >
            Email & Office365
            <ExpandMoreIcon/>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl3}
            open={open3}
            key={""}
            onClose={handleCloseEmail}
            TransitionComponent={Fade}
            sx={{color : "black", textDecoration:"none"}}

          >
            {emailLinks.map((link) => (
                <MenuItem onClick={handleCloseEmail}>
              <Link href={link.url}>
                {link.title}
                </Link>
                </MenuItem>
            ))}
          </Menu>
        </div>

        <div>
          <Button
            id="fade-button"
            aria-controls={open4 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open4 ? "true" : undefined}
            onClick={handleClickAws}
            sx={{color : "black"}}
          >
          AWS & Azure 
          <ExpandMoreIcon/>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl4}
            open={open4}
            key={""}
            onClose={handleCloseAws}
            TransitionComponent={Fade}
            sx={{color : "black", textDecoration:"none"}}
            >
            {awsLinks.map((link) => (
                <MenuItem onClick={handleCloseAws} sx={{color : "black"}}>
              <Link href={link.url}>
                {link.title}
                </Link>
                </MenuItem>
            ))}
          </Menu>
        </div>
        <div>
      </div>
    </div>
        </div>
  );
};

export default Navbar;
