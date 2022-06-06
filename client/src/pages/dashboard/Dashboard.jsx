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

  let monday = [];
  let tuesday = [];
  let wednesday = [];
  let thursday = [];
  let friday = [];
  let saturday = [];
  let sunday = [];

  for (let i = 0; i < chores.length; i++) {
    if (chores[i].day === 'monday') {
      monday.push(chores[i]);
    } else if (chores[i].day === 'tuesday') {
      tuesday.push(chores[i]);
    } else if (chores[i].day === 'wednesday') {
      wednesday.push(chores[i]);
    } else if (chores[i].day === 'thursday') {
      thursday.push(chores[i]);
    } else if (chores[i].day === 'friday') {
      friday.push(chores[i]);
    } else if (chores[i].day === 'saturday') {
      saturday.push(chores[i]);
    } else if (chores[i].day === 'sunday') {
      sunday.push(chores[i]);
    }
  }

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

      <div className="content">
        {chores.length > 0 ? (
          <>
            <section className="day">
              <h2>Monday</h2>
              {monday.length > 0 ? (
                <div className="chores">
                  {monday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
            <section className="day">
              <h2>Tuesday</h2>
              {tuesday.length > 0 ? (
                <div className="chores">
                  {tuesday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
            <section className="day">
              <h2>Wednesday</h2>
              {wednesday.length > 0 ? (
                <div className="chores">
                  {wednesday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
            <section className="day">
              <h2>Thursday</h2>
              {thursday.length > 0 ? (
                <div className="chores">
                  {thursday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
            <section className="day">
              <h2>Friday</h2>
              {friday.length > 0 ? (
                <div className="chores">
                  {friday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
            <section className="day">
              <h2>Saturday</h2>
              {saturday.length > 0 ? (
                <div className="chores">
                  {saturday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
            <section className="day">
              <h2>Sunday</h2>
              {sunday.length > 0 ? (
                <div className="chores">
                  {sunday.map((chore) => (
                    <ChoreItem key={chore._id} chore={chore} />
                  ))}
                </div>
              ) : (
                <h3>No chores for this day</h3>
              )}
            </section>
          </>
        ) : (
          <h3>No chores created yet</h3>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
