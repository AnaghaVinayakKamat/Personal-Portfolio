import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const Node = styled.div`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  transition: all 2s ease;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-left: 2px solid #4a5568;
    border-bottom: 2px solid #4a5568;
    width: 20px;
    height: 100%;
    transition: all 2s ease;
  }
`;

const Leaf = styled.div`
  position: relative;
  margin-left: 20px;
  padding: 5px 10px;
  background: #edf2f7;
  border: 2px solid #e2e8f0;
  border-radius: 5px;
  transition: all 2s ease;
`;

const Skills = () => {
  const [dataScienceRef, dataScienceInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const [aiRef, aiInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const [softwareDevRef, softwareDevInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const [otherTechRef, otherTechInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const getSpringProps = (inView) => useSpring({
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    opacity: inView ? 1 : 0,
    config: { duration: 2000 }
  });

  const dataScienceSpring = getSpringProps(dataScienceInView);
  const aiSpring = getSpringProps(aiInView);
  const softwareDevSpring = getSpringProps(softwareDevInView);
  const otherTechSpring = getSpringProps(otherTechInView);

  return (
    <div className="p-6 bg-gray-100 min-h-screen" id="Skills">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-2 cursor-pointer" ref={dataScienceRef}>
          Data Science and Analytics
        </h2>
        <animated.div style={dataScienceSpring}>
          <Node>
            <Leaf>Microsoft PowerBI</Leaf>
            <Leaf>Microsoft Excel</Leaf>
            <Leaf>Microsoft SQL Server</Leaf>
            <Leaf>Extract Transform Load (ETL) Process</Leaf>
            <Leaf>R/Python Programming</Leaf>
            <Leaf>Statistical Modelling And Analysis for Data Science</Leaf>
          </Node>
        </animated.div>

        <h2 className="text-2xl font-semibold mb-2 mt-4 cursor-pointer" ref={aiRef}>
          Artificial Intelligence
        </h2>
        <animated.div style={aiSpring}>
          <Node>
            <Leaf>Machine Learning</Leaf>
            <Leaf>Natural Language Processing</Leaf>
            <Leaf>Deep Learning</Leaf>
            <Leaf>Convolution Neural Networks / Regression Modelling</Leaf>
            <Leaf>Sentence Transformers and Explainable AI</Leaf>
            <Leaf>Supervised and Unsupervised Learning</Leaf>
          </Node>
        </animated.div>

        <h2 className="text-2xl font-semibold mb-2 mt-4 cursor-pointer" ref={softwareDevRef}>
          Software Development
        </h2>
        <animated.div style={softwareDevSpring}>
          <Node>
            <Leaf>Python Programming</Leaf>
            <Leaf>Django Framework</Leaf>
            <Leaf>Javascript</Leaf>
            <Leaf>HTML/CSS/Bootstrap/Tailwind</Leaf>
            <Leaf>ReactJs</Leaf>
            <Leaf>MySQL/PLSQL</Leaf>
          </Node>
        </animated.div>

        <h2 className="text-2xl font-semibold mb-2 mt-4 cursor-pointer" ref={otherTechRef}>
          Other Technical Skills
        </h2>
        <animated.div style={otherTechSpring}>
          <Node>
            <Leaf>Data Scraping / Web Mining</Leaf>
            <Leaf>Git/Github/Gitlab</Leaf>
            <Leaf>Linux</Leaf>
            <Leaf>Heroku</Leaf>
          </Node>
        </animated.div>
      </div>
    </div>
  );
};

export default Skills;
