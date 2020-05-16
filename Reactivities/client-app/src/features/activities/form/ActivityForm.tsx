import React, { useState } from 'react';
import {
  Segment,
  Form,
  FormInput,
  FormTextArea,
  Button,
} from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity | null;
}

export const ActivityForm: React.FC<IProps> = (p) => {
  const initializeForm = () => {
    if (p.activity) {
      return p.activity;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);
  return (
    <Segment clearing>
      <Form>
        <FormInput placeholder="Titlte" value={p.activity?.title}/>
        <FormTextArea rows={3} placeholder="Description" value={p.activity?.description} />
        <FormInput placeholder="Category"  value={p.activity?.category} />
        <FormInput type="date" placeholder="Date"   value={p.activity?.date} />
        <FormInput placeholder="City"  value={p.activity?.city}  />
        <FormInput placeholder="Venue" value={p.activity?.venue}  />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => p.setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
