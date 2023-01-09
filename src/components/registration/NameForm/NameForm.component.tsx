import { useRouter } from 'next/router';
import { useEffect, forwardRef } from 'react';
import type { ChangeEventHandler, FormEventHandler, MutableRefObject } from 'react';
import { z } from 'zod';

import { REGISTRATION_ROUTES } from '@/constants/route';
import * as Styled from './NameForm.styled';

const schema = z.object({
  name: z.string().min(2).max(6),
});

interface NameFormProps {
  onFormChange: (validity: boolean) => void;
}

const NameForm = forwardRef<HTMLFormElement, NameFormProps>(({ onFormChange }, ref) => {
  const router = useRouter();

  useEffect(() => {
    if (!ref) return;

    const formInstance = (ref as MutableRefObject<HTMLFormElement>).current;

    const formData = new FormData(formInstance);
    const data = Object.fromEntries(formData.entries());

    const result = schema.safeParse(data);

    onFormChange(result.success);
  }, [ref, onFormChange]);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = schema.safeParse(data);

    if (result.success) {
      router.push({ pathname: REGISTRATION_ROUTES.platform, query: { name: result.data.name } });
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const [currentValueLength, maxValueLength] = [
      event.currentTarget.value.length,
      event.currentTarget.maxLength,
    ];
    if (maxValueLength < currentValueLength) {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.value = event.currentTarget.value.slice(0, maxValueLength);
    }
  };

  const handleFormChange: FormEventHandler<HTMLFormElement> = (event) => {
    const validity = event.currentTarget.checkValidity();
    onFormChange(validity);
  };

  return (
    <Styled.Form onSubmit={handleFormSubmit} onChange={handleFormChange} ref={ref}>
      <Styled.Label htmlFor="name">이름(닉네임)을{'\n'}알려주세요</Styled.Label>
      <Styled.Input
        type="text"
        id="name"
        name="name"
        placeholder="김매숑"
        autoFocus
        required
        minLength={2}
        maxLength={6}
        defaultValue={router.query.name}
        onChange={handleInputChange}
      />
    </Styled.Form>
  );
});

NameForm.displayName = 'NameForm';

export default NameForm;
