import axios from 'axios';
import { message } from 'antd';

export default function (
  url: string,
  data: object = {},
  { showError = true }: { showError?: boolean } = {}
) {
  url = '/api' + url;
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        let data = e.response.data;

        data = data.message ? data : { message: '系统繁忙，请稍后再试' };
        if (showError) {
          message.error(data.message);
        }
        reject(data);
      });
  });
}
