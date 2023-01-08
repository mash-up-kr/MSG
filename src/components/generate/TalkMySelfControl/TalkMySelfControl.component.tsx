import Bubble from '@/assets/svg/bubble.svg';
import { OptionItem, OptionList } from '@/components/generate';
import { Dispatch, SetStateAction } from 'react';

interface TalkMySelfControlProps {
  isVisibleTalkMySelf: boolean;
  setIsVisibleTalkMySelf: Dispatch<SetStateAction<boolean>>;
}

const TalkMySelfControl = ({
  isVisibleTalkMySelf,
  setIsVisibleTalkMySelf,
}: TalkMySelfControlProps) => {
  const handleChangeCurrentTalkMySelf = () => {
    setIsVisibleTalkMySelf((prevVisibleState) => !prevVisibleState);
  };
  return (
    <OptionList>
      <OptionItem onClick={handleChangeCurrentTalkMySelf} isSelected={isVisibleTalkMySelf}>
        <Bubble />
      </OptionItem>
    </OptionList>
  );
};

export default TalkMySelfControl;
