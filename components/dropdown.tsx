'use client';

import Image from 'next/image';

import { useEffect, useState, useRef } from 'react';

type Props = {
  buttonText: string;
  menus: string[];
};

export function Dropdown(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button ref={buttonRef} onClick={toggleDropdown} className="inline-flex justify-center items-center w-full gap-2">
        {props.buttonText}
        <Image className="rotate-90" src="/imgs/caret-right.svg" alt="logo" width={16} height={16} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div ref={dropDownRef} className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <p className="block px-4 py-2.5 text-sm text-blue-gray-700 " role="menuitem">
              {props.buttonText}
            </p>
            {props.menus.map((menu, idx) => {
              if (menu === 'divider') {
                return <div key={idx} className="border-t" />;
              }

              return (
                <a key={idx} href="#" className="block px-4 py-2 text-sm text-gray-700 font-normal" role="menuitem">
                  {menu}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
