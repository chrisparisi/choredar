import axios from 'axios';

const API_URL = 'api/v1/chores/';

// Create new chore
const createChore = async (choreData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, choreData, config);

  return response.data;
};

// Get chores
const getChores = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Update chore
const updateChore = async (choreId, choreData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + choreId, choreData, config);

  return response.data;
};

// Delete chore
const deleteChore = async (choreId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + choreId, config);

  return response.data;
};

const choreService = {
  createChore,
  getChores,
  updateChore,
  deleteChore,
};

export default choreService;
