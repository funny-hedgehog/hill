import React from 'react';

const urls1 = [
  'http://i1.wallbox.ru/wallpapers/main2/201719/gorod-doma-sumerki.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644855666_23-fikiwiki-com-p-kartinki-khd-kachestva-24.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206272_55-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-56.jpg',
  'https://gas-kvas.com/uploads/posts/2023-02/1675494480_gas-kvas-com-p-razreshenie-fonovogo-risunka-33.jpg',
  'https://www.zastavki.com/pictures/originals/2021Nature___Mountains_Tall_green_fir_trees_are_reflected_in_the_lake_against_the_background_of_mountains_154658_.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644918690_14-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-15.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206262_37-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-37.jpg',
  'https://i.pinimg.com/originals/0d/0c/da/0d0cda50d82a825d602ad45547112b0d.jpg',
  'https://i.pinimg.com/originals/de/31/a6/de31a6ee61dedcb9a9a1d699dd92ee9c.jpg',
  'https://img.badfon.ru/original/5517x3675/f/e6/gory-les-voda-nebo.jpg',
  'https://sneg.top/uploads/posts/2023-03/1678572700_sneg-top-p-sbornik-oboev-dlya-rabochego-stola-priroda-1.jpg',
  'https://wallbox.ru/wallpapers/main/201136/ozero-gory-oblaka-1050618.jpg',
  'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696418424_gas-kvas-com-p-kartinki-s-loshadmi-7.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644855650_29-fikiwiki-com-p-kartinki-khd-kachestva-30.jpg',
  'https://wp-s.ru/wallpapers/9/8/549551266186127/priroda-s-gorami-zakatom-na-ozere.jpg',
  'https://www.zastavki.com/pictures/originals/2012/Nature_Mountains__035412_.jpg',
  'https://gas-kvas.com/uploads/posts/2023-02/1675485246_gas-kvas-com-p-fonovie-risunki-na-rabochii-stol-visokogo-22.jpg',
  'https://img.goodfon.ru/original/2560x1600/f/37/ozero-el-priroda.jpg',
  'https://www.tapeciarnia.pl/tapety/normalne/176285_chmury_gory_jezioro_lasy_odbicie.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644855596_27-fikiwiki-com-p-kartinki-khd-kachestva-28.jpg',
  'https://sportishka.com/uploads/posts/2022-11/1667498610_30-sportishka-com-p-annamskie-gori-oboi-39.jpg',
  'https://w.forfun.com/fetch/83/83d7410ba47a83ef54d60269c917a63b.jpeg',

 'https://fikiwiki.com/uploads/posts/2022-02/1644855666_23-fikiwiki-com-p-kartinki-khd-kachestva-24.jpg',
 'https://www.esato.com/phonephotos/cam/samsung/sm_g900f/201406011711P0ER52.jpg',
 'https://nature.baikal.ru/phs/norm/84/84110.jpg',
 'https://prades.net/canada2004/493T1806.jpg',
 'https://i.pinimg.com/originals/55/49/0e/55490ee730c90b567d4d40bad287b6ca.jpg',
 'https://i.redd.it/v05doii2jwp31.jpg',
 'http://thereminder.ru/wp-content/uploads/2020/07/grand-canyon-crimea.jpg',
 'https://i.artfile.me/wallpaper/11-06-2013/4000x2667/priroda-reki-ozera-spirit-island-730985.jpg',
 'https://rondreizennoordamerika.nl/wp-content/uploads/2020/02/Valley-of-Fire-20190222-5N6A0728_1.jpg',
 'https://prades.net/canada2004/493T1914a.jpg',
 'https://photographylife.com/wp-content/uploads/2018/07/caPatchStart-1536x1103.jpg',
 'https://bugaga.ru/uploads/posts/2009-09/1251815154_01_09_2009_08628_philippe-sainte-laudy-6.jpg',
 'https://images.squarespace-cdn.com/content/v1/55c3df7ce4b0abe10a7ec1b9/1516168947908-K4NVIAE5KQDLFV10WAFQ/DJI_0140+-+Copy.jpg',
 'http://vsegda-pomnim.com/uploads/posts/2022-03/1647654770_66-vsegda-pomnim-com-p-gora-kostsyushko-foto-71.jpg',
];

const map = {
  'first': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
  'second': 'https://wallbox.ru/wallpapers/main2/201717/nebo-dereva-ozero-gory-les-vodoem.jpg',
}

function OverLoadedPage() {
  // const [url, setUrl] = React.useState('first')
  // const [photosSize, setPhotosSize] = React.useState(0)
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

      <ul>
        {urls1.map(item => {
          return (
            <li key={item} style={{listStyle: 'none'}}>
              <img
                alt={'image'}
                src={item}
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
