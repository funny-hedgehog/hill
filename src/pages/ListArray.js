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
        "thumbnailUrl": "https://via.placeholder.com/150/315aa6",
        'aaaa': uuidv4(),
        'bbbb': uuidv4(),
        'cccc': uuidv4(),
        'dddd': uuidv4(),
        'eeee': uuidv4(),
        'ffff': uuidv4(),
        'gggg': uuidv4(),
        'hhhh': uuidv4(),
        'iiii': uuidv4(),
        'jjjj': uuidv4(),
        'kkkk': uuidv4(),
        'llll': uuidv4(),
        'mmmm': uuidv4(),
        'nnnn': uuidv4(),
        'oooo': uuidv4(),
        'pppp': uuidv4(),
        'qqqq': uuidv4(),
        'rrrr': uuidv4(),
        'ssss': uuidv4(),
        'tttt': uuidv4(),
        'uuuu': uuidv4(),
        'wwww': uuidv4(),
        'vvvv': uuidv4(),
        'xxxx': uuidv4(),
        'yyyy': uuidv4(),
        'zzzz': uuidv4(),
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