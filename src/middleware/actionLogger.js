var action_count = 0;

export default ({ getState }) => next => action => {
  const ac = action_count;
  console.group(action.type, ac);
  action_count += 1;
  const ret = next(action);
  console.log(getState());
  console.groupEnd();
  return ret;
}
