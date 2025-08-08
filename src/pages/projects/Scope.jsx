import ScopeIcon from "./styles/propifix/scope_icon.svg";
import ProductScopeImg1 from "./styles/propifix/product_scope1.png";
import ProductScopeImg2 from "./styles/propifix/product_scope2.svg";
export default function Scope() {
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">
          Product Scope
        </h1>
        <p className="text-left font-inter text-[13px] font-normal">
          Propifix is a digital real estate platform that connects users to
          verified property listings, allowing them to browse, schedule
          inspections, and engage directly with trusted agents. It solves the
          problems of real estate fraud, overwhelming search processes, and
          unreliable listing platforms.
        </p>
      </div>
      <div className="grid grid-cols-2 font-inter text-[13px] gap-10 content-center max-[650px]:grid-cols-1">
        <div className="grid gap-4">
          <span>
            <img className="w-8" src={ScopeIcon} alt="" />
          </span>
          <p>
            Every property displayed is vetted to prevent scams, build user
            trust, and promote safe transactions.
          </p>
        </div>
        <div className="grid gap-4">
          <span>
            <img className="w-8" src={ScopeIcon} alt="" />
          </span>
          <p>
            Users can easily narrow down property options using detailed filters
            like location, price range, and amenities.
          </p>
        </div>
        <div className="grid gap-4">
          <span>
            <img className="w-8" src={ScopeIcon} alt="" />
          </span>
          <p>
            Integrated agent profiles with contact features make it easy for
            users to communicate, ask questions, or request visits.
          </p>
        </div>
        <div className="grid gap-4">
          <span>
            <img className="w-8" src={ScopeIcon} alt="" />
          </span>
          <p>
            Users can book property inspections directly within the app,
            simplifying the viewing and decision process.
          </p>
        </div>
      </div>

      {/* Div Containing Scope Images 1 and 2 */}
      <div className="grid gap-10">
        <div>
          <img className="m-auto max-w-full" src={ProductScopeImg1} alt="" />
        </div>
        <div>
          <img className="m-auto max-w-full" src={ProductScopeImg2} alt="" />
        </div>
      </div>
    </section>
  );
}
