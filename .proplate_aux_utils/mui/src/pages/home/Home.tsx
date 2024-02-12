import {FC} from "react";
import {Box, Typography} from "@mui/material";
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
    <Box>
      {isFetching && <Typography>loading...</Typography>}
      {users &&
        users.map((user) => (
          <Box key={user.id}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <hr />
          </Box>
        ))}
      <h1>$project_name works</h1>
    </Box>
  );
};
