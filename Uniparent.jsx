import ProfileCard from "./Unichild";

function Uniparent() {
  const userData = {
    name: "Aishwarya",
    age: 18
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ProfileCard user={userData} />
    </div>
  );
}

export default Uniparent;