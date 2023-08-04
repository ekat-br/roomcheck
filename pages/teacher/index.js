import RoomList from "../../components/RoomList";
import Heading from "../../components/Heading";
export default function TeacherView() {
  return (
    <>
      <Heading>🏫✅ RoomCheck ✅🏫</Heading>
      <RoomList userType="teacher" />
    </>
  );
}
