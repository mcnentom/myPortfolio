// import logogradient from "./assets/logo.svg";
// import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/projects/Net_Engineer_icon.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import GNS3 from "./assets/techstack/GNS3_logo.png";
import cisco from "./assets/techstack/Cisco_pkt.png";
// Porject Images
import projectImage1 from "./assets/projects/EnterprizeNetwork.jpg";
import projectImage2 from "./assets/projects/UNiNet.PNG";
import projectImage3 from "./assets/projects/STP.jpg";
import projectImage4 from "./assets/projects/DHCP_Snooping.jpg";
import projectImage5 from "./assets/projects/DHCPv6.jpg";
import projectImage6 from "./assets/projects/EtherChannel.jpg";
import projectImage7 from "./assets/projects/Port_security.jpg";
import projectImage8 from "./assets/projects/MultiAcessOspf.jpg";
import projectImage9 from "./assets/projects/OSPFv2.jpg";
import projectImage10 from "./assets/projects/IPSec.jpg"

// // Logos
// export const logos = {
//   logogradient: logogradient,
//   logo: logo,
// };

// Enter your Personal Details here
export const personalDetails = {
  name: "Mcnen Tommy",
  tagline: "I am a network and Software Engineer",
  img: profile,
  about: `I am a Network and Software Engineer with expertise in enterprise networking (IPv4, routing, redundancy, security e.t.c) and full-stack development using HTML, CSS, SASS, React, Node.js, Express, Redux and OAuth2. Passionate about building secure, scalable, and efficient solutions.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mcnen-tommy-89462a24a/",
  github: "https://github.com/mcnentom",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Freelance`,
    Location: "Remote",
    Type: "Full Time",
    Duration: "Sep 2021 - Present",
  },
  {
    Position: "Software development Internship",
    Company: `Teach2Give the Jitu`,
    Location: "Nyeri",
    Type: "Internship",
    Duration: "Jan 2024 - May 2024",
  },
  {
    Position: "Network Engineer",
    Company: `Free Lance`,
    Location: "Remote",
    Type: "Full Time",
    Duration: "Sep 2022 - Present",
  },
   {
    Position: "Network Engineer Internship",
    Company: `Necst Motor LTD`,
    Location: "Kenya",
    Type: "Internship",
    Duration: "Jan 2025 - June 2025",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Code Academy",
    Location: "Online",
    Type: "Full Time",
    Duration: "Sep 2021 - Present",
  },
  {
    Position: "Network Engineer",
    Company: `Cisco network`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Sep 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  GNS3: GNS3,
  cisco: cisco
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Enterprize Network",
    image: projectImage1,
    description: `This is a sample project that covers a design of an enterprize that deals in Banking and Insurance implementing multi-floor network.`,
    techstack: `Hostname,Vty,line console and basic login passwords,Secure Shell,Vlan segmentation,trunking,port security and inter-vlan routing,OSPF dynamic routing, Cisco ASA firewall security,IP telephony,DHCP,DNS,NTP, FTP server,Email and Http services, NAT`,
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Enterprize-network",
  },
  {
    title: "University Network",
    image: projectImage2,
    description: `This Project covers the design of a university/Enterprize network which can be scaled to meet user requirements.`,
    techstack: `Basic Config, Vlan and inter-vlan routing, Subnetting and ip addressing, Wireless network Configurations,Telephony service, Access list and NAT, FTP, Email, DHCP, DNS, EtherChannel
    , Firewall Basic configs, Trunking, Access ports configs,OSPF, HSRP, Portfast, BPDU Guard`,
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/UniversityNet",
  },
  {
    title: "Spanning Tree Protocol",
    image: projectImage3,
    description: `This is a sample project that covers a Layer 2 protocol defined in IEEE 802.1D. that prevents loops in a switched Ethernet network`,
    techstack: "STP",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/STP",
  },
  {
    title: "DHCP Attacks",
    image: projectImage4,
    description: `This a sample project that covers the vulnerabilities of DHCP addressing,ARP and STP attacks covering the mitigation strategies too`,
    techstack: "Port Security, DHCP Snooping, DAI, Portfast & BPDU Guard",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/DHCPAttacks",
  },
  {
    title: "DHCP IPV6",
    image: projectImage5,
    description: `This sample project covers DHCPv6, the IPv6 version of DHCP (like we use in IPv4 to give out IPs automatically).`,
    techstack: "IPv6, SLAAC, Stateless, Stateful",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/DHCPv6",
  },
  {
    title: "EtherChannel",
    image: projectImage6,
    description: `This project covers a load balancing technique that aggregates multiple links between intermediary devices into bundles enabling a network to have redundancy, loop prevention and increased bandwidth.`,
    techstack: "PAGB & LACP",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/EtherChannel",
  },
  {
    title: "Port Security & Vlan Attacks",
    image: projectImage7,
    description: `This project covers a mitigation technique used to limit the number of mac address connected on a port which helps prevent layer 2 attacks such as MAC addresses table flooding`,
    techstack: "Port Security, DTP Disabling, Native Vlan",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/PortSecurityVLANAttackMitigation",
  },
  {
    title: "Multi Access OSPF",
    image: projectImage8,
    description: `This mini project that covers multi-access network where multiple routers share the same physical medium/subnet.`,
    techstack: "IP addressing, OSPF, DR/BDR",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/MultiAcess_OSPF",
  },
  {
    title: "OSPF Version 2",
    image: projectImage9,
    description: `This is sample project that cover OSPFv2 which is the Interior Gateway Protocol (IGP) for IPv4. Single Area means all routers and links belong to Area 0 (the backbone)`,
    techstack: "OSPFv2",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/Single-Area_OSPFv2",
  },
  {
    title: "IPSEC Tunneling",
    image: projectImage10,
    description: `This is a sample project that covers IPsec (internet protocol secure), a suite of protocols used to secure IP communications by authenticating and encrypting each IP packet in a communication session.`,
    techstack: "IKE SA, IPSEC SA",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mcnentom/Network_projects/tree/main/Ipsec",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "tommymcnen016@gmail.com",
  phone: "+254740890969",
};
