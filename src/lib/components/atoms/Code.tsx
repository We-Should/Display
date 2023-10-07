import styled from "styled-components";

export const Code: React.FC<{children: React.ReactNode;}> = (props) => {
    if (!props) {
        return null;
    }
  
    return (
      <StyledCode>
        {props.children}
      </StyledCode>
    );
  };

const StyledCode = styled.code`
  padding: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: inline-block;
  font-size: .85rem;
  color: white;
  border-radius: 0.25rem;
  background-color: rgba(0,0,0,.75);
  text-align: left;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New";
`;

