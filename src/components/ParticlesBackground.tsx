import { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Container } from "@tsparticles/engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      if (!container) {
        return;
      }
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Black background
          },
        },
        fpsLimit: 60,
        
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ff0000", // Red particles
          },
          links: {
            color: "#ff0000", // Red links
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1100,
            },
            value: 30,
          },
          opacity: {
            value: 0.45,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
