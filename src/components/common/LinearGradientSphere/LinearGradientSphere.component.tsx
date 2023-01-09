import { Platform } from '@/constants/platform';
import * as Styled from './LinearGradientSphere.styled';

interface LinearGradientSphereProps {
  platform?: Platform;
}

const LinearGradientSphere = ({ platform }: LinearGradientSphereProps) => {
  return (
    <Styled.SphereContainer>
      <Styled.BackLight platform={platform} />
      <Styled.Sphere platform={platform} />
    </Styled.SphereContainer>
  );
};

export default LinearGradientSphere;
