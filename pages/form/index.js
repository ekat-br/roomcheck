import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import RoomCreateForm from "../../components/RoomCreateForm";

export default function Form() {
  const router = useRouter();

  async function handleSubmit(formData) {
    try {
      const response = await fetch("/api/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add new room");
      }

      // Redirect to the homepage after successful addition
      router.push("/admin");
    } catch (error) {
      console.error("Error adding new room:", error);
    }
  }

  return (
    <>
      <RoomCreateForm handleSubmit={handleSubmit} />
    </>
  );
}
