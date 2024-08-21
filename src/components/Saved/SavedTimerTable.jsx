import React from 'react';
import { Table } from 'react-bootstrap';
import { formatDate } from '../../utils/getDate';
import { getDuration } from '../../utils/getDuration';
import { getTagBadge } from '../../utils/getTagBadge';

const SavedTimerTable = ({ savedTimers, selectedTimers, handleSelect }) => (
  <div className="saved-time-table">
    <Table striped hover>
      <thead>
        <tr>
          <th>Select</th>
          <th>Date & Time</th>
          <th>Duration</th>
          <th>Description</th>
          <th>Tag</th>
        </tr>
      </thead>
      <tbody>
        {savedTimers.map((timer, index) => (
          <tr key={index} className={selectedTimers.includes(timer.timerId) ? 'table-danger' : ''}>
            <td>
              <input type="checkbox" checked={selectedTimers.includes(timer.timerId)} onChange={() => handleSelect(timer.timerId)} />
            </td>
            <td>{formatDate(timer.timestamp)}</td>
            <td>{getDuration(timer.duration)}</td>
            <td>{timer.description}</td>
            <td>{getTagBadge(timer.tag)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default SavedTimerTable;
