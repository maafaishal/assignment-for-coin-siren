import Image from 'next/image';

import type { DATA } from '@/app/api/footer/route';

import { cx } from '@/utils/cx';

export async function Footer() {
  const data = await fetch('http://localhost:3000/api/footer');
  const footerData: typeof DATA = await data.json();

  const { shortcuts, phoneNumber, email, tagLine, firstSectionInfo, secondSectionInfo } = footerData;

  return (
    <footer className="max-w-[1822px] w-full min-h-[505px] bg-[#FBFBFB] self-end px-4 pt-16 pb-15 text-black-coral">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-[46px_98px]">
          <div className="mb-4.5 lg:mb-0">
            <Image src="/imgs/__덉씠__1.svg" alt="logo" width={187} height={34} className="mb-4" />
            <p className="text-sm mb-4.5 text-blue-gray-80 whitespace-pre-wrap">{tagLine}</p>
            <p className="text-xsm mb-2">{phoneNumber}</p>
            <p className="text-xsm">{email}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-15 lg:mb-0">
            {shortcuts.map((about, idx) => {
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
            {firstSectionInfo.map((info, idx) => {
              return (
                <div key={idx}>
                  <h4 className="text-xs mb-2.5 text-blue-gray-80">{info.label}</h4>
                  {info.content.map((content, contentIdx) => {
                    return (
                      <p
                        key={contentIdx}
                        className={cx('text-xsm', { 'mb-1.5': contentIdx !== info.content.length - 1 })}>
                        {content}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="grid gap-9 lg:flex lg:gap-10">
            {secondSectionInfo.map((info, idx) => {
              return (
                <div key={idx}>
                  <h4 className="text-xs mb-2.5 text-blue-gray-80">{info.label}</h4>
                  {info.content.map((content, contentIdx) => {
                    return (
                      <p
                        key={contentIdx}
                        className={cx('text-xsm', 'whitespace-pre-wrap', {
                          'mb-1.5': contentIdx !== info.content.length - 1,
                        })}>
                        {content}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-xsm mt-9 lg:mt-12">ⓒ 2023 Hyperhire</p>
      </div>
    </footer>
  );
}
