import axios from 'axios';

import Request from '../request';

jest.mock('axios');

describe('utils/request', () => {
  let options;
  let successData;
  let exceptionData;

  beforeEach(() => {
    options = {
      headers: {},
    };

    successData = {
      status: 200,
      data: {
        company: 'XP',
      },
    };

    exceptionData = {
      status: 400,
      json: () => Promise.resolve({
        name: 'Lorem Ipsum',
        message: 'Lorem Ipsum',
      }),
    };
  });

  it('Should request an URL successfully', async () => {
    axios.mockResolvedValue(successData);
    const request = await Request('https://www.xpi.com.br/', options);
    expect(request.data.company).toBe('XP');
  });

  it('Should throws an exception', async () => {
    axios.mockResolvedValue(exceptionData);
    try {
      const request = await Request('https://www.xpi.com.br/');
    } catch (e) {
      expect(e.status).toBe(400);
    }
  });
});
