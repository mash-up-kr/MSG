import toast from 'react-hot-toast';
import SuccessBadge from '@/assets/svg/success-badge.svg';
import ErrorBadge from '@/assets/svg/error-badge.svg';
import SuccessClose from '@/assets/svg/success-close.svg';
import ErrorClose from '@/assets/svg/error-close.svg';
import * as Styled from './Toast.styled';

export type Status = 'success' | 'error';

interface ToastProps {
  id: string;
  status: Status;
  content: string;
}

const Toast = ({ id, status, content }: ToastProps) => {
  return (
    <Styled.Toast status={status}>
      <Styled.Contents>
        <Styled.Badge>{status === 'success' ? <SuccessBadge /> : <ErrorBadge />}</Styled.Badge>
        <Styled.Text>{content}</Styled.Text>
      </Styled.Contents>
      <Styled.CloseButton
        onClick={() => {
          toast.remove(id);
        }}
      >
        {status === 'success' ? <SuccessClose /> : <ErrorClose />}
      </Styled.CloseButton>
    </Styled.Toast>
  );
};

export default Toast;
