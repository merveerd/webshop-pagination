import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../constants";
import { SelectionTitle } from "./commonComponents/SelectionTitle";
import { OptionName } from "./commonComponents/OptionName";
import { Wrapper } from "../SharedStyledComponents";
import { font, bg } from "../../style/sharedStyle";
const FilterWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 16.3rem;
  margin-bottom: 1rem;
`;

const FilterMainArea = styled(Wrapper)`
  width: 100%;
  height: 90%;
  bottom: 0;
  box-sizing: border-box;
  border-radius: 0.15rem;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  position: absolute;
  ${bg.white};
  flex-direction: column;
  justify-content: center;
  @media only screen and ${device.xs} {
    display: ${(p) => (p.isOpen ? "flex" : "none")};
    width: 18rem;
  }
`;

const SearchBar = styled.input`
  width: 84%;
  height: 19%;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
  outline: none;
  margin-left: 8%;
  margin-bottom: 8%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
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

const OptionWrapper = styled.div`
  margin: 0.3rem;
  margin-left: 1.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.button`
  height: 1.3rem;
  width: 1.3rem;
  border: none;
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.currentChoice === props.value ? "#1EA4CE" : "#ffffff"};
  ${font.white}
  cursor: pointer;
  outline: none;
  font-size: 0.7rem;
`;

const Search = (props) => {
  const [data, setData] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [isOpen, setisOpen] = useState(""); //for mobile
  useEffect(() => {
    setData(Object.entries(props.data));
  }, [props.data]);

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setsearchInput(input);
    if (input.length >= 2) {
      const newData = Object.entries(props.data).filter((item) =>
        item[0].toLowerCase().includes(input.toLowerCase())
      );
      setData(newData);
    } else {
      setData(Object.entries(props.data));
    }
  };

  return (
    <FilterWrapper>
      <SelectionTitle
        onClick={() => setisOpen(!isOpen)}
        areaTitle={props.areaTitle}
      />

      <FilterMainArea isOpen={isOpen}>
        <SearchBar
          placeholder={props.placeholder}
          value={searchInput}
          onChange={handleSearchInput}
        />
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
                <OptionName
                  showCount={props.showCount}
                  name={item[0].replaceAll("-", " ")}
                  count={item[1]}
                  oneLine={true}
                ></OptionName>
              </OptionWrapper>
            );
          })}
        </Results>
      </FilterMainArea>
    </FilterWrapper>
  );
};

export { Search };
