import { useState } from "react";
import { MdDoNotDisturbOn } from "react-icons/md";

export default function Secondary() {
  const [selectedOption, setSelectedOption] = useState();

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form className="p-5 grid gap-5 text-dark text-[14px] border-gray border-one w-full md:w-[70%] font-mono">
      <h1 className="text-xl text-[grey] col-span-2">
        Direct Financial Cost (License Fee)
      </h1>

      {/* Name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Name <br />
        <input
          type="text"
          className="bg-transparent pl-2 border-one outline-none border-gray w-full h-8"
        />
      </label>

      {/* TIN */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        TIN <br />
        <input
          type="text"
          className="bg-transparent pl-2 border-one outline-none border-gray w-full h-8"
        />
      </label>

      {/* Rep.Type */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Rep.Type <br />
        <input
          type="text"
          value="TaxAgent"
          className="bg-transparent pl-2 border-one outline-none border-gray w-full h-8"
        />
      </label>

      {/* Reason */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Reason <br />
        <input
          type="text"
          className="bg-transparent pl-2 border-one outline-none border-gray w-full h-8"
        />
      </label>

      {/* Representative Details  */}
      <h1 className="text-[grey] text-xl border-t-2 border-gray pt-3 col-span-2">
        Representative Details
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

      {/* Email */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Email <br />
        <input
          type="email"
          className="bg-transparent border-one border-gray w-full h-8"
        />
      </label>

      {/* Source of Income  */}
      <h1 className="text-[grey] text-xl border-t-2 border-gray pt-3 col-span-2">
        Source of Income
      </h1>

      <label className="font-mono text-[17px] col-span-2 space-x-1">
        Are you an employee?{" "}
        <input
          type="radio"
          className="radioTin"
          name="source"
          value="employee"
          checked={selectedOption === "employee"}
          onChange={handleRadioChange}
        />
        <label>Yes</label>
      </label>

      <label className="font-mono text-[17px] col-span-2 space-x-1">
        Are you self employed?{" "}
        <input
          type="radio"
          className="radioTin"
          name="source"
          value="employed"
          checked={selectedOption === "employed"}
          onChange={handleRadioChange}
        />
        <label>Yes</label>
      </label>

      <label className="font-mono text-[17px] col-span-2 space-x-1">
        Are you an organisation owner/partner?{" "}
        <input
          type="radio"
          className="radioTin"
          name="source"
          value="partner"
          checked={selectedOption === "partner"}
          onChange={handleRadioChange}
        />
        <label>Yes</label>
      </label>

      <label className="font-mono text-[17px] col-span-2 space-x-1">
        No Income?{" "}
        <input
          type="radio"
          className="radioTin"
          name="source"
          value="income"
          checked={selectedOption === "income"}
          onChange={handleRadioChange}
        />
        <label>Yes</label>
      </label>

      {selectedOption === "employee" && (
        <div className="grid gap-5">
          {/* Employer Name */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Employer Name <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Employer TIN */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Employer TIN <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Date of Employment */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Start Date Of Employment
            <br />
            <input
              type="date"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>
        </div>
      )}

      {selectedOption === "employed" && (
        <div className="grid grid-cols-2 gap-5 col-span-2">
          <h1 className="text-[grey] border-t-2 pt-5 border-gray text-xl flex items-center space-x-3 col-span-2">
            <MdDoNotDisturbOn />
            Self Employment Details
          </h1>

          {/* Name */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Name <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Commencement Date */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Commencement Date <br />
            <input
              type="date"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

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

          {/* Sector */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Sector <br />
            <input
              type="text"
              className="bg-transparent border-one border-gray w-full h-8"
            />
          </label>

          {/* Line of Business */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Line of Business <br />
            <input
              type="text"
              className="bg-transparent border-one border-gray w-full h-8"
            />
          </label>

          {/* Number of employees */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Number of employees <br />
            <input
              type="number"
              className="bg-transparent border-one border-gray w-full h-8"
            />
          </label>
        </div>
      )}

      {selectedOption === "partner" && (
        <div className="grid grid-cols-2 gap-5 col-span-2">
          <h1 className="text-[grey] border-t-2 pt-5 border-gray text-xl flex items-center space-x-3 col-span-2">
            <MdDoNotDisturbOn />
            Ownership Details
          </h1>
          <p className="col-span-2">
            fill this section only if you are a full or part owner of a
            registered business
          </p>

          {/* Ownership Name */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Ownership Name <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* TIN */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            TIN <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Shareholding */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Shareholding (%) <br />
            <input
              type="number"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Date */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Date <br />
            <input
              type="date"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          <h1 className="text-[grey] border-t-2 pt-5 border-gray text-xl flex items-center space-x-3 col-span-2">
            <MdDoNotDisturbOn />
            Asset Details
          </h1>

          {/* Type Of Asset */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Type Of Asset <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* LOcation Of Assets */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            LOcation Of Assets <br />
            <input
              type="text"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Market Value */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Market Value (&#8358;) <br />
            <input
              type="number"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>

          {/* Date */}
          <label className="leading-8 col-span-2 sm:col-span-1">
            Date <br />
            <input
              type="date"
              className="bg-transparent border-one pl-2 border-gray w-full h-8"
            />
          </label>
        </div>
      )}

      <h1 className="text-[grey] border-t-2 pt-5 border-gray text-xl flex items-center space-x-3 col-span-2">
        <MdDoNotDisturbOn />
        Dependent/Children/Spouse
      </h1>

      <p className="col-span-2 text-center">
        fill this section only if you have a dependant or spouse
      </p>

      {/* Dep/Child SurName */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Dep/Child SurName <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* First Name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        First Name <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* Middle Name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Middle Name <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* State of Origin */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        State of Origin <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* DOB */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        DOB <br />
        <input
          type="date"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* TIN */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        TIN <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* Relationship Type */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Relationship Type <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      <h1 className="text-[grey] text-xl col-span-2">Spouse</h1>

      {/*  SurName */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        SurName <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* First Name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        First Name <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* Middle Name */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Middle Name <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* Start Date */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        Start Date <br />
        <input
          type="date"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      {/* TIN */}
      <label className="leading-8 col-span-2 sm:col-span-1">
        TIN <br />
        <input
          type="text"
          className="bg-transparent border-one pl-2 border-gray w-full h-8"
        />
      </label>

      <label className="text-red-500 col-span-2 font-mono">
        <input type="checkbox" className="check" /> I accept that the above
        information is true and correct
      </label>

      <div className="col-span-2 flex justify-center">
        <button className="bg-gray text-dark px-7 hover:opacity-80 rounded-md m-10 py-3">
          Submit
        </button>
      </div>
    </form>
  );
}
