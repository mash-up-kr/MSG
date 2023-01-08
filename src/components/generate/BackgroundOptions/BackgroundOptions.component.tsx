import SnowBg from '@/assets/svg/snow-bg.svg';
import MorningBg from '@/assets/svg/morning-bg.svg';
import NightBg from '@/assets/svg/night-bg.svg';
import SunsetBg from '@/assets/svgComponent/Sunset.component';
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
] as const;

interface BackgroundOptionsProps {
  currentBackground: PreviewBackgroundColor;
  setCurrentBackground: Dispatch<SetStateAction<PreviewBackgroundColor>>;
}

const BackgroundOptions = ({ currentBackground, setCurrentBackground }: BackgroundOptionsProps) => {
  const handleChangeCurrentBackground = (background: PreviewBackgroundColor) => {
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
