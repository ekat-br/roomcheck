import { useState, useEffect } from "react";
import RoomButton from "../RoomButton";
import {
  RoomListContainer,
  RoomListItem,
  BasicListItem,
  ButtonContainer,
  RoomName,
  RoomSubject,
  RoomUList,
} from "./styles";
import Divider from "../Divider";
import RoomIcon from "../RoomIcon";
import Link from "next/link";
import EditButton from "../EditButton";

export default function RoomList({ userType }) {
  const [rooms, setRooms] = useState([]);

  async function updateRoomState(roomId, newState) {
    // API Call for updating the room state
    try {
      const response = await fetch(`/api/rooms/updatestatus/${roomId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newState }),
      });

      if (!response.ok) {
        throw new Error("Failed to update room status");
      }

      // Fetch the updated room data after updating the status
      await fetchRoomData();
    } catch (error) {
      console.error("Error updating room status:", error);
    }
  }

  async function fetchRoomData() {
    try {
      const response = await fetch("/api/rooms");
      if (!response.ok) {
        throw new Error("Failed to fetch room data");
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  }

  useEffect(() => {
    fetchRoomData();
  }, []);

  return (
    <RoomListContainer>
      <RoomUList>
        {rooms.map((room, index) => (
          <BasicListItem key={room._id}>
            <RoomListItem key={room._id}>
              <RoomIcon />
              <RoomName>{room.name}</RoomName>
              <RoomSubject>{room.subject}</RoomSubject>
              <ButtonContainer>
                <RoomButton
                  room={room}
                  updateRoomState={
                    userType === "teacher" ? updateRoomState : undefined
                  }
                  initialRoomState={room.status}
                />
                {userType === "admin" && (
                  <Link href={`/admin/${room._id}`}>
                    <EditButton>Edit</EditButton>
                  </Link>
                )}
              </ButtonContainer>
            </RoomListItem>
            {index !== rooms.length - 1 && <Divider />}
          </BasicListItem>
        ))}
      </RoomUList>
    </RoomListContainer>
  );
}
