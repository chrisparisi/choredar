import React, { useEffect, useState } from 'react';
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

  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  useEffect(() => {
    const mondayFilter = chores.filter((chore) => chore.day === 'Monday');
    const tuesdayFilter = chores.filter((chore) => chore.day === 'Tuesday');
    const wednesdayFilter = chores.filter((chore) => chore.day === 'Wednesday');
    const thursdayFilter = chores.filter((chore) => chore.day === 'Thursday');
    const fridayFilter = chores.filter((chore) => chore.day === 'Friday');
    const saturdayFilter = chores.filter((chore) => chore.day === 'Saturday');
    const sundayFilter = chores.filter((chore) => chore.day === 'Sunday');

    setMonday(mondayFilter);
    setTuesday(tuesdayFilter);
    setWednesday(wednesdayFilter);
    setThursday(thursdayFilter);
    setFriday(fridayFilter);
    setSaturday(saturdayFilter);
    setSunday(sundayFilter);
  }, [chores]);

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
