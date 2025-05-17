import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "./chats/line";
import BarChart from "./chats/bar";
import DonutChart from "./chats/DonutChart";
import apiclient from "../utils/apiclint";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    source: "",
    campaign: "",
    minScore: "",
    maxScore: "",
  });

  useEffect(() => {
    const fetchLeads = async () => {
      //  axios.get("http://localhost:5000/api/leads", {
      //   params: filters,
      // });
      const res = await apiclient.get("/leads", {
        params: filters,
      });
      setLeads(res.data);
    };
    fetchLeads();
  }, [filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Lead Generation Dashboard</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <input
          name="startDate"
          type="date"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="endDate"
          type="date"
          onChange={handleChange}
          className="border p-2"
        />
        <select name="source" onChange={handleChange} className="border p-2">
          <option value="">All Sources</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Google Ads">Google Ads</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg">Total Leads</h2>
          <p className="text-2xl">{leads.length}</p>
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
          <p className="text-2xl">{leads.filter((l) => l.score > 80).length}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <LineChart data={leads} source="Facebook" />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <LineChart data={leads} source="Instagram" />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <LineChart data={leads} source="Email" />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <BarChart data={leads} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow w-[50%] h-fit">
          <DonutChart data={leads} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Recent Leads</h3>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {leads.slice(0, 5).map((l, i) => (
                <tr key={i}>
                  <td>{l.name}</td>
                  <td>{l.email}</td>
                  <td>{l.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
