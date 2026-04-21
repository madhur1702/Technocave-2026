export interface JudgingCriterion {
  title: string;
  description: string;
}

export interface RoundDetail {
  roundNumber: number;
  title: string;
  description: string;
  type: string;
  marks: string[];
  totalMarks: number;
  topics: string;
  duration: string;
  difficulty: string;
  format?: string;
}

export interface WinnerSelection {
  points: string[];
}

export interface EventData {
  id: string;
  name: string;
  tagline: string;
  fee: string;
  teamSize: string;
  date: string;
  description: string;
  teamComposition?: string;
  extraSections?: { title: string; content: string }[];
  judgingCriteria?: JudgingCriterion[];
  competitionRounds?: RoundDetail[];
  winnerSelection?: WinnerSelection;
  rules: string[];
  venue: string;
  coordinators: { name: string; phone: string }[];
  accessCode?: string;
  eventLink?: string;
}

export const events: EventData[] = [
  {
    id: "avishkar",
    name: "AVISHKAR",
    tagline: "Spark an idea and ignite a revolution",
    fee: "₹100 per person",
    teamSize: "2–4 Members",
    date: "April 24, 2026",
    description: "In Avishkar, participants present their ideas rather than fully developed projects. You and your team will propose innovative concepts, solutions, or products that have the potential to make a significant impact. These ideas could range from technological innovations to social or environmental solutions.",
    teamComposition: "Each team can consist of up to 2-4 members. Collaborate with fellow innovators to refine your concept, create a compelling presentation, and showcase your idea's potential impact and feasibility.",
    judgingCriteria: [
      { title: "Creativity", description: "How unique and original is the idea? Judges will look for innovative solutions that challenge the status quo and offer fresh perspectives." },
      { title: "Technical Feasibility", description: "How feasible is the idea from a technical standpoint? Even though it's just an idea, it should demonstrate practicality and potential for development." },
      { title: "Impact", description: "Does the idea have the potential to solve real-world problems or address significant challenges? Judges will assess the idea's relevance and scalability." },
      { title: "Presentation", description: "The clarity and effectiveness of your presentation will play a crucial role. Teams must articulate their ideas in a way that is both engaging and convincing, showing the idea's full potential." },
    ],
    rules: [
      "Each team must have 2 to 4 members.",
      "Ideas must be original and not previously published.",
      "Presentation time: 10 minutes + 5 minutes Q&A.",
      "Teams must submit a synopsis before the event.",
      "Use of visual aids (PPT/Poster) is allowed.",
      "Judges' decision is final and binding.",
    ],
    venue: "SVKM's Institute of Technology, Dhule – Seminar Hall",
    coordinators: [{ name: "Sharvari Bhalapurkar", phone: "-" }, { name: "Roshni Mahale", phone: "-" }],
  },
  {
    id: "innovision",
    name: "INNOVISION",
    tagline: "Build it, show it, and own it – bring your project to life",
    fee: "₹100 per person",
    teamSize: "2–4 Members",
    date: "April 24, 2026",
    description: "In Innovision, participants work on projects that provide practical solutions to real-world challenges. These projects can involve technological innovations, environmental solutions, social enterprises, or other areas where creativity and impact can make a difference.",
    teamComposition: "Each team can consist of up to 2-4 members. Collaborate with your teammates to conceptualize, design, and implement your project. The strength of your teamwork and the ability to develop a feasible solution will be key in this competition.",
    judgingCriteria: [
      { title: "Originality", description: "How unique and innovative is the project? Judges will assess how the project stands out and offers new solutions or improvements over existing approaches." },
      { title: "Feasibility", description: "Is the project practically achievable? The solution should be realistic and have a clear plan for execution." },
      { title: "Real-World Applicability", description: "How relevant is the project to solving a real-world problem? The project must address a significant issue and demonstrate its potential to be used in real-life scenarios." },
      { title: "Impact", description: "What is the potential of the project to create a positive impact? Judges will look at the scalability, sustainability, and long-term effects of the project." },
    ],
    rules: [
      "Each team must have 2 to 4 members.",
      "Projects must be original work of the team.",
      "Hardware and software projects both are accepted.",
      "Teams must bring their own laptops and equipment.",
      "Presentation time: 15 minutes + 5 minutes Q&A.",
      "Projects must be functional during demonstration.",
    ],
    venue: "SVKM's Institute of Technology, Dhule – Project Lab",
    coordinators: [{ name: "Sanika Kulkarni", phone: "-" }, { name: "Dhanashri Bhadane", phone: "-" }],
  },
  {
    id: "code-o-thon",
    name: "CODE-O-THON",
    tagline: "Crack the code and claim the glory",
    fee: "₹100 per person",
    teamSize: "Individual",
    date: "April 24, 2026",
    description: "Code-O-Thon is an exhilarating coding competition designed to test your programming skills and problem-solving abilities across three challenging rounds. Each round progressively increases in difficulty, offering participants a chance to showcase their coding prowess.",
    competitionRounds: [
      {
        roundNumber: 1,
        title: "Quiz Round",
        description: "Evaluate your theoretical knowledge of computer science fundamentals and programming.",
        type: "10 MCQs and 5 MSQs",
        marks: ["1 mark per MCQ (10 Marks)", "2 marks per MSQ (20 Marks)"],
        totalMarks: 20,
        topics: "CS fundamentals, algorithms, data structures",
        duration: "30 minutes",
        difficulty: "Medium Level",
      },
      {
        roundNumber: 2,
        title: "Easy to Medium Level Coding Challenges",
        description: "Test your practical coding skills with a set of algorithmic problems.",
        type: "Problem",
        marks: ["15 marks for Easy problem", "25 marks for Moderate/Medium problem"],
        totalMarks: 40,
        topics: "Algorithms & DSA",
        duration: "1 hour",
        difficulty: "Easy to Medium Level",
      },
      {
        roundNumber: 3,
        title: "Medium to Hard Level Coding Challenges",
        description: "Push your problem-solving abilities to the limit by tackling complex and advanced coding challenges.",
        type: "Problem",
        marks: ["40 marks"],
        totalMarks: 40,
        topics: "Algorithms & DSA",
        duration: "1 hour",
        difficulty: "Medium to Hard Level",
        format: "2 Questions (Solve any 1)",
      },
    ],
    winnerSelection: {
      points: [
        "Participation in all rounds is compulsory.",
        "Marks from each round will be used to calculate the final combined score out of 100.",
        "Any cheating or bad practices will result in a deduction of 10 to 30 marks each time an attempt is made to cheat.",
        "Judges' decision will be final.",
        "All participants will receive a participation certificate.",
      ],
    },
    rules: [
      "Each round is individual, not elimination-based, and is evaluated based on marks.",
      "Plagiarism, external help, or malpractice of any kind will lead to immediate disqualification from the current round and ban from all further rounds.",
      "Use of any electronic device (such as mobile phones or personal laptops) is strictly prohibited. Only college-provided PCs are permitted during the event.",
      "Do not copy code or any content from others. If found doing so, the participant will be eliminated by the event coordinators without warning.",
      "Judges' decisions are final and binding in all matters.",
      "In case of a tie, the participant with the faster submission or more optimal solution will be given preference.",
      "Participants must maintain discipline and strictly follow all instructions given by the event coordinators.",
    ],
    venue: "SVKM's Institute of Technology, Dhule – Computer Lab",
    coordinators: [{ name: "Madhur Bhandarkar", phone: "9373628644" }, { name: "Mayur Badgujar", phone: "8160079598" }],
    accessCode: "Technocave-2k26",
    eventLink: "https://unstop.com/p/code-o-thon-technocave-2026-svkm-institute-of-technology-1678221",
  },
  {
    id: "design-dive",
    name: "DESIGN-DIVE",
    tagline: "Design a poster that speaks your vision",
    fee: "₹100 per person",
    teamSize: "1–2 Members",
    date: "April 24, 2026",
    description: "In Design Dive, participants are tasked with designing a poster based on a theme provided at the start of the competition. This is a fantastic opportunity for creative minds to display their artistic flair and innovative design approaches.",
    extraSections: [
      { title: "Theme", content: "The theme will be announced at the beginning of the competition, giving all participants an equal starting point to work from. The theme will serve as the foundation for your design, allowing you to interpret and represent it in your unique way." },
      { title: "Tools", content: "Participants are free to use any online design tool of their choice, from platforms like Canva, Adobe Spark, Figma, or any other tool they are comfortable with. The goal is to let your creativity flow with the tools you know best." },
    ],
    judgingCriteria: [
      { title: "Theme Alignment", description: "The design must effectively align with the given theme. Judges will evaluate how well the poster reflects the core elements of the theme." },
      { title: "Visual Impact", description: "Your poster should be eye-catching and visually appealing. Use of color, typography, and layout should be well-executed to create an engaging experience for viewers." },
      { title: "Creativity and Innovation", description: "Judges will look for designs that stand out due to originality and fresh ideas. Creativity in interpreting the theme and design choices will be highly valued." },
      { title: "Overall Aesthetics", description: "The poster must be visually interactive, with clear communication of the message or concept. The design should be balanced and aesthetically pleasing." },
    ],
    rules: [
      "Each team must consist of 1–2 members.",
      "Topic will be revealed on the spot.",
      "Digital tools: Canva, Photoshop, Illustrator, Figma.",
      "Time limit: 2 hours.",
      "Content must be original and appropriate.",
    ],
    venue: "SVKM's Institute of Technology, Dhule – Design Lab",
    coordinators: [{ name: "Divya Badgujar", phone: "-" }, { name: "Bhagyesh Joshi", phone: "-" }],
  },
  {
    id: "ui-hackathon",
    name: "HACKHEIST",
    tagline: "Build. Break. Innovate.",
    fee: "₹100 per person",
    teamSize: "2–4 Members",
    date: "April 24, 2026",
    description: "HackHeist is an intense, innovation-driven hackathon where teams collaborate to build impactful solutions to real-world problems within a limited time. Participants will brainstorm, design, and develop a working prototype or concept based on a given problem statement. The challenge emphasizes creativity, problem-solving, and technical execution under pressure.",
    teamComposition: "Each team must consist of 2 to 4 members. Teams should ideally include a mix of skills such as development, design, and problem-solving to build a well-rounded solution.",
    judgingCriteria: [
      { title: "Innovation", description: "How unique and creative is your idea? Judges will evaluate how differently the problem is approached and the originality of the solution." },
      { title: "Technical Implementation", description: "The functionality and technical soundness of your project. Proper use of technologies, code quality, and working prototype will be considered." },
      { title: "Problem Solving", description: "How effectively does the solution address the given problem? The practicality and relevance of the idea play a key role." },
      { title: "Presentation", description: "Clarity in explaining your idea, working, and impact. Teams should clearly communicate their solution and demonstrate it effectively." },
    ],
    rules: [
      "Teams must have 2 to 4 members.",
      "Problem statement will be provided",
      "Allowed: Any programming language, frameworks, APIs, or tools.",
      "Time limit: 3 hours.",
      "Internet access is allowed for research and development.",
      "Pre-built projects are strictly not allowed.",
    ],
    venue: "SVKM's Institute of Technology, Dhule – Computer Lab 2",
    coordinators: [{ name: "-", phone: "-" }, { name: "-", phone: "-" }],
  },{
  id: "playzone",
  name: "PLAY ZONE",
  tagline: "Game. Compete. Conquer.",
  fee: "₹100 per person",
  teamSize: "4 Members",
  date: "April 24, 2026",
  description: "Play Zone is the ultimate gaming arena for all enthusiasts! Whether you're into fast-paced action, strategic battles, or casual fun games, this event brings together gamers to compete, showcase skills, and enjoy an electrifying gaming experience. Challenge your friends, climb the leaderboard, and prove your dominance.",
  
  teamComposition: "Participants can compete individually or in teams depending on the game format. Team-based games may allow 4 members per team.",
  
  judgingCriteria: [
    { title: "Performance", description: "Players will be judged based on their in-game performance, skills, and overall gameplay." },
    { title: "Strategy", description: "Smart decision-making, teamwork, and effective strategies will play a key role in winning." },
    { title: "Consistency", description: "Maintaining high performance throughout the matches is crucial." },
    { title: "Fair Play", description: "All participants must follow rules and maintain sportsmanship during the event." },
  ],

  rules: [
    "Participants must register before the event begins.",
    "Players must report on time; late entries may be disqualified.",
    "Use of unfair means, hacks, or cheats will lead to immediate disqualification.",
    "Game format and rules will be explained before the start of matches.",
    "Participants must follow coordinators’ instructions at all times.",
    "Decision of organizers will be final and binding.",
  ],

  venue: "SVKM's Institute of Technology, Dhule",
  
  coordinators: [
    { name: "Vaishnavi Desale", phone: "-" },
    { name: "Amruta Potdar", phone: "-" }
  ],
},
{
  id: "clashofminds",
  name: "CLASH OF MINDS",
  tagline: "Where ideas collide and voices rise",
  fee: "₹100 per person",
  teamSize: "Individual",
  date: "April 24, 2026",
  description: "Clash of Minds is an engaging debate competition that challenges participants to think critically, articulate effectively, and defend their viewpoints with confidence. Participants will debate on thought-provoking topics ranging from technology and society to current global issues. It’s the perfect platform to showcase your communication skills, logical reasoning, and presence of mind.",
  
  teamComposition: "Participants can compete individually or in pairs. In team debates, one member will speak 'for' the motion and the other 'against', promoting balanced and dynamic discussions.",
  
  judgingCriteria: [
    { title: "Content & Knowledge", description: "Depth of understanding, relevance of arguments, and use of facts or examples." },
    { title: "Clarity & Expression", description: "Ability to communicate ideas clearly, confidently, and persuasively." },
    { title: "Logical Reasoning", description: "Strength and structure of arguments, along with the ability to counter opposing views." },
    { title: "Confidence & Delivery", description: "Body language, tone, and overall stage presence during the debate." },
  ],

  rules: [
    "Participants must register prior to the event.",
    "Topics will be provided on the spot or in advance (as per format).",
    "Speaking time: 3–5 minutes per participant.",
    "Use of offensive or inappropriate language will lead to disqualification.",
    "Participants must respect opposing viewpoints and maintain decorum.",
    "Judges' decision will be final and binding.",
  ],

  venue: "SVKM's Institute of Technology, Dhule",
  
  coordinators: [
    { name: "Dipti Patil", phone: "-" },
    { name: "Sushant Shinde", phone: "-" }
  ],
}
];
