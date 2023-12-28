import { useState } from "react";
import SubHeader from "../components/SubHeader";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSFill } from "react-icons/ri";

export default function SearchForBin() {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/smartairs-landing/makepayment");
  };

  const hoverTrue = () => {
    setHover(true);
  };

  const hoverFalse = () => {
    setHover(false);
  };
  return (
    <>
      <SubHeader text={"Search For BIN"} />

      <section className="bg-[whitesmoke] min-h-[80vh] flex justify-center">
        <div className="mt-5">
          <Link to="/smartairs-landing" className=" text-black">
            Home
          </Link>
          <div className="w-screen sm:w-[90vw] md:w-[80vw] mt-10 bg-white h-[30vh] flex justify-center items-center">
            <form className="grid gap-3">
              <p className="flex items-center space-x-2">
                <strong className="text-black">
                  Bank3D Invoice Number (BIN)
                </strong>
                <span
                  className="text-[red] cursor-default"
                  onMouseOver={hoverTrue}
                  onMouseOut={hoverFalse}
                >
                  What's this?
                </span>
                {hover && (
                  <span className="flex items-center">
                    <RiArrowLeftSFill className="text-3xl hidden sm:block absolute text-black -ml-4" />
                    <span className="left-0 sm:left-auto absolute bg-black text-white w-64 h-fit p-5">
                      The Bank3D Invoice Number (BIN) is a unique number that is
                      systematically assigned to each invoice generated on the
                      instant revenue platform. <br /> <br /> This number
                      identifies each invoice and allow payers make payment for
                      their invoices via any of the available payment channels
                      on the platform.
                    </span>
                  </span>
                )}
              </p>

              <div className="border-gray border-one p-[1px] h-[10vh] w-fit">
                <input
                  className="bg-[#F4F4F4] h-full w-[65vw] sm:w-[60vw] md:w-[35vw] pl-2 outline-none"
                  type="text"
                  placeholder="Enter BIN"
                  required
                />
                <button
                  className="rounded-none bg-[#e2ad33] h-full w-[25vw] md:w-32 text-black font-[900] border-none"
                  onClick={handleClick}
                >
                  Enter
                </button>
              </div>

              <p className="text-black font-medium">
                Don't have a BIN? {"  "}
                <Link
                  className="text-[red] hover:underline"
                  to="/smartairs-landing/generateinvoice"
                >
                  Click here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
