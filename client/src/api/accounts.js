const URL = 'http://localhost:3333/delta-pnl';
export const fetchDelta = (name, delta) => {
  const queryParams = `?name=${name}&delta=${delta}`;
  return fetch(`${URL}${queryParams}`).then(res => res.json());
};

// export const addBundle = (bundle) => {
//   return fetch(URL, {
//         method: "post",
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//           'Authorization': getJwt()
//         },
//         body:encoder(bundle)
//     }).then(res => res.json());
// };
//
// export const getBundle = id => {
//   return fetch(`${URL}/${id}`, {
//     headers: {'Authorization': getJwt() }
//   }).then(res => res.json());
// };
