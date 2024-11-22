import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Link from 'next/link';

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/antudaa"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/antu-antu/"
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/antu.das.07/"
  },
  {
    title: "Gmail",
    href: "mailto:antu.haks@gmail.com"
  }
]

export const Footer = () => {
  return <footer className="relative overflow-x-clip">
    <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center'>
        <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
        <nav className='flex flex-col md:flex-row items-center  gap-8 '>
          {
            footerLinks.map(link => (
              <Link
                className='inline-flex items-center gap-1.5 cursor-pointer'
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className='font-semibold cursor-pointer'>{link.title}</span>
                <ArrowUpRightIcon />
              </Link>
            ))
          }
        </nav>
      </div>
    </div>
  </footer>;
};
