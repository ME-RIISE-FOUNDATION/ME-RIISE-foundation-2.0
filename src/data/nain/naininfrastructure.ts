import { Cpu, Building2, MessageSquare, UserSquare2, Wrench } from "lucide-react";

export interface NainIntro {
  title: string;
  description: string;
  flowchartImage: string;
}

export interface NainInfraItem {
  id: string;
  title: string;
  image: string;
  Icon: React.ElementType;
}

export const NAIN_INTRO: NainIntro = {
  title: "New Age Innovation Network",
  description:
    "The NAIN K-tech District Innovation Hub (DIH) at Malnad College of Engineering boasts state-of-the-art infrastructure tailored to foster innovation and entrepreneurship. NAIN K-tech District Innovation Hub (DIH) at Malnad College of Engineering was inaugurated in the year 2020 and offers a comprehensive suite of facilities and services to support innovation and entrepreneurship. By providing a conducive environment, cutting-edge resources, and essential amenities, the DIH at Malnad College of Engineering aims to catalyze the growth and success of startups, projects, and initiatives within the innovation ecosystem.",
  flowchartImage: "/nain/Flowchart.png",
};

export const NAIN_INFRASTRUCTURE: NainInfraItem[] = [
  {
    id: "board-room",
    title: "Board Room",
    image: "/nain/explaination.jpg",
    Icon: Building2,
  },
  {
    id: "digital-den",
    title: "Digital Den with Computing Facilities",
    image: "/nain/digital-den.jpg",
    Icon: Cpu,
  },
  {
    id: "discussion-area",
    title: "Discussion Area",
    image: "/nain/discussion-area.jpg",
    Icon: MessageSquare,
  },
  {
    id: "dia-cubicle",
    title: "DIA Cubicle",
    image: "/nain/DIA-Cubicle.jpg",
    Icon: UserSquare2,
  },
  {
    id: "tinkering-lab",
    title: "Tinkering Lab",
    image: "/nain/tinkering-lab.jpg",
    Icon: Wrench,
  },
];
