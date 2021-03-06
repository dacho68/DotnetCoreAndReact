import React, { SyntheticEvent } from 'react';
import { Grid, List, GridColumn } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';


interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>,id: string) => void;
  target: string;
  submitting: boolean;
}

export const ActivityDashboard: React.FC<IProps> = (p) => {
  return (
    <Grid columns={2}>
      <Grid.Column width={10}>
        <ActivityList
          activities={p.activities}
          selectActivity={p.selectActivity}
          deleteActivity={p.deleteActivity}
          submitting={p.submitting}
          target={p.target}
        ></ActivityList>
      </Grid.Column>
      <Grid.Column floated="right" width={6}>
        {p.selectedActivity && !p.editMode && (
          <ActivityDetails
            activity={p.selectedActivity}
            setEditMode={p.setEditMode}
            setSelectedActivity={p.setSelectedActivity}
          />
        )}
        {p.editMode && (
          <ActivityForm
            key={(p.selectedActivity && p.selectedActivity.id) || 0}
            setEditMode={p.setEditMode}
            activity={p.selectedActivity!}
            createActivity={p.createActivity}
            editActivity={p.editActivity}
            submitting={p.submitting}
          ></ActivityForm>
        )}
      </Grid.Column>
    </Grid>
  );
};
