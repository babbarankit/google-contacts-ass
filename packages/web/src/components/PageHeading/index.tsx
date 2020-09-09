import styled from 'styled-components';

export interface PageHeadingProps {
  title: string;
  subTitle: string;
}

const Title = styled.h1`
  font-weight: 600;
  font-size: 26px;
  line-height: 1.3;
  color: #053ed1;
`;

const SubTitle = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #053ed1;
`;

const HeadingWrapper = styled.div`
  text-align: center;
  @media screen and (min-width: 450px) {
    margin-left: 180px;
  }
`;

const PageHeading: React.SFC<PageHeadingProps> = ({ title, subTitle }) => (
  <HeadingWrapper>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </div>
  </HeadingWrapper>
);

export default PageHeading;
