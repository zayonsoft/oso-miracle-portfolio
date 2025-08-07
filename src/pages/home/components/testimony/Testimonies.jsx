import Testimony from "./Testimony";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Testimonies() {
  let testimonyList = [
    {
      testifier: "Wayvy Tech NG",
      testimony:
        "Miracle John's designs are satisfactory and I love the fact that he took heed to corrections. Keep it up bro 👌.",
      role: "Software Developer",
    },
    {
      testifier: "Oluwaseun",
      testimony:
        "Miracle John's designs are both visually captivating and highly effective. He transformed our website, enhancing user engagement and conversions. His attention to detail and creative approach are top-notch. Highly recommended!",
      role: "Web Developer",
    },
    {
      testifier: "Kingsley",
      testimony:
        "I've had the pleasure of collaborating with Miracle on numerous projects, he's an exceptional designer and a valuable partner in the development process. Whenever I receive a complex project, Miracle is my go-to designer. I wholeheartedly endorse Miracle's exceptional design services.",
      role: "Web & App Developer",
    },
    {
      testifier: "Favour",
      testimony:
        "Working with Miracle on my UI/UX design was a game-changer for my software development career. His expertise elevated my project to a whole new level, delivering a seamless and visually stunning result. Miracle’s thoughtful approach made the process effortless, allowing me to achieve both a professional and polished look without any hassle. I highly recommend his talent and dedication to anyone looking to take their projects to the next level.",
      role: "Software Developer",
    },
  ];
  const [testimonies, setTestimonies] = useState(testimonyList);
  return (
    <section className="grid m-auto gap-10 justify-center  grid-cols-2 max-[571px]:grid-cols-1 max-[571px]:gap-5">
      {testimonies.map((t) => (
        <Testimony
          key={uuidv4()}
          testifier={t.testifier}
          testimony={t.testimony}
          role={t.role}
        />
      ))}
    </section>
  );
}
