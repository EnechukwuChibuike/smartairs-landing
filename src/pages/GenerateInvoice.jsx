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

          <div className="w-[80vw] mt-10 bg-white h-[60vh] flex justify-center items-center">
            <form className="grid gap-5 w-[50vw]">
              <strong className="text-black border-b-2 w-full leading-10 border-gray">
                Kindly fill the following details to proceed
              </strong>

              <strong className="text-black">Who are you?</strong>

              <div className="text-black space-x-3">
                <input
                  className="radio"
                  type="radio"
                  name="whoareyou"
                  required
                />
                <label>Individual</label>
                <input
                  className="radio"
                  type="radio"
                  name="whoareyou"
                  required
                />
                <label>Corporate</label>
                <input
                  className="radio"
                  type="radio"
                  name="whoareyou"
                  required
                />
                <label>Federal Agency</label>
                <input
                  className="radio"
                  type="radio"
                  name="whoareyou"
                  required
                />
                <label>State Agency</label>
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
