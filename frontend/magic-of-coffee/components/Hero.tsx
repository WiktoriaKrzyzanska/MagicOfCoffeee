import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl';
interface HeroProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageSrc }) => {
  const t = useTranslations();  
  return (
   <>
   <div className="bg-white">
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-300 to-amber-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
      </div>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 flex flex-wrap items-center justify-between">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <a href="#" className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">{t('buy')}</a>
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <Image src={imageSrc} alt="Coffee Beans" width={500} height={300} />
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-300 to-amber-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
      </div>
    </div>
  </div>
   </>
  );
};

export default Hero;
