import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import config from '@/config/app';

export default function Header() {
  const router = useRouter();
  return (
    <>
      <Disclosure as='nav'>
        {({ open, close }) => (
          <div className='header fixed top-0 right-0 left-0 z-20'>
            <div className='mx-auto px-2 md:px-14'>
              <div className='relative flex h-20 items-center justify-between'>
                {router.pathname == '/' && (
                  <div className='absolute inset-y-0 right-0 z-10 flex items-center lg:hidden'>
                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md border-2 border-transparent p-2 text-white hover:border-white hover:text-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      ) : (
                        <Bars3Icon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                )}
                <div className='flex h-full w-full cursor-pointer items-center justify-start'>
                  {router.pathname == '/' ? (
                    <ScrollLink to='home' spy={true} smooth={true}>
                      <div className='flex items-center justify-start'>
                        <div className='text-3xl font-bold uppercase text-white first-letter:text-5xl'>
                          Sophon
                        </div>
                      </div>
                    </ScrollLink>
                  ) : (
                    <Link href='/'>
                      <div className='flex items-center justify-start'>
                        Sophon
                      </div>
                    </Link>
                  )}
                </div>
                <div className='hidden lg:ml-6 lg:block'>
                  <div className='flex h-full items-center space-x-4'>
                    {config.navigation.map((item) => {
                      if (router.pathname == '/') {
                        return (
                          <ScrollLink
                            key={item.name}
                            to={item.href}
                            spy={true}
                            smooth={true}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <div className='capitalize text-white'>
                              {item.name}
                            </div>
                          </ScrollLink>
                        );
                      } else {
                        return (
                          <Link
                            key={item.name}
                            href='/'
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className='lg:hidden'>
              <div
                className='fixed top-0 right-0 left-0 bottom-0'
                onClick={() => close()}
              ></div>
              <div className='space-y-1 px-2 pt-2 pb-3'>
                {config.navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='div'
                    className={clsx(
                      item.current
                        ? 'bg-gray-900/80 text-white'
                        : 'text-gray-300 hover:bg-gray-700/80 hover:text-white',
                      'hover:border-main block cursor-pointer rounded-md border border-transparent text-base font-medium backdrop-blur-sm hover:border'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <ScrollLink
                      to={item.href}
                      onClick={() => close()}
                      spy={true}
                      smooth={true}
                      className='block px-3 py-2'
                    >
                      {item.name}
                    </ScrollLink>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </>
  );
}
