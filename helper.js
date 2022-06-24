export const handlePromise = async (promise) => {
  try {
    return [await promise, null];
  } catch (error) {
    return [null, error];
  }
};

export const dbError = (error) => ({
  error: error,
  data: {},
});

export const successResponse = (data) => ({
  error: null,
  data: data,
});

export const badRequest = (message) => ({
  error: {
    message: message,
    code: 400,
  },
  data: {},
});
