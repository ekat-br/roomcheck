import RoomList from "../../components/RoomList";
import BottomNavigation from "../../components/BottomNavigation";
import Heading from "../../components/Heading";

export default function AdminView() {
  return (
    <>
      <Heading>🏫✅ RoomCheck ✅🏫</Heading>
      <RoomList userType="admin" />
      <BottomNavigation />
    </>
  );
}
