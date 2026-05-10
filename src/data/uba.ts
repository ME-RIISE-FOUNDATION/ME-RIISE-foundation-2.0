export interface UbaPdf {
  label: string;
  path: string;
}

export interface UbaEvent {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  images: string[];
  pdfs: UbaPdf[];
}

export const UBA_INTRO = {
  title: "Unnat Bharat Abhiyan",
  description:
    "UBA aims to support the ME-RIISE Foundation in promoting financial inclusion through funding, and mentorship programs. It focuses on entrepreneurship and skill development by providing training, grants, and business incubation support. The partnership drives social change by investing in education, healthcare, and youth empowerment initiatives. UBA's commitment ensures economic stability, job creation, and sustainable business growth. Through strategic collaboration, the foundation can make a lasting impact on marginalized communities.",
  heroImage: "/uba/uba.jpg",
  galleryImages: ["/uba/uba2.jpg", "/uba/uba3.jpg"],
};

export const UBA_EVENTS: UbaEvent[] = [
  {
    id: 1,
    title: "Train the Trainers",
    subtitle: "Empowering Minds with IoT Innovation for Rural Outreach",
    date: "23/11/2024",
    description:
      "The Department of Electronics and Communication Engineering successfully organised the 'Train the Trainers' workshop on November 23, 2024, under the Unnat Bharat Abhiyan initiative. This program aimed at equipping students with hands-on knowledge of IoT technologies, empowering them to mentor and inspire rural school children through outreach activities. By fostering skill development, promoting technological awareness, and bridging the digital divide, the initiative seeks to support sustainable education and drive meaningful impact within rural communities.",
    images: [
      "/uba/train4.jpg",
      "/uba/Train1.jpg",
      "/uba/train3.jpg",
      "/uba/train5.jpg",
    ],
    pdfs: [
      {
        label: "Train the Trainers – Report",
        path: "/uba/Trainthetrainers.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "Gramavasthavya",
    subtitle:
      "Innovation & Entrepreneurship Outreach Program in Schools / Community",
    date: "15/02/2024",
    description:
      "The UBA visit to Moola Dudda on February 15–16, 2024, was a highly impactful event focused on rural development and community engagement. The visit included a design thinking workshop for children, a village survey to understand local issues, and prototype presentations. The children actively participated and enjoyed the sessions, which also provided valuable information to farmers. The outcomes of the visit included community empowerment, improved infrastructure, technology adoption, increased awareness, academic collaboration, and the demonstration of best practices.",
    images: [
      "/uba/grama3.jpg",
      "/uba/grama2.jpg",
      "/uba/Grama1.jpg",
      "/uba/uba2.jpg",
      "/uba/uba3.jpg",
      "/uba/uba4.jpg",
    ],
    pdfs: [
      { label: "UBA: Moola Dudda 2024", path: "/uba/Gramavasthavya.pdf" },
      {
        label: "UBA Visit – Dudda",
        path: "/uba/events23/UBA visit , Dudda.pdf",
      },
    ],
  },
  {
    id: 3,
    title: "Imparting Basics of Computers",
    date: "16/06/2022",
    description:
      "One day 'Imparting Basics of Computers' was conducted for the primary and higher primary school students of Gopanahalli and Heragu Village on 16-06-2022. Dr. Geetha Kiran A, Coordinator, UBA and her team organized the event to impart the basics of computers to the students. The objective was to provide students with an opportunity to learn about computers and its applications, which would enhance their digital literacy and enable them to leverage technology for their academic and personal development.",
    images: ["/uba/comp2.jpg", "/uba/computer1.jpg"],
    pdfs: [
      {
        label: "Basics of Computers – Heragu",
        path: "/uba/Imparting Basics of Computers-Heragu.pdf",
      },
      {
        label: "Basics of Computers – Gopanahalli",
        path: "/uba/Imparting Basics of Computers-Gopanahalli.pdf",
      },
    ],
  },
  {
    id: 4,
    title: "Virtual School",
    date: "08/06/2021 – 11/07/2021",
    description:
      "In the wake of revolutionizing teaching learning skills in the rural vicinity, UBA cell of Malnad College of Engineering conducted its flagship event 'VIRTUAL SCHOOL' for its adopted villages. UBA student volunteers, ME-RIISE team and college faculty members were present. Students and teachers of government schools played the main role of audience in the inaugural function. Honorable DC Sri R Girish, IAS, and SP honorable Sri Srinivas Gowda R, IPS guided the UBA team and promised to provide all the support required to make the event successful.",
    images: ["/uba/virt_sc.jpg"],
    pdfs: [
      {
        label: "Virtual School – Dudda School",
        path: "/uba/Virtual_sc/Report - VIRTUAL SCHOOL - Dudda School.pdf",
      },
      {
        label: "Virtual School – Heragu",
        path: "/uba/Virtual_sc/Report - VIRTUAL SCHOOL - Heragu.pdf",
      },
      {
        label: "Virtual School – Anuguvalli",
        path: "/uba/Virtual_sc/Report - VIRTUAL SCHOOL -Anuguvalli.pdf",
      },
      {
        label: "Virtual School – Gopanahalli",
        path: "/uba/Virtual_sc/Report - VIRTUAL SCHOOL -Gopanahalli.pdf",
      },
      {
        label: "Virtual School – Lingarasanahalli",
        path: "/uba/Virtual_sc/Report - VIRTUAL SCHOOL -Lingarasanahalli.pdf",
      },
    ],
  },
  {
    id: 5,
    title: "Soil Health Analysis and Management of Plant Nutrition",
    date: "08/03/2021",
    description:
      "One day training programme on 'Soil Health Analysis and Management of Plant Nutrition' was conducted in collaboration with Global Association for Scientific Young Mind (GASYM) on 08/03/2021. This programme aimed to train students on Soil Health Analysis and Management of Plant Nutrition to improve economic stability in farmers and maintain good health of the agriculture ecosystem. The training programme provided an overview of the importance of soil health analysis and how it can help in improving crop yield and quality.",
    images: ["/uba/soil.jpg"],
    pdfs: [
      {
        label: "Soil Health Analysis – Report",
        path: "/uba/Soil_health/Soil Health Analysis and Management of Plant Nutrition.pdf",
      },
    ],
  },
  {
    id: 6,
    title: "Bird Watching",
    date: "06/02/2021",
    description:
      "Bird watching, also known as birding, is the activity of observing birds in their natural habitats. It is a popular hobby among people of all ages and backgrounds, and is enjoyed by millions of people around the world. Bird watching is a great way to connect with nature and appreciate the beauty and diversity of bird species. This UBA initiative encouraged students to engage with the natural environment of adopted villages.",
    images: ["/uba/bird.jpg"],
    pdfs: [
      {
        label: "Bird Watching – Report",
        path: "/uba/Bird_watch/Bird Watching.pdf",
      },
    ],
  },
  {
    id: 7,
    title: "Rural Awareness Programme",
    subtitle:
      "Plant Pathology and Microbes in Bio Enrichment — Practical & Awareness Session",
    date: "06/02/2021",
    description:
      "One day 'Rural Awareness Programme' was organised and conducted in association with Global Association for Scientific Young Mind (GASYM) on 6th Feb., 2021. The programme focused on inducing interest in agriculture and training participants to understand the technology in growing food. Students and faculty collaborated to deliver this awareness session in the adopted villages.",
    images: ["/uba/rural1.jpg", "/uba/rural2.jpg"],
    pdfs: [
      {
        label: "Rural Awareness Programme – Report",
        path: "/uba/Rural/Rural awareness programme.pdf",
      },
    ],
  },
  {
    id: 8,
    title: "Plastic Free Campaign",
    date: "30/09/2019",
    description:
      "As a move towards a low-polluting, sustainable society, recycling, reusing and proper management of plastics has become a crucial issue. Taking the motive of UBA into account, 'Plastic Free Campaign' was organized on 30-09-2019 in the adopted villages Gopanahalli and Heragu. About 100 students from various engineering streams volunteered along with 3 faculty members. As part of this campaign, cloth bags were distributed to every house in the village.",
    images: ["/uba/plastic1.jpg", "/uba/plastic2.jpg"],
    pdfs: [
      {
        label: "Plastic Free Campaign – Gopanahalli",
        path: "/uba/Plastic_free/Plastic Free Campaign - 30-09-2019 - Gopanahalli.pdf",
      },
      {
        label: "Plastic Free Campaign – Heragu",
        path: "/uba/Plastic_free/Plastic Free Campaign - Heragu.pdf",
      },
      {
        label: "Plastic Free Campaign – Schedule",
        path: "/uba/Plastic_free/Plastic Free Campaign -Schedule.pdf",
      },
    ],
  },
  {
    id: 9,
    title: "Planting Tree Saplings",
    date: "01/08/2019",
    description:
      "As a move towards a green society, one day activity on 'Planting Tree Saplings' was planned and executed. The activity was carried out as part of the Induction Programme involving around 900 students inducted during academic year 2019–2020 on 01/08/2019. The students were divided into 5 batches with each batch accompanied by 3 faculty members. The overall execution was carried out by Dr. A. Geetha Kiran, UBA Coordinator.",
    images: ["/uba/plant1.jpg", "/uba/plant2.jpg"],
    pdfs: [
      {
        label: "Planting – Anuguvalli",
        path: "/uba/Planting/Planting Tree Samplings - Anuguvalli– 01-08-2019.pdf",
      },
      {
        label: "Planting – Dudda",
        path: "/uba/Planting/Planting Tree Samplings - Dudda – 01-08-2019.pdf",
      },
      {
        label: "Planting – Gopanahalli",
        path: "/uba/Planting/Planting Tree Samplings - Gopanahalli – 01-08-2019.pdf",
      },
      {
        label: "Planting – Heragu",
        path: "/uba/Planting/Planting Tree Samplings - Heragu – 01-08-2019.pdf",
      },
      {
        label: "Planting – Lingarasanahalli",
        path: "/uba/Planting/Planting Tree Samplings - Lingarasanahalli– 01-08-2019.pdf",
      },
    ],
  },
  {
    id: 10,
    title: "One Day Science Expo",
    date: "11/07/2019",
    description:
      "One day 'Science Expo' was conducted for the primary and higher primary school students of Heragu Village on 11-07-2019. A team of 10 students along with two faculty members started around 9:30 am and reached Janatha Primary School, Heragu at 10 am. The school students welcomed the team with great enthusiasm. The UBA student team conducted experiments in two streams — Physics and Chemistry — to the two groups of students.",
    images: ["/uba/sci_expo1.jpg", "/uba/sci_expo2.jpg"],
    pdfs: [
      {
        label: "Science Expo – Report",
        path: "/uba/Science_expo/One day Science Expo.pdf",
      },
    ],
  },
  {
    id: 11,
    title: "Household Survey",
    date: "25/03/2019",
    description:
      "The household survey was conducted by a team of students and faculty members along with Dr. Geetha Kiran A (Coordinator, UBA) from Malnad College of Engineering, as part of the Unnat Bharat Abhiyan program. The objective of the survey was to identify the key areas of concern and opportunities for development, and to recommend strategies for addressing them across the adopted villages.",
    images: ["/uba/house_sur1.jpg", "/uba/house_sur2.jpg"],
    pdfs: [
      {
        label: "Household Survey – Dudda",
        path: "/uba/Household_survey/docs/Household survey Dudda-25-03-2019.pdf",
      },
      {
        label: "Household Survey – Heragu",
        path: "/uba/Household_survey/docs/Household survey- Heragu.pdf",
      },
      {
        label: "Household Survey – Lingarasanahalli",
        path: "/uba/Household_survey/docs/Household survey- Lingarasanahalli.pdf",
      },
      {
        label: "Household Survey – Anuguvalli",
        path: "/uba/Household_survey/docs/Household survey-Anuguvalli.pdf",
      },
      {
        label: "Household Survey – Gopanahalli",
        path: "/uba/Household_survey/docs/Household survey-Gopanahalli.pdf",
      },
    ],
  },
  {
    id: 12,
    title: "Village Survey",
    date: "10/12/2018",
    description:
      "The first part of the UBA activity was the 'Village Survey' conducted on 10-12-2018. The purpose of the visit was to visit the adopted villages and get to know about the government schemes handled, the status of the government school, and basic information of the village. This groundwork laid the foundation for all subsequent UBA initiatives at Malnad College of Engineering.",
    images: ["/uba/UBA1.png", "/uba/UBA2.png", "/uba/UBA3.png"],
    pdfs: [
      {
        label: "Village Survey – Anuguvalli",
        path: "/uba/Village_survey/Village survey _Anuguvalli– 10-12-2018.pdf",
      },
      {
        label: "Village Survey – Dudda",
        path: "/uba/Village_survey/Village survey _Dudda – 10-12-2018.pdf",
      },
      {
        label: "Village Survey – Gopanahalli",
        path: "/uba/Village_survey/Village survey _Gopanahalli – 10-12-2018.pdf",
      },
      {
        label: "Village Survey – Heragu",
        path: "/uba/Village_survey/Village survey _Heragu – 10-12-2018.pdf",
      },
      {
        label: "Village Survey – Lingarasanahalli",
        path: "/uba/Village_survey/Village survey _Lingaransahalli– 10-12-2018.pdf",
      },
      {
        label: "Schedule – 10/12/2018",
        path: "/uba/Village_survey/Schedule – 10-12-2018.pdf",
      },
    ],
  },
];
