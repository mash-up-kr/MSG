import * as Styled from './EventSection.styled';

const EventSection = () => {
  return (
    <Styled.EventSection>
      <Styled.Heading>
        공유 이벤트 진행 중!
        <Styled.SparkleLeft />
        <Styled.SparkleRight />
      </Styled.Heading>
      <Styled.Event>
        <Styled.SubHeading>진행 기간</Styled.SubHeading>
        <Styled.Paragraph>2024. 02. 19 (월) 까지</Styled.Paragraph>
      </Styled.Event>
      <Styled.Event>
        <Styled.SubHeading>미션 3개</Styled.SubHeading>
        <Styled.Paragraph>
          1. 인스타 계정{' '}
          <Styled.ExternalLink
            href="https://www.instagram.com/official_mashup_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @official_mashup_
          </Styled.ExternalLink>{' '}
          팔로우하기
        </Styled.Paragraph>
        <Styled.Paragraph>
          2. 인스타 스토리로{' '}
          <Styled.ExternalLink
            href="https://www.instagram.com/official_mashup_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @official_mashup_
          </Styled.ExternalLink>{' '}
          계정 태그하고 매숑이 카드 공유하기{'\n'}(전체공개 계정만 저희가 볼 수 있어요ㅠㅠ)
        </Styled.Paragraph>
        <Styled.Paragraph>
          3.{' '}
          <Styled.ExternalLink
            href="https://www.instagram.com/official_mashup_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @official_mashup_
          </Styled.ExternalLink>{' '}
          의 이벤트 피드에 댓글로 &apos;참여완료&apos;와 응원의 메시지 남기기
        </Styled.Paragraph>
      </Styled.Event>
      <Styled.Event>
        <Styled.SubHeading>선물</Styled.SubHeading>
        <Styled.Paragraph>
          추첨을 통해 3명에게 <Styled.Highlight>네이버페이 5,000원</Styled.Highlight> 증정
        </Styled.Paragraph>
      </Styled.Event>
    </Styled.EventSection>
  );
};

export default EventSection;
