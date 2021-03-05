// Action Types
export const DATE = 0;
export const BEGIN_TIME = 1;

export const setSelectedDate = (selectedDate: any) => {
  return {
    type: DATE,
    payload: selectedDate,
  };
};

export const setBeginTime = (beginTime: any) => {
  return {
    type: BEGIN_TIME,
    payload: beginTime,
  };
};

const initialState = [
  {type: DATE, payload: '1.1.2021'},
  {type: BEGIN_TIME, payload: '7:30'},
];

const workTimeReducer = (state: any[] = initialState, action: any) => {
  switch (action.type) {
    case DATE:
    case BEGIN_TIME:
      let newState = [...state];
      newState[action.type].payload = action.payload;
      return newState;
    default:
      return state;
  }
};

export default workTimeReducer;
