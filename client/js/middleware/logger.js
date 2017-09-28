
const logger = store => next => action => {
  if (typeof action === 'function') {
    // Function action, pass it on
    return next(action);
  }
  if (action.types) {
    // Declare API call action, pass it on:
    return next(action)
  }
  if(process && process.env && process.env.NODE_ENV === "development") {
    console.group("Action | " + action.type);
    console.log('dispatching', action);
  }
  let result = next(action);
  if(process && process.env && process.env.NODE_ENV === "development") {
    console.log('next state', store.getState());
    console.groupEnd(action.type);
  }
  return result;
};
export default logger