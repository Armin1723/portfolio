export const navbarLinks = [
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
        href: '/hireme'
    }
]

export const resumeNavLinks = [
    {
        name: 'About me',
        href: '/resume'
    },
    {
        name: 'Skills',
        href: '/resume/skills'
    },
]

export const skillsName = [
    {
        name: 'ReactJS',
        icon: 'ri-reactjs-line'
    },
    {
        name: 'NextJS',
        icon: 'ri-nextjs-line'
    },
    {
        name: 'TailwindCSS',
        icon: 'ri-tailwind-css-fill'
    },
    {
        name: 'JavaScript',
        icon: 'ri-javascript-fill'
    },
    {
        name: 'NodeJS',
        icon: 'ri-nodejs-line'
    },
    {
        name: 'NPM',
        icon: 'ri-npmjs-fill'
    },
    {
        name: 'Bootstrap',
        icon: 'ri-bootstrap-fill'
    },
    {
        name: 'Git',
        icon: 'ri-github-fill'
    },
    {
        name: 'GitHub',
        icon: 'ri-github-line'
    },

]

export const formatDate = (date: Date) => {
    const monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = monthsName[date.getMonth()]
    const year = date.getFullYear()
    return `${month}/${year}`
}