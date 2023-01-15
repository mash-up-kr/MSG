import { useRouter } from 'next/router';
import { useEffect, forwardRef } from 'react';
import type { ChangeEventHandler, FormEventHandler, MutableRefObject } from 'react';
import { z } from 'zod';

import { REGISTRATION_ROUTES } from '@/constants/route';
import * as Styled from './NameForm.styled';

const schema = z.object({
  name: z.string().min(1).max(6),
});

interface NameFormProps {
  onChangeForm: (validity: boolean) => void;
}

const NameForm = forwardRef<HTMLFormElement, NameFormProps>(({ onChangeForm }, ref) => {
  const router = useRouter();

  useEffect(() => {
    if (!ref) return;

    const formInstance = (ref as MutableRefObject<HTMLFormElement>).current;

    const formData = new FormData(formInstance);
    const data = Object.fromEntries(formData.entries());

    const result = schema.safeParse(data);

    onChangeForm(result.success);
  }, [ref, onChangeForm]);

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = schema.safeParse(data);

    if (result.success) {
      router.push({ pathname: REGISTRATION_ROUTES.platform, query: { name: result.data.name } });
    }
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const [currentValueLength, maxValueLength] = [
      event.currentTarget.value.length,
      event.currentTarget.maxLength,
    ];
    if (maxValueLength < currentValueLength) {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.value = event.currentTarget.value.slice(0, maxValueLength);
    }
  };

  const handleChangeForm: FormEventHandler<HTMLFormElement> = (event) => {
    const validity = event.currentTarget.checkValidity();
    onChangeForm(validity);
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmitForm} onChange={handleChangeForm} ref={ref}>
        <Styled.Label htmlFor="name">이름(닉네임)을{'\n'}알려주세요</Styled.Label>
        <Styled.Input
          type="text"
          id="name"
          name="name"
          placeholder="김매숑"
          autoFocus
          required
          minLength={1}
          maxLength={6}
          defaultValue={router.query.name}
          onChange={handleChangeInput}
        />
      </Styled.Form>
      <Styled.Note>최대 6글자 입력할 수 있어요</Styled.Note>
    </Styled.Container>
  );
});

NameForm.displayName = 'NameForm';

export default NameForm;
