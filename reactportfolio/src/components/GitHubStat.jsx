import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import GitHubCalendar from "react-github-calendar";
const username = "Swetarani-Patel";
const utcOffset = "5:30";

const apiUrl = `https://raw.githubusercontent.com/Swetarani-Patel/Swetarani-Patel/master/profile-summary-card-output/transparent/4-productive-time.svg`;

const GitHubStat = () => {
  const handleMouseOver = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const imgStyle = {
    transition: "0.5s",
  };
  const imgStyle1 = {
    transition: "0.5s",
  };
  const imgStyle2 = {
    transition: "0.5s",
  };
  const imgStyle3 = {
    transition: "0.5s",
  };
  return (
    <section className="skill-list" id="github  ">
    <h1 className="subtitle"> My <span>Statistics</span></h1>
  
     
      {/* <h2>
        <BsGithub />
      </h2> */}
      <div className="container github_container">
        <article className="github">
          <div className="github_head">
            <h3>Languages</h3>
          </div>
          <ul className="github_list">
            <a href="https://github.com/Swetarani-Patel" target="_blank">
              <img
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Swetarani-Patel&layout=compact&hide_border=true&theme=transparent"
                style={{ border: "none", ...imgStyle2 }}
                align="center"
                alt="Swetarani-Patel"
              />
            </a>
          </ul>
        </article>

        <article className="github">
          <div className="github_head">
            <h3>Stats</h3>
          </div>
          <ul className="github_list">
            <a href="https://github.com/Swetarani-Patel" _blank>
              <img
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=Swetarani-Patel&show_icons=true&theme=transparent&hide_border=true"
                style={{ border: "none", ...imgStyle1 }}
                align="center"
                alt="Swetarani-Patel"
              />
            </a>
          </ul>
        </article>

        <article className="github">
          <div className="github_head skills-card">
            <h3>Streak</h3>
          </div>
          <ul className="github_list">
            <a a href="https://github.com/Swetarani-Patel" target="_blank">
              <img
                id="github-streak-stats"
                style={{ border: "none", ...imgStyle }}
                align="center"
                src="https://github-readme-streak-stats.herokuapp.com?user=Swetarani-Patel&theme=transparent&hide_border=true&border_radius=1rem"
                alt="Swetarani-Patel"
              />
            </a>
          </ul>
        </article>

        <article className="github">
          <div className="github_head skills-card">
            <h3>Calendar</h3>
          </div>
          <ul className="github_list">
            <a href="https://github.com/Swetarani-Patel" target="_blank">
              <GitHubCalendar
                username="Swetarani-Patel"
                class="react-activity-calendar"
              />
            </a>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default GitHubStat;
