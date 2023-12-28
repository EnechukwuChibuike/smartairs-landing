import { useState } from "react";
import SubHeader from "../components/SubHeader";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Primary from "../components/Primary";
import Secondary from "../components/Secondary";

export default function RegisterTin() {
  const [primary, setPrimary] = useState(true);
  const [secondary, setSecondary] = useState(false);
  const [primaryStyle, setPrimaryStyle] = useState(
    "border-primaryBg text-dark"
  );
  const [secondaryStyle, setSecondaryStyle] = useState("text-gray border-gray");

  const handleClick = () => {
    setPrimary(false);
    setSecondary(true);

    setPrimaryStyle("text-gray border-[green]");
    setSecondaryStyle("border-primaryBg text-dark");
  };
  return (
    <>
      <SubHeader text={"Register For TIN"} />

      <section className="bg-[whitesmoke] min-h-[80vh] flex justify-center">
        <div>
          <div className="flex items-center space-x-1 mt-5">
            <Link to="/smartairs-landing" className=" text-black">
              Home
            </Link>
            <RiArrowRightSLine className="text-2xl text-black" />
            <span className="text-primaryBg">Register TIN</span>
          </div>

          <div className="w-[80vw] mt-10 bg-white h-fit p-10 flex justify-center items-center">
            <div className="grid gap-5 w-[70vw]">
              <h1 className="text-3xl text-[grey]">
                TAX IDENTIFICATION NUMBER REGISTRATION
              </h1>

              <div className="flex justify-between">
                {/* aside */}
                <div className="border-one grid gap-5 text-[14px] border-gray p-5 h-fit w-[25%]">
                  {/* Primary information */}
                  <p className={`border-b-2 w-fit pb-2 ${primaryStyle}`}>
                    PRIMARY INFORMATION
                  </p>

                  {/* Secondary Information */}
                  <p className={`border-b-2 w-fit pb-2 ${secondaryStyle}`}>
                    SECONDARY INFORMATION
                  </p>

                  {/* Reference */}
                  <p className="text-gray">REFERENCE </p>
                </div>

                {primary && <Primary handleClick={handleClick} />}
                {secondary && <Secondary />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
