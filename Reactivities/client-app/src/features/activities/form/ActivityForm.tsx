import React, { useState, FormEvent } from 'react';
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

  const handleSubmit = () => {
      console.log(activity);
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    console.log(`${name},${value}`);
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleInputChange}
          name="title"
          placeholder="Titlte"
          value={p.activity?.title}
        />
        <FormTextArea
          onChange={handleInputChange}
          name="description"
          rows={3}
          placeholder="Description"
          value={p.activity?.description}
        />
        <FormInput
          onChange={handleInputChange}
          name="category"
          placeholder="Category"
          value={p.activity?.category}
        />
        <FormInput
          onChange={handleInputChange}
          name="date"
          type="date"
          placeholder="Date"
          value={p.activity?.date}
        />
        <FormInput
          onChange={handleInputChange}
          name="city"
          placeholder="City"
          value={p.activity?.city}
        />
        <FormInput
          onChange={handleInputChange}
          name="venue"
          placeholder="Venue"
          value={p.activity?.venue}
        />
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
