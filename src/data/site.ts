export const siteConfig = {
  chapterName: 'ACM-W IISU',
  collegeName: 'IIS (Deemed to be University), Jaipur',
  chapterShortName: 'ACM-W',
  description: 'A student-led computing community for people who like to ask better questions, build things, and learn in public.',
  logo: '/assets/acm-chapter-logo-transparent.png',
  links: {
    whatsapp: 'https://chat.whatsapp.com/Dwc6nroiOo659jhUD6T6OM?s=cl&p=a&mlu=4&ilr=4',
    communityForm: 'https://docs.google.com/forms/d/e/1FAIpQLSf8LAl6Jk9LI9Z3subo_69bTtE2hJhoXiTeFHB_mJIXN11Vcg/viewform?usp=sharing&ouid=110064509515095147441',
    instagram: 'https://www.instagram.com/iisu_acm_w?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    linkedin: '',
    github: '',
    college: 'https://iisuniv.ac.in/',
    map: 'https://www.google.com/maps/search/?api=1&query=IIS+Deemed+to+be+University,+Jaipur',
  },
  location: {
    name: 'IIS (Deemed to be University), Jaipur',
    address: 'IIS Campus, Gurukul Marg, SFS, Mansarovar, Jaipur 302020, Rajasthan',
  },
}

export type EventCategory = 'Workshop' | 'Talk' | 'Competition' | 'Hackathon' | 'Community'


export function getEventStatus(dateValue?: string, now: Date = new Date()): 'Upcoming' | 'Completed' {
  if (!dateValue) return 'Upcoming'
  const endOfEvent = new Date(`${dateValue}T23:59:59`)
  return now > endOfEvent ? 'Completed' : 'Upcoming'
}

export const events = [
  {
    id: 'event-06',
    title: 'Orange-ify Your Data!',
    date: '14 Oct 2026',
    dateValue: '2026-10-14',
    category: 'Workshop' as EventCategory,
    status: 'Completed',
    description: 'A beginner-friendly hands-on machine learning workshop organized by the IISU ACM-W Student Chapter in association with the Department of CS & IT, IISU. Participants explored the basics of machine learning, learned how to turn data into meaningful insights, and gained practical experience using Orange to work with data and explore machine-learning workflows.',
    accent: 'signal'
  },
  {
    id: 'event-05',
    title: 'Beyond Prompt',
    date: '24 Feb 2026',
    dateValue: '2026-02-24',
    category: 'Talk' as EventCategory,
    status: 'Completed',
    description: 'A session on Model Context Protocol (MCP) and Retrieval-Augmented Generation (RAG), led by Mohamed Wiem Mkaouer, Professor at UM-Flint College of Innovation & Technology. The session explored how these approaches can extend AI systems beyond a basic prompt and connect them to richer context and external knowledge.',
    accent: 'terminal'
  },
  {
    id: 'event-04',
    title: 'PromptCraft',
    date: '24 Sep 2026',
    dateValue: '2026-09-24',
    category: 'Competition' as EventCategory,
    status: 'Upcoming',
    description: 'An activity designed to introduce students to the fundamentals of AI prompting and encourage effective, creative and structured ways of communicating with AI tools. Participants can explore prompt writing, logical thinking, creativity and practical applications of generative AI. Open to students from all departments.',
    accent: 'orbit'
  },
  {
    id: 'event-03',
    title: 'ACM Student Connect',
    date: '15 Sep 2026',
    dateValue: '2026-09-15',
    category: 'Community' as EventCategory,
    status: 'Upcoming',
    description: 'A student-focused orientation to help newcomers get familiar with the chapter, the community and the kinds of things they can explore, build and participate in with ACM-W.',
    accent: 'signal'
  },
  {
    id: 'event-02',
    title: 'ACM Orientation for Students',
    date: '25 Aug 2026',
    dateValue: '2026-08-25',
    category: 'Community' as EventCategory,
    status: 'Completed',
    description: 'An introductory session for students to learn what ACM-W is, what the chapter does and how they can get involved in the community throughout the year.',
    accent: 'grid'
  },
  {
    id: 'event-01',
    title: 'Innovations in Software Engineering Conference (ISEC 2026)',
    date: '19–21 Feb 2026',
    dateValue: '2026-02-21',
    category: 'Talk' as EventCategory,
    status: 'Completed',
    description: 'Organized by ACM India, the 19th ISEC brought researchers and industry professionals together to discuss software engineering advancements, with tracks covering research, tools and tutorials across areas including AI for software, cloud computing and security.',
    accent: 'terminal'
  }
]


export type GalleryImage = {
  src: string
  alt: string
}

export type GalleryEvent = {
  id: string
  title: string
  date: string
  category: string
  description: string
  ratio?: string
  images: GalleryImage[]
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: 'isec-2026',
    ratio: '1.874 / 1',
    title: 'ISEC 2026',
    date: '19–21 Feb 2026',
    category: 'Conference',
    description: 'Organized by ACM India, the 19th Innovations in Software Engineering Conference brought researchers and industry professionals together to discuss software engineering advancements, with tracks spanning research, tools and tutorials across AI for software, cloud computing and security.',
    images: [
      { src: '/assets/gallery/isec-2026/isec-2026-01.jpeg', alt: 'ISEC 2026 industry panel session at IIS University, Jaipur' },
      { src: '/assets/gallery/isec-2026/isec-2026-02.jpeg', alt: 'ISEC 2026 technical presentation at IIS University, Jaipur' },
      { src: '/assets/gallery/isec-2026/isec-2026-03.jpeg', alt: 'Students at the ISEC 2026 conference in Jaipur' },
      { src: '/assets/gallery/isec-2026/isec-2026-04.jpeg', alt: 'ISEC 2026 conference gathering at IIS University, Jaipur' },
    ],
  },
  {
    id: 'beyond-prompt-2026',
    title: 'Beyond Prompt',
    date: '24 Feb 2026',
    category: 'Talk',
    description: 'A session on Model Context Protocol (MCP) and Retrieval-Augmented Generation (RAG), led by Mohamed Wiem Mkaouer, Professor at UM-Flint College of Innovation & Technology. The session explored how these approaches can extend AI systems beyond a basic prompt and connect them to richer context and external knowledge.',
    images: [
      { src: '/assets/gallery/beyond-prompt/01.jpeg', alt: 'Beyond Prompt session with students at IIS University, Jaipur' },
      { src: '/assets/gallery/beyond-prompt/02.jpeg', alt: 'Beyond Prompt group photograph at IIS University, Jaipur' },
      { src: '/assets/gallery/beyond-prompt/03.jpeg', alt: 'Beyond Prompt presentation at IIS University, Jaipur' },
      { src: '/assets/gallery/beyond-prompt/04.jpeg', alt: 'Students attending the Beyond Prompt session at IIS University, Jaipur' },
    ],
  },
  {
    id: 'acm-orientation-2026',
    ratio: '2.34 / 1',
    title: 'ACM Orientation for Students',
    date: '25 Aug 2026',
    category: 'Community',
    description: 'An introductory session for students to learn what ACM-W is, what the chapter does and how they can get involved in the community throughout the year.',
    images: [
      { src: '/assets/gallery/acm-orientation-2026/01.jpg', alt: 'Students raising hands during the ACM-W orientation session at IIS University, Jaipur' },
      { src: '/assets/gallery/acm-orientation-2026/02.jpg', alt: 'Students attending the ACM-W orientation session in a computer laboratory at IIS University, Jaipur' },
      { src: '/assets/gallery/acm-orientation-2026/03.jpg', alt: 'ACM-W student chapter orientation presentation at IIS University, Jaipur' },
      { src: '/assets/gallery/acm-orientation-2026/04.jpg', alt: 'Faculty presenting during the ACM-W orientation session at IIS University, Jaipur' },
    ],
  },
  {
    id: 'unofficial-orientation-2026',
    ratio: '2.2 / 1',
    title: 'ACM Student Connect',
    date: '15 Sep 2026',
    category: 'Community',
    description: 'A student-focused orientation for newcomers to get familiar with the chapter, the community and the kinds of things they can explore, build and participate in with ACM-W.',
    images: [
      { src: '/assets/gallery/unofficial-orientation-2026/01.jpeg', alt: 'Students attending the ACM Student Connect session in a computer laboratory at IIS University, Jaipur' },
      { src: '/assets/gallery/unofficial-orientation-2026/02.jpeg', alt: 'Students participating in the ACM Student Connect session at IIS University, Jaipur' },
      { src: '/assets/gallery/unofficial-orientation-2026/03.jpeg', alt: 'Students during the ACM Student Connect session at IIS University, Jaipur' },
      { src: '/assets/gallery/unofficial-orientation-2026/04.jpg', alt: 'Student speaking during the ACM Student Connect session at IIS University, Jaipur' },
    ],
  },
  {
    id: 'promptcraft-2026',
    ratio: '4 / 3',
    title: 'PromptCraft',
    date: '24 Sep 2026',
    category: 'Competition',
    description: 'An activity designed to introduce students to the fundamentals of AI prompting and encourage effective, creative and structured ways of communicating with AI tools. Participants explored prompt writing, logical thinking, creativity and practical applications of generative AI through multiple rounds of challenges.',
    images: [
      { src: '/assets/gallery/promptcraft-2026/01.jpg', alt: 'Students participating in PromptCraft at IIS University, Jaipur' },
      { src: '/assets/gallery/promptcraft-2026/02.jpg', alt: 'Students during the PromptCraft competition at IIS University, Jaipur' },
      { src: '/assets/gallery/promptcraft-2026/03.jpg', alt: 'PromptCraft participants posing together at IIS University, Jaipur' },
      { src: '/assets/gallery/promptcraft-2026/04.png', alt: 'Students and faculty during the PromptCraft event at IIS University, Jaipur' },
    ],
  },
]

export type TeamMemberData = {
  name: string
  role: string
  image: string
  linkedin: string
  intro?: string
}

export const teamGroups: { title: string; members: TeamMemberData[] }[] = [
  {
    title: 'Core Team',
    members: [
      {
        name: 'Saloni Choudhary',
        role: 'Chair',
        image: '/assets/team/saloni-choudhary.png',
        linkedin: 'https://www.linkedin.com/in/saloni-choudhary-b0849435a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        intro: `Professional overthinker, curious builder, and unapologetic perfectionist.
I love turning random ideas into something real—and then spending way too long making it just right.
I can spend hours fixing a tiny detail that nobody else would probably notice.
I ask “why?” a little too often because understanding things matters more to me than just getting them done.
Somewhere between coding, creating, and overthinking, I’m always trying to make things a little better.
Basically: I don’t believe in “good enough”... and yes, it sometimes takes me forever.`
      },
      {
        name: 'Jigyasa Gupta',
        role: 'Co Chair',
        image: '/assets/team/jigyasa-gupta.png',
        linkedin: 'https://www.linkedin.com/in/jigyasa-gupta-567965330',
        intro: `I’m a mix of sharp focus and spontaneous creative energy. I love taking raw ideas, whether a complex concept or a fun event setup and turning them into something practical, sleek, and memorable. Highly visual, deeply curious, and always up for an engaging conversation, I thrive on good music, aesthetic details, and bringing people together for great moments.`
      },
      {
        name: 'Kashish Agarwal',
        role: 'Secretary',
        image: '/assets/team/kashish-agarwal.png',
        linkedin: 'https://www.linkedin.com/in/kashish-agarwal-44104b380?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        intro: `Hi, I’m Kashish. I am a student who is interested in learning new things and gaining new experiences. I enjoy working with others, being involved in different activities, and developing my skills. I believe in staying consistent, being responsible, and making the most of the opportunities I get.

I look forward to learning, contributing, and being a part of the team.`
      },
      {
        name: 'Garvita Vyas',
        role: 'Membership Chair',
        image: '/assets/team/garvita-vyas.png',
        linkedin: 'https://www.linkedin.com/in/garvita-vyas?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
        intro: `Hi, I’m Garvita Vyas, and I love exploring technology, learning new things, and turning ideas into opportunities!
As the Membership Chair of the ACM-W Chapter at IIS University, Jaipur, I’m all about bringing people together.
I love welcoming new members and making sure everyone feels connected and involved.
I believe great communities are built through people, conversations, collaboration, and shared ideas.
For me, ACM-W is a space to learn, grow, connect, and build confidence together.
And of course, to have a little fun while doing it!`
      },
      {
        name: 'Tamiksha Sharma',
        role: 'Web Master',
        image: '/assets/team/tamiksha-sharma.png',
        linkedin: 'https://www.linkedin.com/in/tamiksha-sharma-374b3030b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        intro: `Hi, I am someone who likes approaching problems from unexpected angles, often working backward from the solution rather than following the usual order, which tends to turn up and fix things. I have a creative side, but I like to keep it under the wrap. You'll usually find me quietly working through something interesting, one curious rabbit hole at a time. I’ve learned to weaponize my sarcasm, and honestly, the ROI has been incredible.`
      },
      {
        name: 'Sapna Choudhary',
        role: 'Treasurer',
        image: '/assets/team/sapna-choudhary.png',
        linkedin: 'https://www.linkedin.com/in/sapna-choudhary-06b13238a/',
        intro: `Curious by nature, slightly prone to overthinking, and always ready to learn something new.

I’m the kind of person who can start with “I’ll just learn this quickly” and somehow end up exploring five completely different things.

I enjoy technology, cybersecurity, trying new ideas, and understanding how things actually work rather than just memorising them.

Still figuring things out, still asking questions, and probably opening another tab to find the answer.

Basically: curious mind, too many questions, and never enough tabs.`
      },
    ]
  },
  {
    title: 'Website Contributor',
    members: [
      {
        name: 'Reva Saxena',
        role: 'Website Architect & Developer',
        image: '/assets/team/reva-saxena.png',
        linkedin: 'https://in.linkedin.com/in/reva-saxena-61bb33342',
        intro: `Hey! I’m ray-waa, into tech, creativity, good design, data analysis, and ideas that start with “wait, hear me out.” I’ve always liked building things, trying new stuff, and turning random thoughts into full-blown projects, which probably explains why I’m constantly jumping between ideas, getting way too invested in the tiniest details, and occasionally disappearing into a completely unnecessary rabbit hole. There’s a little Cassie Howard in the way I romanticise everything and a little Princess Carolyn in the way I somehow manage to get things done anyway. When I’m not coding or working on something, I’m probably curating my Pinterest, or finding something new to obsess over. I like ambitious people, good conversations, creative chaos, and making things that actually feel like me, so I’m quite keen to learn, build, meet new people, and see where ACM takes me. I’m still figuring it all out, but I’ve got a feeling it’s going to be a good story.`
      },
    ]
  }
]
