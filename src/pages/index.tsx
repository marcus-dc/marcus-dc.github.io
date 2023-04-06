import Header from '@/components/Header';
import heroImage from '@/assets/hero-image.jpg';
import Image from 'next/image';

const NAME = 'Kimi no na wa'; // TODO: replace with real name

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="relative flex flex-col justify-center h-full -z-10">
          <Image
            src={heroImage}
            alt={NAME}
            className="absolute top-0 left-0 object-cover w-full h-full opacity-60"
          ></Image>
          <h1 className="text-center">{NAME}</h1>
        </div>
      </main>
    </>
  );
}
