import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import config from '@/config/app';

import About from './about';
import Partner from './partner';
import Roadmap from './roadmap';

function Home() {
  const [sectionIdx, setSectionIdx] = useState<number>(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);

  const handleSelectSlider = (idx: number) => {
    setSectionIdx(idx);
  };

  const handleScroll = () => {
    let idx = 0;
    const position: number = window.pageYOffset;
    const aboutTop: number = aboutRef.current?.offsetTop || 0;
    const roadmapTop: number = roadmapRef.current?.offsetTop || 0;
    const partnerTop: number = partnerRef.current?.offsetTop || 0;

    if (position >= aboutTop && position < roadmapTop) {
      idx = 0;
    } else if (position >= roadmapTop && position < partnerTop) {
      idx = 1;
    } else if (position >= partnerTop) {
      idx = 2;
    }
    setSectionIdx(idx);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sections h-full overflow-hidden text-slate-200'>
      <div className='fixed top-0 left-0 bottom-0 z-10'>
        <div className='absolute z-10 flex h-full w-[100px] items-center justify-center'>
          <div className='inline-flex h-[60px] w-[60px] flex-col items-center justify-center'>
            <div className='mb-[calc(1.07vh)]'>
              <svg
                className='h-[100px] animate-scrollUpSidebar'
                height='18vh'
                viewBox='0 0 10 185'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.5'
                  d='M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z'
                  fill='white'
                  className='transition-all duration-500'
                />
              </svg>
            </div>

            <div className='-tranlate-x-full flex animate-reactButtonApper flex-col'>
              {config.navigation.map((item, idx) => (
                <div key={idx} className='scale-100'>
                  <ScrollLink
                    to={item.href}
                    spy={true}
                    smooth={true}
                    onClick={() => handleSelectSlider(idx)}
                  >
                    <svg
                      width='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{ margin: '6px', cursor: 'pointer' }}
                    >
                      <rect
                        x='0.707107'
                        y='10'
                        width='13.1421'
                        height='13.1421'
                        transform='rotate(-45 0.707107 10)'
                        fill={sectionIdx === idx ? '#b60b14' : 'white'}
                        fillOpacity='0.3'
                        stroke={sectionIdx === idx ? '#b60b14' : 'white'}
                      />
                    </svg>
                  </ScrollLink>
                </div>
              ))}
            </div>

            <div className='mb-[calc(1.07vh)]'>
              <svg
                className='h-[100px] rotate-180 animate-scrollUpSidebar'
                id='upperarrow'
                height='18vh'
                viewBox='0 0 10 185'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.5'
                  d='M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z'
                  fill='white'
                  className='transition-all duration-500'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={roadmapRef}>
        <Roadmap />
      </div>
      <div ref={partnerRef}>
        <Partner />
      </div>
    </div>
  );
}
export default Home;
