import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import cared from '../assets/caret-down.svg'

import user from '../assets/userpic.png'

export default function Drop({data}) {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white  ">
          <div className='flex items-center'>
          <img className=" h-10 rounded-full" src={user} />
        </div>
            
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 z-50 flex flex-col bg-white w-56 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black/5 focus:outline-none">
          {data.map((item) => (
              <a
                className=" text-sm font-medium border p-1.5 bg-hite border-transparent hover:border-[#051650] rounded-md hover:scale-105 transform transition duration-300 ease-in-out"
                href={item.id}
                key={item.id}
              >
                {item.item}
              </a>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

