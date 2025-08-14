import "../styles/work.css";
export default function Main() {
  return (
    <main className="absolute pt-24 top-0 left-0 right-0 left h-screen overflow-y-hidden">
      <div className="absolute grid gap-10 w-[90%] max-w-[800px] -translate-x-1/2 top-[45%] left-1/2 text-center max-[800px]:top-[40%]">
        <h1 className="text-white font-montserrat text-4xl font-semibold max-[800px]:text-2xl">
          Let’s Start a Project Together
        </h1>
        <div className="text-white grid gap-3 font-inter font-light text-lg max-[800px]:text-sm">
          <p>
            Perhaps there’s a way your business could benefit by partnering with
            Rivert UI/UX Design? Please share your thoughts in the form below,
            and I will respond within 48 hours of receiving the inquiry.
          </p>
          <p>
            You can also reach me at
            <br />
            <a className="text-[#448EF9]" href="">
              hello@rivertdesign.com
            </a>
          </p>
        </div>
      </div>
      <div className="work-main-bg absolute w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 top-[100%] left-1/2 max-[700px]:w-[350px] max-[700px]:h-[350px] max-[500px]:w-[300px] max-[500px]:h-[350px]"></div>
    </main>
  );
}
