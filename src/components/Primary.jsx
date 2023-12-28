import { MdDoNotDisturbOn } from "react-icons/md";

export default function Primary(props) {
  return (
    <form className="p-5 grid grid-cols-2 gap-5 text-dark text-[14px] border-gray border-one w-full md:w-[70%] font-mono">
      <h1 className="text-xl text-[grey] col-span-2">
        Direct Financial Cost (License Fee)
      </h1>

      {/* title */}
      <label className="space-x-3 text-dark col-span-2">
        Title: <input type="radio" className="radioTin" name="title" />
        <label>Mr</label>
        <input type="radio" className="radioTin" name="title" />
        <label>Mrs</label>
        <input type="radio" className="radioTin" name="title" />
        <label>Miss</label>
        <input type="radio" className="radioTin" name="title" />
        <label>Other</label>
      </label>

      {/* surname */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Surname <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* first name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        First Name <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* middle name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Middle Name <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* nationality */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Nationality <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* phone no 1*/}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Phone No (1) <br />
        <input
          type="number"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* phone no 2*/}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Phone No (2) <br />
        <input
          type="number"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* state of origin */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        State of Origin <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* marital status */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Marital Status
        <select className="bg-transparent border-one border-gray w-full h-8">
          <option>Select Marital status</option>
          <option>Single</option>
          <option>Married</option>
          <option>Widowed</option>
          <option>Divorced</option>
        </select>
      </label>

      {/* D O B */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        D.O.B <br />
        <input
          type="date"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Occupation */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Occupation <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Gender */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Gender
        <select className="bg-transparent border-one border-gray w-full h-8">
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>

      {/* Email */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Email <br />
        <input
          type="email"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Residential Address */}
      <h1 className="text-[grey] text-xl border-t-2 border-gray pt-3 col-span-2">
        Residential Address
      </h1>

      {/* state */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        State
        <select className="bg-transparent border-one border-gray w-full h-8">
          <option>Abia</option>
          <option>Imo</option>
          <option>Enugu</option>
        </select>
      </label>

      {/* LGA */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        LGA
        <select className="bg-transparent border-one border-gray w-full h-8">
          <option>Aba South</option>
          <option>Aba North</option>
          <option>Osisoma</option>
        </select>
      </label>

      {/* Ward */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Ward <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* CITY */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        City/Town/Area <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Street name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Street Name <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* house no. */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        House No. <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* previous Tax Payer Number */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Previous Tax Payer Number <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* issuing authority */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Issuing Authority <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Identification Card */}
      <h1 className="text-[grey] text-xl border-t-2 border-gray pt-3 col-span-2">
        Identification Card
      </h1>

      <div className="flex col-span-2 flex-wrap items-center space-x-2">
        <input type="radio" name="id" className="radioTin" />
        <label>National ID</label>

        <input type="radio" name="id" className="radioTin" />
        <label>Drivers License</label>

        <input type="radio" name="id" className="radioTin" />
        <label>International Passport</label>

        <input type="radio" name="id" className="radioTin" />
        <label>Government Parastatal</label>

        <input type="radio" name="id" className="radioTin" />
        <label>Resident Permit</label>

        <input type="radio" name="id" className="radioTin" />
        <label>Registered Organisation</label>

        <input type="radio" name="id" className="radioTin" />
        <label>Letter From Recognised Individual </label>
      </div>

      {/* id number */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        ID Number <br />
        <input
          type="number"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* issuance date */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Issuance Date <br />
        <input
          type="date"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/*Expiry Date*/}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Expiry Date <br />
        <input
          type="date"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Place of Issuance*/}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Place of Issuance
        <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* ID Issuing Authority */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        ID Issuing Authority <br />
        <input
          type="text"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Tax Assessment/Payment Details */}
      <h1 className="text-[grey] text-xl border-t-2 border-gray pt-3 col-span-2">
        Tax Assessment/Payment Details
      </h1>

      {/* Last Assessment Date */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Last Assessment Date <br />
        <input
          type="date"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Last Assessment Amount */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Last Assessment Amount <br />
        <input
          type="number"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Last Payment Date */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Last Payment Date <br />
        <input
          type="date"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Last Payment Amount */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Last Payment Amount <br />
        <input
          type="number"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Tax Type */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Tax Type
        <select className="bg-transparent border-one border-gray w-full h-8">
          <option>Select Tax Type</option>
          <option>Personal Income</option>
          <option>Company Tax</option>
        </select>
      </label>

      <h1 className="text-[grey] text-xl flex items-center space-x-3 col-span-2">
        <MdDoNotDisturbOn />
        Total Income for the Past Three Years
      </h1>

      {/* Year one */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Year <br />
        <input
          type="text"
          value="2023"
          className="bg-gray pl-2 border-one outline-none border-[gray] w-full h-8"
          disabled
        />
      </label>

      {/* income */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Income <br />
        <input
          type="number"
          className="bg-transparent pl-2 border-one outline-none border-[gray] w-full h-8"
        />
      </label>

      {/* Year two */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Year <br />
        <input
          type="text"
          value="2022"
          className="bg-gray pl-2 border-one outline-none border-[gray] w-full h-8"
          disabled
        />
      </label>

      {/* income */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Income <br />
        <input
          type="number"
          className="bg-transparent pl-2 border-one outline-none border-[gray] w-full h-8"
        />
      </label>

      {/* Year three */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Year <br />
        <input
          type="text"
          value="2021"
          className="bg-gray pl-2 border-one outline-none border-[gray] w-full h-8"
          disabled
        />
      </label>

      {/* income */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Income <br />
        <input
          type="number"
          className="bg-transparent pl-2 border-one outline-none border-[gray] w-full h-8"
        />
      </label>

      <div className="col-span-2 flex justify-center">
        <button
          className="bg-gray text-dark px-7 hover:opacity-80 rounded-md m-10 py-3"
          onClick={props.handleClick}
        >
          Next
        </button>
      </div>
    </form>
  );
}
