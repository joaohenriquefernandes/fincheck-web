import { useSwiper } from 'swiper/react';

import { cn } from '../../../../../app/utils/cn';

interface ISliderOptionsProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function SliderOptions({ isActive, month, index }: ISliderOptionsProps) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5px] font-medium ',
        isActive && 'bg-white',
      )}
    >
      {month}
    </button>
  );
}
