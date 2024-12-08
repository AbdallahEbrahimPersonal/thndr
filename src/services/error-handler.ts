import {ERROR_MESSAGES, ERROR_STATUS_CODES} from '@/utils/error-codes';
import {AxiosError} from 'axios';
import Toast from 'react-native-toast-message';

export function handleError(error: AxiosError) {
  const statusCode = error.response?.status;
  const message = ERROR_MESSAGES?.[statusCode as ERROR_STATUS_CODES];

  Toast.show({
    type: 'error',
    text1: message,
  });
}
