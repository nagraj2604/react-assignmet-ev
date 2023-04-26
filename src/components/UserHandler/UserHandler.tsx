import { useEffect } from "react";
import { useGetUser } from "../../hooks";
import { User } from "../User/user";
import "./UserHandler.css";
export function UserHandler({}) {
  const getUser = useGetUser();
  const getUserCall = () => getUser.callAPI();
  useEffect(() => {
    getUserCall();
  }, []);

  if (getUser.isLoading) {
    return <div className="card-wrapper">Loading.....</div>;
  }
  if (getUser.error) {
    return <div className="card-wrapper">{getUser.error}</div>;
  }
  return (
    <div>
      {getUser.data && (
        <div>
          <User
            email={getUser.data?.[0]?.email?.toString() ?? ""}
            name={
              `${getUser.data?.[0]?.name?.title} ${getUser.data?.[0]?.name?.first} ${getUser.data?.[0]?.name?.last}` ??
              ""
            }
          />
          <button className="refresh-button" onClick={getUserCall}>
            refresh
          </button>
        </div>
      )}
    </div>
  );
}
