# Node-Video-Scraper

v0.01 bate -- 2016-06-24

<img src="https://github.com/tommyboy326/Node-Video-Scraper/blob/master/public/images/preview_img.jpg" width="100%">


進入課程要用Node JS 做爬蟲後再做分析rebuild成網站

Node JS ->抓資料 ->丟到NoSQL -> API方式

rebuild網站 -> Template(index.html) -> 內容用API方式跟NoSQL要JSON產生

練習的功能:

  1.抓取資料[Node JS]

    A.確認網站後抓取ifream裡面的資料 parser 出 dailymotion 的play id 
      參考[https://developer.dailymotion.com/]
      參考[https://www.youtube.com/yt/dev/zh-TW/api-resources.html]

  2.MongoDB CRUD & REST[Node JS]

    A.DB分三大塊
      1.使用者資料跟觀看資料
      2.影片類型排名
      3.影片資訊
        ##DB樣式暫時用這樣
        {
          "_id": ObjectID("5772390e158571181f0ee638"),
          "drama_zh_TW_name": "小豆豆電視台",
          "drama_en_name": "Totto Television",
          "drama_cover":"images/totto-terebi.jpg",
          "drama_ja_name": " トットてれび",
          "drama_description": "1953年，電視節目正式向全日本民眾放送。作為NHK的專屬女演員，黑柳徹子見證了電視業的興起與繁榮。在漫長的電視之旅上，她與森繁久彌、渥美清、阪本九、向田邦子等知名人士傾情交流，結下了深厚的友情。單純可愛又迷糊的小豆豆，以她固有的方式在娛樂圈書寫了濃重的一筆……",
          "cast": [
              {
                  "real_Nmae": "滿島光",
                  "indrama_Name": "黒柳徹子"
              },
              {
                  "real_Nmae": "中村獅童",
                  "indrama_Name": "渥美清"
              },
              {
                  "real_Nmae": "MIMURA",
                  "indrama_Name": "向田邦子"
              }
          ],
          "ep": [
              {
                  "epNumber": 1,
                  "videoLink": [
                      {
                          "siteNmae": "dailymotion",
                          "videoID": "k28MhFQlqHvEkihiHEk"
                      }
                  ]
              }
          ],
          "drama_country": "Japan"
        }
        ##

    B.使用者 oAuth [node js passport 實做]
      參考[http://mongodb.github.io/node-mongodb-native/]

    C.DB Code 
      語言ISO 639參考[https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]

  3.Template[Html]
    index.html

  4.前端互動javascript[Base On jQuery]

    A.點擊影片ICONE 
      I.Ajax抓取 影片詳細資料 集數

    B.點擊開始影片
      I.播放iFream[Full Scream]
      II.回傳使用者的興趣 觀看集數
      III.如果可以 再撥放完時 直接續撥下一集

  5.後台管理[暫定 還沒有想法]


  6.喜歡影片類型推薦


網站類型：

　　影片整理網站［日劇，韓劇，美劇，中劇，卡通，台綜藝，日綜藝，美綜藝, 直播頻道］

影片來源：

　YouTube, dailymotion,bilibili,

  [目前不考慮做機器人，做自動BT下載跟上傳到影音平台或是網路空間的部分，很可能會牽扯版權問題，用官方的東西增加官方的點閱率[綜藝 ,  新聞等等]，就不會牽扯法律問題，而且就算是非官方到時候有問題會找上傳的人。因為這些上傳都會有記錄，只要想查都還是有方法的]

影片資訊:


網站外觀:

　　愛奇異,Netflix

會員功能:

　　紀錄喜歡影片跟以觀看紀錄

製作原因:

　　因為老婆很愛看電視，所以想要弄一個他方便看的地方


