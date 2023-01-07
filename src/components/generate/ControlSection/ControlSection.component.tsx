import { Button } from '@/components/common';

import { Dispatch, SetStateAction, useState } from 'react';
import { backgroundOptions, controlCategories, ControlCategory } from '@/constants/mashong';
import * as Styled from './ControlSection.styled';
import { PreviewBackgroundColor } from '../PreviewSection/PreviewSection.styled';

interface ControlSectionProps {
  setCurrentBackground: Dispatch<SetStateAction<PreviewBackgroundColor>>;
}

const ControlSection = ({ setCurrentBackground }: ControlSectionProps) => {
  const [currentCategory, setCurrentCategory] = useState<ControlCategory>('배경');

  const handleSetCurrentBackground = (background: PreviewBackgroundColor) => {
    setCurrentBackground(background);
  };

  const handleChangeCategory = (SelectedCategory: ControlCategory) => {
    setCurrentCategory(SelectedCategory);
  };
  return (
    <Styled.ControlSection>
      <Styled.Categories>
        {controlCategories.map((category) => (
          <Button
            size="s"
            isSelected={currentCategory === category}
            onClick={() => handleChangeCategory(category)}
            key={category}
          >
            {category}
          </Button>
        ))}
      </Styled.Categories>
      <Styled.OptionList>
        {backgroundOptions.map(({ ImageComponent, option }) => (
          <Styled.OptionItem key={option} onClick={() => handleSetCurrentBackground(option)}>
            <ImageComponent />
          </Styled.OptionItem>
        ))}
      </Styled.OptionList>
    </Styled.ControlSection>
  );
};

export default ControlSection;
