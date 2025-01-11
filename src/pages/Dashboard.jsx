import React from 'react';

function Dashboard() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4 mt-6">Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-4 px-6 border-b border-r border-l text-left">Name</th>
                            <th className="py-4 px-6 border-b border-r text-left">Age</th>
                            <th className="py-4 px-6 border-b border-r text-left">Gender</th>
                            <th className="py-4 px-6 border-b border-r text-left">Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-4 px-6 border-b border-r border-l text-left">John Doe</td>
                            <td className="py-4 px-6 border-b border-r text-left">30</td>
                            <td className="py-4 px-6 border-b border-r text-left">Male</td>
                            <td className="py-4 px-6 border-b border-r text-left">Healthy</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-4 px-6 border-b border-r border-l text-left">Jane Smith</td>
                            <td className="py-4 px-6 border-b border-r text-left">25</td>
                            <td className="py-4 px-6 border-b border-r text-left">Female</td>
                            <td className="py-4 px-6 border-b border-r text-left">Healthy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;