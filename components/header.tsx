import Image from 'next/image';

export function Header() {
  return (
    <header className="h-[60px] px-4 flex items-center absolute top-0 z-10">
      <Image src="/imgs/__덉씠__1-white.svg" alt="logo" width={114} height={21} />
    </header>
  );
}
