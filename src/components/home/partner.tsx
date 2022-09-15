import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type partnerProps = {
  name: string;
  image: string;
};
const partners: partnerProps[] = [
  { name: 'alya', image: '/images/home/partner/alya.png' },
  { name: 'Anomura', image: '/images/home/partner/anomura.png' },
  { name: 'Anonymice', image: '/images/home/partner/anonymice.png' },
  { name: 'BaeCafe', image: '/images/home/partner/baeCafe.png' },
  { name: 'Battlefly', image: '/images/home/partner/battlefly.png' },
  { name: 'Deep Sea Jelly', image: '/images/home/partner/deeseajelly.png' },
];

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
        className="partner relative h-screen w-full overflow-hidden bg-[url('/images/home/partner/background.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/roadmap/background.png')]"
      >
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black'></div>
        <div className='flex h-screen w-full items-center justify-center px-[10%] py-[5%]'>
          <div className='grid h-full w-full grid-cols-3 gap-10'>
            {partners.map((partner: partnerProps, index: number) => (
              <div
                key={index}
                className='group relative w-full translate-x-0 overflow-hidden before:block before:pt-[125%] before:content-[""]'
              >
                <div className='absolute inset-0 overflow-hidden bg-black'>
                  <div className='absolute inset-0 transition-all duration-500 group-hover:translate-y-[-2%] group-hover:opacity-40'>
                    <Image
                      className='absolute'
                      src={partner.image}
                      layout='fill'
                      alt={partner.name}
                    />
                  </div>
                  <div className='absolute inset-0 top-auto z-10 bg-gradient-to-t from-black to-transparent p-[10%] pt-[20%] before:absolute before:inset-0 before:content-[""]'>
                    <div className='relative'>
                      <h3 className='font-bold uppercase text-white'>
                        {partner.name}
                      </h3>
                      <div className='relative mt-0 leading-[0px] text-gray-200 opacity-0 transition-all duration-500 group-hover:mt-[15px] group-hover:leading-5 group-hover:opacity-75'>
                        <p>
                          Some warriors are built for sustain and are able to
                          tank heavy damage while wearing plate armor, others
                          can focus their damage in light armor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partner;
