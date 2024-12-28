import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
`;

export const CardTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
`;

export const CardContent = styled.p`
  color: #666;
`;

export const FeaturedCard = styled(Card)`
  border: 2px solid gold;
  background-color: #fffaf0;
`;

export const ThemedCard = styled.div`
  background-color: ${(props) => (props.dark ? "#333" : "white")};
  color: ${(props) => (props.dark ? "white" : "#333")};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
`;

export const InteractiveCard = styled(Card)`
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  & > h2 {
    color: #333;
    font-size: 1.5em;
  }
  & > p {
    color: #666;
  }
`;
