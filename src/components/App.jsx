import { useReducer } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './Globalstyle';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      throw new Error();
  }
}
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementValue = type => {
    dispatch({ type });
    // this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, number) => {
      return acc + number;
    });
  };

  const countPositiveFeedbackPercentage = total => {
    return `${Math.round((state.good * 100) / total || 0)}`;
  };

  const checkCondition = () => {
    const { good, bad, neutral } = state;
    if (good !== 0 || bad !== 0 || neutral !== 0) {
      return (
        <Statistics
          state={state}
          onTotal={countTotalFeedback}
          onPositivePercentage={countPositiveFeedbackPercentage}
        />
      );
    } else {
      return <Notification message="There is no feedback"></Notification>;
    }
  };

  return (
    <>
      <GlobalStyle />
      <FeedbackOptions incrementValue={incrementValue} />
      {checkCondition()}
    </>
  );
};