import React from 'react'
import { Segment, Form, FormInput, FormTextArea, Button } from 'semantic-ui-react'

interface IProps{
    setEditMode: (editMode: boolean) => void;
}

export const ActivityForm:React.FC<IProps> = (p) => {
    return (
        <Segment clearing>
            <Form>
                <FormInput placeholder='Titlte'/>
                <FormTextArea rows={3} placeholder='Description'/>
                <FormInput placeholder='Category'/>
                <FormInput type='date' placeholder='Date'/>
                <FormInput placeholder='City'/>
                <FormInput placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={()=>p.setEditMode(false)} floated='right'type='button' content='Cancel'/>
            </Form>
        </Segment>   
    )
}
