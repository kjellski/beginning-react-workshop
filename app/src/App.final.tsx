import React, { FC } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useQuery } from "react-query";

import Layout from "./components/Layout";

// TASK 1: Fetch some data from the github API and show it!

const UserProfile: FC = () => {
  const { isLoading, error, data } = useQuery<any, Error>("repoData", () =>
    fetch("https://api.github.com/users/kjellski").then(res => res.json())
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }
  
  if (error) {
    return <span>{"An error has occurred: " + (error.message as string)}</span>;
  }
  
  console.log(data);
  
  return null
};

// TASK 2: Let's construct our own UserProfile hook

export const App: FC = () => (
  <Layout
    Navigation={
      <List>
        <ListItem>
          <ListItemText>None yet...</ListItemText>
        </ListItem>
      </List>
    }
  >
    <UserProfile />
  </Layout>
);
