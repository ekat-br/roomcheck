import styled from "styled-components";

const RoomListContainer = styled.div`
  text-align: center;
  margin-top: 90px;
`;

const RoomListTitle = styled.h3`
  color: #ff0054;
`;
const RoomListItem = styled.li`
  list-style: none;
  font-size: 20px;
  margin-bottom: 40px;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /* Mobile view styles using media query */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BasicListItem = styled.div`
  list-style: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomName = styled.span`
  font-weight: bold;
  width: 150px;
`;

const RoomSubject = styled.span`
  color: #777;
  width: 150px;
`;

const RoomUList = styled.ul`
  margin: 0 20px 0 20px;
  padding: 0;
`;

export {
  RoomListContainer,
  RoomListTitle,
  RoomListItem,
  BasicListItem,
  ButtonContainer,
  RoomName,
  RoomSubject,
  RoomUList,
};
