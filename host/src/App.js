import React from "react";
const MicroApp1 = React.lazy(() => import("Micro1/App"));
const MicroApp2 = React.lazy(() => import("Micro2/Button"));
import './App.css'

function App() {
  return (
    <div className="host-app">
      <h1>Host Application</h1>
      <div className="micro-apps">
      <React.Suspense fallback="Loading MicroApp1...">
        <MicroApp1 />
      </React.Suspense>
      <React.Suspense fallback="Loading MicroApp2...">
        <MicroApp2 />
      </React.Suspense>
    </div>
    </div>
  );
}

export default App;
