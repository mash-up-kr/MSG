import Bubble from '@/assets/svg/bubble.svg';
import { OptionItem, OptionList } from '@/components/generate';
import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

interface TalkMySelfControlProps {
  isVisibleTalkMySelf: boolean;
  setIsVisibleTalkMySelf: Dispatch<SetStateAction<boolean>>;
  talkMySelfRef: RefObject<HTMLInputElement>;
}

const TalkMySelfControl = ({
  isVisibleTalkMySelf,
  setIsVisibleTalkMySelf,
  talkMySelfRef,
}: TalkMySelfControlProps) => {
  useEffect(() => {
    if (isVisibleTalkMySelf) {
      talkMySelfRef.current?.focus();
    }
  }, [isVisibleTalkMySelf, talkMySelfRef]);

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
