import React from "react";
import SubHeader from "../components/SubHeader";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function GenerateInvoice() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/smartairs-landing/confirminvoice");
  };
  return (
    <>
      <SubHeader text={"Generate Invoice"} />
      <section className="bg-[whitesmoke] min-h-[80vh] flex justify-center">
        <div>
          <div className="flex items-center space-x-1 mt-5">
            <Link to="/smartairs-landing" className=" text-black">
              Home
            </Link>
            <RiArrowRightSLine className="text-2xl text-black" />
            <span className="text-primaryBg">Select Identity</span>
          </div>

          <div className="w-screen sm:w-[90vw] md:w-[80vw] mt-10 bg-white h-fit py-5 flex justify-center items-center">
            <form className="grid gap-5 w-[90%] sm:w-3/4 md:w-[50vw]">
              <strong className="text-black border-b-2 w-full pb-4 border-gray">
                Kindly fill the following details to proceed
              </strong>

              <strong className="text-black">Who are you?</strong>

              <div className="text-black flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-1">
                  <input
                    className="radio"
                    type="radio"
                    name="whoareyou"
                    required
                  />
                  Individual
                </label>

                <label className="flex items-center gap-1">
                  <input
                    className="radio"
                    type="radio"
                    name="whoareyou"
                    required
                  />
                  Corporate
                </label>

                <label className="flex items-center gap-1">
                  <input
                    className="radio"
                    type="radio"
                    name="whoareyou"
                    required
                  />
                  Federal Agency
                </label>

                <label className="flex items-center gap-1">
                  <input
                    className="radio"
                    type="radio"
                    name="whoareyou"
                    required
                  />
                  State Agency
                </label>
              </div>

              <strong className="text-black">
                What do you want to pay for?
              </strong>

              <input
                type="text"
                placeholder="Search for annual fees, tender fees etc"
                className="bg-[#F4F4F4] h-[50px] border-one border-gray w-full pl-2 outline-none rounded-md"
                required
              />

              <button
                className="rounded-md bg-[#e2ad33] h-[50px] w-full text-black font-[900] border-none"
                onClick={handleClick}
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
