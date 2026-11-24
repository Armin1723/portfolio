export const navbarLinks = [
    {
        name: 'Experience',
        href: '/resume/experience'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Education',
        href: '/education'
    },
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Hire Me',
        href: 'https://www.linkedin.com/in/uzair1723'
    }
];

export const resumeNavLinks = [
    {
        name: 'Experience',
        href: '/resume/experience'
    },
    {
        name: 'Skills',
        href: '/resume/skills'
    },
    {
        name: 'Certifications',
        href: '/resume/certifications'
    },
    {
        name: 'About Me',
        href: '/resume'
    },
];

export interface SkillItem {
    name: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'Tools & DevOps' | 'Core Concepts';
    icon: string; // remixicon class or custom
}

export const skillsList: SkillItem[] = [
    // Frontend
    { name: 'React.js', category: 'Frontend', icon: 'ri-reactjs-line' },
    { name: 'Next.js (App Router, SSR, SSG)', category: 'Frontend', icon: 'ri-nextjs-line' },
    { name: 'TypeScript', category: 'Frontend', icon: 'ri-code-s-slash-line' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', icon: 'ri-javascript-fill' },
    { name: 'Redux Toolkit', category: 'Frontend', icon: 'ri-shape-line' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'ri-tailwind-css-fill' },
    { name: 'HTML5 & CSS3', category: 'Frontend', icon: 'ri-html5-fill' },
    { name: 'GSAP & Framer Motion', category: 'Frontend', icon: 'ri-magic-line' },
    
    // Backend & Architecture
    { name: 'Node.js', category: 'Backend', icon: 'ri-nodejs-line' },
    { name: 'Express.js', category: 'Backend', icon: 'ri-server-line' },
    { name: 'RESTful API Architecture', category: 'Backend', icon: 'ri-links-line' },
    { name: 'Microservices Architecture', category: 'Backend', icon: 'ri-stack-line' },
    { name: 'JWT & OAuth 2.0 Auth', category: 'Backend', icon: 'ri-shield-keyhole-line' },
    { name: 'Middleware & SMTP', category: 'Backend', icon: 'ri-mail-send-line' },
    
    // Database
    { name: 'MongoDB & Mongoose', category: 'Database', icon: 'ri-database-2-line' },
    { name: 'PostgreSQL', category: 'Database', icon: 'ri-database-line' },
    { name: 'Aggregation Pipelines', category: 'Database', icon: 'ri-git-merge-line' },
    { name: 'Schema Design & Indexing', category: 'Database', icon: 'ri-table-line' },
    
    // Tools & DevOps
    { name: 'Electron.js', category: 'Tools & DevOps', icon: 'ri-computer-line' },
    { name: 'Git & GitHub', category: 'Tools & DevOps', icon: 'ri-github-fill' },
    { name: 'Linux / VPS Environment', category: 'Tools & DevOps', icon: 'ri-terminal-box-line' },
    { name: 'Nginx Reverse Proxy', category: 'Tools & DevOps', icon: 'ri-route-line' },
    { name: 'Postman & Insomnia', category: 'Tools & DevOps', icon: 'ri-send-plane-line' },
    { name: 'VS Code', category: 'Tools & DevOps', icon: 'ri-code-box-line' },

    // Core Concepts
    { name: 'AI Integration & OCR Parsing', category: 'Core Concepts', icon: 'ri-brain-line' },
    { name: 'Role-Based Access Control (RBAC)', category: 'Core Concepts', icon: 'ri-lock-password-line' },
    { name: 'Payment Gateway Integration', category: 'Core Concepts', icon: 'ri-bank-card-line' },
    { name: 'Cross-Border Fintech Compliance', category: 'Core Concepts', icon: 'ri-global-line' },
];

export const skillsName = skillsList; // backward compatibility

export const experiencesData = [
    {
        company: 'Jamtech Technologies',
        location: 'Lucknow, India',
        role: 'Associate Software Engineer',
        duration: 'Feb 2026 – Present',
        isCurrent: true,
        bullets: [
            'Spearhead full-stack architecture and feature development for enterprise-grade CRM applications and SaaS portals using Next.js, Node.js, and MongoDB.',
            'Architect and deploy secure RESTful endpoints, optimizing database aggregation pipelines to handle large data sets with sub-second response times.',
            'Implement resilient client-side caching strategies and server-side rendering patterns, boosting overall platform speed and core web vitals by 25%.',
            'Collaborate directly with cross-border clients, UX designers, and QA engineers to plan sprint releases and deliver scalable, testable production features.',
            'Establish coding standards, conduct pull request reviews, and ensure compliance with high security and data integrity standards.'
        ],
        techs: ['Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'SSR', 'Caching', 'Clean Architecture']
    },
    {
        company: 'Digicrowd Solutions',
        location: 'Lucknow, India',
        role: 'MERN Stack Developer',
        duration: 'Oct 2024 – Feb 2026',
        isCurrent: false,
        bullets: [
            'Engineered dynamic, highly responsive web applications utilizing React.js, Next.js, Node.js, and Express.js with customized UI components.',
            'Engineered a standalone desktop-based Grocery Store Management System on Electron.js, consolidating billing, real-time inventory tracking, and purchasing workflows.',
            'Implemented multi-tier Role-Based Access Control (RBAC) ensuring fine-grained operational permissions across manager, cashier, and administrator accounts.',
            'Refactored legacy UI components and improved frontend aesthetics across the company’s core Laravel platform, improving consistency and UX.',
            'Managed Linux VPS infrastructure, configured SSL certificates and Nginx reverse proxies, and managed smooth production rollouts.'
        ],
        techs: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Electron.js', 'RBAC', 'Nginx', 'Linux VPS']
    }
];

export const certificationsData = [
    {
        title: 'Python (Basic) Certification',
        issuer: 'HackerRank',
        badge: 'Verified Credential',
        description: 'Verified credential demonstrating strong problem-solving proficiency in Python syntax, data structures, and core programming paradigms.',
        icon: 'ri-award-fill',
        link: 'https://www.hackerrank.com'
    },
    {
        title: 'Algorithmic Problem Solving',
        issuer: 'LeetCode (100+ Problems Solved)',
        badge: '100+ Solved',
        description: 'Solved 100+ Data Structures & Algorithms questions on LeetCode focusing on Arrays, Two Pointers, Hash Maps, Linked Lists, Trees, and Dynamic Programming.',
        icon: 'ri-code-box-line',
        link: 'https://leetcode.com/uzair1723'
    },
    {
        title: 'Full Stack Web Development (MERN)',
        issuer: 'Professional Training',
        badge: 'Certified',
        description: 'Completed comprehensive professional training in React.js architecture, Node.js runtime, Express RESTful APIs, Redux Toolkit state management, and MongoDB database design.',
        icon: 'ri-stack-line',
        link: 'https://github.com/Armin1723'
    },
    {
        title: 'Open Source & Technical Community',
        issuer: 'GitHub (Pull Shark, YOLO)',
        badge: '30+ Public Repos',
        description: 'Maintained 30+ public repositories on GitHub earning developer milestone badges (Pull Shark, YOLO) with ongoing contributions to open-source developer tooling.',
        icon: 'ri-github-fill',
        link: 'https://github.com/Armin1723'
    }
];

export const contactPageLinks = [
    {
        name: 'Contact',
        icon: 'ri-phone-fill',
        value: '+91 8858128030',
        href: 'tel:+918858128030'
    },
    {
        name: 'Email',
        icon: 'ri-mail-open-fill',
        value: 'alam.airuz23@gmail.com',
        href: 'mailto:alam.airuz23@gmail.com'
    },
    {
        name: 'Address',
        icon: 'ri-map-pin-2-fill',
        value: 'Lucknow, Uttar Pradesh, India 226022',
        href: 'https://maps.app.goo.gl/qqbeZSkRuReegpZ97'
    },
    {
        name: 'LinkedIn',
        icon: 'ri-linkedin-box-fill',
        value: 'linkedin.com/in/uzair1723',
        href: 'https://linkedin.com/in/uzair1723'
    },
    {
        name: 'GitHub',
        icon: 'ri-github-fill',
        value: 'github.com/Armin1723',
        href: 'https://github.com/Armin1723'
    },
    {
        name: 'LeetCode',
        icon: 'ri-terminal-window-line',
        value: 'leetcode.com/uzair1723',
        href: 'https://leetcode.com/uzair1723'
    }
];

export const formatDate = (date: Date | string | undefined | null) => {
    if (!date) return 'Present';
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Present';
    const monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthsName[d.getMonth()];
    const year = d.getFullYear();
    return `${month} ${year}`;
};
