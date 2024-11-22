import antuImage from '@/assets/images/Antu_Profile_Image_Without_Background.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { ShootingStars } from '@/components/AceternityUI/shooting-stars';
import { StarsBackground } from '@/components/AceternityUI/stars-background';
import { AnimatedTextBadge } from '@/components/magicui/AnimatedTextBadge';
import { Highlight } from '@/components/AceternityUI/hero-highlight';
import { HeroOrbit } from '@/components/Global/HeroOrbit';
import { Download } from 'lucide-react';
import Link from 'next/link';


export const HeroSection = () => {
  return (
    <section id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}>
        </div>
        <div className='size-[620px] hero_ring'></div>
        <div className='size-[820px] hero_ring'></div>
        <div className='size-[1020px] hero_ring'></div>
        <div className='size-[1220px] hero_ring'></div>
        <div className='size-[1420px] hero_ring'></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration='60s'
          shouldSpin
          spinDuration='20s'
        >
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration='70s'
          shouldSpin
          spinDuration='20s'
        >
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration='80s'
          shouldSpin
          spinDuration='20s'
        >
          <div className='size-2 rounded-full bg-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration='90s'
          shouldSpin
          spinDuration='20s'
        >
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration='100s'
          shouldSpin
          spinDuration='20s'
        >
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration='110s'
          shouldSpin
          spinDuration='20s'
        >
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration='120s'
          shouldSpin
          spinDuration='20s'
        >
          <div className='size-2 rounded-full bg-emerald-300/10' />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration='130s'
          shouldSpin
          spinDuration='20s'
        >
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration='140s'
          shouldSpin
          spinDuration='20s'>
          <div className='size-3 rounded-full bg-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-73}
          shouldOrbit
          orbitDuration='150s'
          shouldSpin
          spinDuration='20s'>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center z-20'>
          <Image
            src={antuImage} className='size-[250px]'
            alt='Antu Das Profile Image'
          />
          <AnimatedTextBadge />
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl text-center mt-4 tracking-wide'>👋 Hi {`I'm`} <Highlight className="text-teal-800 dark:text-white">Antu Das</Highlight></h1>
          <h1 className='font-serif text-3xl text-center mt-4 tracking-wide'>
            Front-End Developer
          </h1>

          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialized in transforming designs into functional, high-performing web applications, {`Let's`} discuss your next project.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-20 relative'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer'>
            <a href='#project' className='font-semibold'>Explore My Work</a>
            <ArrowDown className='size-4' />
          </button>
          <a href="https://drive.google.com/file/d/1W7REJu74R73kzBNhcFNXs4LcSwUNVXG0/view?usp=sharing" target='_blank' className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer'>
            {/* <span>👋</span> */}
            <Download className='size-6 text-teal-600' />
            <span className='font-semibold'>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Shooting Star Background */}
      <ShootingStars />
      <StarsBackground />
    </section>
  )
};
