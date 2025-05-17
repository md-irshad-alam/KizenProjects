import React, { useEffect, useState } from "react";
import LineChart from "./chats/line";
import BarChart from "./chats/bar";

import apiclient from "../utils/apiclint";
import Sidebar from "./sidebar/sidebar";
import { Input, InputLabel, Table, TableHead } from "@mui/material";
import LeadTableInfo from "./pages/tableChart";
import PolarAreaChart from "./chats/polarAreachart";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("All");

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    source: "",
    campaign: "",
    minScore: "",
    maxScore: "",
  });

  // Fetching the leads based on filters
  useEffect(() => {
    const fetchLeads = async () => {
      const res = await apiclient.get("/leads", {
        params: filters,
      });
      setLeads(res.data);
    };
    fetchLeads();
  }, [filters]);

  // Handle Date Change
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Final filtering of leads based on sidebar selection
  const filteredLeads =
    selectedSidebarItem === "All"
      ? leads
      : leads.filter((lead) => lead.source === selectedSidebarItem);

  return (
    <div className="p-6 flex ">
      {/* Sidebar */}
      <Sidebar setSelectedItem={setSelectedSidebarItem} />
      {/* Main Content */}
      <div className=" block w-full lg:w-[80%]   m-auto ml-4 absolute top-25 right-6">
        <h1 className="text-2xl font-bold mb-6">
          Lead Generation Dashboard For :{" "}
          <span className="text-blue-300 font-bold text-2xl">
            {selectedSidebarItem}
          </span>
        </h1>

        {/* KPI Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">Total Leads</h2>
            <p className="text-2xl">{filteredLeads.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">Conversion Rate</h2>
            <p className="text-2xl">4.6%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">Budget Spent</h2>
            <p className="text-2xl">$12,450</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">High-Quality Leads</h2>
            <p className="text-2xl">
              {filteredLeads.filter((l) => l.score > 80).length}
            </p>
          </div>
        </div>
        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="w-full">
            <InputLabel>Start Date</InputLabel>
            <Input
              name="startDate"
              type="date"
              fullWidth
              onChange={handleChange}
              className="border p-2"
              value={filters.startDate}
            />
          </div>
          <div>
            <InputLabel>End Date</InputLabel>
            <Input
              name="endDate"
              type="date"
              fullWidth
              onChange={handleChange}
              className="border p-2"
              value={filters.endDate}
            />
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <LineChart data={filteredLeads} source={selectedSidebarItem} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <BarChart data={filteredLeads} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 w-full">
          <div className="bg-white p-4 rounded shadow w-[100%] max-h-[400px]  m-auto ">
            <PolarAreaChart data={filteredLeads} />
          </div>

          {/* Leads Table */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Recent Leads</h3>
            <div className="w-[100%] m-auto">
              {" "}
              <LeadTableInfo rowData={filteredLeads} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
