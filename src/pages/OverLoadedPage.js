import React from 'react';

const urls1 = [
  'http://i1.wallbox.ru/wallpapers/main2/201719/gorod-doma-sumerki.jpg',
  'https://www.zastavki.com/pictures/originals/2021Nature___Mountains_Tall_green_fir_trees_are_reflected_in_the_lake_against_the_background_of_mountains_154658_.jpg',
  'https://i.pinimg.com/originals/0d/0c/da/0d0cda50d82a825d602ad45547112b0d.jpg',
  // 'https://gas-kvas.com/uploads/posts/2023-02/1675494480_gas-kvas-com-p-razreshenie-fonovogo-risunka-33.jpg',
  // 'https://fikiwiki.com/uploads/posts/2022-02/1644855650_29-fikiwiki-com-p-kartinki-khd-kachestva-30.jpg',
  // 'https://img.goodfon.ru/original/1920x1200/2/2e/skalistye-gory-nacionalnyy.jpg',
  // 'https://4kwallpapers.com/images/wallpapers/konigssee-lake-germany-bavarian-alps-white-clouds-mountain-4023x2680-7208.jpg',
  // 'https://fikiwiki.com/uploads/posts/2022-02/1644855596_27-fikiwiki-com-p-kartinki-khd-kachestva-28.jpg',
  // 'https://wallpapers-fenix.eu/full/180814/172400873.jpg',
  // 'https://funart.top/uploads/posts/2021-04/1617233125_56-p-oboi-krasivie-gori-59.jpg',
  // 'https://img.goodfon.ru/original/1920x1080/b/ad/terex-o-k-rh120-e-karernyy.jpg',
  // 'https://proprikol.ru/wp-content/uploads/2022/10/kartinki-s-mezhdunarodnym-dnem-gor-16-scaled.jpg',
  // 'https://i.playground.ru/i/pix/1418390/image.jpg',
];

const urls2 = [
  'https://sneg.top/uploads/posts/2023-03/1678572700_sneg-top-p-sbornik-oboev-dlya-rabochego-stola-priroda-1.jpg',
  'https://img.goodfon.ru/original/2880x1800/e/21/maroon-lake-ozero-gory-derevya.jpg',
  'https://w.forfun.com/fetch/f6/f6344ac128b14d56675be186a789d8d1.jpeg',
  // 'https://wallbox.ru/wallpapers/main2/201717/nebo-dereva-ozero-gory-les-vodoem.jpg',
  // 'https://www.zastavki.com/pictures/originals/2012/Nature_Mountains__035412_.jpg',
  // 'https://w.forfun.com/fetch/33/33fdf2e52693b14bf401ab8042ed6274.jpeg',
  // 'https://w.forfun.com/fetch/38/38d60284763c25c9c932f92844f3166f.jpeg',
  // 'https://img.badfon.ru/original/5517x3675/f/e6/gory-les-voda-nebo.jpg',
  // 'https://w.forfun.com/fetch/f2/f2feb266ef2558749f2ce5c425ec831c.jpeg',
  // 'https://on-desktop.com/wps/2020Nature_The_sun_over_the_high_mountains_near_the_blue_lake_139286_.jpg',
  // 'https://wallbox.ru/wallpapers/main/201136/ozero-gory-oblaka-1050618.jpg',
  // 'https://w.forfun.com/fetch/a6/a609f352bbc5264204247b1125224c47.jpeg',
  // 'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
  // 'https://w.forfun.com/fetch/b4/b4061f05d1365648decb0cac791373a3.jpeg',
]

function OverLoadedPage() {
  const [url, setUrl] = React.useState(['first', 'first', 'first'])

  // React.useEffect(() => {
  //   // window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
  //   window.addEventListener('load', (event) => {
  //
  //     if (url === 'first') {
  //       console.log('Страница', url);
  //       setUrl('second')
  //     } else {
  //       console.log('Страница загружена', url);
  //       setUrl('first')
  //     }
  //
  //   });
  // }, [url])

  return (
    <div>
      <h1>OverLoadedPage</h1>
      {/*<img onLoad={() => {*/}
      {/*  if (url === 'first') {*/}
      {/*    console.log('Страница', url);*/}
      {/*    setUrl('second')*/}
      {/*  } else {*/}
      {/*    console.log('Страница загружена', url);*/}
      {/*    setUrl('first')*/}
      {/*  }*/}
      {/*}} alt={url} src={map[url]} width={600} />*/}

      <ul>
        {url.map((item, index) => {
          return (
            <li key={index}>
              <img
                onLoad={() => {
                  const arr = url
                  arr[index] = item === 'first' ? 'second' : 'first'
                  setUrl([...arr])
                }}
               alt={`${index}`}
               src={item === 'first' ? urls1[index] : urls2[index]}
               width={600}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default OverLoadedPage;
