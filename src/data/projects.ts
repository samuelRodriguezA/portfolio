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
    name: 'Talking The Video Chat Web App',
    description: 'Developed a video conferencing platform using Next.js and TypeScript, mirroring the functionalities of Zoom, Teams and others including secure login, meeting creation, and management features',
    image: 'talking.png',
    codeUrl: 'https://github.com/samuelRodriguezA/talking_Video_Chat_App',
    demoUrl: 'https://talking-video-chat-app.vercel.app',
    tools: ['Next.js', 'TypeScript', 'Clerk', 'getStream']
  }, 
  {
    name: 'AI Image Generation Web App',
    description: 'An AI system that can create realistic images and art from a description in natural language. \n It is a Full Stack MERN AI Image Generation App. \n **Not Longer Supported because of OpenAI API**',
    image: 'DallE.webp',
    codeUrl: 'https://github.com/samuelRodriguezA/SRA-AI-Image-Generator',
    demoUrl: 'https://sra-ai-image-generator.vercel.app/',
    tools: ['MERN', 'React.js', 'Express.js', 'MongoDB', 'Nodemon', 'OpenAI', 'Cloudinary', 'TailwindCSS']
  },
  {
    name: '3D AI Store Customization Web App',
    description:
      'A web app that helps the user create their own style. Pick colors, add logos, and try AI designs to make your virtual outfits unique. \nBuilt using React.js, Three.js, and OpenAI to show the usage of a 3D world with AI \n**Not Longer Supported because of OpenAI API**',
    image: 'Shirts.webp',
    codeUrl: 'https://github.com/samuelRodriguezA/SRA_3D_AI_Store',
    demoUrl: 'https://sra-aistore.vercel.app/',
    tools: ['React.js', 'Three.js', 'React Three Fiber', 'React Three Drei','Vite','TailwindCSS','Node.js','Express.js','OpenAI','Framer Motion','Valtio']
  },
  {
    name: 'Personal Portfolio Website',
    description: 'My personal blog where I share some of my coding knowledge and experience.',
    image: 'Portfolio.webp',
    codeUrl: 'https://github.com/samuelRodriguezA/portfolio',
    demoUrl: 'https://sra-portfolio.vercel.app/',
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
    name: 'Modern Informative Web about GPT-3',
    description:
      'One of my first projects testing css and building a simple website, followed a Figma design and used different styling solutions to archive the result',
    image: 'Gpt3.webp',
    codeUrl: 'https://github.com/samuelRodriguezA/WhatIsGpt3',
    demoUrl: 'https://sra-gpt3.vercel.app/',
    tools: ['TypeScript', 'Next', 'UnoCSS', 'Vercel', 'Git']
  }
]
