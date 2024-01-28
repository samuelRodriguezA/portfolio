export interface ProjectType {
  name: string
  description: string
  image: string
  codeUrl?: string
  demoUrl?: string
  tools: string[]
}

export const projectsList: ProjectType[] = [
  {
    name: 'AI Image Generation Web App',
    description: 'An AI system that can create realistic images and art from a description in natural language. \n It is a Full Stack MERN AI Image Generation App.',
    image: 'DallE.webp',
    codeUrl: '',
    demoUrl: '',
    tools: ['MERN', 'React.js', 'Express.js', 'MongoDB', 'Nodemon', 'OpenAI', 'Cloudinary', 'TailwindCSS']
  },
  {
    name: '3D AI Store Customization Web App',
    description:
      'A web app that helps the user create their own style. Pick colors, add logos, and try AI designs to make your virtual outfits unique. \nBuilt using React.js, Three.js, and OpenAI to show the usage of a 3D world with AI',
    image: 'Shirts.webp',
    codeUrl: '',
    demoUrl: '',
    tools: ['React.js', 'Three.js', 'React Three Fiber', 'React Three Drei','Vite','TailwindCSS','Node.js','Express.js','OpenAI','Framer Motion','Valtio']
  },
  {
    name: 'Personal Portfolio Website',
    description: 'My personal blog where I share some of my coding knowledge and experience.',
    image: 'Portfolio.webp',
    codeUrl: 'https://github.com/noel-lopez/blog',
    demoUrl: 'https://nlpz-blog.vercel.app',
    tools: ['TypeScript', 'NextJS', 'Tailwind CSS', 'MDX','SCSS','Framer Motion','Gsap']
  },
  {
    name: 'IndeKedIn Job Board Website',
    description:
      'My first time developing a Dynamic Database-Driven Web App with Python, Flask, and MySQL. Its functionallity is a basic Job searching web app that allows the user to conect with the employer',
    image: 'IndeKedIn.webp',
    codeUrl: 'https://github.com/samuelRodriguezA/IndeKedIn_Careers_WebSite_v2/tree/main',
    demoUrl: 'https://indekedinv2.onrender.com/',
    tools: ['Flask', 'Replit', 'HTML','CSS','Bootstrap','Render','Git']
  },
  {
    name: 'Modern Informative Web about GPT-4',
    description:
      'One of my first projects testing css and building a simple website',
    image: 'Gpt3.webp',
    codeUrl: 'https://github.com/samuelRodriguezA/WhatIsGpt3',
    demoUrl: 'https://what-is-gpt3.vercel.app/',
    tools: ['TypeScript', 'Next', 'UnoCSS', 'Vercel', 'Git']
  }
]