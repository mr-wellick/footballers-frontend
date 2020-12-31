const promiseHelper = (promise) =>
  promise
    .then((res) => res.json())
    .then((data) => [undefined, data])
    .catch((err) => [err, undefined]);

export default promiseHelper;
