import React from "react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      content: "You have received a new message from a user.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "Payment Received",
      content: "Your payment for the premium plan has been received.",
      timestamp: "1 day ago",
    },
    // Add more notifications
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-4">Notifications</h1>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 className="text-lg font-semibold">{notification.title}</h2>
                <p className="text-gray-600">{notification.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.timestamp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
