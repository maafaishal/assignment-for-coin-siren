import Image from 'next/image';

export function Header() {
  return (
    <header className="h-[60px] flex items-center absolute top-0 right-0 left-0 z-10 max-w-[1232px] mx-auto">
      <div className="px-4">
        <Image src="/imgs/__덉씠__1-white.svg" alt="logo" width={114} height={21} />
      </div>
    </header>
  );
}
