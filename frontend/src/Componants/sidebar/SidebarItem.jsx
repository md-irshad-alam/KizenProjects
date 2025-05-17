import React, { useRef } from "react";

const SidebarItem = ({ icon, label, setSelectedItem }) => (
  <div
    onClick={() => setSelectedItem(label)}
    className="flex items-center  gap-2 p-2 hover:bg-gray-300 rounded-lg cursor-pointer md:justify-center lg:justify-start"
  >
    {icon}
    <span className="text-lg lg:block hidden">{label}</span>
  </div>
);

export default SidebarItem;
