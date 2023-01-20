import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../UI/Card";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  color: #fff;
  margin-left: 20px;
`;
const H2 = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
`;
const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
`;
function ExpenseItem(props) {
  return (
    <CardStyled>
      <Card>
        <ExpenseDate date={props.expenseDate} />
        <StyledDescription>
          <H2>{props.expenseTitle}</H2>
          <Price>${props.expensePrice}</Price>
        </StyledDescription>
      </Card>
    </CardStyled>
  );
}

export default ExpenseItem;
