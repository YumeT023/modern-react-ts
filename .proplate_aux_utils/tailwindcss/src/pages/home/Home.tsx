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
    <div className="p-3">
      {isFetching && <span>loading...</span>}
      {users && users.map((user) => (
        <div key={user.id}>
          <div className="font-bold">{user.username}</div>
          <div>{user.email}</div>
          <hr className="text-muted" />
        </div>
      ))}
      <h1>$project_name works</h1>
    </div>
  );
};
