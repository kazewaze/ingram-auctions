/*
*  Helper method for api middleware.
*  Waits for middleware to execute before moving on.
*  Throws an error if found in middleware.
*  This function was provided by Next.js Documentation.
*  https://nextjs.org/docs/api-routes/api-middlewares
*/

export default function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};