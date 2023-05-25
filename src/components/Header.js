import React, { useState} from "react";
import Result from "./Result";
import { Link } from "react-router-dom";

export default function Header() {
  const [deets, setDeets] = useState(null);
  const [visible, setVisible] = useState(false);
  const [ip, setIP] = useState("");

  const handleInputChange = (event) => {
    setIP(event.target.value);
  };

  async function fetchData() {
    const url = `https://ipapi.co/${ip}/json`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setDeets(responseJson);
    setVisible(true);
  }

  return (
    <div>
      <div className="flex justify-center bg-blue-900 text-white ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex md:flex-row flex-col  justify-between items-center md:items-start">
            <h1 className=" py-4 text-2xl font-sans font-bold px-10">
              &#128269;IPSearch
            </h1>
            <ul className="flex justify-center my-4  items-center text-sm md:text-[18px] font-bold  md:px-10">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                <a href="https://ipapi.co">API</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex justify-center  bg-blue-900 p-5 md:p-16 lg:p-28">
        <div className="flex flex-col justify-center  max-w-7xl  text-white">
          <h1 className="text-base font-medium tracking-wider ">
            Hello, User!
          </h1>
          <span className="underline underline-offset-2 text-white -mt-3">
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <div className="flex flex-col text-white mt-5">
            <h1 className="text-4xl md:text-[50px] font-semibold">
              Welcome to IPSearch
            </h1>
            <p className="text-xl mt-2 md:mt-4 tracking-wide">
              Find the details of an IP Address
            </p>
          </div>
          <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">
            IPSearch provides users with the facility to get the details of an
            IP Address such as City, Region, Country, Calling Code, Currency
            Code, Coordinates etc
          </p>
          <div className="space-x-3 mt-6 md:mt-4">
            <label htmlFor="searchBox" className="mx-4 py-2">
              Enter the IP Address
            </label>
            <br />
            <input
              type="text"
              onChange={handleInputChange}
              id="searchBox"
              placeholder="IP Address"
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-80 lg:w-[340px]"
            />
          </div>
          <div className="flex mt-10 space-x-5">
            <button
              onClick={fetchData}
              className="bg-white text-blue-600 mx-4 px-6 py-2 hover:brightness-105 font-semibold"
            >
              Find
            </button>
          </div>
        </div>
      </div>
      <Result visible={visible} ip={ip} deets={deets} />
    </div>
  );
}
