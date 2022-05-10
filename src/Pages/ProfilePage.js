import { UseAuth } from "../Context/Auth/AuthProvider";

const ProfilePage = () => {
  const auth = UseAuth();
  return (
    <div>
      {auth && (
        <>
          <p>name: {auth.name}</p>
          <p>email: {auth.email}</p>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
