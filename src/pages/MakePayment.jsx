import { useContext } from "react";
import SubHeader from "../components/SubHeader";
import { FormContext } from "../App.jsx";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";
import { CiBank } from "react-icons/ci";

export default function MakePayment() {
  const { name, amount, id, tin } = useContext(FormContext);
  return (
    <>
      <SubHeader text={"Make Payment"} />
      <section className="bg-[whitesmoke] min-h-[80vh] flex justify-center">
        <div>
          {/* navigators */}
          <div className="flex items-center space-x-1 mt-5">
            <Link to="/smartairs-landing" className=" text-dark">
              Home
            </Link>
            <RiArrowRightSLine className="text-2xl text-dark" />
            <Link
              to="/smartairs-landing/generateinvoice"
              className=" text-dark"
            >
              Select Identity
            </Link>
            <RiArrowRightSLine className="text-2xl text-dark" />
            <span className="text-primaryBg">Make Payment</span>
          </div>

          <div className="w-[80vw] mt-10 py-5 bg-white h-fit flex justify-center items-center">
            <div className="grid gap-5 w-[70vw]">
              <div className="flex justify-between border-b-2 pb-2 border-gray">
                <strong className="text-dark">BIN:1002545660</strong>
                <span className="text-[red]">
                  <a href="">View Invoice</a> | <a href="">View Receipt</a>
                </span>
              </div>

              {/* Name, Invoice Amount Due, Payer ID, etc.... */}
              <div className="w-[65vw] mx-auto">
                <div className="flex justify-between flex-wrap gap-5">
                  <div className="w-[23%]">
                    <p className="text-[gray]">Name</p>
                    <strong className="text-dark">{name}</strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">Invoice Amount Due</p>
                    <strong className="text-dark">{amount}</strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">Payer ID</p>
                    <strong className="text-dark">{id}</strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">MDA</p>
                    <strong className="text-dark">
                      MINISTRY OF WORKS, HOUSING & TRANSPORT
                    </strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">Revenue Head</p>
                    <strong className="text-dark w-1/5 text-wrap">
                      _FIRE_SERVICE_CHARGES_
                    </strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">External Ref. Number</p>
                    <strong className="text-dark"></strong>
                  </div>

                  <div className="w-[23%]">
                    <p className="text-[gray]">TIN</p>
                    <strong className="text-dark">{tin}</strong>
                  </div>

                  <div className="w-[23%]"></div>
                </div>

                {/* Amount to Pay */}

                <div className="float-end mt-10 w-[46%] pt-3 border-t-one border-gray">
                  <p className="text-dark">Amount to pay &#8358;</p>
                  <div className="p-3 my-2 text-2xl font-extrabold text-dark border-one border-gray bg-slate-50 rounded-md">
                    200.00
                  </div>
                  <small className="text-[gray] flex items-center gap-1">
                    <RiErrorWarningFill className="text-[#e2ad33]" /> Part
                    payment is not allowed for this invoice
                  </small>
                </div>
              </div>

              {/* Payment  */}
              <div className="flex border-b-2 pb-2 border-gray">
                <strong className="text-dark">Payment Methods</strong>
              </div>

              {/* bank transfer */}

              <div className="text-center border-one bg-primaryBg border-[gray] w-52 h-36 rounded-md">
                <div className="w-full h-28 text-dark flex items-center justify-center text-5xl">
                  <CiBank />
                </div>
                <span className="text-white">Bank Transfer</span>
              </div>

              <div className="border-one border-[gray] rounded-md h-fit p-16">
                {/* FOllow for more steps */}
                <div className="flex justify-center pb-5 w-full border-b-one border-gray">
                  <p className="text-xl w-[60%] font-extrabold text-dark">
                    Follow the steps below to make payments on your bank’s
                    mobile banking platform;
                  </p>
                </div>

                {/* step one */}

                <div className="flex items-center mt-7 space-x-3">
                  <strong className="text-xl text-dark">STEP</strong>
                  <div className="text-primaryBg flex justify-center items-center border-one border-primaryBg w-10 h-10 rounded-full">
                    1
                  </div>
                  <span className="font-mono text-dark">
                    Login to your <strong>bank mobile application</strong> and
                    select{" "}
                    <strong className="border-dark border-one p-3 rounded-md">
                      transfer to bank.
                    </strong>
                  </span>
                </div>

                {/* step two */}

                <div className="flex items-center mt-7 space-x-3">
                  <strong className="text-xl text-dark">STEP</strong>
                  <div className="text-primaryBg flex justify-center items-center border-one border-primaryBg w-20 h-10 rounded-full">
                    2
                  </div>
                  <span className="font-mono text-dark leading-10">
                    Select{" "}
                    <strong className="border-dark border-one p-3 rounded-md">
                      ‘Parkway Readycash’
                    </strong>{" "}
                    as the receiving bank and input the your{" "}
                    <strong>Bank3D Invoice Number (BIN) 1002545660</strong> as
                    the receiving bank account number.
                  </span>
                </div>

                {/* step three */}

                <div className="flex items-center mt-7 space-x-3">
                  <strong className="text-xl text-dark">STEP</strong>
                  <div className="text-primaryBg flex justify-center items-center border-one border-primaryBg w-12 h-10 rounded-full">
                    3
                  </div>
                  <span className="font-mono text-dark leading-10">
                    Enter the exact amount to pay in the{" "}
                    <strong className="border-dark border-one p-3 rounded-md">
                      'Amount to transfer'
                    </strong>{" "}
                    field that is <strong>₦200.00 </strong> and proceed.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
