import { InlineCode } from "@/once-ui/components";
import { language } from "gray-matter";

const person = {
  firstName: "Sreehari",
  lastName: "S",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sreehari78",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sreehari7/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shraxx7@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer and Innovator</>,
  subline: (
    <>
      I'm Sreehari, a passionate software developer specializing in building
      scalable systems and crafting innovative solutions.
      <br />
      With expertise in Generative AI, Full Stack Development, and Machine
      Learning, I transform complex ideas into impactful digital experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Gen-AI, Full-Stack, and ML developer with a passion for solving
        real-world problems through innovative, data-driven solutions. My work
        involves building intelligent systems, designing scalable architectures,
        and applying AI and machine learning to practical challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SOLYIELD",
        timeframe: "February 2024 - April 2024",
        role: "Chatbot Developer Intern",
        achievements: [
          <>
            Engineered a RASA-based chatbot incorporating deep learning and
            conversational AI, handling over 1,000 customer inquiries monthly
            and automating 70% of ticketing processes.
          </>,
          <>
            Utilized MongoDB to enhance information retrieval, improving
            chatbot's response accuracy by 40%.
          </>,
          <>
            Leveraged similarity search to process and utilize extensive
            documentation, increasing the chatbot's relevancy and precision by
            50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MENTORPRIME",
        timeframe: "May 2023 - July 2023",
        role: "Fullstack Web Developer Intern",
        achievements: [
          <>
            Integrated BigBlueButton and Google Cloud on Google VMs, enhancing
            virtual learning scalability for over 500 users.
          </>,
          <>
            Developed a multi-tier access dashboard using Next.js and
            TypeScript, processing over $25,000 through the Stripe payment
            gateway monthly.
          </>,
          <>
            Oversaw the optimization of CI/CD workflows using Docker, leading a
            team of 3 interns to reduce deployment times by 30% and improve
            system reliability for continuous operations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "College of Engineering, Trivandrum",
        description: (
          <>
            Studied BTech in Computer Science and Engineering
            <br />
            Expected Graduation : 2025
            <br />
            CGPA : 8.2
          </>
        ),
      },
      {
        name: "Government Polytechnic College, Kalamassery",
        description: (
          <>
            Studied Diploma in Computer Engineering
            <br />
            Graduated : 2022
            <br />
            CGPA : 8.96
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>
            Building next-generation apps with Next.js and TailwindCSS I
            specialize in developing sophisticated, future-forward applications
            by leveraging the robust capabilities of Next.js and the flexibility
            of TailwindCSS. These tools allow me to create sleek,
            high-performance user interfaces that not only meet the latest web
            standards but also deliver exceptional, responsive experiences.
            Whether it's creating dynamic single-page applications or complex
            multi-tier systems, I focus on pushing the boundaries of what's
            possible in modern web development.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Flask",
        description: (
          <>
            Integration of Generative AI with Quantization, Fine-Tuning
            Techniques, and RAG (Retrieval-Augmented Generation) Instructions
            into the Backend Development Process. This involves incorporating
            advanced techniques such as Quantization, Fine-Tuning, and RAG
            instructions to enhance the capabilities of Generative AI models.
            These processes allow the backend to not only perform sophisticated
            tasks but also maintain efficiency and scalability. By integrating
            these elements, we optimize model performance, improve accuracy, and
            enable real-time, dynamic responses in complex environments.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-06.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-07.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  showcase: {
    display: true, // set to false to hide this section
    title: "Projects",
    projects: [
      {
        name: "Fidelius",
        role: "AI-Powered Data Masking and Obfuscation Tool",
        explaination: [
          <>
            Led the development of a localized data masking tool leveraging
            Large Language Model and used to protect Personally Identifiable
            Information (PII) from CSV/Excel, PDF/Text and Audio files.
            Implemented Quantization to optimize the model's performance for
            local environments.
          </>,
        ],
        achievements: [
          <>
            Qualified for the global finals of Dell & NVIDIA Hack AI Challenge
          </>,
          <>Global Top 30</>,
        ],
        images: [],
      },
      {
        name: "Safe Bite",
        role: "AI-Powered Allergen Detection and Dietary Management Tool",
        explaination: [
          <>
            Developed a Generative AI-based solution to help users with food
            allergies identify potential allergens in meals, manage dietary
            restrictions, and access allergy-related insights. Features include
            real-time allergen detection, personalized guidance, and a
            supportive community platform, enhancing food safety and informed
            dietary choices.
          </>,
        ],
        achievements: [
          <>Allianz Tech Championship 2024 Winner</>,
          <>Prize amount of 3,000 EUR</>,
        ],
        images: [],
      },
      {
        name: "MONITUS AI",
        role: "Adverse Drug Reaction Prediction Tool",
        explaination: [
          <>
            Oversaw the development of an AI-driven tool predicting adverse drug
            reactions, enhancing prediction accuracy by 35% with Large Language
            Model and vector embeddings and Fine-Tuning Technique using Flask
            and MongoDB.
          </>,
        ],
        achievements: [
          <>
            CyientifIQ Innovation League Global Hackathon Value Innovation
            Winner
          </>,
          <>Prize amount of 1,000 USD</>,
        ],
        images: [],
      },
      {
        name: "CASA AI",
        role: "Architectural Plan Generation Using GenAI",
        explaination: [
          <>
            Developed a tool for generating architectural plans, improving plan
            optimization and performance by 25% using LoRa model used on top of
            Stable Diffusion, OpenCV, Flask, and Three.js for visualization.
          </>,
        ],
        achievements: [
          <>
            UST. D3CODE National Level Hackathon Honorary Mention Top 5 Finalist
          </>,
          <>Prize amount of 2,00,000 INR</>,
        ],
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
