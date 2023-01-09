import { KeyOf } from '@/types/helper';
import { Dispatch, SetStateAction } from 'react';
import BackgroundOptions from '../BackgroundOptions/BackgroundOptions.component';
import { PreviewBackgroundColor, PreviewSnack } from '../PreviewSection/PreviewSection.component';
import SnackOptions from '../SnackOptions/SnackOptions.component';
import TalkMySelfControl from '../TalkMySelfControl/TalkMySelfControl.component';

export const CONTROL_CATEGORIES = {
  background: '배경',
  snack: '간식',
  talkMySelf: '혼잣말',
} as const;

export type ControlCategory = KeyOf<typeof CONTROL_CATEGORIES>;

interface CategoryOptionProps {
  currentCategory: ControlCategory;
  currentBackground: PreviewBackgroundColor;
  currentSnack: PreviewSnack;
  isVisibleTalkMySelf: boolean;
  setCurrentBackground: Dispatch<SetStateAction<PreviewBackgroundColor>>;
  setCurrentSnack: Dispatch<SetStateAction<PreviewSnack>>;
  setIsVisibleTalkMySelf: Dispatch<SetStateAction<boolean>>;
}

const CategoryOption = ({
  currentCategory,
  currentBackground,
  currentSnack,
  isVisibleTalkMySelf,
  setCurrentBackground,
  setCurrentSnack,
  setIsVisibleTalkMySelf,
}: CategoryOptionProps) => {
  switch (currentCategory) {
    case 'background':
      return (
        <BackgroundOptions
          currentBackground={currentBackground}
          setCurrentBackground={setCurrentBackground}
        />
      );
    case 'snack':
      return <SnackOptions currentSnack={currentSnack} setCurrentSnack={setCurrentSnack} />;
    default:
      return (
        <TalkMySelfControl
          isVisibleTalkMySelf={isVisibleTalkMySelf}
          setIsVisibleTalkMySelf={setIsVisibleTalkMySelf}
        />
      );
  }
};

export default CategoryOption;
