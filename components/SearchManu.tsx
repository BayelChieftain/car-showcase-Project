'use client'

import Image from 'next/image';

import { Combobox, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants';
import { SearchManuProps } from "@/types";
import { Fragment, useState } from 'react';


export default function SearchManu({ manuF, setManu }: SearchManuProps) {
    const [query, setQuery] = useState('');

    const filteredManu = 
    query === "" 
    ? manufacturers 
    : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

    return (
        <div className='search-manufacturer'>
            <Combobox value={manuF} onChange={ setManu }>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image 
                         src='/car-logo.svg'
                         width={20}
                         height={20}
                         className="ml-4"
                         alt="car logo"
                         />
                    </Combobox.Button>

                    <Combobox.Input 
                    className="search-manufacturer__input"
                    placeholder='Volkswagen'
                    displayValue={(manu: string) => manu}
                    onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                    as={Fragment}
                    leave='transition ease-in duraction-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filteredManu.map((item) => (
                                    <Combobox.Option
                                    key={item}
                                    className={({active}) => `
                                    relative search-manufacturer__option
                                    ${active ? 'bg-primary-blue text-white' 
                                        : 'text-gray-900'}`}
                                        value={item}
                                    > 
                                        {({ selected, active}) => (
                                            <>
                                            <span
                                              className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                              }`}
                                            >
                                              {item}
                                            </span>
                                            {selected ? (
                                              <span
                                                className={
                                                `absolute inset-y-0 
                                                left-0 flex items-center pl-3 ${
                                                active 
                                                ? 'text-white' 
                                                : 'text-teal-600'
                                                }`}
                                              >
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>

    )
}