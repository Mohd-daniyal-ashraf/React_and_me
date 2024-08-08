import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData(); 
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https:/api.github.com/users/mohd-daniyal-ashraf")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="px-20 px-20 flex  my-20">
        <div className="mr-8">
          <img
            src={data.avatar_url}
            alt=""
            className="w-60 rounded-full

 "
          />
        </div>
        <div className="w-3/4 mt-12">
          <h2 className="text-2xl font-bold">
            {data.name}
            <button className="px-4 outline rounded-lg text-xl ml-8 bg-blue-500 text-white ">
              {" "}
              Followers : {data.followers}
            </button>
          </h2>
          <h2 className="text-xl font-font-light text-gray-600">
            {data.login}
          </h2>
          <h2 className="mt-4   text-small">{data.bio}</h2>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubinfo = async () => {
  const responce = await fetch(
    "https:/api.github.com/users/mohd-daniyal-ashraf"
  );
  return responce.json();
};
