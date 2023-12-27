import { createContext, useState } from "react";
import SubHeader from "../components/SubHeader";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function ConfirmInvoice(props) {
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [amount, setAmount] = useState("");
  // const [id, setID] = useState("JK-1047523");

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/makepayment");
  };
  return (
    <>
      <SubHeader text={"Confirm Invoice"} />

      <section className="bg-[whitesmoke] min-h-[80vh] flex justify-center">
        <div>
          <div className="flex items-center space-x-1 mt-5">
            <Link to="/" className=" text-black">
              Home
            </Link>
            <RiArrowRightSLine className="text-2xl text-black" />
            <Link to="/generateinvoice" className=" text-black">
              Select Identity
            </Link>
            <RiArrowRightSLine className="text-2xl text-black" />
            <span className="text-primaryBg">Confirm Invoice</span>
          </div>

          <div className="w-[80vw] mt-10 bg-white h-fit p-10 flex justify-center items-center">
            <form className="grid gap-5 w-[50vw]">
              <strong className="text-black border-b-2 w-full h-14 border-gray">
                You are An Individual, you are paying for _ROAD OFFENCES (SOFT
                ALLIANCE) bill (BOARD OF INTERNAL REVENUE SERVICE). Kindly
                confirm your invoice.
              </strong>

              {/* Payer id */}

              <label className="text-black font-extrabold leading-10">
                Payer ID <br />
                <input
                  type="text"
                  className="font-light w-full bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                  value={props.id}
                  onChange={props.handleID}
                />
              </label>

              {/* Name and Email */}

              <div className="flex w-full justify-between items-center">
                <label className="text-black font-extrabold leading-10">
                  Full Name <br />
                  <input
                    type="text"
                    className="font-light w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                    value={props.value}
                    onChange={props.handleChange}
                  />
                </label>
                <label className="text-black font-extrabold leading-10">
                  Email <br />
                  <input
                    type="email"
                    className="font-light w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                  />
                </label>
              </div>

              {/* Phone number & TIN */}

              <div className="flex w-full justify-between items-center">
                <label className="text-black font-extrabold leading-10">
                  Phone Number <br />
                  <input
                    type="number"
                    className="font-light w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                  />
                </label>
                <label className="text-black font-extrabold leading-10">
                  TIN <br />
                  <input
                    type="text"
                    className="font-light w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                    value={props.tin}
                    onChange={props.handleTIN}
                  />
                </label>
              </div>

              <label className="text-black font-extrabold">
                External Reference (Bill number) from _FIRE_SERVICE_CHARGES_
                (MINISTRY OF WORKS, HOUSING & TRANSPORT) <br />
                <input
                  type="text"
                  className="mt-3 font-light w-full bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                />
              </label>

              {/* Address */}

              <label className="text-black font-extrabold">
                Address <br />
                <input
                  type="text"
                  className="mt-3 font-light w-full bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                />
              </label>

              {/* Amount to pay */}

              <div className="w-full flex justify-between">
                <span className="font-medium text-[#222121]">
                  Amount to Pay
                </span>

                <div className="grid gap-3">
                  <input
                    type="number"
                    className="font-light w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                    placeholder="Enter an amount"
                    value={props.amount}
                    onChange={props.handleAmount}
                  />
                  <small className="text-[#222121]">
                    Enter the amount you wish to pay
                  </small>
                </div>
              </div>

              <button
                className="rounded-md bg-[#e2ad33] h-[50px] w-full text-black font-[900] border-none"
                onClick={handleClick}
              >
                Confirm Invoice
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
