console.log("読み込みおけ")
//Service Workerの確認
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('Service worker 登録されたよ', reg);
        });
  });
}

/*
railsでうまくできないので試しに消す
var songs = gon.songs;
//各カラムのデータを配列に入れる為に定義
var song_title = [];
var lyric = [];
var wordset_All = [];
//配列に入れる（ただしwordset_Allは文字列なのでこれから整形する）
songs.forEach(function( value ) {
    song_title.push( value.title );
    lyric.push(value.lyric);
    wordset_All.push(value.wordset);
});
*/

//railsでうまくできないのでテスト
var song_title = ["A Whole New World","Part Of Your World","Beauty and the Beast"];
var lyric = ["I can show you the world<br>Shining, shimmering, splendid<br>Tell me, princese,now when did<br>You last let your heart decide?<br><br>I can open your eyes<br>Take you wonder by wonder<br>Over, sideways and under<br>on a magic carpet ride<br><br>A whole new world<br>A new fantastic point of view<br>No one to tell us no<br>Or where to go<br>Or say we're only dreaming<br><br>A whole new world<br>A dazzling place I never knew<br>But, now, from way up here<br>It's crystal clear<br>That now I'm in a whole new world with you<br>Unbelieveble sights<br>Indescribabre feeling<br>Soaring, tumbling,freewhealing<br>Through an endless diamond sky<br><br>A whole new world<br>(Don't you dare close your eyes)<br>A hundred thousand things to see<br>(Hold your breath - it gets better)<br>I'm like a shooting star<br>I've come so far<br>I can't go back to where I used to be<br><br>A whole new world<br>With new horizons to pursue<br>I'll chase tnem anywnere<br>Tnere's time to spare<br>Let me share this whole new world with you<br>(Rapeat third verse)<br><br>A whole new world<br>(Every turn a surprise)<br>With new horizons to pureue<br>(Every moment, red-letter)<br>I'll chase them anywhere<br>There's time to spare<br>Anywhere, there's time to spare<br>Let me share this whole new world with you<br><br>A whole new world<br>That's where we'll be<br>A thrilling chase<br>A wondrous place<br>For you and me","Look at this stuff<br>Isn't it neat?<br>Wouldn't you think my collection's complete?<br>Wouldn't you think I'm the girl<br>The girl who has ev'rything?<br>Look at this trove<br>Treasures untold<br>How many wonders can one cavern hold?<br>Looking around here you'd think, sure<br>She's got ev'rything<br><br>I've got gadgets and gizmos a - plenty<br>I've got who's - its, and what's - its galore<br>You want thing - a - mabobs? I've got twenty<br>But who cares?<br>No big deal<br>I want more<br><br>I wanna be where the people are<br>I wanna see, wanna see 'em dancin'<br>Walkin' around on those<br>Whaddya call'em? Oh feet<br><br>Flippin' your fins, you don't get too far<br>Legs are required for jumpin' dancin'<br>Strollin' along down the<br>What's that word again? Street<br><br>Up where they walk, up where they run<br>Up where they stay all day in the sun<br>Wanderin' free, wish I could be part of that world<br><br>What would I give if I could live outta these waters?<br>What would I pay to spend a day warm on the sand?<br>Betcha on land. they understand<br>Bet they don't reprimand their daughters<br>Bright young women, sick of swimmin'<br>Ready to stand<br><br>And ready to know what the people know<br>Ask 'em my questions and get some answers<br>What's a fire? and why does it, what's the word? burn<br><br>When's my turn?<br>Wouldn't I love, love to explore that shore up above<br>Out of the sea, wish I could be part of your world","Tale as old as time<br>True as it can be<br>Barely even friends<br>Then somebody bends<br>Unexpectedly<br><br>Just a little change<br>Small, to say the least<br>Both a little scared<br>Neither one prepared<br>Beauty and the Beast<br><br>Ever just the same<br>Ever a surprise<br>Ever as before<br>Ever just as sure<br>As the sun will rise<br><br>Tale as old as time<br>Tune as old as song<br>Bittersweet and strange<br>Finding you can change<br>Learning you were wrong<br><br>Certain as the sun<br>Rising in the east<br>Tale as old as time<br>Song as old as rhyme<br>Beauty and the Beast<br><br>Tale as old as time<br>Song as old as rhyme<br>Beauty and the Beast"];
var wordset_All = ['[{:word=>"can", :translate_word=>"できる"}, {:word=>"show", :translate_word=>"見せる"}, {:word=>"world", :translate_word=>"世界"}, {:word=>"Shining", :translate_word=>"シャイニング"}, {:word=>"shimmering", :translate_word=>"きらめく"}, {:word=>"splendid", :translate_word=>"素晴らしい"}, {:word=>"Tell", :translate_word=>"言う"}, {:word=>"princese", :translate_word=>"プリンセス"}, {:word=>"now", :translate_word=>"今"}, {:word=>"when", :translate_word=>"いつ"}, {:word=>"did", :translate_word=>"した"}, {:word=>"You", :translate_word=>"君は"}, {:word=>"last", :translate_word=>"最終"}, {:word=>"let", :translate_word=>"させて"}, {:word=>"heart", :translate_word=>"心臓"}, {:word=>"decide", :translate_word=>"決めます"}, {:word=>"open", :translate_word=>"開いた"}, {:word=>"eyes", :translate_word=>"目"}, {:word=>"Take", :translate_word=>"取る"}, {:word=>"wonder", :translate_word=>"ワンダー"}, {:word=>"by", :translate_word=>"によって"}, {:word=>"Over", :translate_word=>"オーバー"}, {:word=>"sideways", :translate_word=>"横に"}, {:word=>"and", :translate_word=>"そして"}, {:word=>"under", :translate_word=>"下"}, {:word=>"on", :translate_word=>"に"}, {:word=>"magic", :translate_word=>"魔法"}, {:word=>"carpet", :translate_word=>"カーペット"}, {:word=>"ride", :translate_word=>"ライド"}, {:word=>"A", :translate_word=>"A"}, {:word=>"whole", :translate_word=>"全体"}, {:word=>"new", :translate_word=>"新しい"}, {:word=>"fantastic", :translate_word=>"素晴らしい"}, {:word=>"point", :translate_word=>"ポイント"}, {:word=>"of", :translate_word=>"の"}, {:word=>"view", :translate_word=>"見る"}, {:word=>"No", :translate_word=>"いいえ"}, {:word=>"one", :translate_word=>"1"}, {:word=>"to", :translate_word=>"に"}, {:word=>"tell", :translate_word=>"言う"}, {:word=>"no", :translate_word=>"いいえ"}, {:word=>"Or", :translate_word=>"または"}, {:word=>"where", :translate_word=>"どこで"}, {:word=>"go", :translate_word=>"行く"}, {:word=>"say", :translate_word=>"いう"}, {:word=>"were", :translate_word=>"私たちは"}, {:word=>"only", :translate_word=>"のみ"}, {:word=>"dreaming", :translate_word=>"夢"}, {:word=>"dazzling", :translate_word=>"眩しい"}, {:word=>"place", :translate_word=>"場所"}, {:word=>"never", :translate_word=>"決して"}, {:word=>"knew", :translate_word=>"知っていた"}, {:word=>"But", :translate_word=>"しかし"}, {:word=>"from", :translate_word=>"から"}, {:word=>"way", :translate_word=>"方法"}, {:word=>"up", :translate_word=>"アップ"}, {:word=>"here", :translate_word=>"ここに"}, {:word=>"Its", :translate_word=>"それは"}, {:word=>"crystal", :translate_word=>"結晶"}, {:word=>"clear", :translate_word=>"クリア"}, {:word=>"That", :translate_word=>"それ"}, {:word=>"Im", :translate_word=>"私は"}, {:word=>"in", :translate_word=>"に"}, {:word=>"with", :translate_word=>"と"}, {:word=>"Unbelieveble", :translate_word=>"信じられない"}, {:word=>"sights", :translate_word=>"観光スポット"}, {:word=>"Indescribabre", :translate_word=>"説明"}, {:word=>"feeling", :translate_word=>"感じ"}, {:word=>"Soaring", :translate_word=>"高騰"}, {:word=>"tumbling", :translate_word=>"転がる"}, {:word=>"freewhealing", :translate_word=>"フリーホイーリング"}, {:word=>"Through", :translate_word=>"スルー"}, {:word=>"an", :translate_word=>"あ"}, {:word=>"endless", :translate_word=>"無限"}, {:word=>"diamond", :translate_word=>"ダイヤモンド"}, {:word=>"sky", :translate_word=>"空"}, {:word=>"Dont", :translate_word=>"しないで"}, {:word=>"dare", :translate_word=>"与えます"}, {:word=>"close", :translate_word=>"閉じる"}, {:word=>"hundred", :translate_word=>"百"}, {:word=>"thousand", :translate_word=>"千"}, {:word=>"things", :translate_word=>"物事"}, {:word=>"see", :translate_word=>"見る"}, {:word=>"Hold", :translate_word=>"ホールド"}, {:word=>"breath", :translate_word=>"呼吸"}, {:word=>"gets", :translate_word=>"取得"}, {:word=>"better", :translate_word=>"より良い"}, {:word=>"like", :translate_word=>"好き"}, {:word=>"shooting", :translate_word=>"射撃"}, {:word=>"star", :translate_word=>"星"}, {:word=>"Ive", :translate_word=>"Iました"}, {:word=>"come", :translate_word=>"きて"}, {:word=>"so", :translate_word=>"そう"}, {:word=>"far", :translate_word=>"遠くに"}, {:word=>"cant", :translate_word=>"できない"}, {:word=>"back", :translate_word=>"バック"}, {:word=>"used", :translate_word=>"中古"}, {:word=>"be", :translate_word=>"ある"}, {:word=>"With", :translate_word=>"あり"}, {:word=>"horizons", :translate_word=>"地平線"}, {:word=>"pursue", :translate_word=>"追求する"}, {:word=>"Ill", :translate_word=>"よ"}, {:word=>"chase", :translate_word=>"追跡"}, {:word=>"tnem", :translate_word=>"トネム"}, {:word=>"anywnere", :translate_word=>"anywnere"}, {:word=>"Tneres", :translate_word=>"Tnere&#39;s"}, {:word=>"time", :translate_word=>"時間"}, {:word=>"spare", :translate_word=>"スペア"}, {:word=>"Let", :translate_word=>"みましょう"}, {:word=>"share", :translate_word=>"シェア"}, {:word=>"this", :translate_word=>"この"}, {:word=>"Rapeat", :translate_word=>"菜種"}, {:word=>"third", :translate_word=>"三番"}, {:word=>"verse", :translate_word=>"詩"}, {:word=>"Every", :translate_word=>"すべての"}, {:word=>"turn", :translate_word=>"順番"}, {:word=>"surprise", :translate_word=>"驚き"}, {:word=>"pureue", :translate_word=>"pureue"}, {:word=>"moment", :translate_word=>"瞬間"}, {:word=>"redletter", :translate_word=>"レッドレター"}, {:word=>"anywhere", :translate_word=>"どこでも"}, {:word=>"Theres", :translate_word=>"あります"}, {:word=>"Anywhere", :translate_word=>"どこでも"}, {:word=>"theres", :translate_word=>"あります"}, {:word=>"Thats", :translate_word=>"それは"}, {:word=>"well", :translate_word=>"私たちは"}, {:word=>"thrilling", :translate_word=>"スリリング"}, {:word=>"wondrous", :translate_word=>"不思議な"}, {:word=>"For", :translate_word=>"にとって"}]','[{:word=>"Look", :translate_word=>"見て"}, {:word=>"at", :translate_word=>"で"}, {:word=>"this", :translate_word=>"この"}, {:word=>"stuff", :translate_word=>"もの"}, {:word=>"Isn t", :translate_word=>"ではない"}, {:word=>"neat", :translate_word=>"きちんとした"}, {:word=>"Wouldn t", :translate_word=>"しない"}, {:word=>"think", :translate_word=>"と思う"}, {:word=>"collection s", :translate_word=>"コレクションの"}, {:word=>"complete", :translate_word=>"コンプリート"}, {:word=>"I m", :translate_word=>"私は"}, {:word=>"girl", :translate_word=>"女の子"}, {:word=>"The", :translate_word=>"の"}, {:word=>"who", :translate_word=>"誰"}, {:word=>"has", :translate_word=>"持っている"}, {:word=>"ev rything", :translate_word=>"ev&#39;rything"}, {:word=>"trove", :translate_word=>"勇者"}, {:word=>"Treasures", :translate_word=>"宝物"}, {:word=>"untold", :translate_word=>"果てしなく"}, {:word=>"How", :translate_word=>"どうやって"}, {:word=>"many", :translate_word=>"たくさんの"}, {:word=>"wonders", :translate_word=>"不思議"}, {:word=>"can", :translate_word=>"できる"}, {:word=>"one", :translate_word=>"1"}, {:word=>"cavern", :translate_word=>"洞窟"}, {:word=>"hold", :translate_word=>"ホールド"}, {:word=>"Looking", :translate_word=>"見ている"}, {:word=>"around", :translate_word=>"まわり"}, {:word=>"here", :translate_word=>"ここに"}, {:word=>"you d", :translate_word=>"あなたがしたい"}, {:word=>"sure", :translate_word=>"きっと"}, {:word=>"She s", :translate_word=>"彼女は"}, {:word=>"got", :translate_word=>"得た"}, {:word=>"everything", :translate_word=>"すべてのもの"}, {:word=>"I ve", :translate_word=>"Iました"}, {:word=>"gadgets", :translate_word=>"ガジェット"}, {:word=>"and", :translate_word=>"そして"}, {:word=>"gizmos", :translate_word=>"ギズモ"}, {:word=>"aplenty", :translate_word=>"豊富な"}, {:word=>"who sits", :translate_word=>"誰が"}, {:word=>"what sits", :translate_word=>"なにが"}, {:word=>"galore", :translate_word=>"豊富な"}, {:word=>"You", :translate_word=>"君は"}, {:word=>"want", :translate_word=>"欲しいです"}, {:word=>"thingamabobs", :translate_word=>"物事"}, {:word=>"twenty", :translate_word=>"二十"}, {:word=>"But", :translate_word=>"しかし"}, {:word=>"cares", :translate_word=>"気にする"}, {:word=>"No", :translate_word=>"いいえ"}, {:word=>"big", :translate_word=>"大きい"}, {:word=>"deal", :translate_word=>"対処"}, {:word=>"more", :translate_word=>"もっと"}, {:word=>"wanna", :translate_word=>"したい"}, {:word=>"be", :translate_word=>"ある"}, {:word=>"where", :translate_word=>"どこで"}, {:word=>"people", :translate_word=>"人"}, {:word=>"are", :translate_word=>"あります"}, {:word=>"see", :translate_word=>"見る"}, {:word=>" em", :translate_word=>"で"}, {:word=>"dancin ", :translate_word=>"ダンシン"}, {:word=>"Walkin ", :translate_word=>"ウォーキン"}, {:word=>"on", :translate_word=>"に"}, {:word=>"those", :translate_word=>"それら"}, {:word=>"Whaddya", :translate_word=>"ファディヤ"}, {:word=>"call", :translate_word=>"コール"}, {:word=>"Oh", :translate_word=>"ああ"}, {:word=>"feet", :translate_word=>"足"}, {:word=>"Flippin ", :translate_word=>"フリッピン"}, {:word=>"fins", :translate_word=>"罰金"}, {:word=>"don t", :translate_word=>"しない"}, {:word=>"get", :translate_word=>"取得する"}, {:word=>"too", :translate_word=>"も"}, {:word=>"far", :translate_word=>"遠くに"}, {:word=>"Legs", :translate_word=>"足"}, {:word=>"required", :translate_word=>"必須"}, {:word=>"for", :translate_word=>"にとって"}, {:word=>"jumpin ", :translate_word=>"飛び込む&#39;"}, {:word=>"Strollin ", :translate_word=>"Strollin &#39;"}, {:word=>"along", :translate_word=>"に沿って"}, {:word=>"down", :translate_word=>"ダウン"}, {:word=>"What s", :translate_word=>"なに"}, {:word=>"that", :translate_word=>"それ"}, {:word=>"word", :translate_word=>"ワード"}, {:word=>"again", :translate_word=>"再び"}, {:word=>"Street", :translate_word=>"通り"}, {:word=>"Up", :translate_word=>"アップ"}, {:word=>"walk", :translate_word=>"歩く"}, {:word=>"up", :translate_word=>"アップ"}, {:word=>"run", :translate_word=>"走る"}, {:word=>"stay", :translate_word=>"滞在"}, {:word=>"all", :translate_word=>"すべて"}, {:word=>"day", :translate_word=>"日"}, {:word=>"in", :translate_word=>"に"}, {:word=>"sun", :translate_word=>"太陽"}, {:word=>"Wanderin ", :translate_word=>"ワンダーリン"}, {:word=>"free", :translate_word=>"無料"}, {:word=>"wish", :translate_word=>"願い"}, {:word=>"could", :translate_word=>"できた"}, {:word=>"Part", :translate_word=>"部"}, {:word=>"of", :translate_word=>"の"}, {:word=>"world", :translate_word=>"世界"}, {:word=>"What", :translate_word=>"何"}, {:word=>"would", :translate_word=>"だろう"}, {:word=>"give", :translate_word=>"与える"}, {:word=>"if", :translate_word=>"もし"}, {:word=>"live", :translate_word=>"ライブ"}, {:word=>"Outta", :translate_word=>"アウタ"}, {:word=>"these", :translate_word=>"これら"}, {:word=>"waters", :translate_word=>"水域"}, {:word=>"pay", :translate_word=>"支払う"}, {:word=>"to", :translate_word=>"に"}, {:word=>"spend", :translate_word=>"費やす"}, {:word=>"Warm", :translate_word=>"暖かい"}, {:word=>"sand", :translate_word=>"砂"}, {:word=>"Betcha", :translate_word=>"ベッチャ"}, {:word=>"land", :translate_word=>"土地"}, {:word=>"understand", :translate_word=>"わかる"}, {:word=>"Bet", :translate_word=>"しかし"}, {:word=>"reprimand", :translate_word=>"懲戒"}, {:word=>"daughters", :translate_word=>"娘たち"}, {:word=>"Bright", :translate_word=>"明るい"}, {:word=>"young", :translate_word=>"若い"}, {:word=>"women", :translate_word=>"女性たち"}, {:word=>"sick", :translate_word=>"病気"}, {:word=>"swimmin ", :translate_word=>"水泳"}, {:word=>"Ready", :translate_word=>"準備ができて"}, {:word=>"stand", :translate_word=>"スタンド"}, {:word=>"And", :translate_word=>"そして"}, {:word=>"ready", :translate_word=>"準備ができて"}, {:word=>"know", :translate_word=>"知っている"}, {:word=>"what", :translate_word=>"何"}, {:word=>"Ask", :translate_word=>"尋ねる"}, {:word=>"question", :translate_word=>"質問"}, {:word=>"some", :translate_word=>"一部"}, {:word=>"answers", :translate_word=>"答え"}, {:word=>"fire", :translate_word=>"火災"}, {:word=>"why", :translate_word=>"なぜ"}, {:word=>"does", :translate_word=>"する"}, {:word=>"burn", :translate_word=>"燃やす"}, {:word=>"When", :translate_word=>"いつ"}, {:word=>"is", :translate_word=>"です"}, {:word=>"turn", :translate_word=>"順番"}, {:word=>"love", :translate_word=>"愛"}, {:word=>"Love", :translate_word=>"愛"}, {:word=>"explore", :translate_word=>"探検する"}, {:word=>"shore", :translate_word=>"岸"}, {:word=>"above", :translate_word=>"上に"}, {:word=>"Out", :translate_word=>"でる"}, {:word=>"sea", :translate_word=>"海"}, {:word=>"world.", :translate_word=>"世界"}]','[{:word=>"Tale", :translate_word=>"本"}, {:word=>"as", :translate_word=>"として"}, {:word=>"old", :translate_word=>"古い"}, {:word=>"time", :translate_word=>"時間"}, {:word=>"True", :translate_word=>"本当"}, {:word=>"can", :translate_word=>"できる"}, {:word=>"be", :translate_word=>"ある"}, {:word=>"Barely", :translate_word=>"かろうじて"}, {:word=>"even", :translate_word=>"でも"}, {:word=>"friends", :translate_word=>"友達"}, {:word=>"Then", :translate_word=>"それから"}, {:word=>"somebody", :translate_word=>"誰か"}, {:word=>"bends", :translate_word=>"曲がる"}, {:word=>"Unexpectedly", :translate_word=>"意外に"}, {:word=>"Just", :translate_word=>"ただ"}, {:word=>"little", :translate_word=>"ちょっと"}, {:word=>"change", :translate_word=>"変化する"}, {:word=>"Small", :translate_word=>"小さい"}, {:word=>"to", :translate_word=>"に"}, {:word=>"say", :translate_word=>"いう"}, {:word=>"least", :translate_word=>"少なくとも"}, {:word=>"Both", :translate_word=>"両方"}, {:word=>"scared", :translate_word=>"怖い"}, {:word=>"Neither", :translate_word=>"どちらでもない"}, {:word=>"one", :translate_word=>"1"}, {:word=>"prepared", :translate_word=>"準備した"}, {:word=>"Beauty", :translate_word=>"美しさ"}, {:word=>"and", :translate_word=>"そして"}, {:word=>"Beast", :translate_word=>"獣"}, {:word=>"Ever", :translate_word=>"今まで"}, {:word=>"just", :translate_word=>"ただ"}, {:word=>"same", :translate_word=>"同じ"}, {:word=>"surprise", :translate_word=>"驚き"}, {:word=>"before", :translate_word=>"前"}, {:word=>"sure", :translate_word=>"きっと"}, {:word=>"As", :translate_word=>"として"}, {:word=>"sun", :translate_word=>"太陽"}, {:word=>"will", :translate_word=>"意志"}, {:word=>"rise", :translate_word=>"上がる"}, {:word=>"Tune", :translate_word=>"曲"}, {:word=>"song", :translate_word=>"歌"}, {:word=>"Bittersweet", :translate_word=>"ほろ苦い"}, {:word=>"strange", :translate_word=>"奇妙な"}, {:word=>"Finding", :translate_word=>"見つける"}, {:word=>"Learning", :translate_word=>"学び"}, {:word=>"were", :translate_word=>"だった"}, {:word=>"wrong", :translate_word=>"違う"}, {:word=>"Certain", :translate_word=>"確かな"}, {:word=>"Rising", :translate_word=>"上昇"}, {:word=>"in", :translate_word=>"に"}, {:word=>"east", :translate_word=>"東"}, {:word=>"Song", :translate_word=>"歌"}, {:word=>"rhyme", :translate_word=>"韻"}]'];


//最終的にはWordSetに単語と訳が入る
var WordSet = [];

wordset_All.forEach(function(wordset_all){
    var song_index = wordset_All.indexOf(wordset_all);
    //文字列の整形
    var wordset_picked = wordset_all.replace(/{:word=>/g, '').replace(/ :translate_word=>/g, '').replace(/}/g, '').replace(/, /g,',').replace("[",'').replace("]",'').replace(/"/g,'');
    var wordset = wordset_picked.split(",");
    //wordsetのカラムのデータをハッシュにしていく
    var word_origin = [];
    var word_trance = [];

    //文字列を操作してハッシュをつくっていく
    for (var i = 0; i <wordset.length; i ++ ){
      if(i % 2 == 0){
        var origin =wordset[i]; 
        var trance = wordset[i + 1];
        word_origin.push(origin);
        word_trance.push(trance);
      }
    };
    for (var i = 0; i < word_origin.length; i++){
      var set = {};
      set.origin = word_origin[i];
      set.trance = word_trance[i];
      set.title = song_title[song_index];
      WordSet.push(set);
    }
});

var num = 0;
var Disp_word = function(set_index){
    $(".word").html(WordSet[set_index].origin);
    $(".translate").html(WordSet[set_index].trance);
    title_set = WordSet[set_index].title;
    title_set_index = song_title.indexOf(title_set);
    //console.log(title_set_index);
    //console.log(lyric);
    lyric_include = lyric[title_set_index];
    //正規表現でマッチしたものを赤字ボールドに
    var reg = new RegExp(WordSet[set_index].origin,"g");
    //console.log(reg);
    lyric_include_mark= lyric_include.replace(reg, '<span class ="mark" >' + WordSet[set_index].origin + '</span>');
    $(".lyric").html(lyric_include_mark);
    //$(".lyric").html(lyric_include);
    $(".title").html(title_set);

};

//シャッフル
for(var i = WordSet.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = WordSet[i];
  WordSet[i] = WordSet[r];
  WordSet[r] = tmp;
}

console.log(WordSet);
//ここまで初期動作

//画面を開いたときに言葉を表示
$(function(){
  Disp_word(num);
});

$(function() {
    //ボタンをクリックしたら発動
    $('.prev').click(function() {
      //クリックしたらアラートを表示
      num -= 1;
      if(num < 0){
          num = 0;
      };
      Disp_word(num);
    });
  });

  $(function() {
    //ボタンをクリックしたら発動
    $('.next').click(function() {
        num += 1;
        Disp_word(num);
    });
  });