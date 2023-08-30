import { useSession } from "next-auth/react";
import RoomList from "../../components/RoomList";
import SubHeading from "../../components/Headings/SubHeading";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navigation from "../../components/Navigation";

export default function AdminView() {
  const isAdmin = true;

  if (isAdmin) {
    return (
      <>
        <RoomList userType="admin" />
      </>
    );
  } else {
    return (
      <>
        <AdminViewContainer>
          <SubHeading>Zugriff verweigert</SubHeading>
          <AdminButton onClick={() => router.push("/login")}>Login</AdminButton>
          <HomeButton onClick={() => router.push("/")}>Startseite</HomeButton>
          <Navigation />
        </AdminViewContainer>
      </>
    );
  }
}

const AdminViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const AdminButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomeButton = styled.button`
  background-color: #f29400;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #cc7700;
  }
`;
