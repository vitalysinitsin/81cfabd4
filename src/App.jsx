import React from "react";
import Header from "./Header";
import ActivityFeed from "./components/ActivityFeed";
import ActivityDetail from "./components/ActivityDetail";

function App() {
  return (
    <div className="bg-red-500">
      <Header />
      <div className="flex flex-col">
        <ActivityFeed />
        <ActivityDetail />
      </div>
    </div>
  );
}

export default App;
