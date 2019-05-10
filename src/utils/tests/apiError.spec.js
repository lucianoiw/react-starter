import APIError from '../apiError';

describe('utils/apiError', () => {
  let status;
  let params;

  beforeEach(() => {
    status = 200;
    params = {
      name: 'Lorem Ipsum',
      message: 'Lorem Ipsum',
    };
  });

  it('Should returns an object after pass attributes', () => {
    const apiError = new APIError(status, params);

    expect(apiError).toBeTruthy();
  });

  it('Should return an object without pass attributes', () => {
    const apiError = new APIError();

    expect(apiError).toBeTruthy();
  });
});
