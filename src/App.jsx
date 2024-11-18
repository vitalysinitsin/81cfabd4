import React, { useState } from "react";
import Header from "./Header";
import ActivityFeed from "./components/ActivityFeed";
import ActivityDetail from "./components/ActivityDetail";

function App() {
  const [selectedCall, setSelectedCall] = useState({});

  return (
    <div>
      <Header />
      <div className="flex flex-row h-full">
        <ActivityFeed setCall={setSelectedCall} />
        <ActivityDetail call={selectedCall} />
      </div>
    </div>
  );
}

export default App;
