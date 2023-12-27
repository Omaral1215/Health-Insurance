import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Example icons

const transactionsData = [
  { id: 1, user: "John Doe", amount: 150, status: "Approved" },
  { id: 2, user: "Jane Smith", amount: 200, status: "Pending" },
  { id: 3, user: "Alice Johnson", amount: 100, status: "Approved" },
  { id: 4, user: "Bob Wilson", amount: 75, status: "Pending" },
  { id: 5, user: "Eve Brown", amount: 250, status: "Approved" },
  { id: 6, user: "Charlie Davis", amount: 300, status: "Pending" },
  // ... add more transactions
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPagination = () => (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => handleChangePage(currentPage - 1)}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => handleChangePage(currentPage + 1)}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        disabled={currentPage === totalPages}
      >
         <FaArrowRight />
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Transactions</h1>
      <div className="bg-white rounded shadow p-6">
        <div className="flex items-center mb-4">
          <label htmlFor="search" className="mr-2">
            Search by User:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">User</th>
              <th className="py-2">Amount (₹)</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2">{transaction.id}</td>
                <td className="py-2">{transaction.user}</td>
                <td className="py-2">₹{transaction.amount}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      transaction.status === "Approved"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-gray-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {renderPagination()}
      </div>
    </div>
  );
};

export default Transactions;
