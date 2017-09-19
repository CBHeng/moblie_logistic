# NKFUST LOGISTICS Moblie 
目的 : 改善原運籌官網，手持手機體驗不佳的情況。<br />
    透過nodejs爬蟲自動抓取最新消息，儲存至Firebase database，前端透過ReactJS開發，快速建立網站元件，並提供最佳的網頁排版。
>   ReactJS + Firebase + Nodejs
## 前端介紹 : 使用ReactJS快速開發前端網頁
ReactJs 外部模組
*   reactstrap : Bootstraps設計元件
*   reactstrap : Bootstraps設計元件
*   timeago-react : 幾分鐘前-更新數據
*   react-slick : 製作輪播效果
*   Firebase : 取得database需求資料

> 前端框架學習: 特別感謝<a href="https://github.com/ReactMaker">ReactMark</a>的教學資源。
## 後端介紹 : 使用Node.js實作網路爬蟲，擷取<a href="http://www.logistics.nkfust.edu.tw/bin/home.php">原官網</a>之最新消息。
Node.js 做的事
*   1. rquest 取得官網最新消息之網頁結構(30筆)。
*   2. cheerio 類似於jquery,取得網頁dom資料,後續文字處理、資料轉換JSON。
*   3. Firebase 連結雲資料庫，將JSON儲存至Database。
> 備註: 後端程式碼未放置github。
