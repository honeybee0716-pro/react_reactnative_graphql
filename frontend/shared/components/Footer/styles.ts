import styled from 'styled-components/native';

export const Footer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100px;
  width: 100vw;
  flex-direction: row;
  padding: 20px 0 20px 0;
`;

export const Text = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Terms = styled.Text`
  color: #136fff;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export const Investors = styled.Text`
  color: #136fff;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    opacity: 0.75;
  }
`;

export const Twitter = styled.Text`
  color: #136fff;
  margin-left: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    opacity: 0.75;
  }
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

interface FooterContainerProps {
  backgroundColor: string;
}

export const FooterContainer = styled.View<FooterContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 48px 0px 24px;
`;

export const FooterP = styled.View`
  width: 100%;
  margin: 0px auto;
`;

export const MiddleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } */
`;

export const FooterHead = styled.View`
  flex: 0 0 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  /* @media (max-width: 768px) {
    margin-bottom: 0px;
  } */
`;

// export const FooterSVG = styled.svg`
//   height: 30px;
//   width: 25px;
// `;

interface FooterH3Props {
  textColor: string;
}

// export const FooterH3 = styled.h3<FooterH3Props>`
//   color: ${(props) => props.textColor};
//   @media (max-width: 991px) {
//     max-width: 100%;
//     text-align: center;
//   }
// `;

export const SocialFooter = styled.View`
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 25px;
  /* @media (max-width: 991px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  } */
`;

export const FootSGN = styled.View`
  display: flex;
  align-items: center;

  /* @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 12px;
  } */
  strong {
    margin-bottom: 12px;
  }
`;

interface CopyrightProps {
  textColor: string;
}

// export const Copyright = styled.span<CopyrightProps>`
//   padding: 0px 16px;
//   font-size: 14px;
//   color: ${(props) => props.textColor};
// `;

interface MadeByStrongProps {
  textColor: string;
}

export const MadeByStrong = styled.View<MadeByStrongProps>`
  color: ${(props) => props.textColor};
  /* @media (max-width: 425px) {
    font-size: 10px;
  } */
`;

export const MadeBy = styled.View`
  /* @media (max-width: 991px) {
    margin-bottom: 15px;
  } */
  /* @media (max-width: 425px) {
    img {
      width: 40px;
    }
  } */
`;

interface FooterSubHeadProps {
  textColor: string;
}

// export const FooterSubHead = styled.h4<FooterSubHeadProps>`
//   color: ${(props) => props.textColor};
//   font-size: 16px;
//   margin: 0px 0px 16px;
//   @media (max-width: 768px) {
//     margin-top: 50px;
//     text-align: center;
//   }
// `;

export const FooterSubArea = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.View`
  text-align: center;
`;

interface LinkProps {
  textColor: string;
  linkHoverColor: string;
}

export const Link = styled.Text<LinkProps>`
  color: ${(props) => props.textColor};
  font-size: 14px;
  line-height: 20px;
  padding: 6px 0px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.linkHoverColor};
    cursor: pointer;
  }
  /* @media (max-width: 768px) {
    text-align: center;
  } */
`;

export const HR = styled.View`
  width: 100vw;
  border-top: 1px solid #ccc8c8;
  margin-top: 25px;
`;
