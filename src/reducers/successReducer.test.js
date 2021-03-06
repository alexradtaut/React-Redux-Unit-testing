import { actionTypes } from '../actions';
import successReducer from './';

test('returns default initial state of false when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState.success).toBe(false);
});

test('returns state of true upon receiving an action of CORRECT_GUESS', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState.success).toBe(true);
});
