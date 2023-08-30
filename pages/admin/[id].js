import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import RoomEditDeleteForm from "../../components/RoomEditDeleteForm";

export default function EditRoomPage() {
  const router = useRouter();
  const { id } = router.query;

  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    async function fetchRoomData() {
      try {
        const response = await fetch(`/api/rooms/${id}`);
        const data = await response.json();
        if (response.ok) {
          setRoomData(data);
        } else {
          console.error("Failed to fetch room data");
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    }

    if (id) {
      fetchRoomData();
    }
  }, [id]);

  return (
    <>
      <RoomEditDeleteForm room={roomData} />{" "}
    </>
  );
}
