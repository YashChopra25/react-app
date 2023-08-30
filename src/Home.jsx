import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Common from "./Common";
const Home = () => {
  const web = "https://picsum.photos/1000/700";
  return (
   
   <Common 
   name="Grow your bussiness with "
   imgsrc={web}
   visit={"/service"}
   btname="Get Started"
    />

  );
};
export default Home;
