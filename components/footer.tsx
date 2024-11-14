import Image from 'next/image';

import { aboutUs } from '@/data/footer';

export function Footer() {
  return (
    <footer className="max-w-[1822px] w-full min-h-[505px] bg-[#FBFBFB] self-end px-4 pt-16 pb-15 text-black-coral">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-[46px]">
          <div className="mb-4.5 lg:mb-0">
            <Image src="/imgs/__덉씠__1.svg" alt="logo" width={187} height={34} className="mb-4" />
            <p className="text-sm mb-4.5 text-blue-gray-80">
              우리는 국가의 장벽을 넘어 최고의 인재를 매<br />
              칭해드립니다.
            </p>
            <p className="text-xsm mb-2">010-0000-0000</p>
            <p className="text-xsm">aaaaa@naver.com</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-15 lg:mb-0">
            {aboutUs.map((about, idx) => {
              return (
                <div key={idx} className="bg-white rounded-xl p-4 flex flex-col justify-between">
                  <div className="mb-4">
                    <Image className="mb-3" src={about.image} width={40} height={40} alt="box-icon" />
                    <p className="text-sm break-keep text-blue-gray-80">{about.text}</p>
                  </div>
                  <a href="#">
                    <div className="flex items-center">
                      <p className="text-sm">바로가기</p>
                      <Image className="ml-1" src="/imgs/arrow-right-square.svg" width={20} height={20} alt="icon" />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="flex mb-9 lg:mb-0 gap-2.5">
            <div>
              <h4 className="text-xs mb-2.5 text-blue-gray-80">상호명</h4>
              <p className="text-xsm mb-1.5">하이퍼하이어</p>
              <p className="text-xsm">Hyperhire India Private Limited</p>
            </div>
            <div>
              <h4 className="text-xs mb-2.5 text-blue-gray-80">대표 CEO</h4>
              <p className="text-xsm mb-1.5">김주현</p>
              <p className="text-xsm">Juhyun Kim</p>
            </div>
          </div>
          <div className="grid gap-9 lg:flex lg:gap-10">
            <div>
              <h4 className="text-xs mb-2.5 text-blue-gray-80">사업자등록번호 CIN</h4>
              <p className="text-xsm mb-1.5">427-86-01187</p>
              <p className="text-xsm">U74110DL2016PTC290812</p>
            </div>
            <div>
              <h4 className="text-xs mb-2.5 text-blue-gray-80">주소 ADDRESS</h4>
              <p className="text-xsm mb-1.5">서울특별시 강남대로 479, 지하 1층 238호</p>
              <p className="text-xsm">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br />
                110053 India
              </p>
            </div>
          </div>
        </div>
        <p className="text-xsm mt-9 lg:mt-12">ⓒ 2023 Hyperhire</p>
      </div>
    </footer>
  );
}
