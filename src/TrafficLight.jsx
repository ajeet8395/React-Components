import { useState, useEffect } from 'react';

function TrafficLight() {
  // State to track the current active light
  const [light, setLight] = useState('red');

  // Array defining the sequence of lights
  const lights = ['red', 'green', 'yellow'];

  // Object defining the duration (in milliseconds) for each light state
  const timings = {
    red: 6000,   // Red light duration
    green: 3000, // Green light duration
    yellow: 6000 // Yellow light duration
  };

  useEffect(() => {
    // Explanation:
    // setTimeout is used to switch the light state after the current light's duration (timings[light]).
    // The setLight function updates the state to the next light in the sequence after the timeout completes.
    const timer = setTimeout(() => {
      setLight((prev) => {
        // Find the index of the current light in the `lights` array.
        // Move to the next light by incrementing the index. Use % to wrap around at the end of the array.
        return lights[(lights.indexOf(prev) + 1) % lights.length];
      });
    }, timings[light]);

    // Cleanup function:
    // clearTimeout ensures that the previous timer is cleared before setting up a new one.
    // This prevents overlapping timers and memory leaks.
    return () => clearTimeout(timer);

    // Dependency array:
    // The effect re-runs whenever the `light` state changes, ensuring the timer is re-initialized for the new light.
  }, [light]);

  return (
    <>
      {/* Container for the traffic light */}
      <div className="flex justify-center items-center h-screen">
        {/* Traffic light structure */}
        <div className="flex flex-col justify-between items-center w-24 h-72 rounded-lg p-2 bg-black">
          {/* Render each light dynamically */}
          {lights.map((col) => (
            // Each light has a conditional class name:
            // - If it matches the current `light`, it gets the bright color (`bg-${col}-500`).
            // - Otherwise, it remains dimmed (`bg-gray-500`).
            <div
              key={col}
              className={`w-full h-20 rounded-full ${light === col ? col === 'yellow' ? 'bg-yellow-500': `bg-${col}-500` : 'bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TrafficLight;
