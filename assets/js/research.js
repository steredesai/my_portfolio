const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Mental Health Risk Prediction using Social Media Data",
    authors: "Shraddha Teredesai",
    conferences: "Binghamton University - Graduate Research",
    researchYr: 2025,
    citebox: "popup1",
    image: "assets/images/research-page/mental_health.png",
    citation: {
      vancouver:
        "Shraddha Teredesai. Mental Health Risk Prediction using Social Media Data. Binghamton University, 2025.",
    },
    abstract:
      "Engineered a scalable ETL pipeline using AWS S3, Redshift, and PySpark to process 500K+ Reddit records. Implemented NLP models (BERT, Random Forest, LLMs) and achieved 92% accuracy in emotion classification for early mental health risk detection.",
    absbox: "absPopup1",
  },
  {
    title: "Job Notify AI – Intelligent Resume-Job Matching System",
    authors: "Shraddha Teredesai",
    conferences: "Binghamton University - Graduate Project",
    researchYr: 2025,
    citebox: "popup2",
    image: "assets/images/research-page/job_ai.webp",
    citation: {
      vancouver:
        "Shraddha Teredesai. Job Notify AI – Intelligent Resume-Job Matching System. Binghamton University, 2025.",
    },
    abstract:
      "Developed a Django-based web app that uses BERT and Word2Vec embeddings to semantically compare resumes and job descriptions, enabling personalized job recommendations. Includes a resume upload feature and a ranked job matching engine.",
    absbox: "absPopup2",
  },
  {
    title: "OCR Document Scanner for Banking Applications",
    authors: "Shraddha Teredesai",
    conferences: "Imperative Business Ventures - Internship Project",
    researchYr: 2021,
    citebox: "popup3",
    image: "assets/images/research-page/ocr.jpg",
    citation: {
      vancouver:
        "Shraddha Teredesai. OCR Document Scanner for Banking Applications. Imperative Business Ventures, 2021.",
    },
    abstract:
      "Built an OCR-based document ingestion tool using Tesseract and OpenCV that scans, extracts, and stores banking form data into Oracle DB, reducing manual effort and streamlining document processing workflows.",
    absbox: "absPopup3",
  },
  {
    title: "IoT-Based Electrical Device Surveillance and Control",
    authors: "Shraddha Teredesai",
    conferences: "Final Year Undergraduate Capstone Project",
    researchYr: 2020,
    citebox: "popup4",
    image: "assets/images/research-page/iot.png",
    citation: {
      vancouver:
        "Shraddha Teredesai. IoT-Based Electrical Device Surveillance and Control System. University of Mumbai, 2020.",
    },
    abstract:
      "Designed an IoT system to remotely monitor and control household appliances using sensors and microcontrollers. Enabled real-time energy tracking and automation using embedded systems and cloud integration.",
    absbox: "absPopup4",
  },
];

AOS.init();

const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
        <tr data-aos="zoom-in-left"> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class="researchTitleName">
                <div class="img-div">
                    <span class="imgResponsive">
                        <img src="${image}" class="imgRes">
                    </span>
                </div>
                <a href="#0" class="paperTitle"> ${title} </a> 
                <div class="authors"> ${authors} </div> 
                
                <div class="rConferences"> ${conferences} 
                    <div class="researchY">${researchYr}</div>
                </div>
                
                <!-- ABSTRACT BUTTON ONLY -->
                <div class="d-flex" style="margin-right:5%;">
                    <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                        ABSTRACT
                    </button>
                </div>
                <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                    <div class="card-body">
                        ${abstract}    
                    </div>
                </div>
            </td>
        </tr>`)
  );
  researchTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
