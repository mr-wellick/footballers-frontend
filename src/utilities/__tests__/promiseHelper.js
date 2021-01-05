import promiseHelper from '../promiseHelper';

test('Promise helper handling a rejected promise', async () => {
  const promise = new Promise((resolve, reject) => {
    reject('Error');
  });

  const [err, res] = await promiseHelper(promise);

  expect(err).toEqual('Error');
  expect(res).toEqual(undefined);
});
