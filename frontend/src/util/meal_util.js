import axios from "axios";

export const getUserMeals = ({ userId, mealDate }) => {
  debugger 
  return axios.get(`/api/meals/user/${userId}/meals/${mealDate}`);
};

export const getMeal = (mealId) => {
  return axios.get(`/api/meals/${mealId}`);
};

