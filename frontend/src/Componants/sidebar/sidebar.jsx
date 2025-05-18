import React, { useRef } from "react";
import {
  AiFillHome,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import SidebarItem from "./SidebarItem";

const sidebarItems = [
  { icon: <AiFillHome size={24} />, label: "All" },
  { icon: <AiFillFacebook size={24} />, label: "Facebook" },
  { icon: <AiFillInstagram size={24} />, label: "Instagram" },
  { icon: <AiFillMail size={24} />, label: "Email" },
  { icon: <AiFillGoogleCircle size={24} />, label: "Google Ads" },
  { icon: <BiSearch size={24} />, label: "Organization Search" },
];

const Sidebar = ({ setSelectedItem }) => {
  const buttonRef = useRef(null);

  return (
    <div className="hidden lg:flex flex-col h-screen pl-4 pr-4 bg-gray-100 text-black p-4 transition-all duration-300 fixed left-0 top-25 w-fit">
      <div className="mb-8 lg:block hidden">
        <h1 className="text-2xl font-bold">Lead Sources</h1>
      </div>

      <div className="flex flex-col gap-4">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
