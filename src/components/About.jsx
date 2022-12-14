import React from "react";

export default function About() {
  return (
    <div className="grid grid-cols-1 mt-12 lg:flex w-full h-screen  justify-center items-center">
      <div className="h-full w-max bg-contain  my-10  lg:h-screen w-5/12 bg-[url('../public/img/about/vector.png')] bg-no-repeat bg-center bg-[length:100%] flex items-center items-center">
        <h1 className="text-4xl lg:text-7xl font-bold uppercase ">About us</h1>
      </div>
      <div className="w-full m-0 mt-5 lg:w-7/12 ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <ul className="grid grid-rows-2 grid-flow-col gap-4  mt-10 justify-center items-center">
          <li className="border-2 border-black p-2 px-6 rounded-3xl text-center">
            HTML
          </li>
          <li className="border-2 border-black p-2 px-6 rounded-3xl text-center">
            CSS
          </li>
          <li className="border-2 border-black p-2 px-6 rounded-3xl text-center">
            JS
          </li>
          <li className="border-2 border-black p-2 px-6 rounded-3xl text-center">
            REACT
          </li>
          <li className="border-2 border-black p-2 px-6 rounded-3xl text-center">
            VUE
          </li>
          <li className="border-2 border-black p-2 px-6 rounded-3xl text-center">
            JAVA
          </li>
        </ul>
      </div>
    </div>
  );
}
