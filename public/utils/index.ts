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

export const formatDate = (date: Date) => {
    const monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = monthsName[date.getMonth()]
    const year = date.getFullYear()
    return `${month}/${year}`
}