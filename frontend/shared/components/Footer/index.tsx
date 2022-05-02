// referenced from the footer from https://helpscout.com - 04/27/2021

import FooterLinks from '../../data/footerLinks';
import {MainGutter} from '../MainGutter/styles';

import FooterSection from './FooterSection';
import * as Styled from './styles';

const Footer = ({
  backgroundColor = '#FFFFFF',
  H3Color = '#000000',
  copyrightColor = '#666666',
  linkColor = '#000000',
  madeByColor = '#666666',
  headerColor = '#000000',
  linkHoverColor = '#136FFF',
}) => (
  <Styled.FooterContainer backgroundColor={backgroundColor}>
    <MainGutter backgroundColor="white">
      <Styled.FooterP>
        <Styled.MiddleContainer>
          <Styled.FooterHead>
            <Styled.FooterSVG
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 137.5 166"
              role="img">
              <path
                fill="#1292ee"
                d="M9.9 97.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 48.6C3.9 54.8 0 63.5 0 73c0 9.5 3.8 18 9.9 24.2zM127.6 68.8L79 117.4c-6.3 6.2-10.2 14.9-10.2 24.4 0 9.4 3.8 18 9.9 24.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.5-3.8-18-9.9-24.2zM127.3 48.7s0-.1 0 0c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 117.4C3.9 123.6 0 132.3 0 141.8c0 9.4 3.8 18 9.9 24.2L127.3 48.7z"
              />
            </Styled.FooterSVG>
            <Styled.FooterH3 textColor={H3Color}>
              Tools for the world&apos;s most customer-centric businesses
            </Styled.FooterH3>
          </Styled.FooterHead>
          {FooterLinks.map((e: any, i: number) => (
            <FooterSection
              key={e.id}
              links={FooterLinks[i].links}
              heading={e.heading}
              linkColor={linkColor}
              headerColor={headerColor}
              linkHoverColor={linkHoverColor}
            />
          ))}
        </Styled.MiddleContainer>
      </Styled.FooterP>
    </MainGutter>
    <Styled.HR />
    <MainGutter backgroundColor="white">
      <Styled.SocialFooter>
        <Styled.MadeBy>
          {/* could float text to the right side and keep social icons on the left side */}
          <Styled.MadeByStrong textColor={madeByColor}>
            Proudly run by a 100% remote team distributed around the{' '}
            <span role="img" aria-label="planet earth emoji">
              🌎
            </span>
          </Styled.MadeByStrong>
        </Styled.MadeBy>
        <Styled.FootSGN>
          <div>
            <Styled.Copyright textColor={copyrightColor}>
              © 2021 Improve
            </Styled.Copyright>
          </div>
        </Styled.FootSGN>
      </Styled.SocialFooter>
    </MainGutter>
  </Styled.FooterContainer>
);

export default Footer;
