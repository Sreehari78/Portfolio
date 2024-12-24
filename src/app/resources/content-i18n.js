import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
  const person = {
    firstName: "Selene",
    lastName: "Yu",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
    avatar: "/images/avatar.jpg",
    location: "Asia/Kochi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Hindi", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: false,
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
  };

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/once-ui-system/nextjs-starter",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/company/once-ui/",
    },
    {
      name: "X",
      icon: "x",
      link: "",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:example@gmail.com",
    },
  ];

  const home = {
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  };

  const about = {
    label: t("about.label"),
    title: t("about.title"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
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
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"),
      experiences: [
        {
          company: "SOLYIELD",
          timeframe: t("about.work.experiences.SOLYIELD.timeframe"),
          role: t("about.work.experiences.SOLYIELD.role"),
          achievements: t("about.work.experiences.SOLYIELD.achievements").split(
            ";"
          ),
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
          timeframe: t("about.work.experiences.MENTORPRIME.timeframe"),
          role: t("about.work.experiences.MENTORPRIME.role"),
          achievements: t(
            "about.work.experiences.MENTORPRIME.achievements"
          ).split(";"),
          images: [],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: "Studies",
      institutions: [
        {
          name: "College of Engineering, Trivandrum",
          description: (
            <>
              {t(
                `about.studies.institutions.College of Engineering, Trivandrum.description`
              )}
            </>
          ),
        },
        {
          name: "Government Polytechnic College, Kalamassery",
          description: (
            <>
              {t(
                "about.studies.institutions.Government Polytechnic College, Kalamassery.description"
              )}
            </>
          ),
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t("about.technical.title"),
      skills: [
        {
          title: "Next.js",
          description: <>{t("about.technical.skills.Next.js.description")}</>,
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
          description: <>{t("about.technical.skills.Flask.description")}</>, // "." not accepted in next-intl namespace
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
      title: t("about.showcase.title"),
      projects: [
        {
          name: "Fidelius",
          role: t("about.showcase.projects.Fidelius.role"),
          explaination: t(
            "about.showcase.projects.Fidelius.explaination"
          ).split(";"),
          achievements: t(
            "about.showcase.projects.Fidelius.achievements"
          ).split(";"),
          images: [],
        },
        {
          name: "Safe Bite",
          role: t("about.showcase.projects.Safe Bite.role"),
          explaination: t(
            "about.showcase.projects.Safe Bite.explaination"
          ).split(";"),
          achievements: t(
            "about.showcase.projects.Safe Bite.achievements"
          ).split(";"),
          images: [],
        },
        {
          name: "MONITUS AI",
          role: t("about.showcase.projects.MONITUS AI.role"),
          explaination: t(
            "about.showcase.projects.MONITUS AI.explaination"
          ).split(";"),
          achievements: t(
            "about.showcase.projects.MONITUS AI.achievements"
          ).split(";"),
          images: [],
        },
        {
          name: "CASA AI",
          role: t("about.showcase.projects.CASA AI.role"),
          explaination: t("about.showcase.projects.CASA AI.explaination").split(
            ";"
          ),
          achievements: t("about.showcase.projects.CASA AI.achievements").split(
            ";"
          ),
          images: [],
        },
      ],
    },
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: person.name }),
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  };

  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description", { name: person.name }),
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
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
