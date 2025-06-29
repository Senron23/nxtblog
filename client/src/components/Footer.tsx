import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-background mt-auto py-5 items-center">
      <Image src="/B.png" alt="" width={30} height={30} />

      <p>All rights reserved. Copyright @BLOGEEZI</p>
      <div className="flex gap-2 ">
        <Image src="/github.svg" alt="" width={30} height={30} className="bg-foreground rounded-2xl p-1"/>
        <Image src="/linked.svg" alt="" width={30} height={30} className="bg-foreground rounded-2xl p-1"/>
        <Image src="/insta.svg" alt="" width={30} height={30} className="bg-foreground p-1 rounded-2xl"/>
      </div>
    </div>
  );
};

export default Footer;
