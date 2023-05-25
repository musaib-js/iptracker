import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="px-10 py-10 mx-10">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row w-full md:w-[70%] items-center space-y-4">
          <div className="md:w-30 w-[50%] h-30 bg-gray-200 overflow-hidden">
            <img
              src="https://source.unsplash.com/500x500/?search"
              alt=""
              className="rounded"
            />
          </div>
          <div className="flex-col space-y-4 text-center md:w-1/2 w-[80%]">
            <div className="text-blue-900 text-xl font-medium">About Us</div>
            <div className="text-4xl font-medium">&#128269; IPSearch</div>
            <div className="text-gray-500 px-1">
              IPSearch is a website that allows its users to find the details of an IP Address such as City, Region, Country, Calling Code, Currency Code, Coordinates etc. It uses IP API to fetch the details about the address
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-blue-900 px-4 py-1 text-white font-medium rounded-lg hover:scale-105 cursor-pointer">
                <Link to = "/">Visit Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
