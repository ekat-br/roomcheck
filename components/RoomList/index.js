import { useState } from "react";
import RoomButton from "../RoomButton";
import { RoomListContainer, RoomListItem, BasicListItem } from "./styles";
import Divider from "../Divider";
import RoomIcon from "../RoomIcon";

export default function RoomList() {
  // Dummy data for the rooms array
  const [rooms, setRooms] = useState([
    { id: 1, name: "Room 101", state: "Plätze frei" },
    { id: 2, name: "Room 202", state: "Wenige Plätze frei" },
    { id: 3, name: "Room 303", state: "Plätze belegt" },
    { id: 4, name: "Room 404", state: "Keine Angabe" },
    { id: 5, name: "Room 505", state: "Plätze frei" },
  ]);

  //Update des Zustand des Raums im Array
  function updateRoomState(roomId, newState) {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, state: newState } : room
    );
    setRooms(updatedRooms);
  }

  return (
    <RoomListContainer>
      <ul>
        {rooms.map((room, index) => (
          <BasicListItem key={room.id}>
            <RoomListItem key={room.id}>
              <RoomIcon />
              {room.name}
              <RoomButton
                room={room}
                updateRoomState={(newState) =>
                  updateRoomState(room.id, newState)
                }
                initialRoomState={room.state}
              />
            </RoomListItem>
            {index !== rooms.length - 1 && <Divider key={room.id} />}
          </BasicListItem>
        ))}
      </ul>
    </RoomListContainer>
  );
}
