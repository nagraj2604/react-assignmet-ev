import { IUser } from "./IUser";
import "./user.css";
export function User({ name, email }: IUser) {
  return (
    <div className="user-wrapper">
      <div className="user-name">
        <strong> Name:&nbsp; </strong> {name}
      </div>
      <div className="user-email">
        <strong> Email:&nbsp; </strong>
        {email}
      </div>
    </div>
  );
}
