import React from "react";
import Title from "../../Components/Title";
import Card from "../../Components/Card";

const About = () => {
  return (
    <section id="about" className="">
      <Title title="ABOUT" />
      <div className="lg:flex gap-4 justify-between my-5 lg:my-20 ">
        <Card
          biography="Biography"
          paragraph="Ermias Tsegu Gizaw was born in Addis Ababa Ethiopia. When his age is mature enough to start education, he joined local primary school and secondary school. Finally, after passing the national education examination he joined Hawassa university located Hawassa Ethiopia."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#6387F2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </Card>
        <Card
          biography="Education"
          paragraph="Ermias Tsegu has a Bachelor Degree in Electrical and Computer Engineering (Computer Engineering) stream from the Department of Electrical and Computer Engineering at Hawassa University. Currently, He is only expected to complete his research work to complete his Master’s Degree in Computer Science from Addis Ababa University."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#6387F2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </Card>
        <Card
          biography="Experience"
          paragraph="After completing his Bachelor’s Degree, Ermias Tsegu joined a governmental organization as a system application developer. Then joined a new team as Application Software developer, and then as a senior Application Software developer. In his career, he used various technologies to solve various software related problems. Currently, He is working as a System and Network Security Auditor and Evaluator.   "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#6387F2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </Card>
      </div>
    </section>
  );
};

export default About;
