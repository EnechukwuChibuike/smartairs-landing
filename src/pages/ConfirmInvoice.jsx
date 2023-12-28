import SubHeader from "../components/SubHeader";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function ConfirmInvoice(props) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/smartairs-landing/makepayment");
  };
  return (
    <>
      <SubHeader text={"Confirm Invoice"} />

      <section className="bg-[whitesmoke] min-h-[80vh] flex justify-center">
        <div>
          <div className="flex items-center space-x-1 mt-5">
            <Link to="/smartairs-landing" className=" text-black">
              Home
            </Link>
            <RiArrowRightSLine className="text-2xl text-black" />
            <Link
              to="/smartairs-landing/generateinvoice"
              className=" text-black"
            >
              Select Identity
            </Link>
            <RiArrowRightSLine className="text-2xl text-black" />
            <span className="text-primaryBg">Confirm Invoice</span>
          </div>

          <div className="w-screen sm:w-[90vw] md:w-[80vw] mt-10 bg-white h-fit py-10 flex justify-center items-center">
            <form className="grid gap-5 w-[90%] md:w-[50vw]">
              <strong className="text-black border-b-2 w-full pb-2 border-gray">
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

              <div className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
                <label className="text-black font-extrabold leading-10">
                  Full Name <br />
                  <input
                    type="text"
                    className="font-light w-full md:w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                    value={props.value}
                    onChange={props.handleChange}
                  />
                </label>
                <label className="text-black font-extrabold leading-10">
                  Email <br />
                  <input
                    type="email"
                    className="font-light w-full md:w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                  />
                </label>
              </div>

              {/* Phone number & TIN */}

              <div className="flex w-full flex-col md:flex-row md:justify-between md:items-center">
                <label className="text-black font-extrabold leading-10">
                  Phone Number <br />
                  <input
                    type="number"
                    className="font-light w-full md:w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
                  />
                </label>
                <label className="text-black font-extrabold leading-10">
                  TIN <br />
                  <input
                    type="text"
                    className="font-light w-full md:w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
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

              <div className="w-full flex flex-col md:flex-row md:justify-between">
                <span className="font-medium text-[#222121]">
                  Amount to Pay
                </span>

                <div className="grid gap-3">
                  <input
                    type="number"
                    className="font-light w-full md:w-80 bg-[#F4F4F4] h-[50px] border-one border-gray pl-2 rounded-md"
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
