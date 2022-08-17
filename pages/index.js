import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { fetchApi } from "../config/api";
import Card from "../component/Card";
export default function Home() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApi();
      setData(data);
    };
    fetchData();
  }, []);

  const searchedData = data?.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(searchTerm && searchTerm.toLowerCase());
  });

  return (
    <div className=" bg-violet-100 min-h-screen p-10">
      <div>
        <h1 className="   text-center">
          Hexadecimal Software limited Test project
        </h1>

        

        <div className=" max-w-screen-xl mx-auto gap-10 grid sm:grid-cols-2 mt-10">
        

          {data && data.map((item) => <Card data={item} />)}
        </div>
      </div>
      <div></div>
    </div>
  );
}
