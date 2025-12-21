import useUserStore from "../stores/useUserStore";

export default function UserProfile() {
  const { username, updateName } = useUserStore();

  return (
    <div>
      <h2>사용자 이름: {username}</h2>
      <button onClick={() => updateName("react master")}>이름 변경</button>
    </div>
  );
}
