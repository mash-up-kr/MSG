import SnowBg from '@/assets/svg/snow-bg.svg';
import MorningBg from '@/assets/svg/morning-bg.svg';
import NightBg from '@/assets/svg/night-bg.svg';
import RainBg from '@/assets/svgComponent/Rain.component';
import ChristmasBg from '@/assets/svgComponent/Christmas.component';
import NewYearBg from '@/assets/svgComponent/NewYear.component';
import SunsetBg from '@/assets/svgComponent/Sunset.component';
import FireWorkBg from '@/assets/svgComponent/FireWork.component';
import { Dispatch, SetStateAction } from 'react';
import { OptionItem, OptionList } from '@/components/generate';
import { PreviewBackgroundColor } from '../PreviewSection/PreviewSection.component';

const backgroundOptions = [
  {
    ImageComponent: NightBg,
    option: 'night',
  },
  {
    ImageComponent: SunsetBg,
    option: 'sunset',
  },
  {
    ImageComponent: MorningBg,
    option: 'morning',
  },
  {
    ImageComponent: SnowBg,
    option: 'snow',
  },
  {
    ImageComponent: RainBg,
    option: 'rain',
  },
  {
    ImageComponent: FireWorkBg,
    option: 'fireWork',
  },
  {
    ImageComponent: ChristmasBg,
    option: 'christmas',
  },
  {
    ImageComponent: NewYearBg,
    option: 'newYear',
  },
] as const;

interface BackgroundOptionsProps {
  currentBackground: PreviewBackgroundColor;
  setCurrentBackground: Dispatch<SetStateAction<PreviewBackgroundColor>>;
}

const BackgroundOptions = ({ currentBackground, setCurrentBackground }: BackgroundOptionsProps) => {
  const handleChangeCurrentBackground = (background: PreviewBackgroundColor) => {
    if (background === currentBackground) {
      setCurrentBackground('black50');
      return;
    }

    setCurrentBackground(background);
  };
  return (
    <OptionList>
      {backgroundOptions.map(({ ImageComponent, option }) => (
        <OptionItem
          key={option}
          onClick={() => handleChangeCurrentBackground(option)}
          isSelected={currentBackground === option}
        >
          <ImageComponent />
        </OptionItem>
      ))}
    </OptionList>
  );
};

export default BackgroundOptions;
