import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push Limits. Build Power,Stronger Every Rep,Train Hard. Transform Fast,
          Don’t Stop. Level Up.

        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Unlock strength, speed, and discipline with our high-intensity training sessions designed for real transformation.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Push past limits and build powerful muscle with guided strength training.
            </p>
          </div>
          <div>
            <h4>Fat Loss & HIIT Bootcamp</h4>
            <p>
              Burn calories fast with intense, explosive workouts that ignite fat loss.
            </p>
          </div>
          <div>
            <h4>Body Transformation Bootcamp</h4>
            <p>
              Customized training + nutrition support for a complete physique upgrade.
            </p>
          </div>
          <div>
            <h4>Athletic Performance Bootcamp</h4>
            <p>
              Boost endurance, agility, and power like a pro athlete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
