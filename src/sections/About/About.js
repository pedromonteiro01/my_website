import profile from "../../assets/about/pedro_profile.jpeg";
import { about } from "../../data/about";
import CodeFrame, { Line, Comment, Str, Kw, Prop, Punct } from "../../components/CodeFrame/CodeFrame";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useInView } from "../../hooks/useInView";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section className="about" id="about">
      <Breadcrumb path={["portfolio", "src", "sections", "about.js"]} />

      <div className={`about-grid ${inView ? "is-visible" : ""}`} ref={ref}>
        <CodeFrame filename="about.js" language="javascript" className="about-code">
          <Line><Comment>{"/**"}</Comment></Line>
          <Line><Comment>{" * A quick introduction."}</Comment></Line>
          <Line><Comment>{" */"}</Comment></Line>
          <Line><Kw>const</Kw> <Prop>pedro</Prop> <Punct>=</Punct> <Punct>{"{"}</Punct></Line>
          <Line indent={1}><Prop>name</Prop><Punct>:</Punct> <Str>{about.name}</Str><Punct>,</Punct></Line>
          <Line indent={1}><Prop>role</Prop><Punct>:</Punct> <Str>{about.role}</Str><Punct>,</Punct></Line>
          <Line indent={1}><Prop>company</Prop><Punct>:</Punct> <Str>{about.company}</Str><Punct>,</Punct></Line>
          <Line indent={1}><Prop>livesIn</Prop><Punct>:</Punct> <Str>{about.livesIn}</Str><Punct>,</Punct></Line>
          <Line indent={1}><Prop>degree</Prop><Punct>:</Punct> <Str>{about.degree}</Str><Punct>,</Punct></Line>
          <Line indent={1}><Prop>thesis</Prop><Punct>:</Punct> <Str>{about.thesis}</Str><Punct>,</Punct></Line>
          <Line indent={1}>
            <Prop>traits</Prop><Punct>:</Punct> <Punct>[</Punct>
            {about.traits.map((trait, i) => (
              <span key={trait}>
                <Str>{trait}</Str>
                {i < about.traits.length - 1 && <Punct>, </Punct>}
              </span>
            ))}
            <Punct>]</Punct><Punct>,</Punct>
          </Line>
          <Line indent={1}>
            <Prop>stack</Prop><Punct>:</Punct> <Punct>[</Punct>
          </Line>
          <Line indent={2}>
            {about.stack.map((tech, i) => (
              <span key={tech}>
                <Str>{tech}</Str>
                {i < about.stack.length - 1 && <Punct>, </Punct>}
              </span>
            ))}
          </Line>
          <Line indent={1}><Punct>]</Punct><Punct>,</Punct></Line>
          <Line indent={1}><Prop>currentlyExploring</Prop><Punct>:</Punct> <Str>{about.currentlyExploring}</Str><Punct>,</Punct></Line>
          <Line indent={1}><Prop>linkedin</Prop><Punct>:</Punct> <Str>{about.linkedin}</Str><Punct>,</Punct></Line>
          <Line><Punct>{"};"}</Punct></Line>
          <Line blank />
          <Line><Comment>{"// I participate regularly in lectures and workshops, ship small"}</Comment></Line>
          <Line><Comment>{"// side projects and contribute on GitHub in my free time."}</Comment></Line>
        </CodeFrame>

        <aside className="about-preview">
          <span className="about-preview-tag">Preview</span>
          <div className="about-avatar">
            <img src={profile} alt={about.name} />
          </div>
          <h3>{about.name}</h3>
          <p className="about-preview-role">{about.role} @ {about.company}</p>
          <p className="about-preview-location">
            <i className="fas fa-map-marker-alt" aria-hidden="true" /> {about.livesIn}
          </p>
          <a className="about-linkedin-link" href={about.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in" aria-hidden="true" /> View my LinkedIn
          </a>
        </aside>
      </div>
    </section>
  );
};

export default About;
