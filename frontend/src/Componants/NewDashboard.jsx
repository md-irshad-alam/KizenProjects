import React from "react";
import LineChart from "./chats/line";
import BarChart from "./chats/bar";

function Dashboard2() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lead Generation Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Leads</h2>
          <p className="text-2xl">15,300</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Conversion Rate</h2>
          <p className="text-2xl">4.6%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Budget Spent</h2>
          <p className="text-2xl">$12,450</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">High-Quality Leads</h2>
          <p className="text-2xl">2,100</p>
        </div>
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <LineChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <BarChart />
        </div>
      </div>

      {/* Bottom Row - Donut + Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow flex justify-center items-center">
          <DonutChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Recent Leads</h3>
          <table className="w-full mt-2 text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-2">Name</th>
                <th className="text-left pb-2">Email</th>
                <th className="text-left pb-2">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">John D.</td>
                <td className="py-2">john@example.com</td>
                <td className="py-2 font-semibold text-green-600">87</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Sarah K.</td>
                <td className="py-2">sarah@domain.co</td>
                <td className="py-2 font-semibold text-yellow-500">72</td>
              </tr>
              <tr>
                <td className="py-2">Alex R.</td>
                <td className="py-2">alex@test.org</td>
                <td className="py-2 font-semibold text-red-500">65</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard2;
