import {FC} from "react";
import {useQuery} from "@tanstack/react-query";

export const Home: FC = () => {
  const {data: users, isFetching} = useQuery<Record<string, any>[]>({
    placeholderData: [],
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    },
  });

  return (
    <div>
      {isFetching && <span>loading...</span>}
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <hr />
          </div>
        ))}
      <h1>$project_name works</h1>
    </div>
  );
};
