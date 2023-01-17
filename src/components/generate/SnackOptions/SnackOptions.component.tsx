import Beer from '@/assets/svg/beer.svg';
import Coffee from '@/assets/svg/coffee.svg';
import Energy from '@/assets/svg/energy.svg';
import Wine from '@/assets/svg/wine.svg';
import { Dispatch, SetStateAction } from 'react';
import { OptionItem, OptionList } from '@/components/generate';
import { PreviewSnack } from '../PreviewSection/PreviewSection.component';

export const snackOptions = [
  {
    ImageComponent: Coffee,
    option: 'coffee',
  },
  {
    ImageComponent: Beer,
    option: 'beer',
  },
  {
    ImageComponent: Wine,
    option: 'wine',
  },
  {
    ImageComponent: Energy,
    option: 'energy',
  },
] as const;

interface SnackOptionsProps {
  currentSnack: PreviewSnack;
  setCurrentSnack: Dispatch<SetStateAction<PreviewSnack>>;
}

const SnackOptions = ({ currentSnack, setCurrentSnack }: SnackOptionsProps) => {
  const handleChangeCurrentBackground = (snack: PreviewSnack) => {
    if (snack === currentSnack) {
      setCurrentSnack(null);
      return;
    }

    setCurrentSnack(snack);
  };
  return (
    <OptionList>
      {snackOptions.map(({ ImageComponent, option }) => (
        <OptionItem
          key={option}
          onClick={() => handleChangeCurrentBackground(option)}
          isSelected={currentSnack === option}
        >
          <ImageComponent />
        </OptionItem>
      ))}
    </OptionList>
  );
};

export default SnackOptions;
