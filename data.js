// DSPM MV ベスト9 — 対象MVデータ（選別済み・290本）
// 出典: 各公式YouTubeチャンネル / DEARSTAGE Inc. / レーベル公式
const GROUPS = [
 {
  "name": "虹のコンキスタドール",
  "status": "active"
 },
 {
  "name": "CYNHN",
  "status": "active"
 },
 {
  "name": "ARCANA PROJECT",
  "status": "active"
 },
 {
  "name": "きゅるりんってしてみて",
  "status": "active"
 },
 {
  "name": "さよならステイチューン",
  "status": "active"
 },
 {
  "name": "ChumToto",
  "status": "active"
 },
 {
  "name": "B≡FULLEST",
  "status": "active"
 },
 {
  "name": "ミームトーキョー",
  "status": "active"
 },
 {
  "name": "雨模様のソラリス",
  "status": "active"
 },
 {
  "name": "バンドじゃないもん！MAXX NAKAYOSHI",
  "status": "active"
 },
 {
  "name": "OKINI☆PARTY'S",
  "status": "active"
 },
 {
  "name": "LAVILITH",
  "status": "active"
 },
 {
  "name": "チームいちご",
  "status": "active"
 },
 {
  "name": "でんびる.chan",
  "status": "active"
 },
 {
  "name": "根本凪",
  "status": "active"
 },
 {
  "name": "絵恋ちゃん",
  "status": "active"
 },
 {
  "name": "岡田彩夢",
  "status": "active"
 },
 {
  "name": "でんぱ組.inc",
  "status": "ended"
 },
 {
  "name": "妄想キャリブレーション",
  "status": "ended"
 },
 {
  "name": "ENGAG.ING",
  "status": "ended"
 },
 {
  "name": "Mi☆nA",
  "status": "ended"
 },
 {
  "name": "リルネード",
  "status": "ended"
 },
 {
  "name": "虹のファンタジスタ",
  "status": "ended"
 },
 {
  "name": "ベボガ!",
  "status": "ended"
 },
 {
  "name": "結音 YUION",
  "status": "ended"
 },
 {
  "name": "ねもぺろ",
  "status": "ended"
 }
,{"name":"こども宇宙天国","status":"ended"}
];

const MVS = [
{
"id": "of24cqYH658",
"g": "OKINI☆PARTY'S",
"song": "シンサイBUDDY!!!"
},
{
"id": "E7afeV9JHm8",
"g": "OKINI☆PARTY'S",
"song": "雷音さぁかす"
},
{
"id": "_kiFj7Gx-A8",
"g": "OKINI☆PARTY'S",
"song": "生命のRebels"
},
{
"id": "vsZQ7JQC8zE",
"g": "OKINI☆PARTY'S",
"song": "超次元ベンチャー"
},
{
"id": "4Rrpl59kq5s",
"g": "OKINI☆PARTY'S",
"song": "オオキニ☆ぱーりーなぃと"
},
{
"id": "1sdWc4bLbS8",
"g": "OKINI☆PARTY'S",
"song": "Million Bucks"
},
{
"id": "av7l6hNUxlw",
"g": "OKINI☆PARTY'S",
"song": "心斎橋（アメリカ経由）NANKAI"
},
{
"id": "1xP0j_vYGr4",
"g": "OKINI☆PARTY'S",
"song": "アホちゃうもん"
},
{
"id": "13-aSRtfpV8",
"g": "OKINI☆PARTY'S",
"song": "OMATSURI SOUL"
},
{
"id": "eyK9YT6dX38",
"g": "OKINI☆PARTY'S",
"song": "心斎橋エイリアン"
},
{
"id": "ShagBz9DcuM",
"g": "ねもぺろ",
"song": "ファーストキッスは竜人くん♡ feat. 清 竜人"
},
{
"id": "Lcf95hmlvng",
"g": "ねもぺろ",
"song": "キュンキュンですっ♡"
},
{
"id": "ybF3w-h0s78",
"g": "ねもぺろ",
"song": "BABY♡BABY"
},
{
"id": "XufqhY8if3E",
"g": "ねもぺろ",
"song": "にゃんにゃん♡ちゅちゅちゅ♡"
},
{
"id": "o-I-d_bj3Qc",
"g": "ねもぺろ",
"song": "しゅきしゅきしゅきぴ♡がとまらないっ…！"
},
{
"id": "lQJVR85qSD4",
"g": "LAVILITH",
"song": "365番目のエピローグ"
},
{
"id": "ujmtQN0n-uw",
"g": "ベボガ!",
"song": "ビマベ！"
},
{
"id": "KkoEbFYQZZI",
"g": "虹のファンタジスタ",
"song": "サマ☆フェス"
},
{
"id": "TpM2NWN-kO8",
"g": "でんぱ組.inc",
"song": "W.W.D ENDING"
},
{
"id": "H6gyvcPWM-s",
"g": "でんぱ組.inc",
"song": "BPM285EX"
},
{
"id": "jz69lZW8h0A",
"g": "でんぱ組.inc",
"song": "商売繁盛！元祖電波屋！"
},
{
"id": "m82-6vy_0Jg",
"g": "でんぱ組.inc",
"song": "古代アキバ伝説"
},
{
"id": "L-_a9XBqaWQ",
"g": "でんぱ組.inc",
"song": "我ら令和のかえるちゃん！"
},
{
"id": "f-olbLYOBYg",
"g": "でんぱ組.inc",
"song": "オーギュメンテッドおじいちゃん"
},
{
"id": "8ANSvVZkVZY",
"g": "でんぱ組.inc",
"song": "でんぱっていこーぜ!!"
},
{
"id": "sA-h4TW9dRE",
"g": "でんぱ組.inc",
"song": "MIKATAせずにはいられないっ！"
},
{
"id": "vNKYMjmuNDY",
"g": "でんぱ組.inc",
"song": "初体験"
},
{
"id": "4BzTWPdOT5g",
"g": "でんぱ組.inc",
"song": "好感Daybook♡"
},
{
"id": "ejAMVcO_kF8",
"g": "でんぱ組.inc",
"song": "衝動的S/K/S/D"
},
{
"id": "bexHugfKowk",
"g": "でんぱ組.inc",
"song": "プリンセスでんぱパワー！シャインオン！"
},
{
"id": "lAfPuUaSZQc",
"g": "でんぱ組.inc",
"song": "なんと！世界公認 引きこもり！"
},
{
"id": "kOGpHzGOXWs",
"g": "でんぱ組.inc",
"song": "愛が地球救うんさ！だってでんぱ組.incはファミリーでしょ"
},
{
"id": "hVPrXHKkmWo",
"g": "でんぱ組.inc",
"song": "アイノカタチ"
},
{
"id": "xqBUTHdZa-Q",
"g": "でんぱ組.inc",
"song": "もしもし、インターネット"
},
{
"id": "Iwdaxre0sV4",
"g": "でんぱ組.inc",
"song": "ボン・デ・フェスタ"
},
{
"id": "zFAgG0HIvWo",
"g": "でんぱ組.inc",
"song": "形而上学的、魔法"
},
{
"id": "WTTnyA38NfE",
"g": "でんぱ組.inc",
"song": "いのちのよろこび"
},
{
"id": "NgUm0xYI6fU",
"g": "でんぱ組.inc",
"song": "子♡丑♡寅♡卯♡辰♡巳♡"
},
{
"id": "p2O-mJA7Bmg",
"g": "でんぱ組.inc",
"song": "太陽系観察中生命体"
},
{
"id": "NU9T4t5ge3U",
"g": "でんぱ組.inc",
"song": "ギラメタスでんぱスターズ"
},
{
"id": "7C52Clqg-lM",
"g": "でんぱ組.inc",
"song": "おやすみポラリスさよならパラレルワールド"
},
{
"id": "ih19o9c-xDo",
"g": "でんぱ組.inc",
"song": "WWDBEST"
},
{
"id": "VPBxxGx4nts",
"g": "でんぱ組.inc",
"song": "最Ψ最好調！"
},
{
"id": "Gp5085J7D-Y",
"g": "でんぱ組.inc",
"song": "STAR☆ットしちゃうぜ春だしね"
},
{
"id": "tuMRPUqP1ho",
"g": "でんぱ組.inc",
"song": "アキハバライフ♪"
},
{
"id": "x-79hDn8RCA",
"g": "でんぱ組.inc",
"song": "あした地球がこなごなになっても"
},
{
"id": "CPMeJa8fP0o",
"g": "でんぱ組.inc",
"song": "おつかれサマー！"
},
{
"id": "uX1yKYI9NXI",
"g": "でんぱ組.inc",
"song": "でんぱーりーナイト"
},
{
"id": "EGy39OMyHzw",
"g": "でんぱ組.inc",
"song": "バリ3共和国"
},
{
"id": "RoPmDFHdU3E",
"g": "でんぱ組.inc",
"song": "檸檬色"
},
{
"id": "sOin4bwUQ5c",
"g": "でんぱ組.inc",
"song": "ちゅるりちゅるりら"
},
{
"id": "GXIgANjjIKc",
"g": "でんぱ組.inc",
"song": "ファンシーほっぺ♡ウ・フ・フ"
},
{
"id": "NypVvG9fQ7o",
"g": "でんぱ組.inc",
"song": "サクラあっぱれーしょん"
},
{
"id": "wyZOePtID6s",
"g": "でんぱ組.inc",
"song": "W.W.D Ⅱ"
},
{
"id": "5GYexKhA_bg",
"g": "でんぱ組.inc",
"song": "ノットボッチ...夏"
},
{
"id": "fMHj3U3-RA4",
"g": "でんぱ組.inc",
"song": "でんでんぱっしょん"
},
{
"id": "qDrm8NfhgsU",
"g": "でんぱ組.inc",
"song": "プレシャスサマー！"
},
{
"id": "7W0c19UXirE",
"g": "でんぱ組.inc",
"song": "キラキラチューン"
},
{
"id": "e4kB1g0fKIA",
"g": "でんぱ組.inc",
"song": "くちづけキボンヌ"
},
{
"id": "tJGg5C6cmh0",
"g": "でんぱ組.inc",
"song": "Future Diver"
},
{
"id": "-KAJD9srQm4",
"g": "でんぱ組.inc",
"song": "秋の葉の原っぱで"
},
{
"id": "6H2Xiw6OyOw",
"g": "でんぱ組.inc",
"song": "Doki + Waku = Parade!"
},
{
"id": "lStP9jog7TA",
"g": "でんぱ組.inc",
"song": "みりかる★ファンタジー"
},
{
"id": "g6l5eTsvJCA",
"g": "でんぱ組.inc",
"song": "いんたーねっつ・ふぉーてぃ・らびゅ"
},
{
"id": "0ipVQjNafhk",
"g": "でんぱ組.inc",
"song": "ステラコード"
},
{
"id": "rDF_ki9wKlM",
"g": "でんぱ組.inc",
"song": "新月のダ・カーポ"
},
{
"id": "uQwZwbrWHnw",
"g": "虹のコンキスタドール",
"song": "ガチ恋ですの♡あいうぉんちゅー！"
},
{
"id": "OJsIAXgCuCk",
"g": "虹のコンキスタドール",
"song": "君がいて良かった！了解です。"
},
{
"id": "0bs0o_3yLjA",
"g": "虹のコンキスタドール",
"song": "キョーリョク・パートナー"
},
{
"id": "53GVaVR-ehk",
"g": "虹のコンキスタドール",
"song": "マイレージラブサマー"
},
{
"id": "Y4bmXFUkGaQ",
"g": "虹のコンキスタドール",
"song": "想いが積もる、午前2時。"
},
{
"id": "ptiHAyAHcDw",
"g": "虹のコンキスタドール",
"song": "僕はキミだけのおばけちゃん♡"
},
{
"id": "jGo_iyZgjsA",
"g": "虹のコンキスタドール",
"song": "さよならタイガー"
},
{
"id": "aMdqCyzRyN4",
"g": "虹のコンキスタドール",
"song": "終末でーと部！"
},
{
"id": "dWFpSVL3ad0",
"g": "虹のコンキスタドール",
"song": "ナミダ、あわ雪"
},
{
"id": "5z4yrfqUDa0",
"g": "虹のコンキスタドール",
"song": "美味いものファンクラブ"
},
{
"id": "mtmDkkL1kF0",
"g": "虹のコンキスタドール",
"song": "世界の中心で虹を叫んだサマー"
},
{
"id": "vl74GI_lhAA",
"g": "虹のコンキスタドール",
"song": "恋・ホワイトアウト"
},
{
"id": "gYe8diN6QYg",
"g": "虹のコンキスタドール",
"song": "サマーとはキミと私なりっ！！"
},
{
"id": "Yy5eBvpSMF8",
"g": "虹のコンキスタドール",
"song": "夕暮れグラデーション"
},
{
"id": "jlX_8QPjZmY",
"g": "虹のコンキスタドール",
"song": "ぼくらのターン"
},
{
"id": "TTRF9TBDyyc",
"g": "虹のコンキスタドール",
"song": "響け!ファンファーレ"
},
{
"id": "j_GZTLkfm4o",
"g": "虹のコンキスタドール",
"song": "Snowing Love"
},
{
"id": "NhstcbCsTTQ",
"g": "虹のコンキスタドール",
"song": "Waiting Wedding"
},
{
"id": "qJCAxPiaqhU",
"g": "虹のコンキスタドール",
"song": "ジャポニジフェス"
},
{
"id": "_uYTSn6Pyak",
"g": "虹のコンキスタドール",
"song": "愛をこころにサマーと数えよ"
},
{
"id": "PGp-65OiPF8",
"g": "虹のコンキスタドール",
"song": "本命ショコラティエ"
},
{
"id": "BsU4EY03ukY",
"g": "虹のコンキスタドール",
"song": "やるっきゃない！2018"
},
{
"id": "7udQDzPMpoY",
"g": "虹のコンキスタドール",
"song": "ずっとサマーで恋してる"
},
{
"id": "w1J9vGG08f4",
"g": "虹のコンキスタドール",
"song": "バスルームマジック"
},
{
"id": "mzEZFGOiR58",
"g": "虹のコンキスタドール",
"song": "トライアングル・ドリーマー"
},
{
"id": "sW5zFFWYLnQ",
"g": "虹のコンキスタドール",
"song": "心臓にメロディー"
},
{
"id": "BN8XtaPmLoE",
"g": "虹のコンキスタドール",
"song": "ふたりのシュプール"
},
{
"id": "u1W6R8rjkv4",
"g": "虹のコンキスタドール",
"song": "夏の夜は短すぎるけど…"
},
{
"id": "fH_rzbE1QdM",
"g": "虹のコンキスタドール",
"song": "じゃんぷ！"
},
{
"id": "uOtJRjRFF6o",
"g": "虹のコンキスタドール",
"song": "キミは無邪気な夏の女王"
},
{
"id": "6iapjio-jdw",
"g": "虹のコンキスタドール",
"song": "†ノーライフベイビー・オブ・ジ・エンド†"
},
{
"id": "NhYdL_rPd6U",
"g": "虹のコンキスタドール",
"song": "レトルト～華麗なる愛～"
},
{
"id": "jez8p3t0Vng",
"g": "虹のコンキスタドール",
"song": "LOVE麺 恋味 やわめ"
},
{
"id": "T4-QzS9J6CI",
"g": "虹のコンキスタドール",
"song": "パラドキシカル・コンプレックス"
},
{
"id": "-8GyB1Y2PYE",
"g": "虹のコンキスタドール",
"song": "限りなく冒険に近いサマー"
},
{
"id": "mHEtej4Br-U",
"g": "虹のコンキスタドール",
"song": "↓エイリアンガール・イン・ニューヨーク↑"
},
{
"id": "CotBcAoooLA",
"g": "虹のコンキスタドール",
"song": "戦場の聖バレンタイン"
},
{
"id": "SbqppmxuFM4",
"g": "虹のコンキスタドール",
"song": "THE☆有頂天サマー!!"
},
{
"id": "TNPeeZb-k24",
"g": "虹のコンキスタドール",
"song": "やるっきゃない！2015"
},
{
"id": "6KWL6cZbNh4",
"g": "虹のコンキスタドール",
"song": "ブランニューハッピーデイズ"
},
{
"id": "O4JlrAGIZU4",
"g": "虹のコンキスタドール",
"song": "にじいろフィロソフィー"
},
{
"id": "DIP1cVu9-Sc",
"g": "虹のコンキスタドール",
"song": "ぴくしぶおんど"
},
{
"id": "N3VlY0z0XMQ",
"g": "虹のコンキスタドール",
"song": "サマーエンドシンフォニー"
},
{
"id": "Z3Z2ggJQIyw",
"g": "虹のコンキスタドール",
"song": "平成令和ネバーエンドサンバースト"
},
{
"id": "H0NgFvr11u4",
"g": "虹のコンキスタドール",
"song": "Boom！Boom！サマーっ♡"
},
{
"id": "q02uTCcEKII",
"g": "虹のコンキスタドール",
"song": "恋愛シフト制"
},
{
"id": "SX1fZsQGWzM",
"g": "虹のコンキスタドール",
"song": "ミスター♡バレンタイン"
},
{
"id": "hM_X9eRI6qQ",
"g": "虹のコンキスタドール",
"song": "Aurora Orchestra"
},
{
"id": "zVekKHc1eTM",
"g": "虹のコンキスタドール",
"song": "Colorful～あなたといた時間～"
},
{
"id": "6kz2hMjS0ew",
"g": "ARCANA PROJECT",
"song": "リドル"
},
{
"id": "ik3pOOerD_k",
"g": "ARCANA PROJECT",
"song": "旋廻のベンダバール"
},
{
"id": "StqrN9AZw3A",
"g": "ARCANA PROJECT",
"song": "未発見アタシ座"
},
{
"id": "ZdmQRLNRkIY",
"g": "ARCANA PROJECT",
"song": "ミチカケ"
},
{
"id": "lImohQsAe8E",
"g": "ARCANA PROJECT",
"song": "メラメラ"
},
{
"id": "d8igJk3BMsw",
"g": "ARCANA PROJECT",
"song": "アイレ"
},
{
"id": "GRGWcWdV8gU",
"g": "ARCANA PROJECT",
"song": "ユリイカ"
},
{
"id": "iexFIGcvFPA",
"g": "ARCANA PROJECT",
"song": "恋衣"
},
{
"id": "iq6FSXhnTEQ",
"g": "ARCANA PROJECT",
"song": "慟哭のトルメンタ"
},
{
"id": "jY0AWQLAgiA",
"g": "ARCANA PROJECT",
"song": "快晴のエスタリスタ"
},
{
"id": "qh1MuDT-o3w",
"g": "ARCANA PROJECT",
"song": "とめどない潮騒に僕たちは何を歌うだろうか"
},
{
"id": "traMXzjqYTA",
"g": "ARCANA PROJECT",
"song": "たゆたえ、七色"
},
{
"id": "dQUwHtHs38s",
"g": "ARCANA PROJECT",
"song": "夢で世界を変えるなら"
},
{
"id": "45s2y6HmgcI",
"g": "ARCANA PROJECT",
"song": "カンパネラ響く空で"
},
{
"id": "ebX_bFDC2MU",
"g": "ARCANA PROJECT",
"song": "ACE of WANDS"
},
{
"id": "LC1a-DwUhls",
"g": "きゅるりんってしてみて",
"song": "推忍♡きゅるちゃん道場!"
},
{
"id": "VWyB3Wrv6po",
"g": "きゅるりんってしてみて",
"song": "えぶりで大好き記念日"
},
{
"id": "UqAX0WQas7I",
"g": "きゅるりんってしてみて",
"song": "カルテNo.2222"
},
{
"id": "9g3dRd_QuVY",
"g": "きゅるりんってしてみて",
"song": "Special♡Spell"
},
{
"id": "pe-nyv8cn8Q",
"g": "きゅるりんってしてみて",
"song": "Maison de 520"
},
{
"id": "_f_u6NdZGdc",
"g": "きゅるりんってしてみて",
"song": "君のお顔になりたいの"
},
{
"id": "YXb_1vyH-fY",
"g": "きゅるりんってしてみて",
"song": "♡♡♡わんだーらんど"
},
{
"id": "RcbqtKOjGA0",
"g": "きゅるりんってしてみて",
"song": "しゅーぱーめるてぃらびゅふれーばー♡"
},
{
"id": "28HBkyA56Cw",
"g": "きゅるりんってしてみて",
"song": "らぶきゅん♡うぉんてっど"
},
{
"id": "e8rbEdXwQ_c",
"g": "きゅるりんってしてみて",
"song": "ツインテールは20歳まで♡"
},
{
"id": "Ptk-Lrh9X28",
"g": "きゅるりんってしてみて",
"song": "アイドルライブコースター！"
},
{
"id": "c_IJ6kvzBoE",
"g": "きゅるりんってしてみて",
"song": "イェイェ"
},
{
"id": "ZbqvANDDu3c",
"g": "きゅるりんってしてみて",
"song": "いらんこといわんこ"
},
{
"id": "7vXMSPl-Fno",
"g": "きゅるりんってしてみて",
"song": "魅惑のあいまいみー"
},
{
"id": "53P2JsqfuHw",
"g": "きゅるりんってしてみて",
"song": "可愛さ圧倒的なんばーわん！"
},
{
"id": "J1ECKxF0soE",
"g": "きゅるりんってしてみて",
"song": "ムムム⋯Doなる！？ドリル！"
},
{
"id": "gQMQ8MEdBpg",
"g": "さよならステイチューン",
"song": "アチチなベイベー♡"
},
{
"id": "Nzj1xoxP9HE",
"g": "さよならステイチューン",
"song": "TUNED！"
},
{
"id": "GTgGFDWT56Y",
"g": "さよならステイチューン",
"song": "STAY TUNE"
},
{
"id": "CbY1tZv0hcw",
"g": "さよならステイチューン",
"song": "FF外から恋しちゃいます♡"
},
{
"id": "C4LPQI-0CSM",
"g": "さよならステイチューン",
"song": "わたしって、ほんとはアイドルなんだ！"
},
{
"id": "2qRnY4om90I",
"g": "さよならステイチューン",
"song": "ドラマチックバケーション"
},
{
"id": "73Zuk6YJFx8",
"g": "さよならステイチューン",
"song": "エブリデイ夏"
},
{
"id": "IVA_JUiVfNg",
"g": "さよならステイチューン",
"song": "さよならステイチューン"
},
{
"id": "E1oGwkkRybc",
"g": "CYNHN",
"song": "Opia"
},
{
"id": "bl3Iktj21oc",
"g": "CYNHN",
"song": "春を攫った"
},
{
"id": "B_8lGegMd2A",
"g": "CYNHN",
"song": "ループバック・ロールトラッシュ"
},
{
"id": "PEhr-v1KpkA",
"g": "CYNHN",
"song": "わるいこと"
},
{
"id": "Rz-SY3t_1UU",
"g": "CYNHN",
"song": "バニラ"
},
{
"id": "9E0LtnUpRT8",
"g": "CYNHN",
"song": "ノミニー"
},
{
"id": "5sUzh2SBjMs",
"g": "CYNHN",
"song": "Tokyo stuck"
},
{
"id": "_0EpqN8Akiw",
"g": "CYNHN",
"song": "飴玉"
},
{
"id": "MIxCvZ_txvY",
"g": "CYNHN",
"song": "いいおくり"
},
{
"id": "WRG1ddTW3jc",
"g": "CYNHN",
"song": "リサイズ"
},
{
"id": "m82yEeAF-Ds",
"g": "CYNHN",
"song": "CYNHN（スウィーニー）ジンテーゼ"
},
{
"id": "vBWvurwVxpA",
"g": "CYNHN",
"song": "楽の上塗り"
},
{
"id": "jv-blLXJ9uc",
"g": "CYNHN",
"song": "キリグニア"
},
{
"id": "-U8kph4KWYg",
"g": "CYNHN",
"song": "水の中の"
},
{
"id": "JjXrCVaMoVs",
"g": "CYNHN",
"song": "レア"
},
{
"id": "l9GwvNIAGTc",
"g": "CYNHN",
"song": "AOAWASE"
},
{
"id": "l01j3V0cfhc",
"g": "CYNHN",
"song": "イナフイナス"
},
{
"id": "i7yGZPp-GAs",
"g": "CYNHN",
"song": "氷菓"
},
{
"id": "G5cLtdBhO_A",
"g": "CYNHN",
"song": "くもりぎみ"
},
{
"id": "9fxe4v8wHtQ",
"g": "CYNHN",
"song": "ごく平凡な青は、"
},
{
"id": "P38rVDdLW-Y",
"g": "CYNHN",
"song": "解けない界面論"
},
{
"id": "AaxPzPlvF-s",
"g": "CYNHN",
"song": "水生"
},
{
"id": "DmoE_5aXV-U",
"g": "CYNHN",
"song": "2時のパレード"
},
{
"id": "DaPmbh75UT0",
"g": "CYNHN",
"song": "ラルゴ"
},
{
"id": "EJfuO3XdGDc",
"g": "CYNHN",
"song": "wire"
},
{
"id": "7oJinWkaryA",
"g": "CYNHN",
"song": "空気とインク"
},
{
"id": "saeS71bEcng",
"g": "CYNHN",
"song": "雨色ホログラム"
},
{
"id": "MEPlVXvZGJE",
"g": "CYNHN",
"song": "絶交郷愁"
},
{
"id": "T-ZNjRXEzU8",
"g": "CYNHN",
"song": "タキサイキア"
},
{
"id": "TxmE9pbT3aQ",
"g": "CYNHN",
"song": "So Young"
},
{
"id": "Tkw3-7IDOtA",
"g": "CYNHN",
"song": "リンクtoアクセス（非公式！？）"
},
{
"id": "21VduO3ci9o",
"g": "CYNHN",
"song": "はりぼて"
},
{
"id": "ZZXCtUJcedU",
"g": "CYNHN",
"song": "FINALegend"
},
{
"id": "qA5OHbE67ag",
"g": "ChumToto",
"song": "眠り、眠ら、眠れスト。"
},
{
"id": "YotTsLAYASM",
"g": "ChumToto",
"song": "寝ごこち新生活♪"
},
{
"id": "DSNqz7vsuRE",
"g": "ChumToto",
"song": "Eien♡スキループ"
},
{
"id": "G9quFJQnUj4",
"g": "ChumToto",
"song": "チャム・トト"
},
{
"id": "ge72ikMWMCo",
"g": "B≡FULLEST",
"song": "MIDNIGHT STEP"
},
{
"id": "S6Il2GGgs9M",
"g": "B≡FULLEST",
"song": "君だけの聲"
},
{
"id": "rM97HnTNTak",
"g": "B≡FULLEST",
"song": "迷愛♡シンギュラリティ Akarin Love ver."
},
{
"id": "8h_pY3Ixmag",
"g": "B≡FULLEST",
"song": "今宵、ケット・シー"
},
{
"id": "aDP4KNUorDY",
"g": "B≡FULLEST",
"song": "DROP"
},
{
"id": "WVPTl0hJS4w",
"g": "B≡FULLEST",
"song": "ナニカノカケラ"
},
{
"id": "OecC7aPzOVQ",
"g": "ミームトーキョー",
"song": "今何してるの？"
},
{
"id": "jOykC_K0KtE",
"g": "ミームトーキョー",
"song": "idol-143"
},
{
"id": "6Q7mXNwqfRE",
"g": "ミームトーキョー",
"song": "カノムトーキョー"
},
{
"id": "uVVMdL0kiGU",
"g": "ミームトーキョー",
"song": "I am HEROINE？"
},
{
"id": "8ebaZVHjVeg",
"g": "ミームトーキョー",
"song": "CUTE TURN"
},
{
"id": "icKRJB0TPo8",
"g": "ミームトーキョー",
"song": "AGAIN AND AGAIN"
},
{
"id": "Wt3pYbDsj6Y",
"g": "ミームトーキョー",
"song": "GAV RICH"
},
{
"id": "KKT2Hzs30K0",
"g": "ミームトーキョー",
"song": "SNSKILLER"
},
{
"id": "7-cLWXyFMck",
"g": "ミームトーキョー",
"song": "ブルーレター"
},
{
"id": "JLyvsAhIgws",
"g": "ミームトーキョー",
"song": "リバーズ・エンド"
},
{
"id": "RF7YVR2SBIU",
"g": "ミームトーキョー",
"song": "アニモア"
},
{
"id": "pWVGiSZd1K8",
"g": "ミームトーキョー",
"song": "ニュー・ポスト"
},
{
"id": "3Mnco_W4cII",
"g": "ミームトーキョー",
"song": "ROAR"
},
{
"id": "JQ_XU4q9SOY",
"g": "ミームトーキョー",
"song": "THE STRUGGLE IS REAL"
},
{
"id": "HAaqKBGYZc4",
"g": "ミームトーキョー",
"song": "アンチサジェスト"
},
{
"id": "5q4JCb2Qe3s",
"g": "ミームトーキョー",
"song": "スーサイド ボーダレス"
},
{
"id": "SKkbaeZxjhQ",
"g": "ミームトーキョー",
"song": "モラトリアムアクアリウム"
},
{
"id": "YzDF8zFDGf0",
"g": "ミームトーキョー",
"song": "レトロフューチャー"
},
{
"id": "q88JAyyeHjE",
"g": "ミームトーキョー",
"song": "メランコリックサーカス"
},
{
"id": "hxIOCj3zxSU",
"g": "雨模様のソラリス",
"song": "蒼すぎる空、終わらない唄"
},
{
"id": "i_vhoP094pI",
"g": "雨模様のソラリス",
"song": "Invisible rain"
},
{
"id": "z_-tJbK8Bsk",
"g": "雨模様のソラリス",
"song": "届かない星でいて。"
},
{
"id": "zo3GAaEKcUk",
"g": "雨模様のソラリス",
"song": "泡にとけた"
},
{
"id": "Lw-nxZKnudI",
"g": "雨模様のソラリス",
"song": "Forever and Ever"
},
{
"id": "qE6Q4dCkvNA",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "激アツ爆ネツどんどこ音頭 〜ばかんちゅぬ宴〜"
},
{
"id": "6Z1BsNsc_XU",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "君だけの怪獣"
},
{
"id": "MepOwkUnK_M",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "デジタルデトックス"
},
{
"id": "4ToEtcy1qiQ",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "あの子の前ではこんなに優しい顔はしないでいてね♡"
},
{
"id": "IpkbIw4-1ko",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "NINJA NAKAYOSHI"
},
{
"id": "gOtcwDjkAfk",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "おとどけ♡ラブピッツァリア！"
},
{
"id": "2l6r9t0l8wA",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "レジェンドあいらぶゆー"
},
{
"id": "M3n21IALfmA",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "ゴッドソング"
},
{
"id": "tpeOnOofYNo",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "6 RESPECT"
},
{
"id": "WZPGMIMrmds",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "NaMiDa"
},
{
"id": "KWYxp-Ff7UQ",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "君の笑顔で世界がやばい"
},
{
"id": "BuMIArw5-2A",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "イミ・ナイ・ダンス"
},
{
"id": "l4X72cm92a0",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "さけっぱらだい酒☆"
},
{
"id": "Y71KB9fb1e0",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "恋する完全犯罪"
},
{
"id": "IeuyWdIV2h8",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "BORN TO BE IDOL"
},
{
"id": "YHg1PannZGU",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "歌うMUSIC(生まれかわりver.)"
},
{
"id": "mesrQgR2Sy8",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "Q.人生それでいいのかい？"
},
{
"id": "ui6-IkIKkqc",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "FAN+TIC"
},
{
"id": "xWUPHH8Hr60",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "METAMORISER"
},
{
"id": "NzvitGt4nm4",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "君はヒーロー"
},
{
"id": "ds1fmhHXd0E",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "しゅっとこどっこい"
},
{
"id": "xggP4aH13_M",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "YATTA！"
},
{
"id": "kNR4NL-vLio",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "YAKIMOCHI"
},
{
"id": "wf7dgLoaBCc",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "夏のOh!バイブス"
},
{
"id": "afjKc5HuuJs",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "気持ちだけ参加します。"
},
{
"id": "6wMee4bYUYI",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "キメマスター!"
},
{
"id": "TUzEcvbOJCM",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "青春カラダダダッシュ！"
},
{
"id": "5SLV5u_-gbE",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "青空に吹かす夜、晴れ渡る日"
},
{
"id": "uGqLJhfBcyY",
"g": "バンドじゃないもん！MAXX NAKAYOSHI",
"song": "Dolphin chill in my room 平和"
},
{
"id": "97_X-oLiP6E",
"g": "妄想キャリブレーション",
"song": "おもてなでしこ伝承中"
},
{
"id": "BCX3nOosQig",
"g": "妄想キャリブレーション",
"song": "幻想恋花火"
},
{
"id": "BtWoX8IHaKQ",
"g": "妄想キャリブレーション",
"song": "魔法のジュース"
},
{
"id": "CPwqirRFirc",
"g": "妄想キャリブレーション",
"song": "悲しみキャリブレーション"
},
{
"id": "MZNmCGegzj0",
"g": "妄想キャリブレーション",
"song": "何故なら私、妄想少女ですの"
},
{
"id": "FEAfVK3UUSo",
"g": "ENGAG.ING",
"song": "Wedding High Five"
},
{
"id": "Tk46i08SvaY",
"g": "ENGAG.ING",
"song": "恋咲き花火"
},
{
"id": "pxQXFZj4DRI",
"g": "Mi☆nA",
"song": "Stormy"
},
{
"id": "17vUy94fKFI",
"g": "リルネード",
"song": "フォークソング"
},
{
"id": "6Larfnyew0M",
"g": "リルネード",
"song": "もうわたしを好きになってる君へ"
},
{
"id": "pHedltmi5No",
"g": "リルネード",
"song": "きらめき、いま、見えるでしょ？"
},
{
"id": "O7P75LVSfRw",
"g": "リルネード",
"song": "サルネ！"
},
{
"id": "QW2UvjMd950",
"g": "リルネード",
"song": "恋愛ちゅー"
},
{
"id": "6RzSehQq7uA",
"g": "結音 YUION",
"song": "FRI(LIE)DAY MONSTER"
},
{
"id": "GD7Nzy1DZZQ",
"g": "結音 YUION",
"song": "Deep Drip Trip"
},
{
"id": "mgyuGcoXp9U",
"g": "結音 YUION",
"song": "キミ泣かせ"
},
{
"id": "15cIfxZPZs4",
"g": "結音 YUION",
"song": "ヤッホー●ジパング"
},
{
"id": "EDsGMH8jJbY",
"g": "根本凪",
"song": "コーヒー・スピカータ！"
},
{
"id": "Q915itXP8Zo",
"g": "根本凪",
"song": "ラベンダーミルクの思惑"
},
{
"id": "6D_Z9R8v3mk",
"g": "根本凪",
"song": "×o×o♡ソーダ"
},
{
"id": "bBISQrG_tF0",
"g": "根本凪",
"song": "タイニーグレープフルーツ"
},
{
"id": "buIpLfZD_r4",
"g": "根本凪",
"song": "それはもう恋じゃん"
},
{
"id": "zOkU6BL_bpA",
"g": "根本凪",
"song": "メンタルブレイクダンス"
},
{
"id": "jhmt9S7Fc7s",
"g": "根本凪",
"song": "チョーハヤイ!!!!!"
},
{
"id": "3G4DuiTw910",
"g": "根本凪",
"song": "overtake step"
},
{
"id": "5Jhn5vg7xIo",
"g": "チームいちご",
"song": "＋もしもしダーリン♡"
},
{
"id": "Dq6orMohVeU",
"g": "岡田彩夢",
"song": "chew!chew!"
},
{
"id": "cJUvaGiMe-Y",
"g": "岡田彩夢",
"song": "コズミックメランコリック"
},
{
"id": "iPF9uc-h5ps",
"g": "岡田彩夢",
"song": "ねこねこ☆ねっとわーく (feat. 藤咲彩音 & MEW)"
},
{
"id": "bymKn_Z01Cs",
"g": "岡田彩夢",
"song": "Instant Love"
},
{
"id": "jorE-bszq9w",
"g": "岡田彩夢",
"song": "あらすじ"
},
{
"id": "F1OaqW9S_PQ",
"g": "でんびる.chan",
"song": "汝、心にビルを建てよ"
},
{
"id": "a7YcZataCQs",
"g": "絵恋ちゃん",
"song": "パンダのサンサン"
},
{
"id": "3U9a90_If0U",
"g": "絵恋ちゃん",
"song": "とっとーと"
},
{
"id": "kH7KHza8X9I",
"g": "絵恋ちゃん",
"song": "ゆでがえる"
},
{
"id": "J_c13kC_NSg",
"g": "絵恋ちゃん",
"song": "お邪魔しま stay me"
},
{
"id": "F8hRUE8qBD4",
"g": "絵恋ちゃん",
"song": "EDEN"
},
{
"id": "COOZ_PadQ7w",
"g": "絵恋ちゃん",
"song": "楽だ"
},
{
"id": "YEuvRxCNj7o",
"g": "絵恋ちゃん",
"song": "ウニ"
}
,{"id":"rMSvR1XSDgI","g":"こども宇宙天国","song":"こども宇宙天国"}
];
