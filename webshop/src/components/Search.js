import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 16.3rem;
  margin-bottom: 1rem;
`;

const FilterMainArea = styled.div`
  background-color: #ffffff;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90%;
  bottom: 0;
  box-sizing: border-box;
  border-radius: 0.15rem;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
`;

const SearchBar = styled.input`
  width: 84%;
  height: 19%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
  outline: none;

  margin-left: 8%;
  margin-bottom: 8%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a8a8a8;
  }
`;

const Results = styled.div`
  width: 84%;
  height: 55%;
  overflow: scroll;
`;

const Title = styled.p`
  position: absolute;
  height: 1.1rem;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  color: #697488;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.3rem;
  margin-left: 1.3rem;
`;

const OptionName = styled.p`
  font-family: Open Sans;
  display: flex;
  align-items: center;
  color: #525252;
  margin-left: 1rem;
  font-size: 0.95rem;
  white-space: nowrap;
`;

const CheckBox = styled.button`
  background-color: ${(props) =>
    props.currentChoice === props.value ? "#1EA4CE" : "#ffffff"};
  color: #ffffff;
  border: none;
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  height: 1.3rem;
  width: 1.3rem;
  outline: none;
  font-size: 0.7rem;
`;

const Search = (props) => {
  const data = Object.entries(props.data);

  return (
    <FilterWrapper>
      <Title> {props.areaTitle}</Title>

      <FilterMainArea>
        <SearchBar placeholder=" Search Brand" />
        <Results>
          {data.map((item, index) => {
            return (
              <OptionWrapper key={index}>
                <CheckBox
                  currentChoice={props.currentChoice}
                  value={item[0]}
                  onClick={(e) => {
                    props.handleSearchSelection(e, item[0]);
                  }}
                >
                  ✓
                </CheckBox>
                <OptionName>
                  {item[0].replaceAll("-", " ")} ({item[1]})
                </OptionName>
              </OptionWrapper>
            );
          })}
        </Results>
      </FilterMainArea>
    </FilterWrapper>
  );
};

export { Search };
