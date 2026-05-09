export interface TeamMember {
  id: number;
  name: string;
  branch: string;
  image: string;
}

export interface TeamGroup {
  year: string;
  label: string;
  members: TeamMember[];
}

const D = "/team_imgs/default.jpg";

export const TEAM_GROUPS: TeamGroup[] = [
  {
    year: "4th",
    label: "Final Year Students",
    members: [
      {
        id: 1,
        name: "Aditya M",
        branch: "Information Science Engg.",
        image: D,
      },
      {
        id: 2,
        name: "Aviksha Kavya Gowda",
        branch: "Information Science Engg.",
        image: "/team_imgs/4th_years/Aviksha .jpg",
      },
      {
        id: 3,
        name: "Chinmayee Chougale",
        branch: "Information Science Engg.",
        image: "/team_imgs/4th_years/Chinmayee .jpg",
      },
      {
        id: 4,
        name: "Kushi Gurumurthy",
        branch: "Electronics and Communication Engg.",
        image: "/team_imgs/4th_years/Kushi .jpg",
      },
      {
        id: 5,
        name: "Nithin Gowda M T",
        branch: "Computer Science and Business Systems Engg.",
        image: D,
      },
      { id: 6, name: "Pragna C P", branch: "Computer Science Engg.", image: D },
      { id: 7, name: "Shravani G", branch: "Computer Science Engg.", image: D },
      {
        id: 8,
        name: "Tejas Yogesh",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 9,
        name: "Veerendra G Adoor",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 10,
        name: "Yallappagouda Patil",
        branch: "Information Science Engg.",
        image: "/team_imgs/4th_years/Yallappagouda.jpg",
      },
    ],
  },
  {
    year: "3rd",
    label: "3rd Year Students",
    members: [
      {
        id: 11,
        name: "A Y Kaustubha Sai",
        branch: "Information Science Engg.",
        image: D,
      },
      {
        id: 12,
        name: "Ananya B V",
        branch: "Electronics and Communication Engg.",
        image: "/team_imgs/3rd_years/Ananya .jpg",
      },
      {
        id: 13,
        name: "Bhoomika B K",
        branch: "Information Science Engg.",
        image: "/team_imgs/3rd_years/Bhoomika .jpg",
      },
      {
        id: 14,
        name: "Bilvateja H Y",
        branch: "Civil Engg.",
        image: "/team_imgs/3rd_years/Bilva.jpg",
      },
      {
        id: 15,
        name: "Channaveergouda P T",
        branch: "Computer Science (AIML) Engg.",
        image: "/team_imgs/3rd_years/Channaveer.jpg",
      },
      {
        id: 16,
        name: "Deeksha Shetty B N",
        branch: "Computer Science Engg.",
        image: "/team_imgs/3rd_years/Deeksha .jpg",
      },
      {
        id: 17,
        name: "Girish B",
        branch: "Information Science Engg.",
        image: D,
      },
      { id: 18, name: "H V Dhanush Patel", branch: "Civil Engg.", image: D },
      {
        id: 19,
        name: "Jnyan P",
        branch: "Computer Science (AIML) Engg.",
        image: D,
      },
      {
        id: 20,
        name: "Keerthana R Shekar",
        branch: "Electronics and Communication Engg.",
        image: "/team_imgs/3rd_years/Keerthana .jpg",
      },
      {
        id: 21,
        name: "Medha Shankari K",
        branch: "Computer Science Engg.",
        image: "/team_imgs/3rd_years/Medha.jpg",
      },
      { id: 22, name: "Nihar H S", branch: "Computer Science Engg.", image: D },
      {
        id: 23,
        name: "P Gokul Yadav",
        branch: "Computer Science and Business Systems Engg.",
        image: "/team_imgs/3rd_years/Gokul .jpg",
      },
      {
        id: 24,
        name: "Pavan G Pai",
        branch: "Computer Science Engg.",
        image: "/team_imgs/3rd_years/Pavan.jpg",
      },
      {
        id: 25,
        name: "Poorvitha V",
        branch: "Computer Science and Business Systems Engg.",
        image: D,
      },
    ],
  },
  {
    year: "2nd",
    label: "2nd Year Students",
    members: [
      {
        id: 26,
        name: "Ananya G S",
        branch: "Computer Science Engg.",
        image: "/team_imgs/2nd_years/Ananya.jpg",
      },
      { id: 27, name: "Disha", branch: "Computer Science Engg.", image: D },
      {
        id: 28,
        name: "Deeksha S",
        branch: "Civil Engg.",
        image: "/team_imgs/2nd_years/Deeksha.jpg",
      },
      {
        id: 29,
        name: "Deepali H A",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 30,
        name: "Harshitha R",
        branch: "Electronics & Communication Engg.",
        image: "/team_imgs/2nd_years/Harshitha.jpg",
      },
      {
        id: 31,
        name: "Keerthan A",
        branch: "Computer Science Engg.",
        image: "/team_imgs/2nd_years/Keerthan.jpg",
      },
      {
        id: 32,
        name: "Kishan B Gowda",
        branch: "Computer Science Engg.",
        image: "/team_imgs/2nd_years/kishan.jpg",
      },
      {
        id: 33,
        name: "Manya J",
        branch: "Computer Science Engg.",
        image: "/team_imgs/2nd_years/Manya.jpg",
      },
      {
        id: 34,
        name: "Meghana S R",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 35,
        name: "Mizba Begum",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 36,
        name: "Niharika R",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 37,
        name: "Prem K R",
        branch: "Information Science Engg.",
        image: "/team_imgs/2nd_years/pream.png",
      },
      {
        id: 38,
        name: "Sandya",
        branch: "Computer Science Engg.",
        image: "/team_imgs/2nd_years/Sandya.jpg",
      },
    ],
  },
  {
    year: "1st",
    label: "1st Year Students",
    members: [
      {
        id: 39,
        name: "Afeefa Firdose",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Afeefa .jpg",
      },
      { id: 40, name: "Aishwarya", branch: "Computer Science Engg.", image: D },
      {
        id: 41,
        name: "Bindushree H K",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Bindhushree.jpg",
      },
      {
        id: 42,
        name: "Chiranth D D",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/chiranth.jpg",
      },
      {
        id: 43,
        name: "Dhanyashree C K",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 44,
        name: "Harish Huddar",
        branch: "Electrical and Electronics Engg.",
        image: D,
      },
      {
        id: 45,
        name: "Inchara N",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Inchara N.jpg",
      },
      {
        id: 46,
        name: "Jahnavi M",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Jahnavi.jpg",
      },
      {
        id: 47,
        name: "Jeevitha M S",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Jeevitha.jpg",
      },
      {
        id: 48,
        name: "Lakshmini K N",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Lakshmi.jpg",
      },
      {
        id: 49,
        name: "Laxmi Jambagi",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 50,
        name: "Narasimha H J",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/narasimha.jpg",
      },
      {
        id: 51,
        name: "Nesar B Nallur",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 52,
        name: "Pranav Siddappa B P",
        branch: "Computer Science and Business Systems Engg.",
        image: "/team_imgs/1st_years/pranav.jpg",
      },
      {
        id: 53,
        name: "Prathiksha H A",
        branch: "Electronics and Communication Engg.",
        image: D,
      },
      {
        id: 54,
        name: "Sanjana",
        branch: "Electrical and Electronics Engg.",
        image: "/team_imgs/1st_years/Sanjana.jpg",
      },
      {
        id: 55,
        name: "Siddesh",
        branch: "Electrical and Electronics Engg.",
        image: "/team_imgs/1st_years/Siddesh.jpg",
      },
      {
        id: 56,
        name: "Sneha H N",
        branch: "VLSI Engg.",
        image: "/team_imgs/1st_years/Sneha H N.jpg",
      },
      {
        id: 57,
        name: "Spoorthi Prakash",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 58,
        name: "Sushmitha H M",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/Sushmitha.jpg",
      },
      {
        id: 59,
        name: "Thanishka H P",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 60,
        name: "Thanmayi S K",
        branch: "Computer Science Engg.",
        image: D,
      },
      {
        id: 61,
        name: "Varsha S",
        branch: "Computer Science Engg.",
        image: "/team_imgs/1st_years/varsha.jpg",
      },
      {
        id: 62,
        name: "Yukthi P",
        branch: "Electronics and Communication Engg.",
        image: "/team_imgs/1st_years/Yukthi.P.jpg",
      },
    ],
  },
];
