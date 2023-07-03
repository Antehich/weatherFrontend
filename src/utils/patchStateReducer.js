export default function patchStateReducer(state, action) {
  const keys = Object.keys(action.payload);
  keys.forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    state[key] = action.payload[key];
  });
}
