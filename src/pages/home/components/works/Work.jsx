import { useNavigate, Link } from "react-router-dom";
import "../../styles/works/works.css";
import { ArrowRight } from "lucide-react";
import { v4 } from "uuid";

export default function Work(props) {
  const navigate = useNavigate();

  function navigateToProject(id) {
    navigate(`/my_project/${id}`);
  }
  return (
    <section className="grid gap-2 border-[1px] border-[#00000099] rounded-4xl m-auto grid-cols-2 p-4 font-montserrat content-center max-w-[850px] max-[571px]:grid-cols-1">
      <div className="grid gap-8 max-[571px]:order-2">
        <div className="grid gap-5 self-start">
          <h1 className="font-semibold text-2xl max-[800px]:text-xl">
            {props.name}
          </h1>
          <p className="text-[12px]">{props.details}</p>
          <p className="text-[12px] flex flex-wrap gap-1 text-[#00000099]">
            {props.terms.map((term) => (
              <span
                key={v4()}
                className="inline-block border-[#0000004D] border-[1px] px-1 py-1.5 rounded-4xl"
              >
                {term}
              </span>
            ))}
          </p>
        </div>
        <p className="self-end">
          <button
            onClick={() => navigateToProject(props.id)}
            className="flex text-sm border-[#000000] w-[150px] justify-center cursor-pointer hover:bg-[#175DC2] hover:border-[#175DC2] hover:text-white font-semibold border-[1px] px-1.5 py-2 rounded-full gap-2 max-[571px]:w-full"
          >
            <span className="text-[12px]"> View Project</span>{" "}
            <span className="grid self-center">
              <ArrowRight size={14} />
            </span>
          </button>
        </p>
      </div>

      {/* This Div Contains The Image */}
      <div className="grid content-center max-[1000px]:content-start max-[571px]:order-1">
        <img
          className="block justify-self-end rounded-4xl work-image-shadow w-full max-h-full object-center object-contain"
          src={props.image}
          alt=""
        />
      </div>
    </section>
  );
}
