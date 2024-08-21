import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SavedTimerCard from '../components/Saved/SavedTimerCard';
import { toggleItemInArray } from '../utils/toggler';

const allTags = ['wip', 'todo', 'done', 'others'];

const Categories = () => {
  const timers = useSelector((state) => state.timer.timers);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredTimers, setFilteredTimers] = useState(timers);

  const handleFilterSelect = (filter) => {
    setSelectedFilters((prevFilters) => toggleItemInArray(prevFilters, filter));
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredTimers(timers);
      return;
    }

    const filtered = timers.filter((timer) => {
      return selectedFilters.some((filter) => timer.tag === filter);
    });

    setFilteredTimers(filtered);
  }, [selectedFilters, timers]);

  return (
    <Container>
      <h2 className="mb-5">Categories of Logged Work</h2>
      <div className="mb-3">
        {allTags.map((tag) => (
          <Button key={tag} variant={selectedFilters.includes(tag) ? 'primary' : 'outline-primary'} onClick={() => handleFilterSelect(tag)} className="me-2 mb-2">
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </Button>
        ))}
      </div>
      <Row>
        {filteredTimers.length === 0 ? (
          <div>No logged hours match the selected filters.</div>
        ) : (
          filteredTimers.map((timer, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <SavedTimerCard timer={timer} isSelected={false} handleSelect={() => {}} showSelectButton={false} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Categories;
