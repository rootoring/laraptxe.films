// modules/queryParams.js

function buildQueryParams(params) {
  const query = new URLSearchParams();

  for (const key in params) {
    if (params[key] !== undefined && params[key] !== null) {
      if (Array.isArray(params[key])) {
        params[key].forEach((value) => {
          query.append(key, value);
        });
      } else if (typeof params[key] === "object") {
        for (const subKey in params[key]) {
          if (Array.isArray(params[key][subKey])) {
            params[key][subKey].forEach((value) => {
              query.append(`${key}.${subKey}`, value);
            });
          } else {
            query.append(`${key}.${subKey}`, params[key][subKey]);
          }
        }
      } else {
        query.append(key, params[key]);
      }
    }
  }

  return query.toString();
}
export default buildQueryParams;
