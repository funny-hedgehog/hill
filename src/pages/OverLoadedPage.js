import React from 'react';
import ListPictures from "./ListPictures";
import ListArray from "./ListArray";

function OverLoadedPage() {
  // const [url, setUrl] = React.useState('first')
  const [photosSize, setPhotosSize] = React.useState(0)
  const [arraySize, setArraySize] = React.useState(0)

  // const imgRef = React.useRef();

  // React.useEffect(() => {
  //   console.log('imgRef', imgRef.current.alt)
  //   imgRef.current.onload = function() {
  //     if (url === 'first') {
  //       setUrl('second')
  //       setPhotosSize(state => state = photosSize + 1.1)
  //     } else {
  //       setUrl('first')
  //       setPhotosSize(state => state = photosSize + 1.1)
  //     }
  //   };
  // }, [url])


  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then(response => response.json())
  //     .then(json => {
  //       // console.log('json', json)
  //       setArraySize(s => s += 135)
  //     })
  //     .catch((e) => console.log(`Error ${e}`))
  // }, []);

  return (
    <div>
      <h1>OverLoadedPage</h1>
      {/*<h2>Объём загруженного массива - 1 MB</h2>*/}
      <h2>Количество загруженных изображений - {photosSize} штук</h2>
      <ListPictures setPhotosSize={setPhotosSize} />
      <ListArray />
    </div>
  );
}

export default OverLoadedPage;
