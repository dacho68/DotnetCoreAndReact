import React from "react";
import { Grid, List, GridColumn } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";

interface IProps{
    activities: IActivity[]
}

export const ActivityDashboard : React.FC<IProps>= ({activities}) => {
  return (
    <Grid columns={2} >
      <Grid.Column width={10} >
          <ActivityList activities={activities} ></ActivityList>
      </Grid.Column>
      <Grid.Column  floated='right' width={6}> 
         <ActivityDetails></ActivityDetails>
      </Grid.Column>
    </Grid>
  );
};
