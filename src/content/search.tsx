import Image from 'next/image'
import { ComponentProps } from 'react'
import { SearchResult } from 'src/components'

type Content = ComponentProps<typeof SearchResult>

export const searchResults: Content[] = [
  {
    title: 'Giggle | Founder',
    description: (
      <>
        Founded Giggle, An AI-Based social media application, which help users
        to find people based on their personality, interests and activity over
        the application. The AI also helps to overcome anytype of language
        barrier between two users by auto-translating the chats. It also offers
        plenty of diverse communities to join or even create your own for
        connecting with people of same interest or hosting events.
      </>
    ),
    extras: <b>Flutter, Django, MongoDB, Infra, Design, MERN Stack, DevOps</b>,
    link: 'https://www.giggletoday.com/',
  },
  {
    title: 'Butterfly Learnings | Software Engineer',
    description: (
      <>
        Worked on Butterfly Learnings with the responsibilities like Develop
        Android and iOS applications utilizing Flutter framework and Integrated
        third-party libraries into existing Android apps for added
        functionality. Created applications using HTML, CSS, JavaScript, and
        other programming languages. Created custom components, forms, and
        interfaces for user interactions in React. Developed, tested and
        maintained REST APIs for web applications using Django. Deployed web
        applications on AWS EC2 instances and S3 Buckets. Collaborated with team
        members to ensure successful project completion.
      </>
    ),
    extras: <b>Flutter, Django, PostgreSQL, Infra, VanillaJs, DevOps</b>,
    link: 'https://www.butterflylearnings.com/',
  },
  {
    title: 'Tipsta | Engineering Lead',
    description: (
      <>
        Worked over a project named Tipsta from scratch and completed the MVP by
        developing android and iOS applications utilizing Flutter framework and
        Integrated third-party libraries and GCP Places and Knowledge Center API
        into existing Android apps for added functionality. Developed, tested
        and maintained REST APIs for web applications using Django. Deployed web
        applications on AWS EC2 instances and S3 Buckets.
      </>
    ),
    extras: <b>Flutter, Django, PostgreSQL, Infra, MERN Stack, DevOps</b>,
    link: 'https://tipsta.com/',
  },
  {
    title: 'Buzz Me | Engineering Lead',
    description: (
      <>
        Worked over a project Buzz.Me for its Phase-1 and Phase-2 by updating
        existing applications with latest version releases according to industry
        standards utilizing Flutter framework and Integrated third-party
        libraries like IPAPI into existing Android apps for added functionality.
        Developed, tested and maintained REST APIs for web applications using
        Django. Deployed web applications on AWS EC2 instances and S3 Buckets.
      </>
    ),
    extras: <b>Flutter, Django, PostgreSQL, Infra, MERN Stack, DevOps</b>,
    link: 'https://zipbuzz.me/',
  },
  {
    title: 'Benchmark Therapy | Software Engineer',
    description: (
      <>
        Worked on Butterfly Learnings with the responsibilities like Develop
        Android and iOS applications utilizing Flutter framework and Integrated
        third-party libraries into existing Android apps for added
        functionality. Created applications using HTML, CSS, JavaScript, and
        other programming languages. Created custom components, forms, and
        interfaces for user interactions in React. Developed, tested and
        maintained REST APIs for web applications using Django. Deployed web
        applications on AWS EC2 instances and S3 Buckets. Collaborated with team
        members to ensure successful project completion.
      </>
    ),
    extras: <b>Flutter, Django, PostgreSQL, Infra, MERN Stack, DevOps</b>,
    link: 'https://www.benchmarktherapy.ai/',
  },
  {
    title: 'Theraplay | Software Engineer',
    description: (
      <>
        Worked on Theraplay with responsibilities like to develop responsive
        website utilising VanillaJS, Postgres, AWS S3, EC2, Python, and Django.
        Also, integrating third party services like sendgrid, zoho, calendly and
        wati for various purposes.
      </>
    ),
    extras: <b>VanillaJS, Django, PostgreSQL, DevOps</b>,
    link: 'https://theraplay.butterflylearnings.com',
  },
  {
    title: 'SuperSub | Flutter Developer',
    description: (
      <>
        Worked as a full-time intern in the technical team for Phase-2 of their
        product named SuperSub utilizing flutter framework by integrating
        various APIs with the server-side dependency of Node JS. Updated
        existing applications with latest version releases according to industry
        standards.
      </>
    ),
    extras: <b>Flutter, Infra, Distribution</b>,
    link: 'https://supersub.live/',
  },
  {
    title: 'The Freelance Network | Flutter Developer',
    description: (
      <>
        Worked as a full-time intern in the technical team of Phase-2 for their
        client St. Mary school in making a student facing mobile application
        utilizing flutter framework by integrating various APIs with the
        server-side dependency of Node JS. Updated existing applications with
        latest version releases according to industry standards.
      </>
    ),
    extras: <b>Flutter, Backend, Infra, Distribution</b>,
    link: 'https://tfnofficial.com',
  },
  {
    title: 'Schaffen Softwares Pvt. Ltd. | Founder',
    description: (
      <>
        Founded Schaffen Softwares for providing top-notch services like
        software developments with new technologies and modern design for
        clients based on current trends at the industry level.
      </>
    ),
    extras: <b>Flutter, Django, MongoDB, Infra, Design, MERN Stack, DevOps</b>,
    link: 'https://www.schaffensoftwares.tech/',
  },
]
