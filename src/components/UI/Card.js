// import "./Card.css";
import styled from "styled-components";
const Div = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

function Card(props) {
  const classes = "card " + props.className;
  return <Div className={classes}>{props.children}</Div>;
}
export default Card;
