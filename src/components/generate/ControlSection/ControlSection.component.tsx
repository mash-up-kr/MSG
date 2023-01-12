import { Button } from '@/components/common';
import { Dispatch, RefObject, SetStateAction, useState } from 'react';
import * as Styled from './ControlSection.styled';
import type {
  PreviewBackgroundColor,
  PreviewSnack,
} from '../PreviewSection/PreviewSection.component';
import CategoryOption, {
  ControlCategory,
  CONTROL_CATEGORIES,
} from '../CategoryOption/CategoryOption.component';

const categories: ControlCategory[] = ['background', 'snack', 'talkMySelf'];
interface ControlSectionProps {
  currentBackground: PreviewBackgroundColor;
  currentSnack: PreviewSnack;
  isVisibleTalkMySelf: boolean;
  setCurrentBackground: Dispatch<SetStateAction<PreviewBackgroundColor>>;
  setCurrentSnack: Dispatch<SetStateAction<PreviewSnack>>;
  setIsVisibleTalkMySelf: Dispatch<SetStateAction<boolean>>;
  talkMySelfRef: RefObject<HTMLInputElement>;
}

const ControlSection = ({
  currentBackground,
  currentSnack,
  isVisibleTalkMySelf,
  setCurrentBackground,
  setCurrentSnack,
  setIsVisibleTalkMySelf,
  talkMySelfRef,
}: ControlSectionProps) => {
  const [currentCategory, setCurrentCategory] = useState<ControlCategory>('background');

  const handleChangeCategory = (SelectedCategory: ControlCategory) => {
    setCurrentCategory(SelectedCategory);
  };

  return (
    <Styled.ControlSection>
      <Styled.Categories>
        {categories.map((category) => (
          <Button
            size="s"
            isSelected={currentCategory === category}
            onClick={() => handleChangeCategory(category)}
            key={category}
          >
            {CONTROL_CATEGORIES[category]}
          </Button>
        ))}
      </Styled.Categories>
      <CategoryOption
        currentCategory={currentCategory}
        currentBackground={currentBackground}
        currentSnack={currentSnack}
        isVisibleTalkMySelf={isVisibleTalkMySelf}
        setCurrentBackground={setCurrentBackground}
        setCurrentSnack={setCurrentSnack}
        setIsVisibleTalkMySelf={setIsVisibleTalkMySelf}
        talkMySelfRef={talkMySelfRef}
      />
    </Styled.ControlSection>
  );
};

export default ControlSection;
