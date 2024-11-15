import Image from 'next/image';

import { CardProfile } from './card-profile';

export function Main() {
  return (
    <main className="w-full bg-gradient-to-br from-[#26C2B9] to-[#288BE7] pt-15 pb-28 px-4 relative max-w-[1828px] text-white md:mb-4 overflow-x-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto pt-9 md:pt-[100px]">
        <div className="grid md:grid-cols-2 md:gap-3">
          <div className="mb-9">
            <div className="relative mb-6">
              <div className="w-[150px] h-12 px-3 py-1.5 bg-light-sky-blue md:bg-white md:text-turquoise rounded-lg text-lg font-black  flex justify-center items-center">
                풀타임, 파트타임
              </div>
              <div
                className="absolute w-0 h-0 border-l-[5px] border-l-transparent border-t-[8px] border-t-light-sky-blue md:border-t-white border-r-[5px] border-r-transparent -bottom-2 left-[10px]"
                aria-hidden="true"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 md:leading-tight">
              최고의 실력을 가진 <br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <p className="opacity-80 font-black text-lg md:text-2xl">
              법률 및 인사관리 부담없이 1주일 이내에 원격
              <br />
              으로 채용해보세요.
            </p>
            <p className="hidden md:block mt-6 text-lg underline">개발자가 필요하신가요?</p>
            <div className="hidden md:grid grid-cols-3 mt-15 gap-12">
              <div>
                <div className="border-t border-t-white w-[129px]" />
                <p className="mt-2">평균 월 120만원</p>
                <p className="mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div>
                <div className="border-t border-t-white w-[129px]" />
                <p className="mt-2">최대 3회 인력교체</p>
                <p className="mt-2">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div>
                <div className="border-t border-t-white w-[129px]" />
                <p className="mt-2">평균 3일, 최대 10일</p>
                <p className="mt-2">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mb-6 flex justify-center">
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
                <CardProfile className="max-w-[234px] md:max-w-[292px] h-[287px] md:h-[366px] md:gap-4 absolute top-0 bottom-0 left-0 bg-azure my-auto" />
                <CardProfile className="max-w-[234px] md:max-w-[292px] h-[287px] md:h-[366px] md:gap-4 absolute top-0 bottom-0 right-0 bg-azure my-auto" />
                <CardProfile className="max-w-[234px] md:max-w-[292px] h-[311px] md:h-[408px] z-10" />
              </div>
              <div className="md:ml-[23px]">
                <Image className="" src="/imgs/caret-right.svg" alt="avatar" height={24} width={24} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:hidden"></div>
          <div className="hidden md:flex gap-2.5 overflow-x-scroll -mr-[100vw] mt-15">
            <div className="bg-white bg-opacity-20 p-4 flex items-center rounded-xl min-w-[332px]">
              <Image className="" src="/imgs/main-slider-1.svg" alt="slider" height={56} width={56} />
              <p className="ml-6">해외 마케팅</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 flex items-center rounded-xl min-w-[332px]">
              <Image className="" src="/imgs/main-slider-2.svg" alt="slider" height={56} width={56} />
              <p className="ml-6">퍼블리셔</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 flex items-center rounded-xl min-w-[332px]">
              <Image className="" src="/imgs/main-slider-3.svg" alt="slider" height={56} width={56} />
              <p className="ml-6">캐드원(제도사)</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 flex items-center rounded-xl min-w-[332px]">
              <Image className="" src="/imgs/main-slider-4.svg" alt="slider" height={56} width={56} />
              <p className="ml-6">해외 세일즈</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 flex items-center rounded-xl min-w-[332px]">
              <Image className="" src="/imgs/main-slider-5.svg" alt="slider" height={56} width={56} />
              <p className="ml-6">해외 CS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-section mix-blend-color-burn w-full h-full absolute opacity-80 top-0 left-0 bg-bottom md:bg-right" />
    </main>
  );
}
