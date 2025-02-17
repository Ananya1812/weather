import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const WeatherApp = React.lazy(() => import('weather_widget/WeatherWidget'));

const App = () => {
  const [isWeatherWidgetLoaded, setIsWeatherWidgetLoaded] = useState(false);

  useEffect(() => {
    setIsWeatherWidgetLoaded(true);
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {isWeatherWidgetLoaded ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          <WeatherApp />
        </React.Suspense>
      ) : (
        <div>Loading widget...</div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
