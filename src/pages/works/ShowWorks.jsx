import MyWorks from "../home/components/works/MyWorks";
export default function ShowWorks(props) {
  return (
    <section className="px-[75px] py-16 grid gap-5 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <MyWorks />
    </section>
  );
}
