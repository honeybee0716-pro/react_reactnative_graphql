import Link from 'next/link';
import {MainGutter} from '../MainGutter/styles';

import * as Styled from './styles';

interface Props {
  backgroundColor?: string;
  buttonColor?: string;
  description?: string;
  buttonText?: string;
}

export default function BottonRow({
  backgroundColor = '#f8f8f8',
  buttonColor = '#000000',
  description = 'Ready to take your business to the next level?',
  buttonText = 'Add your listing',
}: Props) {
  return (
    <Styled.BottomRowOuterContainer backgroundColor={backgroundColor}>
      <MainGutter backgroundColor="#f8f8f8">
        <Styled.BottomRowInnerContainer>
          <Styled.Text>{description}</Styled.Text>
          <Link href="/add">
            <Styled.Button backgroundColor={buttonColor}>
              {buttonText}
            </Styled.Button>
          </Link>
        </Styled.BottomRowInnerContainer>
      </MainGutter>
    </Styled.BottomRowOuterContainer>
  );
}
