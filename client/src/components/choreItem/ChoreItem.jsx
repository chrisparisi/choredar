import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteChore } from '../../features/chores/choreSlice';

const ChoreItem = ({ chore }) => {
  const dispatch = useDispatch();

  return (
    <div className="chore">
      <div>{new Date(chore.createdAt).toLocaleString('en-US')}</div>
      <h2>{chore.text}</h2>
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
