import RoomList from "../../components/RoomList";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function TeacherView() {
  return (
    <>
      <RoomList userType="teacher" />
    </>
  );
}
