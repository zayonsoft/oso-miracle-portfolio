import Work from "./Work";
import { useState } from "react";

import propifix from "../../styles/works/propifix.png";
import orbitpay from "../../styles/works/orbitpay.png";
import fundity from "../../styles/works/fundity.png";
import haza from "../../styles/works/haza.png";
import ScannyBar from "../../styles/works/scanny_barcode.png";
import dman from "../../styles/works/dman.png";
import { details } from "framer-motion/client";
import { v4 as uuidv4 } from "uuid";

export default function MyWorks() {
  let projectList = [
    {
      name: "PropiFix - Real Estate & Home Service Network",
      image: propifix,
      details:
        "Propifix is a real estate platform created to bring clarity and confidence to property transactions. In a market where scams and unreliable listings are all too common, Propifix solves this by offering only verified property listings, with built-in tools that allow users to filter, explore, and connect with real estate agents seamlessly. ",
      terms: ["Real Estate", "Property Management", "Listings Platform"],
    },
    {
      name: "OrbitPay - Fintech App",
      image: orbitpay,
      details:
        "OrbitPay is a fintech app that reimagines the experience of mobile banking by making financial transactions effortless and intuitive. Traditional banking apps often feel bloated or unintuitive - OrbitPay corrects that with a sleek interface that focuses on money transfers, transaction tracking, and card management in the simplest way possible.",
      terms: ["Fintech", "Digital Banking", "Personal Finance"],
    },
    {
      name: "Fundity - Fintech App",
      image: fundity,
      details:
        "Fundity is a full-featured fintech app built with the future of digital banking in mind. Unlike typical finance apps that only handle transactions, Fundity brings comprehensive financial control into one place - covering everything from quick payments and AI-powered support to smart savings, loan plans, account unification, investment tracking, and biometric security.",
      terms: ["Fintech", "Wealth Management", "AI Assistant"],
    },
    {
      name: "Haza - Cryptocurrency App",
      image: haza,
      details:
        "Haza is a cryptocurrency trading and management platform designed for both beginners and experienced investors in the digital currency space. In an industry often criticized for complexity and poor UX, Haza steps in with a straightforward, secure, and visually clear design, enabling users to buy, sell, track, and manage various cryptocurrencies effortlessly.",
      terms: ["Cryptocurrency", "Digital Assets", "Trading Platforms"],
    },
    {
      name: "Dman - Fashion Website",
      image: dman,
      details:
        "DMan is a fashion e-commerce website tailored to showcase and sell men’s wear with a strong visual identity and modern shopping experience. The platform focuses on bold style, clean aesthetics, and smooth product discovery, offering users an intuitive way to explore collections, view details, and make purchases with ease.",
      terms: ["Fashion", "E-commerce", "Retail", "Lifestyle"],
    },
    {
      name: "Scany - Barcode Scanner App",
      image: ScannyBar,
      details:
        "Scany is a barcode scanning mobile app that brings smart, real-time shopping intelligence to the fingertips of consumers. The core idea was to simplify the way users interact with products in stores or at home by making it easy to scan barcodes, view detailed product information, compare prices, and track items in a shopping list.",
      terms: ["Retail Tech", "Shopping Assistant", "Barcode Scanning"],
    },
  ];

  const [projects, setProjects] = useState(projectList);
  return (
    <section className="grid gap-10">
      {projects.map((project) => (
        <Work
          key={uuidv4()}
          name={project.name}
          image={project.image}
          details={project.details}
          terms={project.terms}
        />
      ))}
    </section>
  );
}
