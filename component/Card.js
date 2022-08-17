import React from "react";

const Card = ({ data }) => {
  return (
    <div className=" ">
      {" "}
      <div className=" custom-card bg-white w-[400px]    p-10 rounded-md shadow-xl ">
        Name : {data.name}
        <br />
        <br />
        Username : {data.username}
        <br />
        <br />
        Email : {data.email}
        <br />
        <br />
        Address : {data.address.street}, {data.address.suite},{" "}
        {data.address.city}, {data.address.zipcode}
        <br />
        <br />
        Geo : {data.address.geo.lat}, {data.address.geo.lng}
        <br />
        <br />
        Phone : {data.phone}
        <br />
        <br />
        Website : {data.website}
        <br />
        <br />
        Company : {data.company.name}{" "}
        <span className=" text-gray-500">{data.company.catchPhrase} </span>{" "}
        <span className=" text-indigo-400 text-sm">{data.company.bs}</span>
        <br />
      </div>
    </div>
  );
};

export default Card;
