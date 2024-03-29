import React from "react";
import {v4 as uuidv4} from "uuid";

const urls1 = [
  'http://i1.wallbox.ru/wallpapers/in2719/gorod-doma-sumerki.jpg',
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
  'http://vsegda-pomnim.com/uploads/posts/2022-03/1647654770_66-vsegda-pomnim-com-p-gora-kostsyushko-foto-71.jpg', // 35

  'https://sportishka.com/uploads/posts/2022-11/1667504980_37-sportishka-com-p-zamki-v-gorakh-oboi-39.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663221613_27-mykaleidoscope-ru-p-zamki-srednevekovya-oboi-27.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663399594_40-mykaleidoscope-ru-p-zamok-v-bavarii-noishvanshtain-oboi-44.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663242816_43-mykaleidoscope-ru-p-starinnie-zamki-vkontakte-46.jpg',
  'https://s2.best-wallpaper.net/wallpaper/2880x1800/2111/Vajdahunyad-Castle-Hungary-Budapest-green-trees-pond_2880x1800.jpg',
  'https://dreempics.com/uploads/posts/2018-03/1520166569_zamok-2.jpg', // 40
  'https://fikiwiki.com/uploads/posts/2022-02/1644927707_46-fikiwiki-com-p-krasivie-kartinki-zamki-55.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644927657_8-fikiwiki-com-p-krasivie-kartinki-zamki-8.jpg',
  'https://i.pinimg.com/originals/4e/46/d0/4e46d0e0943f63b15a0f0f343679c9e3.jpg',
  'https://idei.club/raznoe/uploads/posts/2022-12/1671878582_idei-club-p-zamok-noshvaiten-dizain-vkontakte-43.jpg',
  'https://wallbox.ru/resize/1920x1200/wallpapers/main2/201730/reka-skala-zamok.jpg',
  'https://www.sunhome.ru/i/wallpapers/73/zamok-i-les.orig.jpg',
  'https://w.forfun.com/fetch/6a/6a6b84330b71cf3939af7f74ac9974b7.jpeg',
  'https://gas-kvas.com/uploads/posts/2023-02/1675490084_gas-kvas-com-p-fonovie-risunki-dlya-rabochego-stola-zamki-8.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663221537_15-mykaleidoscope-ru-p-zamki-srednevekovya-oboi-15.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663221597_9-mykaleidoscope-ru-p-zamki-srednevekovya-oboi-9.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663399621_43-mykaleidoscope-ru-p-zamok-v-bavarii-noishvanshtain-oboi-48.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666398533_28-mykaleidoscope-ru-p-zamok-volkenshtein-oboi-30.jpg',
  'https://gas-kvas.com/uploads/posts/2023-02/1675490081_gas-kvas-com-p-fonovie-risunki-dlya-rabochego-stola-zamki-3.jpg',
  'http://s1.1zoom.ru/big7/688/Pond_Castles_Sky_France_577481_2560x1532.jpg',
  'https://w-dog.ru/wallpapers/0/55/506345611724953/blokirovka-les-bavariya-germaniya-remont-zamok-nojshvanshtajn-skaly.jpg',
  'https://img.goodfon.ru/original/2560x1600/2/d4/neuschwanstein-castle-bavaria-412.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663399579_10-mykaleidoscope-ru-p-zamok-v-bavarii-noishvanshtain-oboi-11.jpg',
  'https://w.forfun.com/fetch/35/35097d27910d4ca93f93f7f5cdec5964.jpeg',
  'https://fotonastenu.ru/800/600/https/daytrip.imgix.net/eltz-castle.jpg',
  'https://sportishka.com/uploads/posts/2022-04/1650634701_62-sportishka-com-p-zamok-na-gore-krasivo-foto-72.jpg',
  'https://w.forfun.com/fetch/09/092474c77c83b89d83fe7ef46628182c.jpeg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663351472_1-mykaleidoscope-ru-p-kamennii-zamok-krasivo-1.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663385931_13-mykaleidoscope-ru-p-zamok-shvainshtaiger-vkontakte-13.jpg',
  'https://udimir.com/wp-content/uploads/2019/12/skazochnye-zamki-kartinki.jpg',
  'https://wallbox.ru/resize/2560x1440/wallpapers/main/201252/zamok-shotlandiya-park-193944d.jpg',
  'https://wp-s.ru/wallpapers/2/2/516266524299056/zamok-vo-francii-pod-tuchami.jpg',
  'https://w.forfun.com/fetch/ab/ab0dd97c1fefe7c1a9779ca7b5f75bd6.jpeg',
  'https://w-dog.ru/wallpapers/9/4/529973136828491/elc-zamok-zamok-elc-germaniya-gora-les-derevya.jpg',
  'https://w.forfun.com/fetch/29/2961d863ddb977feefa0555ec595e523.jpeg',
  'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695842985_gas-kvas-com-p-kartinki-zamok-33.jpg',
  'https://s2.best-wallpaper.net/wallpaper/2880x1800/2001/Limburg-castle-trees-clouds-Germany_2880x1800.jpg',
  'https://www.fonstola.ru/pic/201502/1680x1050/fonstola.ru_160934.jpg',
  'https://w-dog.ru/wallpapers/9/11/436292589492376/zamok-nojshvanshtajn-bavariya-germaniya-alpy-osen-gora-velikolepie-zamok-nojshvanshtajn.jpg',
  'https://w-dog.ru/wallpapers/9/8/523858433464999/nebo-oblaka-zakat-zamok-bashnya-derevya-ozero-reka.jpg',
  'https://wp-s.ru/wallpapers/9/11/552519861416847/tainstvennyj-zamok-v-zimnem-lesu.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644927698_2-fikiwiki-com-p-krasivie-kartinki-zamki-2.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663221545_23-mykaleidoscope-ru-p-zamki-srednevekovya-oboi-23.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666398523_12-mykaleidoscope-ru-p-zamok-volkenshtein-oboi-12.jpg',
  'https://w-dog.ru/wallpapers/9/4/498509120220004/nebo-oblaka-prud-lebed-derevya-dvorec-zamok.jpg',
  'https://gas-kvas.com/uploads/posts/2023-02/1675490089_gas-kvas-com-p-fonovie-risunki-dlya-rabochego-stola-zamki-18.jpg',
  'https://w.forfun.com/fetch/0f/0f84aeed1a4802394720f64eed7b4254.jpeg',
  'https://w.forfun.com/fetch/11/11b67b02ee1a663cc544117fd5e332f2.jpeg?w=1470&r=0.5625',
  'https://w.forfun.com/fetch/2d/2d09b2fe6474a8be7a861e0155ac8bee.jpeg',
  'https://w.forfun.com/fetch/64/64aece9d0c58c0fcd9f75a0bef9c45ba.jpeg',
  'https://wallbox.ru/resize/1920x1080/wallpapers/main/201251/germaniya-shverin-zamok-9d494f2.jpg',
  'https://w-dog.ru/wallpapers/2/6/311306585299899/zamok-shverin-germaniya-shverinskij-zamok-park-prud-skulptury.jpg',
  'https://w-dog.ru/wallpapers/10/1/549481682305027/sergej-dolya-zamok-reka-klen-park.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644927752_32-fikiwiki-com-p-krasivie-kartinki-zamki-37.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666398522_19-mykaleidoscope-ru-p-zamok-volkenshtein-oboi-19.jpg',
  'https://wp-s.ru/wallpapers/2/2/440734200747551/krasivyj-pejzazh-starinnogo-zamka.jpg',
  'https://sportishka.com/uploads/posts/2022-04/1650671037_41-sportishka-com-p-zamok-norshteinvain-krasivo-foto-42.jpg',
  'https://i.artfile.ru/2560x1600_1497419_[www.ArtFile.ru].jpg',
  'https://w.forfun.com/fetch/38/389eff4762d6e673e087e3a3c79a07d7.jpeg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663221568_56-mykaleidoscope-ru-p-zamki-srednevekovya-oboi-64.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644927695_47-fikiwiki-com-p-krasivie-kartinki-zamki-56.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663332151_31-mykaleidoscope-ru-p-drevnii-zamok-dostoprimechatelnosti-32.jpg',
  'https://w.forfun.com/fetch/af/af2322908aa531f4fef5519f3365aec0.jpeg',
  'https://w-dog.ru/wallpapers/4/6/456615569307065/bavarskij-zamok-na-xolmax-sredi-lesa.jpg',
  'https://img.goodfon.ru/wallpaper/original/0/e8/germaniia-bavariia-priroda-peizazh-lesa-osen-khoenshvangau-z.jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663460222_23-mykaleidoscope-ru-p-osennii-zamok-pinterest-24.jpg',
  'https://i.artfile.ru/2000x1412_1147036_[www.ArtFile.ru].jpg',
  'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663339914_3-mykaleidoscope-ru-p-zamki-bavarii-dostoprimechatelnosti-3.jpg',
  'https://gas-kvas.com/uploads/posts/2023-02/1675490091_gas-kvas-com-p-fonovie-risunki-dlya-rabochego-stola-zamki-21.jpg',
  'https://www.wallpaperup.com/uploads/wallpapers/2012/05/29/3641/b41d163f68ae901407113a5d67aa1ddf-1400.jpg',
  'http://i1.wallbox.ru/wallpapers/main2/201723/14969558395939bbbf71b958.27381869.jpg',
  'https://w.forfun.com/fetch/a7/a77703eaa0e65e03ade4d273ebde8b77.jpeg',
  'https://w.forfun.com/fetch/47/471c2eafa2517c5af552bfecb73e72e4.jpeg',
  'https://u.9111s.ru/uploads/202201/15/0710a76cedfb09f2a72703bc384e9199.jpg',
  'https://img.goodfon.ru/original/1920x1080/1/18/frantsiia-osen-zamok-missiiak.jpg',
  'https://w.forfun.com/fetch/59/591afede5ccecc41dc4f99bb7076430f.jpeg',
  'https://w.forfun.com/fetch/4d/4d47c3e73a56f96dce4743bce06a2d88.jpeg', // 70
  'https://w.forfun.com/fetch/a2/a2d0571178a1a205aac1139e100ed1a8.jpeg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644860165_2-fikiwiki-com-p-kartinki-krasivikh-gor-3.jpg',
  'https://catherineasquithgallery.com/uploads/posts/2021-03/1614636714_7-p-fon-gori-dlya-fotoshopa-10.jpg',
  'https://proprikol.ru/wp-content/uploads/2022/10/kartinki-s-mezhdunarodnym-dnem-gor-16-scaled.jpg',
  'https://proprikol.ru/wp-content/uploads/2022/10/kartinki-s-mezhdunarodnym-dnem-gor-26.jpg',
  'https://wp-s.ru/wallpapers/9/17/456201870440909/pejzazh-krasivyx-gor-ryadom-s-vodoj.jpg',
  'https://top-fon.com/uploads/posts/2023-01/1674884454_top-fon-com-p-fon-dlya-prezentatsii-gori-kavkaza-44.jpg',
  'https://w.forfun.com/fetch/83/8353801c5777de97f0cf9d44e8165c33.jpeg',
  'https://w-dog.ru/wallpapers/10/2/495566523171216/ozero-gory-oblaka.jpg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644918679_26-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-30.jpg',
  'https://2.bp.blogspot.com/-aRGdQktz6ck/XFcxe-c3o9I/AAAAAAAACCQ/J97a-e3zXL4A1jmTNc7g-xbSHk8WPOYsACKgBGAs/w3840-h2400-p-k-no-nu/mountain-clouds-landscape-scenery-65-4K.jpg',
  'https://top-fon.com/uploads/posts/2023-01/1674966530_top-fon-com-p-fon-dlya-prezentatsii-priroda-gori-206.jpg',
  'https://klike.net/uploads/posts/2022-09/1662088411_j-2.jpg',
  'https://w.forfun.com/fetch/04/04090cda03b9bcc625fa7464c954c993.jpeg',
  'https://w.forfun.com/fetch/52/5261c64ab9974963f4437d509bf7a290.jpeg',
  'https://w.forfun.com/fetch/0c/0c83ca5e6865242ef5d01292230b4d59.jpeg',
  'https://w.forfun.com/fetch/28/28244fd0fdb3d8fcab1ee7eecd28161a.jpeg',
  'https://w.forfun.com/fetch/e8/e8c0f11bac7e169cb991cf3470fa97e5.jpeg',
  'https://w.forfun.com/fetch/ab/ab85d1e51d3bf1b535e686653a61a923.jpeg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644860147_13-fikiwiki-com-p-kartinki-krasivikh-gor-18.jpg',
  'https://sportishka.com/uploads/posts/2022-11/1667498610_30-sportishka-com-p-annamskie-gori-oboi-39.jpg',
  'https://w.forfun.com/fetch/3b/3b42d756b4d646dad750fb39d2464a6a.jpeg',
  'https://w.forfun.com/fetch/d4/d4b2e2a0f31432097564c3e02d3cd661.jpeg',
  'https://w.forfun.com/fetch/b0/b0779cf7658be72dc7ba53108e55ebef.jpeg',
  'https://w.forfun.com/fetch/4f/4fe850574d353d4a18e378891be8fff0.jpeg',
  'https://rare-gallery.com/uploads/posts/102772-alps-mountain-winter-fog-5k.jpg',
  'https://w.forfun.com/fetch/0d/0d1db3f822f4ab98a868c98178966dc9.jpeg',
  'https://mobimg.b-cdn.net/v3/fetch/70/70751733b18097ee34da15425563c9c3.jpeg',
  'https://w.forfun.com/fetch/c5/c5f926cd5b766950c389d63058ab78bc.jpeg',
  'https://w.forfun.com/fetch/0c/0c6f0f4213a88bac0049dfae6dd3c4bc.jpeg',
  'https://w.forfun.com/fetch/1a/1a63276c52f1d9c08b048d6d5ff5c9b5.jpeg',
  'https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-30.jpg',
  'https://w.forfun.com/fetch/58/58328e3c0fe324b77a83b33dec2853c6.jpeg',
  'https://wp-s.ru/wallpapers/10/10/427582456501650/krasivaya-gornaya-mestnost-s-ozerom.jpg',
  'https://www.zastavki.com/pictures/originals/2020Nature___Rivers_and_lakes_Fast_mountain_river_against_the_background_of_mountains_in_the_forest_145416_.jpg',
  'https://s1.1zoom.me/big3/595/412128-svetik.jpg',
  'https://puzzleit.ru/files/puzzles/191/190674/_original.jpg',
  'https://w.forfun.com/fetch/ee/eea078a807e942eb8c069df537ed6764.jpeg',
  'https://fikiwiki.com/uploads/posts/2022-02/1644860172_12-fikiwiki-com-p-kartinki-krasivikh-gor-17.jpg',
  'https://w.forfun.com/fetch/fb/fbb6ca823f2f99c48dd083b55bfc0b35.jpeg',
  'https://w.forfun.com/fetch/ed/edadee7ce4c8640def470c8f5c6346a7.jpeg',
  'https://w-dog.ru/wallpapers/2/98/399366588096332/zelen-les-bereg-voda-nebo-sneg-gory.jpg',
  'https://w.forfun.com/fetch/36/36b261d11b5bb163fdbed3f47740092a.jpeg',
  'https://wp-s.ru/wallpapers/9/8/549551266186127/priroda-s-gorami-zakatom-na-ozere.jpg',
  'https://c.wallhere.com/photos/a3/43/mountains_high_snow-988481.jpg!d',
  'https://vsegda-pomnim.com/uploads/posts/2022-03/1647455066_11-vsegda-pomnim-com-p-ozero-gornoe-foto-13.jpg',
  'https://wp-s.ru/wallpapers/9/12/492974514481499/krasivoe-izobrazhenie-gor-v-italii.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg',
  'https://vsegda-pomnim.com/uploads/posts/2022-03/1648741854_15-vsegda-pomnim-com-p-krasivoe-ozero-v-gorakh-foto-16.jpg',
  'https://w.forfun.com/fetch/e4/e4a89f602e51afdf620f66a1cdaf04dc.jpeg',
  'https://w.forfun.com/fetch/c0/c0e820792e8131dbc2cafe6154fd004b.jpeg',
  'https://w-dog.ru/wallpapers/3/7/496536041063008/solnce-saditsya-za-gory-i-osveshhaet-derevya.jpg',
  'https://w.forfun.com/fetch/be/be111262a288616a763666a9a95bfe98.jpeg',
  'https://images.wallpaperscraft.ru/image/single/gory_ozero_fotoshop_116723_2560x1600.jpg',
  'https://w.forfun.com/fetch/75/75e67e6c946bcadca001cf8dc1f247d3.jpeg',
  'https://w.forfun.com/fetch/97/97d92b1963479db08b8bbe336e4c6488.jpeg?w=1470&r=0.5625',
  'https://w.forfun.com/fetch/a6/a6af804668e3faeb2c365007d170835f.jpeg?w=1470&r=0.5625',
  'https://w.forfun.com/fetch/95/95a2e631bd6720f13c0426804d985e6b.jpeg?w=1470&r=0.5625',
  'https://w.forfun.com/fetch/d8/d86bd391b8476c2308717c0948116a1e.jpeg?w=1200&r=0.5625',
  'https://w.forfun.com/fetch/a3/a33cd092877345730d04a20a6f9c9009.jpeg?w=1200&r=0.5625',
  'https://w.forfun.com/fetch/e2/e246da6d6457592d64fa670ce6fe1124.jpeg?w=1470&r=0.5625',
  'https://gas-kvas.com/uploads/posts/2023-02/1675496721_gas-kvas-com-p-fonovie-risunki-dlya-rabochego-stola-na-ve-26.jpg',
  'https://w.forfun.com/fetch/92/928c3f369543f6403471d42d2b6b38f9.jpeg',
  // '',
  // '',
  // '',
  //
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  //
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  //
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  //
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
  // '',
];

export default React.memo(
  function ListPictures({setPhotosSize}) {
    const [num, setNum] = React.useState(0)

    const handleChangeItem = () => {
      if (num < 130) {
        setNum((prev) => prev + 1)
      } else {
        setNum(0)
      }
    }

    return (
      <div>
        <img
          onLoad={(e) => {
            setPhotosSize(s => s += 1)
            setTimeout(handleChangeItem, 200)
          }}
          onError={(error) => handleChangeItem()}
          alt='some image'
          src={urls1[num]}
          style={{width: '90%'}}
        />
      </div>
    );
  },
  (prevProps, nextPropx) => {
    return true;
  },
);

/*
<ul>
  {urls1.map(item => {
    return (
      <li key={item} style={{listStyle: 'none'}}>
        <img
          onLoad={(e) => setPhotosSize(s => s += 1)}
          alt='imageYYYYY'
          src={item}
          width={600}
        />
      </li>
    )
  })}
</ul>
 */