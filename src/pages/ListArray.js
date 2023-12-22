import React from "react";
import data4 from './data4.json';

const arr = []

export default React.memo(
  function ListArray() {
    // React.useEffect(() => {
    //   for (let i = 0; i < 100; i++) {
    //     const obj = {
    //       "albumId": 100,
    //       "id": i,
    //       "title": "qui quo cumque distinctio aut voluptas",
    //       "url": "https://via.placeholder.com/600/315aa6",
    //       "thumbnailUrl": "https://via.placeholder.com/150/315aa6"
    //     }
    //
    //     arr.push(obj)
    //   }
    // }, [arr])

    return (
      <ul>
        {data4.map(({id}) => {
          return (
            <li key={id}>{id}</li>
          )
        })}
      </ul>
    );
  },
  (prevProps, nextPropx) => {
    return true;
  },
);