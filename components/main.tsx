import Image from 'next/image';

import { serverOrigin } from '@/utils/serverOrigin';
import type { MainData } from '@/data/main';

import { CardProfile } from './card-profile';
import { MainSliders } from './main-sliders';

export async function Main() {
  const origin = serverOrigin();
  const data = await fetch(`${origin}/api/main`);
  const mainData: MainData = await data.json();

  const { sliders } = mainData;

  return (
    <main className="w-full bg-gradient-to-br from-[#26C2B9] to-[#288BE7] pt-15 pb-15 md:pb-28 px-4 relative max-w-[1828px] text-white md:mb-4 overflow-x-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto pt-9 md:pt-[100px]">
        <div className="grid md:grid-cols-2 md:gap-3">
          <div className="mb-9">
            <div className="relative mb-6 opacity-0 animate-fadeIn animation-delay-300">
              <div className="w-[150px] h-12 px-3 py-1.5 bg-light-sky-blue md:bg-white md:text-turquoise rounded-lg text-lg font-black  flex justify-center items-center">
                풀타임, 파트타임
              </div>
              <div
                className="absolute w-0 h-0 border-l-[5px] border-l-transparent border-t-[8px] border-t-light-sky-blue md:border-t-white border-r-[5px] border-r-transparent -bottom-2 left-[10px]"
                aria-hidden="true"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 md:leading-tight animate-fadeInUp">
              최고의 실력을 가진 <br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <p className="opacity-80 font-black text-lg md:text-2xl animate-fadeInUp">
              법률 및 인사관리 부담없이 <br className="hidden md:block" />
              1주일 이내에 원격
              <br className="md:hidden" />
              으로 채용해보세요.
            </p>
            <p className="hidden md:block mt-6 text-lg underline">개발자가 필요하신가요?</p>
            <div className="hidden md:grid grid-cols-3 mt-15 gap-12 animate-fadeIn">
              <div>
                <div className="border-t border-t-white w-[129px]" />
                <p className="mt-2 text-lg">평균 월 120만원</p>
                <p className="mt-2 opacity-80">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div>
                <div className="border-t border-t-white w-[129px]" />
                <p className="mt-2 text-lg">최대 3회 인력교체</p>
                <p className="mt-2 opacity-80">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div>
                <div className="border-t border-t-white w-[129px]" />
                <p className="mt-2 text-lg">평균 3일, 최대 10일</p>
                <p className="mt-2 opacity-80">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mb-6 flex justify-center animate-fadeIn">
              <div className="h-12 px-4 py-2 bg-off-green text-trabuddy-alternative rounded-lg text-lg font-black flex justify-center items-center">
                <Image src="/imgs/dollar-round.svg" alt="icon" height={26} width={26} className="mr-2.5" />월 100만원
              </div>
              <div
                className="absolute w-0 h-0 border-l-[5px] border-l-transparent border-t-[8px] border-t-off-green border-r-[5px] border-r-transparent -bottom-2 left-0 right-0 mx-auto"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-center -mx-4 mb-6">
              <div className="md:mr-[23px]">
                <Image className="rotate-180" src="/imgs/caret-right.svg" alt="avatar" height={24} width={24} />
              </div>
              <div className="flex-grow relative flex items-center justify-center">
                <CardProfile className="max-w-[234px] md:max-w-[292px] h-[287px] md:h-[366px] gap-0 md:gap-4 absolute top-0 bottom-0 left-0 bg-azure my-auto" />
                <CardProfile className="max-w-[234px] md:max-w-[292px] h-[287px] md:h-[366px] gap-0 md:gap-4 absolute top-0 bottom-0 right-0 bg-azure my-auto" />
                <CardProfile className="max-w-[234px] md:max-w-[292px] h-[311px] md:h-[408px] z-10" />
              </div>
              <div className="md:ml-[23px]">
                <Image className="" src="/imgs/caret-right.svg" alt="avatar" height={24} width={24} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[109px_auto] gap-2 md:hidden mt-6">
            <div className="flex items-center">
              <Image className="" src="/imgs/checkbox.svg" alt="check" height={20} width={20} />
              <p className="ml-3">한국어 능력</p>
            </div>
            <div className="flex items-center">
              <Image className="" src="/imgs/checkbox.svg" alt="check" height={20} width={20} />
              <p className="ml-3">업무 수행 능력</p>
            </div>
            <div className="flex items-center">
              <Image className="" src="/imgs/checkbox.svg" alt="check" height={20} width={20} />
              <p className="ml-3">겸업 여부</p>
            </div>
            <div className="flex items-center">
              <Image className="" src="/imgs/checkbox.svg" alt="check" height={20} width={20} />
              <p className="ml-3">평판 조회</p>
            </div>
          </div>
          <p className="md:hidden text-yellow-sun mt-4 underline">개발자가 필요하신가요?</p>
        </div>
        <MainSliders sliders={sliders} />
      </div>
      <div className="bg-main-section mix-blend-color-burn w-full h-full absolute opacity-80 top-0 left-0 bg-bottom md:bg-right" />
    </main>
  );
}
