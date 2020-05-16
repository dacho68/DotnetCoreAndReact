import React from 'react';
import { Image, Card, Icon, Button, ButtonGroup } from 'semantic-ui-react';

export const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>title</Card.Header>
        <Card.Meta>
          <span>date</span>
        </Card.Meta>
        <Card.Description>description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths={2}>
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};
