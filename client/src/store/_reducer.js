const initialState = {
  foo: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'foo': {
      return {
        ...state,
        foo: true,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
