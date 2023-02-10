import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../../styles/stylesLayout';

export const NoticesInfoContainer = styled.div`
  /* width: 280px;
  height: 100%; */
  /* padding: 60px 20px 40px 20px; */

  ${media.tabletAndDesktop} {
    /* width: 540px; */
    /* padding: 32px 20px 32px 20px; */
  }
`;

export const NoticesBox = styled.div`
  margin-bottom: 28px;

  ${media.tabletAndDesktop} {
    display: flex;
  }
`;

export const NoticesCategory = styled.span`
  position: absolute;
  top: 80px;

  display: flex;
  align-items: center;

  width: 158px;
  height: 28px;
  padding: 6px 20px;

  border-radius: 0px 20px 20px 0px;

  background: ${colors.accent};
  backdrop-filter: blur(50px);

  /* background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px); */

  font-weight: ${fontWeights.bold};
  font-size: 12px;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    top: 52px;
    font-size: 16px;
  }
`;

export const NoticesImage = styled.img`
  display: block;

  width: 240px;
  height: 240px;

  border-radius: 0px 0px 40px 40px;
  box-shadow: 7px 4px 15px 0px ${colors.shadow};

  ${media.tabletAndDesktop} {
    width: 328px;
    height: 288px;
  }
`;

export const NoticesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${media.tabletAndDesktop} {
    margin-left: 20px;
  }
`;

export const NoticesTitle = styled.h2`
  font-weight: ${fontWeights.bold};
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;

  margin-bottom: 20px;
`;

export const NoticesTag = styled.h3`
  display: block;
  margin-right: 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const NoticesText = styled.p`
  display: flex;

  font-weight: ${fontWeights.medium};
  font-size: 14px;
  line-height: 19px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const NoticesComment = styled.p`
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  line-height: 19px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 28px;

  ${media.tabletAndDesktop} {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
  }
`;

export const NoticesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 240px;
  height: 40px;
  margin-top: 12px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  /* text-align: center; */

  color: ${colors.black};

  &:hover,
  &:focus {
    background-color: ${colors.accent};

    color: ${colors.white};
  }

  cursor: pointer;

  ${media.tabletAndDesktop} {
    width: 160px;
    margin-left: 12px;
    margin-top: 0px;
  }
`;

export const HeartIcon = styled.div`
  margin-left: 10px;
  margin-top: 5px;
`;
