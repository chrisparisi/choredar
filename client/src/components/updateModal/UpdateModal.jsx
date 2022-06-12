import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateChore } from '../../features/chores/choreSlice';
import './UpdateModal.scss';

const UpdateModal = ({ open, chore, onClose }) => {
  const [task, setTask] = useState(chore.task);
  const [day, setDay] = useState(chore.day);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (typeof chore.user[1] !== typeof undefined) {
      setUser(chore.user[1].email);
    }
  }, []);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    const id = chore._id;
    e.preventDefault();
    onClose();
    dispatch(updateChore({ id, task, day, user }));
    setTask('');
  };

  if (!open) return null;

  return (
    <>
      <div className="overlay" />
      <div className="updateModal">
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
              <label htmlFor="user">Extra Help (optional)</label>
              <input
                placeholder="Tag another person with their email"
                type="text"
                name="user"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
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
            <button onClick={onClose} className="close">
              x
            </button>
            <div className="form-group">
              <button onClick={onSubmit} className="btn form-btn">
                Update Chore
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdateModal;
