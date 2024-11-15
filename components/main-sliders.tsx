'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import type { MainData } from '@/data/main';

type Props = {
  sliders: MainData['sliders'];
};

export function MainSliders(props: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const intervalVar = setInterval(() => {
      setActiveIdx((prev) => {
        if (props.sliders.length !== prev + 1) {
          return prev + 1;
        }

        return 0;
      });
    }, 5000);

    return () => {
      clearInterval(intervalVar);
    };
  }, [props.sliders]);

  return (
    <div
      className="hidden md:flex gap-2.5 overflow-x-scroll -mr-[100vw] mt-15 animate-fadeIn duration-500 transition-transform"
      style={{
        transform: `translateX(-${activeIdx * 342}px)`,
      }}>
      {props.sliders.map((slider, idx) => {
        return (
          <div key={idx} className="bg-white bg-opacity-20 p-4 flex items-center rounded-xl w-[332px]">
            <Image src={slider.image} alt="slider" height={56} width={56} />
            <p className="ml-6">{slider.title}</p>
          </div>
        );
      })}
    </div>
  );
}
