import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { formatDate } from '../../utils/getDate';
import { getDuration } from '../../utils/getDuration';
import { getTagBadge } from '../../utils/getTagBadge';

const SavedTimerCard = ({ timer, isSelected, handleSelect, showSelectButton = true }) => (
  <Card className={`saved-timers ${isSelected ? 'border-danger' : ''}`}>
    <Card.Body>
      <Card.Text>
        <strong>Date & Time:</strong> {formatDate(timer.timestamp)}
      </Card.Text>
      <Card.Text>
        <strong>Duration:</strong> {getDuration(timer.duration)}
      </Card.Text>
      <Card.Text>
        <strong>Description:</strong> {timer.description}
      </Card.Text>
      <Card.Text>
        <strong>Tag:</strong> {getTagBadge(timer.tag)}
      </Card.Text>
      {showSelectButton && (
        <Button variant={isSelected ? 'secondary' : 'primary'} onClick={() => handleSelect(timer.timerId)}>
          {isSelected ? 'Deselect' : 'Select'}
        </Button>
      )}
    </Card.Body>
  </Card>
);

export default SavedTimerCard;
