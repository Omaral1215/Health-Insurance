import React from "react";

const Messages = () => {
  const messages = [
    {
      id: 1,
      sender: "John Doe",
      subject: "Regarding Your Policy",
      content:
        "Dear customer, we would like to inform you about the new policy updates...",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      sender: "Caresure Support",
      subject: "Claim Status",
      content:
        "Hello, your claim request has been processed and the payment will be...",
      timestamp: "1 day ago",
    },
    // Add more messages
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-4">Messages</h1>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{message.sender}</h2>
                  <p className="text-xs text-gray-400">{message.timestamp}</p>
                </div>
                <h3 className="text-md font-medium">{message.subject}</h3>
                <p className="text-gray-600">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
