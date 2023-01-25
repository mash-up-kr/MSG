import { useRouter } from 'next/router';
import { useEffect, forwardRef, useState, useRef } from 'react';
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
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (router.isReady) {
      setName(router.query.name as string);
    }
  }, [router]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    const [currentValueLength, maxValueLength, currentValue] = [
      event.currentTarget.value.length,
      event.currentTarget.maxLength,
      event.currentTarget.value,
    ];
    if (maxValueLength < currentValueLength) {
      setName(currentValue.slice(0, maxValueLength));
    } else {
      setName(currentValue);
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
          autoComplete="off"
          required
          minLength={1}
          maxLength={6}
          value={name}
          onChange={handleChangeInput}
          ref={inputRef}
        />
      </Styled.Form>
      <Styled.Note>최대 6글자 입력할 수 있어요</Styled.Note>
    </Styled.Container>
  );
});

NameForm.displayName = 'NameForm';

export default NameForm;
