import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "../config/ParticlesConfig";
// import ParticlesConfig1 from "../config/ParticlesConfig1";

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="particles"
        options={ParticlesConfig}
        init={particlesInit}
      />
    </div>
  );
};

export default ParticlesBackground;
