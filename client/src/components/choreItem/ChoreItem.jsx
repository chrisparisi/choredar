import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteChore } from '../../features/chores/choreSlice';
import './ChoreItem.scss';

const ChoreItem = ({ chore }) => {
  const dispatch = useDispatch();

  return (
    <div className="chore">
      <div>{new Date(chore.createdAt).toLocaleString('en-US')}</div>
      <h2>{chore.task}</h2>
      <h2>{chore.day}</h2>
      {chore.user.map((user, i) => {
        return <h2 key={i}>{user}</h2>;
      })}
      <button
        onClick={() => dispatch(deleteChore(chore._id))}
        className="close"
      >
        x
      </button>
    </div>
  );
};

export default ChoreItem;