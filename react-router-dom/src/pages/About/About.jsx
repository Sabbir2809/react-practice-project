// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function About() {
  // const [info, setInfo] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`https://api.github.com/users/sabbir2809`);
  //     const data = await response.json();
  //     setInfo(data);
  //   })();
  // }, []);

  const info = useLoaderData();

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={info.avatar_url} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{info.name}</h2>
            <p className="mt-6 text-gray-600">{info.bio}</p>
            <Link
              to={info.blog}
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
              Portfolio
            </Link>
            <p className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
              {info.company}
            </p>

            <Link
              to="https://github.com/Sabbir2809"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
              Github URL: {info.html_url}
            </Link>
            <p className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
              Followers: {info.followers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
