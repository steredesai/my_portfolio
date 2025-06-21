AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Climate Change Analysis",
    cardImage: "assets/images/project-page/climate_Change_analaysis.jpg",   // add image
    description:
      "Time-series and geospatial analytics on global temperature, CO₂ & sea-level data using PySpark, AWS S3, and Tableau. Delivers interactive dashboards to highlight long-term climate trends and extreme-weather hotspots.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Climate-Change-Analysis",
  },

  {
    title: "COVID ETL Pipeline",
    cardImage: "assets/images/project-page/covid19_etl.avif",
    description:
      "Built an end-to-end ETL pipeline that ingests Johns-Hopkins COVID case data with Apache Airflow, transforms it in Snowflake, and surfaces live metrics in Power BI. Automated daily refresh slashed manual reporting by 90 %.",
    tagimg: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apacheairflow.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/covid19_etl_data_pipeline",
  },

  {
    title: "Quiz App ( Django )",
    cardImage: "assets/images/project-page/Quiz_app.webp",
    description:
      "Full-stack Quiz application built with Django, PostgreSQL and Bootstrap. Features timed tests, scoreboard, JWT-auth, and an admin panel for question banks. Deployed on Heroku with GitHub Actions CI/CD.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/django-1-282754.png",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Django_QuizApplication",
  },

  {
    title: "Stock Market Data Streaming (Kafka ➜ Snowflake ➜ Power BI)",
    cardImage: "assets/images/project-page/stock_market.webp",
    description:
      "Real-time TSLA ticker feed via Alpha Vantage → Kafka → Snowflake. Consumer writes JSON to cloud warehouse and Power BI dashboards visualize intraday OHLC & volume in <60 s latency.",
    tagimg: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachekafka.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Finance_ETL_Pipeline",
  },

  {
    title: "University Registration System",
    cardImage: "assets/images/project-page/student_registartion_sys.jpg",
    description:
      "Java & Spring-Boot backend, Oracle DB, Angular front-end. Enables course enrolment, wait-lists, and admin scheduling. Maven-built JAR; supports JWT/Role-based auth and OCID-based student IDs.",
    tagimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/University_registration_system",
  },

  {
    title: "House Price Prediction (Puerto Rico)",
    cardImage: "assets/images/project-page/house_price.png",
    description:
      "Flask web-app that predicts PR residential prices using Gradient Boosting on MLS & census data. Users enter beds, baths, acreage etc.; model returns fair-market value with 90th-percentile MAE ≤ \$12 k.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/House-Price-Prediction",
  },

  {
    title: "Yelp Data-Mining Case Study",
    cardImage: "assets/images/project-page/yelp_data.jpeg",
    description:
      "Explored 6 M Yelp reviews (Spark) to predict business check-ins via Random Forest. Delivered feature-importance insights on category, city, rating & hours to inform marketing spend.",
    tagimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Yelp-data-prediction",
  },

  {
    title: "Retail Analytics on Azure",
    cardImage: "assets/images/project-page/retail_analysis.jpg",
    description:
      "On-prem MySQL → Azure Blob → Synapse via Data Factory; Power BI reports for product & market dashboards. Python notebooks orchestrate extraction and data quality checks.",
    tagimg: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoftazure.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Retail-Analytics-Azure",
  },

  {
    title: "Sales Prediction (Power BI)",
    cardImage: "assets/images/project-page/sales_forecast.jpeg",
    description:
      "Built predictive sales dashboard using DAX time-intelligence and Azure ML-powered forecast. Enables executives to drill from region to SKU with dynamic what-if parameters.",
    tagimg: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/powerbi.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Sales_power_bi_reports",
  },

  {
    title: "CDC Data Pipeline",
    cardImage: "assets/images/project-page/cdc_data_pipeline.jpg",
    description:
      "Automated ingestion of CDC vaccination & mortality datasets using AWS Glue + Lambda. Stores parquet in S3, catalogued in AWS Athena for serverless analytics and Tableau viz.",
    tagimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/CDC_Data_pipeline",
  },

  {
    title: "Sentiment Analysis – IMDB Reviews",
    cardImage: "assets/images/project-page/movie_review.jpg",
    description:
      "Comparative study: Logistic Reg, SVM, KNN, MLP & CNN on 50 k IMDB reviews. Achieved 88.4 % accuracy with Logistic Reg baseline; project written in Jupyter & Scikit-learn.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/Sentiment-Analysis-on-Movie-Reviews",
  },

  {
    title: "OCR Document Processing for Banking",
    cardImage: "assets/images/project-page/OCR.jpg",
    description:
      "Python + Tesseract + OpenCV pipeline that scans loan documents, extracts text & tables, and auto-loads metadata into Oracle. Reduced manual data entry by 95 %.",
    tagimg: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/opencv.svg",
    Previewlink: "",
    Githublink: "https://github.com/steredesai/OCR-Banking-Docs",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
