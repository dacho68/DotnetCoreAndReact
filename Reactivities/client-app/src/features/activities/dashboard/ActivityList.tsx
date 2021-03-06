import React, { SyntheticEvent } from 'react';
import { Item, Image, Button, Label, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>,id: string) => void;
  submitting: boolean;
  target: string;
}
//{ activities,selectActivity }
export const ActivityList: React.FC<IProps> = (p) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {p.activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city},{activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => p.selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                ></Button>
                <Button
                  name={activity.id}
                  loading={p.target === activity.id && p.submitting}
                  onClick={(e) => p.deleteActivity(e,activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                ></Button>
                <Label basic content={activity.category}></Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
