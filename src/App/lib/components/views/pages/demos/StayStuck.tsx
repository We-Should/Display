import { useRef } from "react";
import { StayStuck } from "../../../../../../lib/helpers/StayStuck";
import { Container } from "../../../../../../lib/components/atoms/Container";
import styled from "styled-components";

const StyledExamples = styled.div`
  padding: var(--padding-large);
  background-color: var(--background-alt-color);
`;

export const DemoPageStayStuck: React.FC<{}> = () => {
 const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Container>
       <h1>.Stay Stuck</h1>
      <StyledExamples>
    <div ref={ref}>
    Lorum ipsum dolor sit amet, consectetur adipiscing elit. Sed
    tempor, nisl ut aliquet sagittis, nisl nisl aliquet nisl,
    nisl nisl aliquet nisl.
    
    <StayStuck parent={ref}>
      <div style={{height: "100px", width: "100px", backgroundColor: "blue"}}>
        You keep it here.
      </div>
    </StayStuck>
    </div>
    </StyledExamples>
    </Container>
  );
}

export default DemoPageStayStuck;


