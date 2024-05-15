<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ItemVarietySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('item_varieties')->truncate();

        $now = Carbon::now();
        \DB::table('item_varieties')->insert([
            ['categoryId' => 1, 'name' => 'ナス', 'hiragana' => 'なす', 'katakana' => 'ナス', 'kanzi' => '茄子', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'トマト', 'hiragana' => 'とまと', 'katakana' => 'トマト', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ピーマン', 'hiragana' => 'ぴーまん', 'katakana' => 'ピーマン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'パプリカ', 'hiragana' => 'ぱぷりか', 'katakana' => 'パプリカ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'トウガラシ', 'hiragana' => 'とうがらし', 'katakana' => 'トウガラシ', 'kanzi' => '唐辛子', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'シシトウガラシ', 'hiragana' => 'ししとうがらし', 'katakana' => 'シシトウガラシ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'カボチャ', 'hiragana' => 'かぼちゃ', 'katakana' => 'カボチャ', 'kanzi' => '南瓜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ズッキーニ', 'hiragana' => 'ずっきーに', 'katakana' => 'ズッキーニ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'キュウリ', 'hiragana' => 'きゅうり', 'katakana' => 'キュウリ', 'kanzi' => '胡瓜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ゴーヤ', 'hiragana' => 'ごーや', 'katakana' => 'ゴーヤ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'トウガン', 'hiragana' => 'とうがん', 'katakana' => 'トウガン', 'kanzi' => '冬瓜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'オクラ', 'hiragana' => 'おくら', 'katakana' => 'オクラ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'インゲンマメ', 'hiragana' => 'いんげんまめ', 'katakana' => 'インゲンマメ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'エンドウ', 'hiragana' => 'えんどう', 'katakana' => 'エンドウ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ササゲ', 'hiragana' => 'ささげ', 'katakana' => 'ササゲ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'シカクマメ', 'hiragana' => 'しかくまめ', 'katakana' => 'シカクマメ', 'kanzi' => '四角豆', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ソラマメ', 'hiragana' => 'そらまめ', 'katakana' => 'ソラマメ', 'kanzi' => 'そら豆', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ナタマメ', 'hiragana' => 'なたまめ', 'katakana' => 'ナタマメ', 'kanzi' => '刀豆', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ヒヨコマメ', 'hiragana' => 'ひよこまめ', 'katakana' => 'ヒヨコマメ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '落花生', 'hiragana' => 'らっかせい', 'katakana' => 'ラッカセイ', 'kanzi' => '落花生', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'レンズマメ', 'hiragana' => 'れんずまめ', 'katakana' => 'レンズマメ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'スプラウト', 'hiragana' => 'すぷらうと', 'katakana' => 'スプラウト', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'モヤシ', 'hiragana' => 'もやし', 'katakana' => 'モヤシ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'カイワレダイコン', 'hiragana' => 'かいわれだいこん', 'katakana' => 'カイワレダイコン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'アイスプラント', 'hiragana' => 'あいすぷらんと', 'katakana' => 'アイスプラント', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'カラシナ', 'hiragana' => 'からしな', 'katakana' => 'カラシナ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'クレソン', 'hiragana' => 'くれそん', 'katakana' => 'クレソン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'キャベツ', 'hiragana' => 'きゃべつ', 'katakana' => 'キャベツ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'メキャベツ', 'hiragana' => 'めきゃべつ', 'katakana' => 'メキャベツ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ケール', 'hiragana' => 'けーる', 'katakana' => 'ケール', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '小松菜', 'hiragana' => 'こまつな', 'katakana' => 'コマツナ', 'kanzi' => '小松菜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'パクチー', 'hiragana' => 'ぱくちー', 'katakana' => 'パクチー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'モロヘイヤ', 'hiragana' => 'もろへいや', 'katakana' => 'モロヘイヤ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '春菊', 'hiragana' => 'しゅんぎく', 'katakana' => 'シュンギク', 'kanzi' => '春菊', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'セリ', 'hiragana' => 'せり', 'katakana' => 'セリ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'セロリ', 'hiragana' => 'せろり', 'katakana' => 'セロリ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'タアサイ', 'hiragana' => 'たあさい', 'katakana' => 'タアサイ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '高菜', 'hiragana' => 'たかな', 'katakana' => 'タカナ', 'kanzi' => '高菜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'チンゲンサイ', 'hiragana' => 'ちんげんさい', 'katakana' => 'チンゲンサイ', 'kanzi' => '青梗菜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ツルムラサキ', 'hiragana' => 'つるむらさき', 'katakana' => 'ツルムラサキ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '野沢菜', 'hiragana' => 'のざわな', 'katakana' => 'ノザワナ', 'kanzi' => '野沢菜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '白菜', 'hiragana' => 'はくさい', 'katakana' => 'ハクサイ', 'kanzi' => '白菜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'パセリ', 'hiragana' => 'ぱせり', 'katakana' => 'パセリ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ホウレンソウ', 'hiragana' => 'ほうれんそう', 'katakana' => 'ホウレンソウ', 'kanzi' => 'ほうれん草', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '水菜', 'hiragana' => 'みずな', 'katakana' => 'ミズナ', 'kanzi' => '水菜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '三つ葉', 'hiragana' => 'みつば', 'katakana' => 'ミツバ', 'kanzi' => '三つ葉', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ルッコラ', 'hiragana' => 'るっこら', 'katakana' => 'ルッコラ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'レタス', 'hiragana' => 'れたす', 'katakana' => 'レタス', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'アサツキ', 'hiragana' => 'あさつき', 'katakana' => 'アサツキ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'エシャロット', 'hiragana' => 'えしゃろっと', 'katakana' => 'エシャロット', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'タマネギ', 'hiragana' => 'たまねぎ', 'katakana' => 'タマネギ', 'kanzi' => '玉ねぎ', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ニラ', 'hiragana' => 'にら', 'katakana' => 'ニラ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ニンニク', 'hiragana' => 'にんにく', 'katakana' => 'ニンニク', 'kanzi' => '大蒜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ネギ', 'hiragana' => 'ねぎ', 'katakana' => 'ネギ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ラッキョウ', 'hiragana' => 'らっきょう', 'katakana' => 'ラッキョウ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'リーキ', 'hiragana' => 'りーき', 'katakana' => 'リーキ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ワケギ', 'hiragana' => 'わけぎ', 'katakana' => 'ワケギ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'アスパラガス', 'hiragana' => 'あすぱらがす', 'katakana' => 'アスパラガス', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ウド', 'hiragana' => 'うど', 'katakana' => 'ウド', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ザーサイ', 'hiragana' => 'ざーさい', 'katakana' => 'ザーサイ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'タケノコ', 'hiragana' => 'たけのこ', 'katakana' => 'タケノコ', 'kanzi' => '筍', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'アーティチョーク', 'hiragana' => 'あーてぃちょーく', 'katakana' => 'アーティチョーク', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'アブラナ', 'hiragana' => 'あぶらな', 'katakana' => 'アブラナ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ブロッコリー', 'hiragana' => 'ぶろっこりー', 'katakana' => 'ブロッコリー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'カリフラワー', 'hiragana' => 'かりふらわー', 'katakana' => 'カリフラワー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '食用菊', 'hiragana' => 'しょくようぎく', 'katakana' => 'ショクヨウギク', 'kanzi' => '食用菊', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'フキノトウ', 'hiragana' => 'ふきのとう', 'katakana' => 'フキノトウ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ミョウガ', 'hiragana' => 'みょうが', 'katakana' => 'ミョウガ', 'kanzi' => '茗荷', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'カブ', 'hiragana' => 'かぶ', 'katakana' => 'カブ', 'kanzi' => '蕪', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '大根', 'hiragana' => 'だいこん', 'katakana' => 'ダイコン', 'kanzi' => '大根', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => '二十日大根', 'hiragana' => 'はつかだいこん', 'katakana' => 'ハツカダイコン', 'kanzi' => '二十日大根', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'クワイ', 'hiragana' => 'くわい', 'katakana' => 'クワイ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ゴボウ', 'hiragana' => 'ごぼう', 'katakana' => 'ゴボウ', 'kanzi' => '牛蒡', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ショウガ', 'hiragana' => 'しょうが', 'katakana' => 'ショウガ', 'kanzi' => '生姜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ニンジン', 'hiragana' => 'にんじん', 'katakana' => 'ニンジン', 'kanzi' => '人参', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'レンコン', 'hiragana' => 'れんこん', 'katakana' => 'レンコン', 'kanzi' => '蓮根', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ビート', 'hiragana' => 'びーと', 'katakana' => 'ビート', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ユリ根', 'hiragana' => 'ゆりね', 'katakana' => 'ユリネ', 'kanzi' => 'ユリ根', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'サツマイモ', 'hiragana' => 'さつまいも', 'katakana' => 'サツマイモ', 'kanzi' => '薩摩芋', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'サトイモ', 'hiragana' => 'さといも', 'katakana' => 'サトイモ', 'kanzi' => '里芋', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ジャガイモ', 'hiragana' => 'じゃがいも', 'katakana' => 'ジャガイモ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ナガイモ', 'hiragana' => 'ながいも', 'katakana' => 'ナガイモ', 'kanzi' => '長芋', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ヤマノイモ', 'hiragana' => 'やまのいも', 'katakana' => 'ヤマノイモ', 'kanzi' => '山芋', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'エノキタケ', 'hiragana' => 'えのきたけ', 'katakana' => 'エノキタケ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'エリンギ', 'hiragana' => 'えりんぎ', 'katakana' => 'エリンギ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'キクラゲ', 'hiragana' => 'きくらげ', 'katakana' => 'キクラゲ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'キヌガサタケ', 'hiragana' => 'きぬがさたけ', 'katakana' => 'キヌガサタケ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'シイタケ', 'hiragana' => 'しいたけ', 'katakana' => 'シイタケ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'シメジ', 'hiragana' => 'しめじ', 'katakana' => 'シメジ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'シロキクラゲ', 'hiragana' => 'しろきくらげ', 'katakana' => 'シロキクラゲ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ナメコ', 'hiragana' => 'なめこ', 'katakana' => 'ナメコ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ナラタケ', 'hiragana' => 'ならたけ', 'katakana' => 'ナラタケ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ヒラタケ', 'hiragana' => 'ひらたけ', 'katakana' => 'ヒラタケ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'ブナシメジ', 'hiragana' => 'ぶなしめじ', 'katakana' => 'ブナシメジ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'マイタケ', 'hiragana' => 'まいたけ', 'katakana' => 'マイタケ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'マッシュルーム', 'hiragana' => 'まっしゅるーむ', 'katakana' => 'マッシュルーム', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'マツタケ', 'hiragana' => 'まつたけ', 'katakana' => 'マツタケ', 'kanzi' => '松茸', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 1, 'name' => 'その他', 'hiragana' => 'そのた', 'katakana' => 'ソノタ', 'kanzi' => 'その他', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'あけび', 'hiragana' => 'あけび', 'katakana' => 'アケビ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'アサイー', 'hiragana' => 'あさいー', 'katakana' => 'アサイー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'アセロラ', 'hiragana' => 'あせろら', 'katakana' => 'アセロラ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'アボカド', 'hiragana' => 'あぼかど', 'katakana' => 'アボカド', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'あんず', 'hiragana' => 'あんず', 'katakana' => 'アンズ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'いちご', 'hiragana' => 'いちご', 'katakana' => 'イチゴ', 'kanzi' => '苺', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'いちじく', 'hiragana' => 'いちじく', 'katakana' => 'イチジク', 'kanzi' => '無花果', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'いよかん', 'hiragana' => 'いよかん', 'katakana' => 'イヨカン', 'kanzi' => '伊予柑', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => '梅', 'hiragana' => 'うめ', 'katakana' => 'ウメ', 'kanzi' => '梅', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'オリーブ', 'hiragana' => 'おりーぶ', 'katakana' => 'オリーブ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'オレンジ', 'hiragana' => 'おれんじ', 'katakana' => 'オレンジ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => '柿', 'hiragana' => 'かき', 'katakana' => 'カキ', 'kanzi' => '柿', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'かぼす', 'hiragana' => 'かぼす', 'katakana' => 'カボス', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'キウイ', 'hiragana' => 'きうい', 'katakana' => 'キウイ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => '金柑', 'hiragana' => 'きんかん', 'katakana' => 'キンカン', 'kanzi' => '金柑', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'グレープフルーツ', 'hiragana' => 'ぐれーぷふるーつ', 'katakana' => 'グレープフルーツ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'さくらんぼ', 'hiragana' => 'さくらんぼ', 'katakana' => 'サクランボ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ざくろ', 'hiragana' => 'ざくろ', 'katakana' => 'ザクロ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'シークワーサー', 'hiragana' => 'しーくわーさー', 'katakana' => 'シークワーサー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'スイカ', 'hiragana' => 'すいか', 'katakana' => 'スイカ', 'kanzi' => '西瓜', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'スターフルーツ', 'hiragana' => 'すたーふるーつ', 'katakana' => 'スターフルーツ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'すだち', 'hiragana' => 'すだち', 'katakana' => 'スダチ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'すもも', 'hiragana' => 'すもも', 'katakana' => 'スモモ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'デコポン', 'hiragana' => 'でこぽん', 'katakana' => 'デコポン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ドラゴンフルーツ', 'hiragana' => 'どらごんふるーつ', 'katakana' => 'ドラゴンフルーツ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ドリアン', 'hiragana' => 'どりあん', 'katakana' => 'ドリアン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'パイナップル', 'hiragana' => 'ぱいなっぷる', 'katakana' => 'パイナップル', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ハスカップ', 'hiragana' => 'はすかっぷ', 'katakana' => 'ハスカップ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'はっさく', 'hiragana' => 'はっさく', 'katakana' => 'ハッサク', 'kanzi' => '八朔', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'パッションフルーツ', 'hiragana' => 'ぱっしょんふるーつ', 'katakana' => 'パッションフルーツ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'バナナ', 'hiragana' => 'ばなな', 'katakana' => 'バナナ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'パパイヤ', 'hiragana' => 'ぱぱいや', 'katakana' => 'パパイヤ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'びわ', 'hiragana' => 'びわ', 'katakana' => 'ビワ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ぶどう', 'hiragana' => 'ぶどう', 'katakana' => 'ブドウ', 'kanzi' => '葡萄', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ブルーベリー', 'hiragana' => 'ぶるーべりー', 'katakana' => 'ブルーベリー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'プルーン', 'hiragana' => 'ぷるーん', 'katakana' => 'プルーン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ブンタン', 'hiragana' => 'ぶんたん', 'katakana' => 'ブンタン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ポンカン', 'hiragana' => 'ぽんかん', 'katakana' => 'ポンカン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'マスカット', 'hiragana' => 'ますかっと', 'katakana' => 'マスカット', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'マンゴー', 'hiragana' => 'まんごー', 'katakana' => 'マンゴー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'マンゴスチン', 'hiragana' => 'まんごすちん', 'katakana' => 'マンゴスチン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'みかん', 'hiragana' => 'みかん', 'katakana' => 'ミカン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'メロゴールド', 'hiragana' => 'めろごーるど', 'katakana' => 'メロゴールド', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'メロン', 'hiragana' => 'めろん', 'katakana' => 'メロン', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => '桃', 'hiragana' => 'もも', 'katakana' => 'モモ', 'kanzi' => '桃', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ゆず', 'hiragana' => 'ゆず', 'katakana' => 'ユズ', 'kanzi' => '柚子', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => '洋梨', 'hiragana' => 'ようなし', 'katakana' => 'ヨウナシ', 'kanzi' => '洋梨', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ライチ', 'hiragana' => 'らいち', 'katakana' => 'ライチ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ライム', 'hiragana' => 'らいむ', 'katakana' => 'ライム', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'ラズベリー', 'hiragana' => 'らずべりー', 'katakana' => 'ラズベリー', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'りんご', 'hiragana' => 'りんご', 'katakana' => 'リンゴ', 'kanzi' => '林檎', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'レモン', 'hiragana' => 'れもん', 'katakana' => 'レモン', 'kanzi' => '檸檬', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 2, 'name' => 'その他', 'hiragana' => 'そのた', 'katakana' => 'ソノタ', 'kanzi' => 'その他', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 3, 'name' => '牛肉', 'hiragana' => 'ぎゅうにく', 'katakana' => 'ギュウニク', 'kanzi' => '牛肉', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 3, 'name' => '豚肉', 'hiragana' => 'ぶたにく', 'katakana' => 'ブタニク', 'kanzi' => '豚肉', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 3, 'name' => '鶏肉', 'hiragana' => 'とりにく', 'katakana' => 'トリニク', 'kanzi' => '鶏肉', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 3, 'name' => '加工肉', 'hiragana' => 'かこうにく', 'katakana' => 'カコウニク', 'kanzi' => '加工肉', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 3, 'name' => 'その他', 'hiragana' => 'そのた', 'katakana' => 'ソノタ', 'kanzi' => 'その他', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => '米', 'hiragana' => 'こめ', 'katakana' => 'コメ', 'kanzi' => '米', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => '小麦', 'hiragana' => 'こむぎ', 'katakana' => 'コムギ', 'kanzi' => '小麦', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => 'とうもろこし', 'hiragana' => 'とうもろこし', 'katakana' => 'トウモロコシ', 'kanzi' => 'null', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => '大麦', 'hiragana' => 'おおむぎ', 'katakana' => 'オオムギ', 'kanzi' => '大麦', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => 'そば', 'hiragana' => 'そば', 'katakana' => 'ソバ', 'kanzi' => '蕎麦', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => '大豆', 'hiragana' => 'だいず', 'katakana' => 'ダイズ', 'kanzi' => '大豆', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => '小豆', 'hiragana' => 'あずき', 'katakana' => 'アズキ', 'kanzi' => '小豆', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => '菜種', 'hiragana' => 'なたね', 'katakana' => 'ナタネ', 'kanzi' => 'ナタネ', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => 'ごま', 'hiragana' => 'ごま', 'katakana' => 'ゴマ', 'kanzi' => '胡麻', 'created_at' => $now, 'updated_at' => $now],
            ['categoryId' => 4, 'name' => 'その他', 'hiragana' => 'そのた', 'katakana' => 'ソノタ', 'kanzi' => 'その他', 'created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
