import React, { useEffect, useRef } from 'react';

const Roadmap = (): JSX.Element => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.play();
    return () => {
      currentRef?.pause();
    };
  }, []);

  return (
    <div className='h-full w-full'>
      <div
        id='roadmap'
        className='roadmap relative flex h-screen w-full flex-col items-center justify-center bg-[url("/images/home/background.png")] bg-cover bg-center'
        data-aos='fade-up'
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload=''
          className='h-min-full absolute w-auto min-w-full max-w-none'
          ref={ref}
        >
          <source src='/videos/main.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
      </div>
    </div>
  );
};
export default Roadmap;
