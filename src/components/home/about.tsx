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
        <div className="relative h-screen w-full overflow-hidden  bg-[url('/images/home/background.png')] bg-cover md:bg-[url('/images/home/background.png')]">
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
            <div className='absolute bottom-[4rem] right-0 flex flex-col items-end px-20 text-white'>
              <h2 className='mb-5 overflow-hidden text-ellipsis'>
                An NFT like no other
              </h2>
              <h4 className='text-right'>{`Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live.`}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
