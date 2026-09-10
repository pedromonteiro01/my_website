import { Fragment } from "react";
import { skillGroups, alsoUsing, education } from "../../data/background";
import CodeFrame, { Line, Comment, Kw, Prop, Punct, Str } from "../../components/CodeFrame/CodeFrame";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Badge from "../../components/Badge/Badge";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useInView } from "../../hooks/useInView";
import "./Background.css";

const Background = () => {
  const [ref, inView] = useInView();
  let delayStep = 0;

  return (
    <section className="background" id="background">
      <Breadcrumb path={["portfolio", "src", "sections", "background.js"]} />

      <div ref={ref}>
        <CodeFrame filename="background.js" language="javascript">
          <Line><Comment>{"// Proficiency is self-reported, calibrated against real deadlines."}</Comment></Line>
          <Line><Kw>const</Kw> <Prop>skills</Prop> <Punct>=</Punct> <Punct>{"{"}</Punct></Line>
          {skillGroups.map((group, groupIndex) => (
            <Fragment key={group.id}>
              <Line indent={1}>
                <Prop>{group.title}</Prop><Punct>:</Punct> <Punct>{"{"}</Punct>
              </Line>
              {group.skills.map((skill) => {
                delayStep += 1;
                return (
                  <Line key={skill.id} indent={2}>
                    <span className="skill-line">
                      <span>
                        <Str>{skill.language}</Str><Punct>:</Punct>
                      </span>
                      <span className="skill-line-bar">
                        <ProgressBar value={skill.progress} revealed={inView} delay={delayStep * 90} />
                        <span className="skill-line-percent">{skill.progress}%</span>
                      </span>
                    </span>
                  </Line>
                );
              })}
              <Line indent={1}>
                <Punct>{"}"}</Punct>{groupIndex < skillGroups.length - 1 && <Punct>,</Punct>}
              </Line>
            </Fragment>
          ))}
          <Line><Punct>{"};"}</Punct></Line>
          <Line blank />
          <Line><Comment>{"// frameworks, platforms and languages I've also built real things with"}</Comment></Line>
          <Line><Kw>const</Kw> <Prop>alsoUsing</Prop> <Punct>=</Punct> <Punct>[</Punct></Line>
          <Line indent={1}>
            <span className="also-using">
              {alsoUsing.map((tech) => (
                <Badge key={tech} tone="string">{tech}</Badge>
              ))}
            </span>
          </Line>
          <Line><Punct>];</Punct></Line>
          <Line blank />
          <Line><Comment>{"// —— education ——"}</Comment></Line>
          <Line><Kw>const</Kw> <Prop>education</Prop> <Punct>=</Punct> <Punct>[</Punct></Line>
          {education.map((item) => (
            <Line key={item.id} indent={1}>
              <span className="edu-line">
                <img className="edu-logo" src={item.img} alt="" />
                <span>
                  <Str>{item.degree}</Str><Punct>,</Punct>{" "}
                  <span className="edu-school">{item.school}</span>{" "}
                  <span className="edu-period">({item.period})</span>
                </span>
              </span>
            </Line>
          ))}
          <Line><Punct>];</Punct></Line>
        </CodeFrame>
      </div>
    </section>
  );
};

export default Background;
