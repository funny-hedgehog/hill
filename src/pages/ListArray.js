import React from "react";
import { v4 as uuidv4 } from "uuid";
import data4 from './data4.json';

const arr = []

export default React.memo(
  function ListArray() {
    const [product, setProducts] = React.useState([])
    const timer = React.useRef()

    const handleAddItem = () => {
      const newItem = {
        "albumId": 100,
        "id": uuidv4(),
        "title": "qui quo cumque distinctio aut voluptas",
        "url": "https://via.placeholder.com/600/315aa6",
        "thumbnailUrl": "https://via.placeholder.com/150/315aa6"
      }
      console.log('GGG')
      setProducts((prev) => [...prev, newItem])
    }

    React.useEffect(() => {
      timer.current = setInterval(handleAddItem, 50)

      return () => {
        clearInterval(timer.current)
      }
    }, [])

    return (
      <>
        <ul>
          {product.map(({id}) => {
            return (
              <li key={id}>{id}</li>
            )
          })}
        </ul>
        {/*<button onClick={handleAddItem}>*/}
        {/*  CLICK*/}
        {/*</button>*/}
      </>

    );
  },
  (prevProps, nextPropx) => {
    return true;
  },
);