import { KeyOf } from '@/types/helper';
import { Dispatch, RefObject, SetStateAction } from 'react';
import BackgroundOptions from '../BackgroundOptions/BackgroundOptions.component';
import { PreviewBackgroundColor, PreviewSnack } from '../PreviewSection/PreviewSection.component';
import SnackOptions from '../SnackOptions/SnackOptions.component';
import TalkMySelfControl from '../TalkMySelfControl/TalkMySelfControl.component';

export const CONTROL_CATEGORIES = {
  background: '배경',
  snack: '소품',
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
  talkMySelfRef: RefObject<HTMLInputElement>;
}

const CategoryOption = ({
  currentCategory,
  currentBackground,
  currentSnack,
  isVisibleTalkMySelf,
  setCurrentBackground,
  setCurrentSnack,
  setIsVisibleTalkMySelf,
  talkMySelfRef,
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
          talkMySelfRef={talkMySelfRef}
        />
      );
  }
};

export default CategoryOption;
