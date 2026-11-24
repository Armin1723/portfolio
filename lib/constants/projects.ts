export interface ProjectData {
  title: string;
  description: string;
  code_link: string;
  live_link: string;
  techs: string[];
  start_date: Date;
  end_date?: Date;
  status?: string;
}

export const defaultProjects: ProjectData[] = [
  {
    title: 'Accountrix AI',
    description: 'Architecting an advanced AI-driven accounting suite engineered to streamline European business operations and bookkeeping. Developed an end-to-end invoice digitization pipeline utilizing OCR and AI models to parse, extract, and reconcile invoices automatically, automated bank statement reconciliation, and built dedicated Swiss payroll management modules complying with statutory withholding rules.',
    code_link: 'https://github.com/Armin1723',
    live_link: 'https://github.com/Armin1723',
    techs: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'AI/OCR', 'Tailwind CSS'],
    start_date: new Date('2026-02-01'),
    status: 'In Active Development'
  },
  {
    title: 'Helior & Excelior CRMs',
    description: 'Developed and launched dedicated bullion and gold investment CRMs targeted for high-net-worth investors in Italy and Switzerland. Implemented investor dashboards with real-time market price feeds, automated KYC/AML document verification pipelines, administrative audit trails for European regulatory compliance, and multi-currency billing engines.',
    code_link: 'https://github.com/Armin1723',
    live_link: 'https://myhelior.it',
    techs: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'KYC/AML', 'WebSockets'],
    start_date: new Date('2025-06-01'),
    end_date: new Date('2026-02-01'),
    status: 'Production'
  },
  {
    title: 'Influencer Aggregator Platform',
    description: 'Engineered an influencer marketing marketplace linking verified brands with social content creators for streamlined campaign executions. Built specialized, data-rich dashboards for Super Admins, Brand Marketers, and Influencers with protected route authorization, and integrated automated payment gateways handling escrow-style payout milestones.',
    code_link: 'https://github.com/Armin1723',
    live_link: 'https://github.com/Armin1723',
    techs: ['MERN Stack', 'React.js', 'Redux Toolkit', 'Node.js', 'Payment Gateways'],
    start_date: new Date('2025-01-01'),
    end_date: new Date('2025-06-01'),
    status: 'Production'
  },
  {
    title: 'Grocery Store CRM & Management System',
    description: 'Developed an offline-first desktop management software for grocery retail operations using Electron.js and Node.js. Implemented automated barcode scanning, receipt generation, inventory replenishment alerts, profit margin analysis, and multi-tier role-based employee authentication to protect financial data.',
    code_link: 'https://github.com/Armin1723',
    live_link: 'https://github.com/Armin1723',
    techs: ['Electron.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'RBAC'],
    start_date: new Date('2024-10-01'),
    end_date: new Date('2025-02-01'),
    status: 'Desktop Application'
  },
  {
    title: 'Link India Now',
    description: 'Built a local business directory and discovery platform utilizing Next.js for high SEO indexability and ultra-fast page load times. Designed an intuitive administrative management panel for verified merchant onboarding, listing reviews, and premium promotion management with modular subscription tiers.',
    code_link: 'https://github.com/Armin1723',
    live_link: 'https://github.com/Armin1723',
    techs: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'SEO', 'Responsive Web Design'],
    start_date: new Date('2024-06-01'),
    end_date: new Date('2024-10-01'),
    status: 'Live Directory Platform'
  },
  {
    title: 'Task-Venture',
    description: 'A responsive React application that demonstrates the integration and utilization of the pdfme library for dynamic client-side PDF document manipulation, template population, and customized exports.',
    code_link: 'https://github.com/Armin1723/task-venture.git',
    live_link: 'https://task-venture.netlify.app/',
    techs: ['ReactJS', 'NodeJS', 'pdfme', 'TailwindCSS'],
    start_date: new Date('2024-03-24'),
    end_date: new Date('2024-03-26'),
    status: 'Completed'
  }
];
