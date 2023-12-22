import React from 'react';

const urls1 = [
  'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
];

const urls2 = [
  'https://wallbox.ru/wallpapers/main2/201717/nebo-dereva-ozero-gory-les-vodoem.jpg',
]

const map = {
  'first': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
  'second': 'https://wallbox.ru/wallpapers/main2/201717/nebo-dereva-ozero-gory-les-vodoem.jpg',
}

function OverLoadedPage() {
  const [url, setUrl] = React.useState('first')
  const [photosSize, setPhotosSize] = React.useState(0)
  const [arraySize, setArraySize] = React.useState(0)

  const imgRef = React.useRef();

  React.useEffect(() => {
    console.log('imgRef', imgRef.current.alt)
    imgRef.current.onload = function() {
      if (url === 'first') {
        setUrl('second')
        setPhotosSize(state => state = photosSize + 1.1)
      } else {
        setUrl('first')
        setPhotosSize(state => state = photosSize + 1.1)
      }
    };
  }, [url])


  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        return response.json()
      })
      .then(json => setArraySize(s => s += 135))
      .catch((e) => console.log(`Error ${e}`))
  }, [arraySize]);

  return (
    <div>
      <h1>OverLoadedPage</h1>
      <h2>Объём загруженного массива - {Math.round(arraySize / 1000)} MB</h2>
      <h2>Объём загруженных фотографий  - {Math.trunc(photosSize)} MB</h2>

      <img
        ref={imgRef}
        style={{opacity: 0}}
        alt={url}
        src={map[url]}
        width={600}
      />

      {/*<img*/}
      {/*  style={{opacity: 0}}*/}
      {/*  onLoad={() => {*/}
      {/*    const arr = url*/}
      {/*    arr[index] = item === 'first' ? 'second' : 'first'*/}
      {/*    setUrl([...arr])*/}
      {/*    setPhotosSize(s => s += 1.1)*/}
      {/*  }}*/}
      {/* alt={`${index}`}*/}
      {/* src={item === 'first' ? urls1[index] : urls2[index]}*/}
      {/* width={600}*/}
      {/*/>*/}
    </div>
  );
}

export default OverLoadedPage;

/*
onLoad={() => {
          if (url === 'first') {
            setUrl('second')
            setPhotosSize(state => state = photosSize + 1.1)
          } else {
            setUrl('first')
            setPhotosSize(state => state = photosSize + 1.1)
          }

        }}
 */
