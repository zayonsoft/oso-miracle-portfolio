export default function List(props) {
  return (
    <>
      <li>
        <a
          className={
            props.isNav
              ? "text-white hover:text-[#175DC2] font-montserrat text-[15px] max-[700px]: p-1.5 max-[700px]:block max- max-[700px]:w-full max-[700px]:border-b-[#1b1f2c] max-[700px]:border-b max-[700px]:hover:bg-white max-[700px]:hover:text-[#040e2e] transition-all"
              : "font-montserrat text-[15px]"
          }
          href=""
        >
          {props.name}
        </a>
      </li>
    </>
  );
}
