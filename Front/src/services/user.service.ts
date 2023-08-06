import axios from "axios";

const userPrefix = `${process.env.REACT_APP_BACKEND_URL}/user`;

interface IUser {

}

export class UserService {

  static getUserByUid = async (uid: string): Promise<IUser | void> => {
    const url = userPrefix + '/' + uid;
    return await axios
      .get(url)
      .then((res) => {
        return (res.data as IUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}