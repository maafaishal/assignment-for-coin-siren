import Image from 'next/image';

import { cx } from '@/utils/cx';

type Props = {
  className?: string;
};

export function CardProfile(props: Props) {
  return (
    <div
      className={cx(
        `min-w-[234px] h-full bg-white rounded-xl px-4 py-9 md:px-9 text-center drop-shadow-lg flex flex-col md:gap-9`,
        props.className,
      )}>
      <div>
        <div className="relative mx-auto flex w-16 md:w-[120px] mb-4">
          <div className="relative h-16 w-16 md:h-[120px] md:w-[120px]">
            <Image className="w-full h-full top-0 left-0 object-cover" src="/imgs/card-ava.png" alt="avatar" fill />
          </div>
          <div className="absolute bottom-0 right-0 md:bottom-[3px] md:right-[7px] z-10 w-[25px] h-[18px]">
            <Image className="w-full h-full top-0 left-0 object-cover" src="/imgs/card-flag.svg" alt="avatar" fill />
          </div>
        </div>
        <p className="text-black md:text-2xl animate-fadeIn">Abhishek Gupta</p>
        <p className="text-blueberry animate-fadeIn">마케팅 · 2y+</p>
      </div>
      <div className="flex flex-wrap justify-center text-black-coral gap-1 animate-fadeIn">
        <div className="px-3 py-1 text-sm border border-blue-gray-40 rounded-md">마케팅 콘텐츠 제작</div>
        <div className="px-3 py-1 text-sm border border-blue-gray-40 rounded-md">인스타그램 관리</div>
        <div className="px-3 py-1 text-sm border border-blue-gray-40 rounded-md">트위터 관리</div>
        <div className="px-3 py-1 text-sm border border-blue-gray-40 rounded-md">블로그 글 작성</div>
      </div>
    </div>
  );
}
