import React from 'react';
import { Badge } from 'react-bootstrap';

export const getTagBadge = (tag) => {
  switch (tag) {
    case 'WIP':
      return (
        <Badge bg="warning" text="dark">
          #WIP
        </Badge>
      );
    case 'todo':
      return <Badge bg="info">#todo</Badge>;
    case 'done':
      return <Badge bg="success">#done</Badge>;
    default:
      return <Badge bg="secondary">#other</Badge>;
  }
};
