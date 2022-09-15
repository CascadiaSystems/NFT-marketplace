import React, { useEffect, useRef } from 'react';

const Partner = (): JSX.Element => {
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
        id='partner'
        className='partner relative flex h-screen w-full flex-col items-center justify-center bg-[url("/images/home/background.png")] bg-cover bg-center'
        data-aos='fade-up'
      >
        <div className='background-color absolute top-0 left-0 h-full w-full bg-black bg-cover bg-center opacity-30'></div>
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
        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
      </div>
    </div>
  );
};
export default Partner;
