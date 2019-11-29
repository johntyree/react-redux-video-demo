var action_count = 0;

export default ({ getState }) => next => action => {
  const ac = action_count;
  action_count += 1;
  console.log('START', ac, action);
  const ret = next(action);
  console.log('END  ', ac, getState());
  return ret;
}
