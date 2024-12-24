import React from "react";
import { Trophy, Award, Star, Medal } from "lucide-react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Grid,
  SmartImage,
} from "@/once-ui/components";
import Form from "./form";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person } = renderContent(t);

  const achievements = [
    {
      icon: <Trophy className='w-6 h-6 text-white' />,
      title: "Allianz Tech Championship 2024 Winner",
      description:
        "Triumphed globally in Allianz Tech Championship 2024, one of 50 Indian winners, earning 3,000 EUR.",
      year: "2024",
    },
    {
      icon: <Star className='w-6 h-6 text-white' />,
      title: "Dell & NVIDIA Hack AI Challenge Global Finalist",
      description:
        "Top 30 in the Global Finals of the Hack AI Challenge conducted by Dell and NVIDIA, with over 4500 participants worldwide",
      year: "2024",
    },
    {
      icon: <Award className='w-6 h-6 text-white' />,
      title:
        "CyientifIQ Innovation League Global Hackathon Value Innovation Winner",
      description:
        "Captured Value Innovation award in CyientifIQ Global Hackathon, amongst 5,500+ participants, earning 1,000 USD.",
      year: "2023",
    },
    {
      icon: <Medal className='w-6 h-6 text-white' />,
      title: "Honorary Mention UST. D3CODE National Hackathon",
      description:
        "Achieved Top 5 Honorary Mention in UST D3CODE National Hackathon among 12,000+ participants, winning 2,00,000 INR.",
      year: "2023",
    },
  ];

  const projects = [
    {
      title: "Fidelius Platform",
      image: "/images/projects/project-01/p1.jpeg",
      description:
        "A data masking and obfuscation tool designed to enhance privacy and security by intelligently handling Personally Identifiable Information (PII).",
      techStack: ["Electron.js", "Flask", "Llama 3.2b"],
      link: "https://github.com/Sreehari78/Fidelius",
    },
    {
      title: "Monitus AI",
      image: "/images/projects/project-01/p2.jpeg",
      description:
        "AI-powered tool designed to predict Adverse Drug Reactions (ADRs). This tool not only predicts ADRs but also provides a mechanism to store and collect data related to these reactions, aiding in data collection and database management.",
      techStack: ["React.js", "Flask", "GPT-3.5"],
      link: "https://github.com/Sreehari78/MonitusAI",
    },
    {
      title: "Casa AI",
      image: "/images/projects/project-01/p3.jpeg",
      description:
        "An intelligent home automation system that learns and adapts to user preferences for optimal comfort and efficiency.",
      techStack: ["Next.js", "Flask", "LoRA", "Stable Diffusion"],
      link: "https://github.com/Richard-m-j/casaAI",
    },
    {
      title: "Safe Bite",
      image: "/images/projects/project-01/p4.jpeg",
      description:
        "A mobile app that helps users with food allergies and dietary restrictions make informed decisions when dining out.",
      techStack: ["Next.js", "Flask", "Llama 3.2b"],
      link: "https://github.com/Sreehari78/SafeBite",
    },
  ];

  return (
    <Flex
      maxWidth='m'
      fillWidth
      gap='xl'
      direction='column'
      alignItems='center'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction='column' paddingY='l' gap='m'>
        <Flex direction='column' fillWidth maxWidth='s' gap='m'>
          <RevealFx translateY='4'>
            <Heading wrap='balance' variant='display-strong-l'>
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Flex fillWidth>
              <Text
                wrap='balance'
                onBackground='neutral-weak'
                variant='heading-default-xl'>
                {home.subline}
              </Text>
            </Flex>
          </RevealFx>
          <RevealFx translateY='12' delay={0.4}>
            <Flex fillWidth>
              <Button
                id='about'
                data-border='rounded'
                href={`/${locale}/about`}
                variant='tertiary'
                size='m'>
                <Flex gap='8' alignItems='center'>
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size='m'
                    />
                  )}
                  {t("about.title")}
                  <Arrow trigger='#about' />
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Flex>
      </Flex>

      {/* Achievements Section */}
      <RevealFx translateY='16' delay={0.4}>
        <Flex fillWidth direction='column' gap='l'>
          <Heading variant='display-strong-m' className='mb-8'>
            Achievements
          </Heading>
          <Grid columns='repeat(2, 1fr)' gap='24'>
            {achievements.map((achievement, index) => (
              <RevealFx key={index} translateY='8' delay={0.1 * index}>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>
                    {achievement.icon}
                  </div>
                  <Text variant='heading-strong-s' className='mb-2'>
                    {achievement.title}
                  </Text>
                  <br />
                  <Text variant='body-default-s' onBackground='neutral-weak'>
                    {achievement.description}
                  </Text>
                  <br />
                  <Text
                    variant='body-default-xs'
                    onBackground='neutral-weak'
                    className='mt-2'>
                    {achievement.year}
                  </Text>
                </div>
              </RevealFx>
            ))}
          </Grid>
        </Flex>
      </RevealFx>

      {/* Projects Section */}
      <RevealFx translateY='16' delay={0.6}>
        <Heading variant='display-strong-m' className='mb-8'>
          Projects
        </Heading>
        <Grid columns='repeat(2, 1fr)' gap='24' padding='24'>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.mask}
              aria-label={`View ${project.title} project`}>
              <SmartImage
                src={project.image}
                alt={`${project.title} project thumbnail`}
                aspectRatio='4/3'
                radius='l'
                objectFit='cover'
              />
              <div className={styles.projectInfo}>
                <Text
                  className={styles.projectTitle}
                  variant='heading-strong-s'>
                  {project.title}
                </Text>
                <br />
                <Text
                  className={styles.projectDescription}
                  variant='body-default-s'>
                  {project.description}
                </Text>
                <div className={styles.techStack}>
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </Grid>
      </RevealFx>

      {/* Contact Form Section */}
      <RevealFx translateY='16' delay={0.8}>
        <Flex fillWidth direction='column' gap='l'>
          <Heading variant='display-strong-m' className='mb-8'>
            Contact Me
          </Heading>
          <Form />
        </Flex>
      </RevealFx>
    </Flex>
  );
}
