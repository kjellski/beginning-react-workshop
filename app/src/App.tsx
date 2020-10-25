import Axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Endpoints } from "@octokit/types";
import { List, ListItem, ListItemText } from "@material-ui/core";

import Layout from "./components/Layout";

// TASK 1: Fetch some data from the github API and show it!
// Look here for further guidance: https://docs.github.com/en/free-pro-team@latest/rest/reference/users

// What's this? 
type UserProfile = Endpoints["GET /users/:username"]["response"]["data"];

const UserProfile: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<UserProfile | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get<UserProfile>(
          "https://api.github.com/users/kjellski"
        ).then(res => res.data);

        setIsLoading(false);
        setData(response as UserProfile);
        
      } catch (error) {
        setData(null);
        setIsLoading(false);
        setError(error);
      }
    };

    fetchUser();
  }, []);

  if (isLoading || !data) {
    return <span>"Loading..."</span>;
  }

  if (error) {
    return <span>{"An error has occurred: " + (error.message as string)}</span>;
  }

  console.log(data);
  return <span>{JSON.stringify(data.login)}</span>;
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
