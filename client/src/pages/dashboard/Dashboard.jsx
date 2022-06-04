import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Dashboard.scss';
import Spinner from '../../components/spinner/Spinner';
import ChoreForm from '../../components/choreForm/ChoreForm';
import ChoreItem from '../../components/choreItem/ChoreItem';
import { getChores, reset } from '../../features/chores/choreSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { chores, isLoading, isError, message } = useSelector(
    (state) => state.chores
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    if (user) {
      dispatch(getChores());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Chores Dashboard</p>
      </section>

      <ChoreForm />

      <section className="content">
        {chores.length > 0 ? (
          <div className="chores">
            {chores.map((chore) => (
              <ChoreItem key={chore._id} chore={chore} />
            ))}
          </div>
        ) : (
          <h3>No chores created yet</h3>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
