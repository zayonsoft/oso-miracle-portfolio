export default function SpecificServices(props) {
  return (
    <section className="grid gap-10 font-inter w-[90%] box-border max-w-[800px] bg-red p-2 m-auto">
      <h1 className="text-center font-medium text-3xl">
        What specific services or products do you build? <br />
        Can I take a peek?
      </h1>
      <div className="grid gap-3 max-w-[500px] w-[90%] m-auto">
        <p>
          <textarea
            className="outline-none resize-none border w-full p-3 rounded-xl font-inter text-xs border-[#0000004D] focus:border-[#000000] h-[25vh] placeholder:text-xs"
            name=""
            placeholder="Enter your project description..."
          ></textarea>
        </p>
      </div>
    </section>
  );
}
