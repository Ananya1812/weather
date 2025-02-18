import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// Lazy load the remote WeatherWidget component
const WeatherWidget = React.lazy(() => import("weather_widget/WeatherWidget"));

const App = () => (
  <div>
    <h1>Widget Shell (Host)</h1>
    <Suspense fallback={<p>Loading Weather Widget...</p>}>
      <WeatherWidget />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
