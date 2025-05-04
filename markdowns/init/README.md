<!-- title いろいろ -->
<!-- create 2023-12-15 15:00 -->
<!-- update 2025-02-02 22:00 -->
<!-- license 文書: ライセンスページを確認してください, ソースコード: なし(自由に利用可能) -->

# 目次

- [目次](#目次)
- [使用するサイト](#使用するサイト)
- [前提知識](#前提知識)
- [初期設定](#初期設定)
  - [Git](#git)
  - [VSCodeの拡張機能をインストール](#vscodeの拡張機能をインストール)
- [基本の使い方](#基本の使い方)
  - [プログラムの共有](#プログラムの共有)
    - [他の人の変更を受け取る](#他の人の変更を受け取る)
    - [他の人に変更を送る](#他の人に変更を送る)
  - [プログラムの実行](#プログラムの実行)
- [知っておくと便利な情報](#知っておくと便利な情報)
  - [便利なショートカットキーの一覧](#便利なショートカットキーの一覧)
  - [Issueを使う](#issueを使う)
  - [ドキュメントを書く](#ドキュメントを書く)
  - [コンパイルエラーを読む](#コンパイルエラーを読む)
  - [コーディング規約](#コーディング規約)
  - [その他の補足](#その他の補足)

# 使用するサイト

- ここ: <https://ay0.org/init>
- GitHub: <https://github.com/>
- ソースコードがおいてある場所: <https://github.com/aya-0p/contest>

# 前提知識

1. ↓の使い方

   ```sh

   $ cd ~
   $ code . # run vscode
   ```

   - $で始まっているものはすべてTerminal(端末)で実行するものです
   - `$`と`#`以降の文字以外をコピー&ペーストして実行します。
   - つまり上の例では`cd ~`と`code .`を実行します。

2. VSCode
   - `Visual Studio Code`のこと

# 初期設定

## Git

- 次の2つを実行

```sh

$ git config --global user.name "username" # usernameをGitHubで設定したusernameに変更
$ git config --global user.email "email" # emailをGitHubで設定したemailに変更
```

## VSCodeの拡張機能をインストール

- Extension Pack for Java
- GitHub Pull Requests and Issues

# 基本の使い方

## プログラムの共有

### 他の人の変更を受け取る

<img src="https://f.ay0.org/misskey/753c7ecb-211e-4e23-98fc-bd95de9ad57b.png" width="480">

### 他の人に変更を送る

<img src="https://f.ay0.org/misskey/dcab5359-389d-45fd-8de5-2569207c3f43.webp" width="480">

<img src="https://f.ay0.org/misskey/c272a55f-c566-461c-9eb5-c5518a790dff.png" width="480">

## プログラムの実行

- 右上の再生ボタンをクリック

  <img src="https://f.ay0.org/misskey/6df648a7-6543-492c-9f50-1e328430990b.png" width="480">

# 知っておくと便利な情報

- 見なくてもやっていけます

## 便利なショートカットキーの一覧

| キー                   | 動作                                   |
| ---------------------- | -------------------------------------- |
| `Ctrl` + `s`           | 保存                                   |
| `Ctrl` + `c`           | コピー                                 |
| `Ctrl` + `v`           | 貼り付け                               |
| `Ctrl` + `z`           | 元に戻す(編集を一つ前の状態にする)     |
| `Ctrl` + `y`           | やり直す(編集を一つ後の状態にする)     |
| `Ctrl` + `Shift` + `i` | フォーマット(プログラムをきれいにする) |

## Issueを使う

- URL: <https://github.com/aya-0p/contest/issues>
- 今後すべきこと、起きたバグ、新たな機能の提案などを記録できる
- `New Issue`をクリックしたあと、タイトルと本文を入力して`Submit new issue`
- VSCodeの左端のメニュー内の猫のアイコンからでも確認できる
- こんな感じ: <https://github.com/aya-0p/contest/issues/1>

## ドキュメントを書く

- 他の人が作ったプログラムを読むとき、自分が作ったプログラムを後から読み返すとき自分が何を書いたかわからなくなることはありませんか？
- それを防ぐためにどこで何が行われているかをコメントに書いておこう
- 例: <https://github.com/aya-0p/contest/blob/main/MoveChara.java>
- 何がいいの？

  - カーソルを合わせると情報が見れる(画像のドキュメントは間違えてますが修正済みです)

    <img src="https://f.ay0.org/misskey/0ad9ca0a-2894-490e-a567-8813942aa76e.webp" width="480">

- 書き方:

  ```java

  /**
   * 足し算
   * @param a 1つめの数字
   * @param b 2つめの数字
   * @return 答え
   */
  private int add(int a, int b) {
      // a + b を計算する
      int sum = a + b;
      return sum;
  }
  ```

## コンパイルエラーを読む

1. セミコロン忘れ

   ```sh

   aya@aya-HP-Pavilion-Plus-Laptop-14-eh0xxx:~/ドキュメント/projects/contest$  cd /home/aya/ドキュメント/projects/contest ; /usr/bin/env /usr/local/jdk-21/bin/java @/tmp/cp_50qtb720qcmgzwak7zhts86dd.argfile MapGame # 実行
   Exception in Application start method # 例外が発生したよ
   java.lang.reflect.InvocationTargetException
           at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:118)
           at java.base/java.lang.reflect.Method.invoke(Method.java:580)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.launchApplicationWithArgs(LauncherImpl.java:464)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.launchApplication(LauncherImpl.java:364)
           at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
           at java.base/java.lang.reflect.Method.invoke(Method.java:580)
           at java.base/sun.launcher.LauncherHelper$FXHelper.main(LauncherHelper.java:1135)
   Caused by: java.lang.RuntimeException: Exception in Application start method # 以下の理由によって
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.launchApplication1(LauncherImpl.java:893)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.lambda$launchApplication$2(LauncherImpl.java:196)
           at java.base/java.lang.Thread.run(Thread.java:1583)
   Caused by: java.lang.Error: Unresolved compilation problem: # 以下の理由によって
           Syntax error, insert ";" to complete LocalVariableDeclarationStatement # 構文エラー, ";"入れろ

           at MoveChara.setCharaDirection(MoveChara.java:82) # MoveChara.setCharaDirection, MoveChara.javaの82行目
           at MoveChara.<init>(MoveChara.java:73)
           at MapGameController.initialize(MapGameController.java:25)
           at javafx.fxml@21.0.1/javafx.fxml.FXMLLoader.loadImpl(FXMLLoader.java:2670)
           at javafx.fxml@21.0.1/javafx.fxml.FXMLLoader.loadImpl(FXMLLoader.java:2563)
           at javafx.fxml@21.0.1/javafx.fxml.FXMLLoader.load(FXMLLoader.java:2531)
           at StageDB.getMainStage(StageDB.java:59)
           at MapGame.start(MapGame.java:15)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.lambda$launchApplication1$9(LauncherImpl.java:839)
           at javafx.graphics@21.0.1/com.sun.javafx.application.PlatformImpl.lambda$runAndWait$12(PlatformImpl.java:483)
           at javafx.graphics@21.0.1/com.sun.javafx.application.PlatformImpl.lambda$runLater$10(PlatformImpl.java:456)
           at java.base/java.security.AccessController.doPrivileged(AccessController.java:400)
           at javafx.graphics@21.0.1/com.sun.javafx.application.PlatformImpl.lambda$runLater$11(PlatformImpl.java:455)
           at javafx.graphics@21.0.1/com.sun.glass.ui.InvokeLaterDispatcher$Future.run(InvokeLaterDispatcher.java:95)
           at javafx.graphics@21.0.1/com.sun.glass.ui.gtk.GtkApplication._runLoop(Native Method)
           at javafx.graphics@21.0.1/com.sun.glass.ui.gtk.GtkApplication.lambda$runLoop$10(GtkApplication.java:263)
           ... 1 more
   Exception running application MapGame
   ```

   - MoveChara.javaの82行目周辺で`;`忘れを探す

2. 型間違い

   ```sh

   aya@aya-HP-Pavilion-Plus-Laptop-14-eh0xxx:~/ドキュメント/projects/contest$  cd /home/aya/ドキュメント/projects/contest ; /usr/bin/env /usr/local/jdk-21/bin/java @/tmp/cp_50qtb720qcmgzwak7zhts86dd.argfile MapGame # 実行
   Exception in Application start method # 例外が発生したよ
   java.lang.reflect.InvocationTargetException
           at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:118)
           at java.base/java.lang.reflect.Method.invoke(Method.java:580)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.launchApplicationWithArgs(LauncherImpl.java:464)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.launchApplication(LauncherImpl.java:364)
           at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
           at java.base/java.lang.reflect.Method.invoke(Method.java:580)
           at java.base/sun.launcher.LauncherHelper$FXHelper.main(LauncherHelper.java:1135)
   Caused by: java.lang.RuntimeException: Exception in Application start method # 以下の理由によって
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.launchApplication1(LauncherImpl.java:893)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.lambda$launchApplication$2(LauncherImpl.java:196)
           at java.base/java.lang.Thread.run(Thread.java:1583)
   Caused by: java.lang.Error: Unresolved compilation problem: # 以下の理由によって
           Type mismatch: cannot convert from String to int # Stringをintに変換できません

           at MoveChara.setCharaDirection(MoveChara.java:83) # MoveChara.setCharaDirection, MoveChara.javaの83行目
           at MoveChara.<init>(MoveChara.java:73)
           at MapGameController.initialize(MapGameController.java:25)
           at javafx.fxml@21.0.1/javafx.fxml.FXMLLoader.loadImpl(FXMLLoader.java:2670)
           at javafx.fxml@21.0.1/javafx.fxml.FXMLLoader.loadImpl(FXMLLoader.java:2563)
           at javafx.fxml@21.0.1/javafx.fxml.FXMLLoader.load(FXMLLoader.java:2531)
           at StageDB.getMainStage(StageDB.java:59)
           at MapGame.start(MapGame.java:15)
           at javafx.graphics@21.0.1/com.sun.javafx.application.LauncherImpl.lambda$launchApplication1$9(LauncherImpl.java:839)
           at javafx.graphics@21.0.1/com.sun.javafx.application.PlatformImpl.lambda$runAndWait$12(PlatformImpl.java:483)
           at javafx.graphics@21.0.1/com.sun.javafx.application.PlatformImpl.lambda$runLater$10(PlatformImpl.java:456)
           at java.base/java.security.AccessController.doPrivileged(AccessController.java:400)
           at javafx.graphics@21.0.1/com.sun.javafx.application.PlatformImpl.lambda$runLater$11(PlatformImpl.java:455)
           at javafx.graphics@21.0.1/com.sun.glass.ui.InvokeLaterDispatcher$Future.run(InvokeLaterDispatcher.java:95)
           at javafx.graphics@21.0.1/com.sun.glass.ui.gtk.GtkApplication._runLoop(Native Method)
           at javafx.graphics@21.0.1/com.sun.glass.ui.gtk.GtkApplication.lambda$runLoop$10(GtkApplication.java:263)
           ... 1 more
   Exception running application MapGame
   ```

   - MoveChara.javaの83行目周辺で`int`型の変数(や定数)に`String`型を代入していないか確認

## コーディング規約

- 読みやすければなんでもいいですが、推奨として以下のものがあります
- `*.java`ファイルのインデントはスペース4つ
- `*.fxml`ファイルのインデントはスペース2つ
- 変数/定数名等はそれだけでなにかわかるようにする
- その他は第3回の講義資料にある`Javaコーディング標準.pdf`を参照

## その他の補足

1. `null`の可能性を考える

   - 以下の例では、`before = null, after = "after"`のとき`nullafter`が返ってしまう

   ```java

   /**
    * 2つの文字をつなげる
    */
   private static String concatString(String before, String after) {
       return before + after;
   }
   ```

   - 次のようにすると`after`を返す

   ```java

   /**
    * 2つの文字をつなげる
    */
   private static String concatString(String before, String after) {
       if (before == null) return after;
       if (after == null) return before;
       return before + after;
   }
   ```

   - ものによっては例外を投げても良い

   ```java

   /**
    * 2つの文字をつなげる
    */
   private static String concatString(String before, String after) throws IllegalArgumentException {
       // beforeやafterがnullのとき
       if (before == null || after == null) throw new IllegalArgumentException(); // コメント省略
       return before + after;
   }
   ```

2. ゲッタとセッタ

   - 説明は第7回資料の26-27ページを参照
   - なんで必要なのか？
     - 値は外部に見せたいが、変更してほしくないとき
     - 値を変更してもよいが指定した値以外にしてほしくないとき(nullなど)
   - 例

   ```java

   class Something {
       /** 0以上の整数 */
       private int value = 0;
       Something() {}
       public int getValue() {
           return this.value;
       }
       public void setValue(int val) throws IllegalArgumentException {
           // valueは0以上の整数である必要がある
           if (val < 0) throw new IllegalArgumentException();
           value = val;
           return;
       }
   }
   ```
