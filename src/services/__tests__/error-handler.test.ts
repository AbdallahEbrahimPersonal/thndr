import { AxiosError, AxiosResponse } from 'axios';
import { handleError } from '../error-handler';
import Toast from 'react-native-toast-message';
import { ERROR_MESSAGES, ERROR_STATUS_CODES } from '@/utils/error-codes';

describe('handleError', () => {
  it('Should show correct message', () => {
    const error = new Error() as AxiosError;
    error.response = {
      status: ERROR_STATUS_CODES.NOT_FOUND,
    } as AxiosResponse;

    handleError(error as AxiosError);

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'error',
      text1: ERROR_MESSAGES[ERROR_STATUS_CODES.NOT_FOUND],
    });
  });
});
