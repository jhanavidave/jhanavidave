import React from 'react';

function Profex() {
  return (
    <div>
      <hr />
      <p id="spacing" align="justify">
        <b><u>Company:</u></b> Colgate Global Business Services Private Limited
        <br />
        <b><u>Location:</u></b> Mumbai, MH, India
        <br />
        <b><u>Tenure:</u></b> JULY 2019 - JUNE 2022
        <br />
        <b><u>Role:</u></b> Senior Technology Associate
        <br />

        {/* <li><b>Cross-Functional Communication & Reporting:</b> Acted as a key liaison between technical teams, business stakeholders, and project managers, ensuring clear communication and reporting on progress, risks, and milestones. Delivered regular updates and reports on the status of key projects, ensuring transparency and alignment with business priorities.</li>
          <li>Delivered robust solutions by implementing technical changes and configurations, utilizing cutting-edge technologies, and resolving issues through agile troubleshooting and proactive updates.</li>
          <li>Conducted in-depth analysis of business requirements, leveraging advanced analytical skills to identify challenges and opportunities, while delivering actionable insights and strategic guidance to business teams.</li>
          <li>Collaborated with project teams to define scope, set development timelines, and create detailed roll-out plans, ensuring strict adherence to high-quality development standards and deadlines.</li>
          <li>Ensured timely and accurate project delivery by adhering to development standards, processes, and timelines, while establishing metrics and benchmarks to track performance against business standards.</li>
          <li>Engaged in regular code reviews, providing constructive feedback to ensure high code quality and adherence to best practices.</li> */}
        <h3><b><u>Responsibilities</u></b></h3>
        <hr />
        <ul>
          <li><b>Solution Delivery & Technical Implementation:</b> Delivered scalable, robust solutions by implementing technical changes, configurations, and system enhancements across multiple SAP platforms. Utilized cutting-edge technologies such as SAP R/3, S/4HANA, IBP, UiPath, Google Apps Script, and Demand Planning Algorithms to integrate automated systems, improving operational efficiency and business continuity.</li>
          <li><b>Proactive Issue Resolution & Optimization:</b> Identified and resolved system issues using root cause analysis and agile troubleshooting methods. Addressed critical challenges such as SAP extraction failures, IBP job level changes, and automated job tracking issues, minimizing disruptions and enhancing reliability.</li>
          <li><b>Business Requirements Analysis & Strategic Guidance:</b> Analyzed business requirements, leveraging advanced analytical skills to identify challenges and opportunities. Provided actionable insights and strategic recommendations that aligned technical solutions with business objectives, contributing to successful project outcomes.</li>
          <li><b>Project Scope Definition & Collaboration:</b> Led cross-functional teams in defining project scopes, setting development timelines, and creating comprehensive rollout plans. Ensured stakeholder alignment and adherence to high-quality development standards, successfully delivering projects on time and within scope.</li>
          <li><b>Performance Monitoring & Metrics Tracking:</b> Developed and implemented key performance metrics to monitor system performance and business outcomes, ensuring deliverables met or exceeded business standards. Used tools like Google Sheets and automated job monitoring systems to enhance workflows, boosting efficiency by 3x on a monthly basis.</li>
          <li><b>Code Quality & Best Practices:</b> Led regular code reviews to ensure high-quality code, adherence to best practices, and compliance with development standards. Focused on optimizing scalability, maintainability, and performance in all deliverables.</li>
          <li><b>Automation Leadership & Team Management:</b> Spearheaded the development and integration of automation tools, including the Automated Job Monitoring Tool. Led teams through the design and implementation process, significantly reducing manual effort, improving efficiency, and increasing productivity by up to 60%.</li>
        </ul>

        <h3><b><u>Projects</u></b></h3>
        <hr />
        <b>AUTOMATED JOB MONITORING SHEET TOOL:</b>
        <br />
        AUG. 2019 - NOV. 2019
        <ul>
          <li>Technologies used: JavaScript, Google Apps Script, Google Sheets, ScriptApp API, GmailApp API, HTML5/CSS3</li>
          <li>Self-initiated and developed an automated job monitoring tool using Google Apps Script and JavaScript to track 30,000 daily SAP jobs. Designed a notification system for job failures and delays using GmailApp API. This tool saved 30-45 minutes of manual monitoring daily, increased efficiency by 3x, and reduced incident tickets by 15%. Demonstrated the importance of scalable and reliable system design in production environments.</li>
        </ul>

        <b>ASIA PACIFIC DEMAND SENSING ROLLOUT:</b>
        <br />
        JUN. 2020 - DEC. 2020
        <ul>
          <li>Technologies used: Demand Planning Algorithms, SAP Production APO, R/3 and S/4HANA, IBP, Demand Planning Macros</li>
          <li>Led the implementation of a demand sensing algorithm across the Asia-Pacific region, calculating 6-week forecasts based on sales orders, shipments, and other data points. Integrated the solution with SAP’s Production APO, R/3, S/4HANA, and IBP systems, improving inventory optimization and deployment planning.</li>
        </ul>

        <b>NORTH AMERICA S/4HANA CONSOLIDATION:</b>
        <br />
        JUN. 2020 – APR. 2021
        <ul>
          <li>Technologies used: SAP Production APO, R/3, S/4HANA, IBP, Google Apps Script, Google Sheets</li>
          <li>Contributed to the integration of two North American SAP systems into a unified S/4HANA platform, ensuring continuity in business processes and enhancing system performance. Monitored SAP extraction processes and IBP job levels, troubleshooting failures to ensure smooth transition. Worked with cross-functional teams for seamless data migration and operational efficiency, integrating the Automated Job Monitoring Tool to streamline job tracking during the migration process.</li>
        </ul>

        <b>PROCESS AUTOMATION FOR PRODUCTION SYSTEM ITEM MANAGEMENT:</b>
        <br />
        AUG. 2021 - MAR. 2022
        <ul>
          <li>Technologies used: UiPath, SAP Production APO, R/3 and S/4HANA, MRP Controllers, Demand Planning Macros</li>
          <li>Automated the creation, extension, and regeneration of MRP controllers and timestreams in global SAP systems using UiPath. Optimized automation workflows, reducing over 200 hours of manual work per month and improving system reliability. This project enhanced my ability to design scalable and maintainable automation solutions for enterprise systems.</li>
        </ul>

        <b>YEAR-END ACTIVITIES AUTOMATION:</b>
        <br />
        NOV. 2021 - JAN. 2022
        <ul>
          <li>Technologies used: UiPath, SAP APO, R/3 and S/4HANA, IBP, Calendar Management Tools, Google Apps Script, Google Sheets</li>
          <li>Led the automation of critical year-end activities, including fiscal year changes and planning area extensions, using UiPath and Google Apps Script. Designed workflows that automatically handled system configurations and updates, reducing daily workload by 5 tickets and improving system efficiency by 60%, ensuring business continuity during peak periods.</li>
        </ul>

      </p>
    </div>
  );
}

export default Profex;