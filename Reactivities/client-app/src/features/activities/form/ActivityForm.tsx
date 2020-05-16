import React from 'react'
import { Segment, Form, FormInput, FormTextArea } from 'semantic-ui-react'

export const ActivityForm = () => {
    return (
        <Segment>
            <Form>
                <FormInput placeholder='Titlte'/>
                <FormTextArea rows={3} placeholder='Description'/>
                <FormInput placeholder='Category'/>
                <FormInput type='date' placeholder='Date'/>
                <FormInput placeholder='City'/>
                <FormInput placeholder='Venue'/>
            
            </Form>
        </Segment>   
    )
}
