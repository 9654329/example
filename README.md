#Build

    docker build --add-host="archive.ubuntu.com:160.26.2.187" -t vue.js .

#Run

    docker run -it --rm -p 8080:8080 -v $(pwd):/home/app vue.js

#npm

    npm install

#DevServer

    npm run start


#参考資料
- [Vue.js](https://jp.vuejs.org/)
- [vue.js + typescript = vue.ts ことはじめ - Qiita](https://qiita.com/nrslib/items/be90cc19fa3122266fd7)
- [Vue.js サンプルコード - Qiita](https://qiita.com/yamazaki3104/items/c793d77a19f104c2a63e)
- [最新版で学ぶwebpack 4入門 - Babel 7でES2018環境の構築（React, Vue, Three.js, jQueryのサンプル付き） - ICS MEDIA](https://ics.media/entry/16028/)
