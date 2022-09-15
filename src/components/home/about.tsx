import React, { useEffect, useRef } from 'react';

const About = (): JSX.Element => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.play();
    return () => {
      currentRef?.pause();
    };
  }, []);

  return (
    <section>
      <div className='w-full'>
        <div
          id='about'
          className="about relative h-screen w-full overflow-hidden bg-[url('/images/home/about/sophon.png')] bg-cover md:bg-[url('/images/home/about/sophon.png')]"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            className='pointer-events-none absolute hidden h-screen w-screen object-cover md:block'
          >
            <source src='/videos/home/sophon.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/75'></div>
          <div className='relative h-full w-screen'>
            <div className='absolute inset-x-0 bottom-10 flex items-end justify-between px-10 text-gray-200'>
              <div>
                <p className='text-left text-sm'>©2022 Sophon Foundation</p>
              </div>
              <div className='text-right'>
                <h2 className='mb-5 overflow-hidden text-ellipsis'>
                  An NFT like no other
                </h2>
                <p className='text-right text-sm'>{`Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
