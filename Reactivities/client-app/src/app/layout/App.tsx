import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import { LoadingComponent } from './LoadingComponent';

interface IState {
  activities: IActivity[];
}

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleSelectActivity = (id: string) => {
    console.log([...activities]);
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () =>{
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleCreateActivity = (newActivity: IActivity) => {
    setSubmitting(true);
    agent.Activities.create(newActivity).then(() => {
      setActivities([...activities,newActivity]);
      setSelectedActivity(newActivity);
      setEditMode(false);
    }).then(()=>setSubmitting(false))
  }

  const handleEditActivity = (activity: IActivity) => {
    setSubmitting(true);
    agent.Activities.update(activity).then(()=>{
      setActivities([...activities.filter(a=>a.id !== activity.id),activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    }).then(()=>setSubmitting(false))
  }

  const handleDeleteActivity = (id: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(()=>{
      setActivities([...activities.filter(a=>a.id !== id)]);
    }).then(()=>setSubmitting(false))
  }

  useEffect(() => {
    agent.Activities.list()
      .then((response) => {
        let activities: IActivity[] = [];
        response.forEach(activity => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity);
        })
        setActivities(activities);
      }).then(()=>setLoading(false));
  }, []);

  if(loading) return <LoadingComponent content='Loading Activities...' />

  return (
    <Fragment>
      <NavBar openCreateform={handleOpenCreateForm}/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity!} //activity or null
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </Fragment>
  );
};

export default App;
