import { useContext } from "react";
import SubHeader from "../components/SubHeader";
import { FormContext } from "../App.jsx";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";

export default function MakePayment() {
  const { name, amount, id, tin } = useContext(FormContext);
  return (
    <>
      <SubHeader text={"Make Payment"} />
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
            <span className="text-primaryBg">Make Payment</span>
          </div>

          <div className="w-[80vw] mt-10 py-5 bg-white h-fit flex justify-center items-center">
            <div className="grid gap-5 w-[70vw]">
              <div className="flex justify-between border-b-2 pb-3 border-gray">
                <strong className="text-black">BIN:1002545660</strong>
                <span className="text-[red]">
                  <a href="">View Invoice</a> | <a href="">View Receipt</a>
                </span>
              </div>

              {/* Name, Invoice Amount Due, Payer ID, etc.... */}
              <div className="w-[65vw] mx-auto">
                <div className="flex justify-between flex-wrap gap-5">
                  <div className="w-[23%]">
                    <p className="text-[gray]">Name</p>
                    <strong className="text-black">{name}</strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">Invoice Amount Due</p>
                    <strong className="text-black">{amount}</strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">Payer ID</p>
                    <strong className="text-black">{id}</strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">MDA</p>
                    <strong className="text-black">
                      MINISTRY OF WORKS, HOUSING & TRANSPORT
                    </strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">Revenue Head</p>
                    <strong className="text-black w-1/5 text-wrap">
                      _FIRE_SERVICE_CHARGES_
                    </strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">External Ref. Number</p>
                    <strong className="text-black"></strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">TIN</p>
                    <strong className="text-black">{tin}</strong>
                  </div>

                  <div className="w-[23%]"></div>
                </div>

                {/* Amount to Pay */}

                <div className="float-end mt-10 w-[46%] pt-3 border-t-one border-gray">
                  <p className="text-black">Amount to pay &#8358;</p>
                  <div className="p-3 my-2 text-2xl font-extrabold text-black border-one border-gray bg-slate-50 rounded-md">
                    200.00
                  </div>
                  <small className="text-[gray] flex items-center gap-1">
                    <RiErrorWarningFill className="text-[#e2ad33]" /> Part
                    payment is not allowed for this invoice
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
