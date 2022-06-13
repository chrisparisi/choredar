import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './ChoreForm.scss';
import { createChore } from '../../features/chores/choreSlice';

const ChoreForm = () => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [users, setUsers] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createChore({ task, day, users }));
    setTask('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="task">Chore</label>
          <textarea
            placeholder="Enter chore here"
            rows="4"
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="day">Day</label>
          <select
            name="day"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option>Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Monday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="users">Extra Help (optional)</label>
          <input
            placeholder="Tag another person with their email"
            type="text"
            name="users"
            id="users"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn form-btn">Add Chore</button>
        </div>
      </form>
    </section>
  );
};

export default ChoreForm;
