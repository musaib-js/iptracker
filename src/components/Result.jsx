import React from "react";

export default function Result(props) {
  return (
    <div>
      {!props.visible ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Enter an IP Address Above to View the Details
              </h1>
            </div>
          </div>
        </section>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                IP Address: {props.deets.error?"Please Enter A Valid IP Address":props.deets.ip}
              </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    Version: {props.deets.version}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                  Country: {props.deets.country_name} - {props.deets.country_code}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    Region: {props.deets.region}, {props.deets.region}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    ISP: {props.deets.org}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    Postal Code: {props.deets.postal}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    Coordinates: {props.deets.latitude}, {props.deets.longitude}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    Timezone: {props.deets.timezone}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    UTC Offset: {props.deets.utc_offset}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    Country Calling Code: {props.deets.country_calling_code}
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-900 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    ASN: {props.deets.asn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
