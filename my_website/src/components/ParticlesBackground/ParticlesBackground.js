import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

return (
  <div className="particles">
    <Particles
    style={{zIndex: 1}}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    bounce: false,
                    random: false,
                    speed: 2.5,
                    straight: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 70,
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                },
                shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000"
                    },
                    polygon: {
                      nb_sides: 5
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                },
            },
            detectRetina: true,
        }}
    />
    </div>
);
};

export default ParticlesBackground;
