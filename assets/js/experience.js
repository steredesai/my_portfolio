AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "AI Data Analyst Intern",
    cardImage: "assets/images/experience-page/f&b.png",
    place: "F&B Insights",
    time: "(June 2025 – Present)",
    desp: `
      <li>Developed robust pipelines to process POS, menu, recipe & purchase data.</li>
      <li>Applied LLM-based clustering to identify ingredient-level insights.</li>
      <li>Engineered recipe similarity & purchase features using Python and Pandas.</li>
    `,
  },
  {
    title: "Research Data Analyst",
    cardImage: "assets/images/experience-page/BING.png",
    place: "Binghamton University",
    time: "(Dec 2024 – June 2025)",
    desp: `
      <li>Built ETL workflows using Python, AWS Glue, Redshift & S3 for academic/health data.</li>
      <li>Automated pipelines using Airflow, reducing manual processing by 40%.</li>
      <li>Created Power BI dashboards for institutional research & decision-making.</li>
      <li>Leveraged OpenAI LLMs (GPT-4) for text analysis and metadata generation to enhance research productivity.</li>
    `,
  },
  {
    title: "Senior Data Analyst",
    cardImage: "assets/images/experience-page/Capgemini.webp",
    place: "Capgemini (Client: Ikano Bank UK)",
    time: "(May 2021 – July 2023)",
    desp: `
      <li>Developed 30+ ETL pipelines in SQL Server & SSIS, improving data flow by 25%.</li>
      <li>Migrated legacy data to Azure Data Lake & Snowflake environments.</li>
      <li>Resolved 150+ data integrity issues through comprehensive QA validation.</li>
    `,
  },
  {
    title: "Data Analyst ",
    cardImage: "assets/images/experience-page/imperative.jpeg",
    place: "Imperative Business Ventures",
    time: "(Jan 2021 – May 2021)",
    desp: `
      <li>Created Python-SQL pipelines to automate legacy system data ingestion.</li>
      <li>Developed dashboards in QlikView & Cognos for client reporting.</li>
      <li>Documented transformation logic and supported internal analytics delivery.</li>
    `,
  },
  {
  title: "Data Intern",
  cardImage: "assets/images/experience-page/alvogen.avif",  // Add the image in your assets
  place: "Alvogen Pharmaceuticals",
  time: "(July 2019 – Dec 2020)",
  desp: `
    <li>Developed and optimized scalable ETL pipelines using Python and Airflow for pharmaceutical batch data.</li>
    <li>Streamlined data ingestion from SAP and LIMS into Snowflake, improving data availability by 35%.</li>
    <li>Collaborated with QA/QC teams to validate data integrity and ensured compliance with GMP standards.</li>
    <li>Built Power BI dashboards to monitor production KPIs across manufacturing units.</li>
  `,
},

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards



const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Girls Who Code Club",
    subtitle: "Member",
    image: "assets/images/experience-page/girlscode.webp",
    desp: "Actively contributed to Binghamton University's Girls Who Code Club, helping fellow students build confidence in coding through collaborative projects and peer mentoring.",
    href: "https://www.girlswhocode.com/",
  },
  {
    title: "IEEE Mumbai",
    subtitle: "Student Coordinator",
    image: "assets/images/experience-page/ieee.jpeg",
    desp: "Organized technical events, coding challenges, and speaker sessions across colleges in Mumbai under IEEE’s student branch initiatives.",
    href: "https://ieeemumbai.org/",
  },
  {
    title: "CSI Mumbai",
    subtitle: "Member",
    image: "assets/images/experience-page/csi.jpeg",
    desp: "Supported student-led seminars and intercollegiate tech events focused on software development and emerging technologies as part of CSI’s student chapter.",
    href: "https://www.csimumbai.org/",
  },
  {
    title: "BSNL Winter Workshop",
    subtitle: "Participant",
    image: "assets/images/experience-page/bsnl.jpeg",
    desp: "Gained hands-on training in satellite communication, fiber optic technology, and network operations at BSNL’s technical winter workshop in Mumbai.",
    href: "https://www.bsnl.co.in/",
  },
  {
    title: "Student Council",
    subtitle: "Technical Head",
    image: "assets/images/experience-page/sakec.png",
    desp: "Led the technical team for college events and fests, managing website development, event registration systems, and on-stage tech setups.",
    href: "#",
  },
  {
    title: "Covid Volunteer",
    subtitle: "Janeev Foundation, Ratnagiri",
    image: "assets/images/experience-page/janeev.png",
    desp: "Supported rural outreach during the COVID-19 pandemic by distributing supplies, spreading awareness, collecting funds, and feeding stray animals in Ratnagiri district.",
    href: "#",
  },
  {
    title: "Social Worker",
    subtitle: "Volunteer Teacher for the Visually Impaired",
    image: "assets/images/experience-page/school.png",
    desp: "Taught math, organized extracurricular activities, and raised donations for schools for the visually impaired in Ratnagiri between 2017 and 2020.",
    href: "#",
  },
];


const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
         
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
