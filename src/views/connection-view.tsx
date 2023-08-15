import ConnectionCard from "@/components/atoms/cards/connectioncard";
import React from "react";
import { connected, suggestions } from "@/data/connected";

const ConnectionView = () => {
  const [connectedUsers, setConnectedUsers] = React.useState(connected);
  const [suggestedUsers, setSuggestedUsers] = React.useState(suggestions);

  const handleConnect = (id: number) => {
    const user = suggestedUsers.find((item) => item.id === id);
    if (user) {
      setConnectedUsers((prev) => [...prev, user]);
      setSuggestedUsers((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleRemove = (id: number) => {
    const user = connectedUsers.find((item) => item.id === id);
    if (user) {
      setSuggestedUsers((prev) => [...prev, user]);
      setConnectedUsers((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <React.Fragment>
      <div className="h-[20%] w-11/12 rounded-md relative mt-4 bg-[#1E2875]">
        <p className="text-white capitalize text-2xl font-[500] p-2">
          My Connections
        </p>
      </div>
      <div className="flex gap-4 flex-wrap flex-col lg:flex-row mt-4">
        {connectedUsers.map((item) => (
          <ConnectionCard
            key={item.id}
            id={item.id}
            onConnect={handleConnect}
            onRemove={handleRemove}
            connected
          />
        ))}
      </div>
      <div className="mt-8">
        <p className="text-[#222222E5] text-2xl font-[300] mt-20">
          People you can also connect
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          {suggestedUsers.map((item) => (
            <ConnectionCard
              key={item.id}
              id={item.id}
              onConnect={handleConnect}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConnectionView;
