import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteChore } from '../../features/chores/choreSlice';
import './ChoreItem.scss';

import UpdateModal from '../updateModal/UpdateModal';

const ChoreItem = ({ chore }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="chore">
      <div>{new Date(chore.createdAt).toLocaleString('en-US')}</div>
      <h2>{chore.task}</h2>
      {chore.user.map((user, i) => {
        return <p key={i}>{user.name}</p>;
      })}
      <button
        onClick={() => dispatch(deleteChore(chore._id))}
        className="close"
      >
        x
      </button>
      <button onClick={() => setIsOpen(!isOpen)} className="update">
        Update
      </button>
      <UpdateModal
        open={isOpen}
        chore={chore}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ChoreItem;
