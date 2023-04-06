import Header from '@/components/Header';
import heroImage from '@/assets/hero-image.jpg';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div
          className="flex flex-col justify-center h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${heroImage.src}')` }}
        >
          <h1 className="text-center text-dark-100">{/* Name here */}</h1>
        </div>
      </main>
    </>
  );
}
