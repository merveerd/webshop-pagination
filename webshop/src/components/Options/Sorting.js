import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../constants";
import { SelectionTitle } from "./commonComponents/SelectionTitle";
import { OptionName } from "./commonComponents/OptionName";
import { Wrapper } from "../SharedStyledComponents";
import { bg } from "../../style/sharedStyle";
const SortWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 12.2rem;
  margin-bottom: 1.5rem;
`;

const SortArea = styled(Wrapper)`
  position: absolute;
  width: 100%;
  height: 86%;
  bottom: 0;
  box-sizing: border-box;
  border-radius: 0.15rem;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  ${bg.white};
  flex-direction: column;
  justify-content: center;

  @media only screen and ${device.xs} {
    display: ${(p) => (p.isOpen ? "flex" : "none")};
    width: 18rem;
  }
`;

const OptionWrapper = styled(Wrapper)`
  margin: 0.3rem;
  margin-left: 8%;
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.button`
  height: 1.3rem;
  width: 1.3rem;
  border: ${(p) =>
    p.clicked === p.value
      ? "0.13rem solid #1EA4CE"
      : "0.13rem solid #dfdee2"}; 0.13rem solid #dfdee2;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  color: ${(p) => (p.clicked === p.value ? "#1EA4CE" : "#ffffff")};
  background: #ffffff;
  outline: none;
`;

const Tick = styled.p`
  margin-left: -0.15rem;
`;
const sortingData = [
  { name: "Price low to high", type: "price", order: "asc" },
  { name: "Price high to low", type: "price", order: "desc" },
  { name: "New to old", type: "added", order: "desc" },
  { name: "Old to new", type: "added", order: "asc" },
];

const Sorting = (props) => {
  const [clicked, setClicked] = useState("");
  const [isOpen, setisOpen] = useState(""); //for mobile
  const { itemType, brand, tag } = props;

  const handleSelection = (e, index) => {
    let sortType;
    let sortOrder;
    if (index.toString() === clicked) {
      setClicked("");
      sortType = "";
      sortOrder = "";
      !itemType && !brand && !tag && props.getPageDefaultItems(1);
    } else {
      setClicked(index.toString());
      sortType = sortingData[index].type;
      sortOrder = sortingData[index].order;
      props.getSelectedItems({
        sortType,
        sortOrder,
        currentPage: 1,
        itemType,
        brand,
        tag,
      });
    }

    props.setSortRule({ sortType, sortOrder });
    props.setPage({ selected: 0 }); //simulate react-paginate component event. Needs to be after setSortRule considering useEffect on currentPage
  };

  return (
    <SortWrapper>
      <SelectionTitle onClick={() => setisOpen(!isOpen)} areaTitle="Sorting" />

      <SortArea isOpen={isOpen}>
        {sortingData.map((item, index) => {
          return (
            <OptionWrapper key={index}>
              <CheckBox
                value={index.toString()}
                clicked={clicked}
                onClick={(e) => handleSelection(e, index)}
              >
                <Tick>✓</Tick>
              </CheckBox>

              <OptionName
                name={item.name}
                count=""
                showCount={false}
                oneLine={false}
              />
            </OptionWrapper>
          );
        })}
      </SortArea>
    </SortWrapper>
  );
};

export { Sorting };
