import { profiles } from "./profiles";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>이름: {profile.name}</h1>
      <p>직업: {profile.job}</p>
    </div>
  );
}
