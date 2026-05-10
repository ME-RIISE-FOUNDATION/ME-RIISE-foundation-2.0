// src/data/certifications.ts
import type { ComponentType, SVGProps } from "react";
import { Award, FileBadge, BarChart2, Cloud, Star } from "lucide-react";

export interface CertificationItem {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: string;
  link: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "IIC | 2023-24",
    Icon: Award,
    description:
      "The Institution Innovation Council of Malnad College of Engineering earned a 4-star rating for the past two years and ranked in the 101–150 band in the NIRF Innovation Category 2023. The institute was selected as a Mentor Institute under MoE's Mentor-Mentee Scheme 2024, guiding five institutions: Bangalore Institute of Technology, Channabasaveshwara Institute of Technology, Lal Bahadur Shastri College of Engineering, and the Maharaja Institutes of Technology (Mysore and Thandavapura).",
    link: "/achievements/16.jpg",
  },
  {
    title: "IIC | 2022-23",
    Icon: Award,
    description:
      "The Institution Innovation Council of Malnad College of Engineering earned a 4-star rating and ranked in the 101–150 band in the NIRF Innovation Category 2022. The institute was selected as a Mentor Institute under MoE's Mentor-Mentee Scheme 2023, mentoring five institutions including Bangalore Institute of Technology, Channabasaveshwara Institute of Technology, Lal Bahadur Shastri College of Engineering, and the Maharaja Institutes of Technology (Mysore and Thandavapura).",
    link: "/moe-certificates/IIC 2022-23.pdf",
  },
  {
    title: "IIC | 2021-22",
    Icon: Award,
    description:
      "The Institution Innovation Council of Malnad College of Engineering performed well, earning a 4-star rating out of 5 for the academic year 2021–22.",
    link: "/moe-certificates/IIC 2021-22.pdf",
  },
  {
    title: "IIC | 2020-21",
    Icon: FileBadge,
    description:
      "The Institution Innovation Council of Malnad College of Engineering earned a 3.5-star rating out of 5 for the academic year 2020–21.",
    link: "/moe-certificates/IIC 2020-21.pdf",
  },
  {
    title: "National Institutional Ranking | 2023",
    Icon: BarChart2,
    description:
      "Proud to be recognized in the National Institutional Ranking 2023 for excellence in education and innovation. This achievement reflects our commitment to fostering academic growth and shaping future leaders.",
    link: "/certificates/National Institutional ranking 2023.pdf",
  },
  {
    title: "Atal Ranking of Institutions | 2021",
    Icon: Star,
    description:
      "Honored to be listed in the Atal Ranking of Institutions on Innovation Achievements (ARIIA) 2021 for our contributions to fostering innovation and entrepreneurship, highlighting our dedication to creating a thriving ecosystem for growth and development.",
    link: "/certificates/Atal ranking of Institution 2021.pdf",
  },
  {
    title: "State Cloud Champion | 2018",
    Icon: Cloud,
    description:
      "Recognized as the State Cloud Champion in 2018 for outstanding achievements in cloud technology and digital transformation. This accolade underscores our leadership in driving innovation and enabling seamless digital solutions.",
    link: "/certificates/State cloud champion 2018 1.pdf",
  },
];
