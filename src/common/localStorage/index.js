const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state.reducers);
  localStorage.setItem('state', serializedState);
};

const storage = { loadState, saveState };

module.exports = storage;
