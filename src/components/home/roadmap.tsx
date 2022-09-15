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
    <section>
      <div className='w-full bg-black'>
        <div
          id='roadmap'
          className="roadmap relative h-screen w-full overflow-hidden bg-[url('/images/home/roadmap/background.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/roadmap/background.png')]"
        >
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black'></div>
          <div className='flex items-center justify-center p-[10%]'>
            <div className='relative h-full w-full rounded-xl p-10 shadow-roadmap backdrop-blur-sm'>
              <div className='z-10 w-full lg:w-3/5'>
                <div className='pb-5 text-white'>
                  <h2 className='inline-block pr-2 font-bold uppercase first-letter:text-4xl'>
                    Initial
                  </h2>
                  <h2 className='inline-block pr-5 font-bold uppercase first-letter:text-4xl'>
                    Release
                  </h2>
                  <h1 className='inline-block font-bold'>4/11</h1>
                </div>
                <div className='font-medium text-gray-200'>
                  <h4 className='pb-5'>
                    We have released four limited edition NFTs early which can
                    be bid on via
                    <a href='#' className='px-2 underline'>
                      OpenSea
                    </a>
                    .
                  </h4>
                  <h4 className='pb-5'>
                    These will be the only four of these NFTs we ever make, so
                    be sure not to miss out!
                  </h4>
                  <h4 className='pb-5'>50% of proceeds go to charity.</h4>
                  <a href='#' className='font-bold underline'>
                    Check them out →
                  </a>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 w-full'>
                <div className='absolute inset-0'>
                  <div className='absolute right-[10%] bottom-0 h-[350px] w-[200px] bg-[url("/images/home/roadmap/nft.png")] bg-cover bg-center'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Roadmap;
