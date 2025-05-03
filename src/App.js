import React from 'react'
import styles from './App.module.css'
import bsfltmngr from './Components/BusFleetManager WalkThrough.mp4'
import hcdav from './Components/HCDAV WalkThrough.mp4'


function App() 
{
  
  return (
    <div className={styles.container}>
      
          <div className={styles.navbar}>
              
              <p className={styles.logo}>
                <h1>HARSHA</h1>
              </p>

              <div>
                <button className={styles.btn} onClick={() => window.open('https://www.linkedin.com/in/MHHRK','_blank')}>Ping Me</button>
              </div>
          
          </div>

          <div className={styles.content}>

              {/* //Introduction */}
              <div className={styles.intro}>
                <h1>Hey there, I’m Harsha</h1>
                <p>My full name is Hazarath Harsha Ramakrishna Munaga, a Computer Science and Engineering graduate from Aditya Engineering College with a deep interest in all things software and technology.</p>
                <p>I believe technology has the power to change lives — and I aim to be part of that change. Whether it’s crafting elegant UIs with ReactJS, designing robust APIs with Spring, or solving logic puzzles in C and Java, I enjoy every part of the development journey. I’m fueled by curiosity, driven by results, and committed to clean, scalable code.</p>
                <p>
                🌟 My Philosophy<br/>
                “The best way to predict the future is to create it.”
                Whether I’m learning a new language, contributing to a project, or collaborating on a team, I believe in continuous improvement and purpose-driven development. Every bug fixed, every feature deployed — it’s all part of the story I’m writing as a developer.
                </p>
              </div>
        
               {/* Projects */}
              <div className={styles.projects}>
              <h1>Projects</h1>
              <div className={styles.bfm}>
              <h3>🚍 BusFleet Manager</h3>
              <p>
              BusFleet Manager is a full-stack web application developed to streamline and digitize the management of college bus information. 
              Designed with a focus on efficiency and usability, the application provides a clean and intuitive interface that supports complete CRUD (Create, Read, Update, Delete) 
              operations for maintaining comprehensive bus records, including bus numbers, routes, driver details, and schedules. 
              The system features two distinct user roles: Admin, who has full access to create, modify, and delete records, and Student, who can view bus information in read-only mode. 
              This role-based access ensures data integrity while offering convenience to end users. Built using modern technologies like ReactJS, Spring Boot, and MySQL, BusFleet Manager delivers a robust, responsive, and user-friendly solution for managing institutional transportation systems.
              </p><br/>
              <h4>🔧 Tech Stack</h4>
              <p>
              • Frontend: ReactJS<br/>
              • Backend: Spring Boot<br/>
              •	Database: MySQL 
              </p>
              <br/>
              <h4>Watch It Work</h4><br/>
              <div className="video-container">
                <video width="100%" height="auto" controls controlsList="nodownload">
                  <source src={bsfltmngr} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              </div>
              <div className={styles.hcdav}>
              <h3>🧬 Health Care Data Analysis and Visualization</h3>
              <p>
              Health Care Data Analysis and Visualization is a web application built to help users uncover insights from medical data through automated clustering and interactive visualization. 
              Users can simply upload a CSV file, and the system intelligently applies core machine learning techniques including Normalization, PCA, and KMeans++
              to analyze the dataset, detect hidden patterns, and group similar records. 
              The processed results are then displayed on the frontend using intuitive charts and graphs for clear, meaningful interpretation. 
              Additionally, the application offers a Download Report feature that allows users to export the clustered data in CSV format, and
              a Contact button with a built-in form to report issues, making the tool not only insightful but also user-friendly and collaborative.
              </p><br/>
              <h4>🔧 Tech Stack</h4>
              <p>
              • Frontend: ReactJS<br/>
              • Backend: Spring Boot<br/>
              •	ML & Data Processing: Java (Backend)<br/>
              •	Database: MySQL 
              </p>
              <br/>
              <h4>Watch It Work</h4><br/>
              <div className="video-container">
              <video width="100%" height="auto" controls controlsList="nodownload">
                <source src={hcdav} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
              </div>
              </div>
            </div>
          </div>

        <div className={styles.rsume}>
          <button onClick={() => window.open('/Resume.pdf', '_blank')}>
            🚀 Explore My Resume
          </button>
        </div>

          <div className={styles.fter}> 
            #MadeWithReactJS
          </div>
    </div>
  )
}

export default App