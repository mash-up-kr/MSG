import { Radio } from '@/components/registration';
import { useRouter } from 'next/router';
import { FormEventHandler, forwardRef } from 'react';
import { z } from 'zod';
import { Platform, PLATFORM_NAME_MAP } from '@/constants/platform';
import { GENERATE_ROUTES } from '@/constants/route';
import * as Styled from './PlatformForm.styled';

const schema = z.object({
  platform: z.string(),
});

interface PlatformFormProps {
  onFormChange: (validity: boolean) => void;
}

const PlatformForm = forwardRef<HTMLFormElement, PlatformFormProps>(({ onFormChange }, ref) => {
  const router = useRouter();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = schema.safeParse(data);

    if (result.success) {
      router.push({
        pathname: GENERATE_ROUTES[result.data.platform as Platform],
        query: { name: router.query.name },
      });
    }
  };

  return (
    <Styled.Form
      onSubmit={handleFormSubmit}
      ref={ref}
      onChange={(event) => {
        const validity = event.currentTarget.checkValidity();
        onFormChange(validity);
      }}
    >
      <Styled.FormLabel id="platform-selection-label">
        매숑이와 함께 들어가고 싶은
        <Styled.Emphasis>플랫폼을 골라주세요</Styled.Emphasis>
      </Styled.FormLabel>
      <Styled.RadioGroup role="radiogroup" aria-labelledby="platform-selection-label">
        {Object.entries(PLATFORM_NAME_MAP).map(([platformKey, platformName]) => {
          return (
            <Radio name="platform" id={platformKey} key={platformKey} value={platformKey}>
              {platformName}
            </Radio>
          );
        })}
      </Styled.RadioGroup>
    </Styled.Form>
  );
});

PlatformForm.displayName = 'PlatformForm';

export default PlatformForm;
