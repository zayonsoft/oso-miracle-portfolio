import Service from "./Service";
import { useState } from "react";

import DesignIcon from "../../styles/services/design.svg";
import BrandingIcon from "../../styles/services/branding.svg";
import UsabilityIcon from "../../styles/services/usability_testing.svg";
import ResearchIcon from "../../styles/services/ux_research.svg";

import { v4 as uuidv4 } from "uuid";

export default function Services() {
  let serviceList = [
    {
      name: "Design",
      details:
        "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
      image: DesignIcon,
    },
    {
      name: "Branding",
      details:
        "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
      image: BrandingIcon,
    },
    {
      name: "UX Research",
      details:
        "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
      image: ResearchIcon,
    },
    {
      name: "Usability Testing",
      details:
        "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
      image: UsabilityIcon,
    },
  ];
  const [services, setServices] = useState(serviceList);

  return (
    <section className="grid grid-cols-4 bg-white px-[75px] py-10 justify-between gap-2.5 max-[830px]:px-[50px] max-[861px]:grid-cols-3 max-[751px]:grid-cols-2 max-[601px]:grid-cols-1 max-[601px]:gap-8 max-[700px]:px-[30px]">
      {services.map((service) => (
        <Service
          key={uuidv4()}
          name={service.name}
          details={service.details}
          image={service.image}
        />
      ))}
    </section>
  );
}
