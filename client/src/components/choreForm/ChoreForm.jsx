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
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);

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
            rows="4"
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="users">Extra Person</label>
          <input
            type="text"
            name="users"
            id="users"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="day">Day</label>
          <select
            type="text"
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
          <button className="btn btn-block">Add Chore</button>
        </div>
      </form>
    </section>
  );
};

export default ChoreForm;
