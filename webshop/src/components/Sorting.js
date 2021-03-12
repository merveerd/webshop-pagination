import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import checkCircleOutlined from "@iconify-icons/ant-design/check-circle-outlined";

const SortWrapper = styled.div`
  display: flex;
  position: relative;
  width: 20%;
  height: 12.2rem;
`;

const SortArea = styled.div`
  background-color: #ffffff;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 85%;
  bottom: 0;
  box-sizing: border-box;
  border-radius: 0.15rem;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
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
`;

const CheckBox = styled.button`
  background: #ffffff;
  border: 0.13rem solid #dfdee2;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  height: 1.3rem;
  width: 1.3rem;
  outline: none;
`;

const sortingData = [
  { name: "Price low to high", type: "price", order: "asc" },
  { name: "Price high to low", type: "price", order: "desc" },
  { name: "New to old", type: "added", order: "desc" },
  { name: "Old to new", type: "added", order: "asc" },
];

const Sorting = (props) => {
  const [clicked, setClicked] = useState("");
  const { selectedType } = props;

  const handleSelection = (e, index) => {
    let sortType;
    let sortOrder;
    if (index === clicked) {
      setClicked("");
      sortType = "";
      sortOrder = "";
    } else {
      setClicked(index);
      sortType = sortingData[index].type;
      sortOrder = sortingData[index].order;
    }

    props.getSelectedItems({
      sortType,
      sortOrder,
      currentPage: 1,
      selectedType,
    });
    props.setSortRule({ sortType, sortOrder });
    props.setPage({ selected: 0 }); //simulate react-paginate component event. Needs to be after setSortRule considering useEffect on currentPage
  };

  return (
    <SortWrapper>
      <Title> Sorting</Title>

      <SortArea>
        {sortingData.map((item, index) => {
          return (
            <OptionWrapper key={index}>
              {clicked !== index ? (
                <CheckBox
                  value={index.toString()}
                  onClick={(e) => handleSelection(e, index)}
                />
              ) : (
                <Icon
                  icon={checkCircleOutlined}
                  color="#1ea4ce"
                  height="1.3rem"
                  onClick={(e) => handleSelection(e, index)}
                />
              )}

              <OptionName>{item.name}</OptionName>
            </OptionWrapper>
          );
        })}
      </SortArea>
    </SortWrapper>
  );
};

export { Sorting };
