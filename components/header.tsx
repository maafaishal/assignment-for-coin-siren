import Image from 'next/image';

import { Dropdown } from './dropdown';

export function Header() {
  return (
    <header className=" absolute top-0 right-0 left-0 z-20 max-w-[1232px] mx-auto">
      <div className="h-[60px] px-4 flex items-center justify-between">
        <Image src="/imgs/__덉씠__1-white.svg" alt="logo" width={114} height={21} />
        <Image className="md:hidden" src="/imgs/burger-menu.svg" alt="menu" width={24} height={24} />
        <div className="text-white items-center gap-[60px] hidden md:flex">
          <div>
            <Dropdown
              buttonText="채용"
              menus={['해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', 'divider', '한국어 가능 외국인 채용']}
            />
          </div>
          <p>해외 개발자 활용 서비스</p>
        </div>
        <button className="bg-white rounded-lg py-1.5 px-6 text-blueberry hidden md:block">문의하기</button>
      </div>
    </header>
  );
}
