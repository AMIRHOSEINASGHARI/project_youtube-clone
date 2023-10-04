//* React Icons
import { AiFillHome } from "react-icons/ai";
import { BsCode, BsMusicNote } from "react-icons/bs";
import { MdMovie } from "react-icons/md";
import { BiMobileVibration } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { RiLiveLine } from "react-icons/ri";
import { TbDeviceLaptop } from "react-icons/tb";

export const categories = [
  { name: "New", icon: <AiFillHome /> },
  { name: "Javascript", icon: <BsCode /> },
  { name: "SmartPhone", icon: <BiMobileVibration /> },
  { name: "LapTop", icon: <TbDeviceLaptop /> },
  { name: "Music", icon: <BsMusicNote /> },
  { name: "Movie", icon: <MdMovie /> },
  { name: "Gaming", icon: <CgGames /> },
  { name: "Live", icon: <RiLiveLine /> },
];
