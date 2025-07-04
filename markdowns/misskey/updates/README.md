<!-- title 更新情報 -->
<!-- create 2024-05-20 16:45 -->
<!-- update 2025-04-09 19:00 -->
<!-- license misskeyの更新情報: GNU Affero General Public License v3.0, その他: なし -->
<!-- textlint-disable spellcheck-tech-word -->

# 更新情報

- バージョンは `yyyy.mm.patch-major.minor.patch` の形式で表記しています。この表記は今後変更される場合があります。
- `#[number]`は[misskey-dev/misskey](https://github.com/misskey-dev/misskey)での issue 番号です。

## 2025.6.3-1.2.1

- アカウント作成が可能で、メールアドレス認証が必須の場合でも招待コードがあればメールアドレス認証をスキップするように

## 2025.6.3-1.2.0

- アカウント作成が可能で、メールアドレス認証が必須の場合でも招待コードがあればメールアドレス認証をスキップできるように
- note_view_interruptor を再有効化(不具合修正はしてません)

## 2025.6.3-1.1.0

### Client

- Fix: キャッシュを削除しないとクライアントが使用できないことがある問題を修正

## 2025.6.2-1.1.0

### Client

- Fix: キャッシュを削除しないとクライアントが使用できないことがある問題を修正
- 翻訳の更新

## 2025.6.1-1.1.0

### Note

- AiScript Misskey 拡張 API（Misskey Web プラグイン）の[note_view_interruptor](https://misskey-hub.net/ja/docs/for-developers/plugin/plugin-api-reference/#pluginregister_note_view_interruptorfn)は不具合の影響により現在一時的に無効化されています。
- Misskey Web 投稿フォームのプレビュー切り替えは「...」メニュー内に配置されました

### Client

- Feat: 画像にウォーターマークを付与できるようになりました
- Feat: 画像の加工ができるようになりました(実験的)
- Enhance: ノートのリアクション一覧で、押せるリアクションを優先して表示できるようにするオプションを追加
- Enhance: 全てのチャットメッセージを既読にできるように(設定→その他)
- Enhance: ミュートした絵文字をデバイス間で同期できるように
- Fix: ドライブファイルの選択が不安定な問題を修正
- Fix: コントロールパネルのファイル欄などのデザインが崩れている問題を修正
- Fix: ユーザーの検索結果を追加で読み込むことができない問題を修正
- Fix: タッチ操作時にチャートのツールチップが消えなくなる場合がある問題を修正
- Fix: ウェルカムタイムラインでリアクションが表示されない問題を修正
- Fix: デッキのタイムラインカラムで新着ノート時のサウンドが再生されない問題を修正

### Server

- Feat: 全てのチャットメッセージを既読にする API を追加(chat/read-all)
- Fix: アカウント削除が正常に行われないことがあった問題を修正
- Fix: outbox のページネーションが正しく行われない問題を修正

### Misskey.js

- Fix: misskey-js の drive/file/create でファイルアップロードができない問題を修正

## 2025.6.0-1.1.0

### Client

- Enhance: 非同期的なコンポーネントの読み込み時のハンドリングを強化
- Fix: リアクションの一部の絵文字が重複して表示されることがある問題を修正
- Fix: 非利用者に対するユーザー作成コンテンツの公開範囲が全て非公開になっている場合にログインできない問題を修正

### Server

- Fix: 非利用者に対するユーザー作成コンテンツの公開範囲が全て非公開になっている場合でも users/show を許可するように

## 2025.5.1-1.1.0

### Note

- 設定ファイルの以下の項目がコントロールパネルから設定するようになりました
  - signToActivityPubGet
  - proxyRemoteFiles
  - disallowExternalApRedirect
    - 許可しないかどうかではなく、許可するかどうかの設定(allowExternalApRedirect)になりました

### General

- Feat: 非ログインでサーバーを閲覧された際に、サーバー内のコンテンツを非公開にすることができるようになりました
  - モデレーションが行き届きにくい不適切なリモートコンテンツなどが、自サーバー経由で図らずもインターネットに公開されてしまうことによるトラブル防止などに役立ちます
  - 「全て公開(今までの挙動)」「ローカルのコンテンツだけ公開(=サーバー内で受信されたリモートのコンテンツは公開しない)」「何も公開しない」から選択できます
  - デフォルト値は「ローカルのコンテンツだけ公開」になっています
- Feat: ロールでアップロード可能なファイル種別を設定可能になりました
  - デフォルトは**テキスト、JSON、画像、動画、音声ファイル**になっています。zip など、その他の種別のファイルは含まれていないため、必要に応じて設定を変更してください。
  - 場合によってはファイル種別を正しく検出できないことがあります(特にテキストフォーマット)。その場合、ファイル種別は application/octet-stream と見做されます。
    - したがって、それらの種別不明ファイルを許可したい場合は application/octet-stream を指定に追加してください。
- Feat: プレビュー先がリダイレクトを伴う場合、リダイレクト先のコンテンツを取得しに行くか否かを設定できるように(#16043)
- Enhance: UI のアイコンデータの読み込みを軽量化

### Client

- Feat: ドライブの UI が強化されました
  - 複数のファイルをまとめて移動できるようになりました
- Feat: ファイルのアップロード UI が一新されました
  - アップロード前にファイル情報を確認できるようになりました
    - 圧縮の品質を選択できるようになりました
    - アップロードに失敗したときに再試行できるようになりました
    - アップロード前に画像のクロッピングを行えるようになりました
    - ファイルサイズのチェックは圧縮後の実際にアップロードされるサイズで行われるようになりました
    - ファイルのアップロードを中断できるようになりました
- Feat: サーバー初期設定ウィザードが実装されました
  - 簡単なウィザードに従うだけで、サーバーに最適な設定が適用されます
- Feat: Websocket 接続を行わずに Misskey を利用する No Websocket モードが実装されました(beta)
  - サーバーのパフォーマンス向上に寄与することが期待されます
    - 何らの理由により Websocket 接続が行えない環境でも快適に利用可能です
  - 従来の Websocket 接続を行うモードはリアルタイムモードとして再定義されました
    - チャットなど、一部の機能は引き続き設定に関わらず Websocket 接続が行われます
- Feat: 絵文字をミュート可能にする機能
  - 絵文字（ユニコードの絵文字・カスタム絵文字）毎にミュートし、不可視化することができるようになりました
- Feat: モバイルデバイスで折りたたまれた UI の展開表示に全画面ページを使用できるように(実験的)
- Enhance: 設定の同期をオンにするときに競合したときに値をマージできるように
- Enhance: メモリ使用量を軽減しました
- Enhance: 画像の高品質なプレースホルダを無効化してパフォーマンスを向上させるオプションを追加
- Enhance: 招待されているが参加していないルームを開いたときに、招待を承認するかどうか尋ねるように
- Enhance: リプライ元にアンケートがあることが表示されるように
- Enhance: ノートのサーバー情報のデザインを改善・パフォーマンス向上  
  (Based on <https://github.com/taiyme/misskey/pull/198>, <https://github.com/taiyme/misskey/pull/211>, <https://github.com/taiyme/misskey/pull/283>)
- Enhance: ユーザー設定で URL プレビューを無効化できるように
- Enhance: ヒントとコツを追加
- Enhance: ヒントとコツを再表示できるように
- Enhance: AiScript から toast を表示する関数 `Mk:toast` を追加
- Enhance: シンタックスハイライトのエンジンを JavaScript ベースのものに変更
  - フロントエンドの読み込みサイズを軽量化しました
    - ほとんどの言語のハイライトは問題なく行えますが、互換性の問題により一部の言語が正常にハイライトできなくなる可能性があります。詳しくは <https://shiki.style/references/engine-js-compat> をご覧ください。
- Fix: チャットに動画ファイルを送付すると、動画の表示が崩れてしまい視聴出来ない問題を修正
- Fix: アカウント依存かつ初期状態である設定値をサーバー同期しようとした際に正しくコンフリクト検出されない問題を修正
- Fix: "時計"ウィジェット(Clock)において、Transparent 設定が有効でも、その背景が透過されない問題を修正
- Fix: 一定時間操作がなかったら動画プレイヤーのコントロールを隠すように
- Fix: Twitch のクリップがプレイヤーで再生できない問題を修正

### Server

- Enhance: リストやフォローをエクスポートする際にリプライを含むかどうかの情報を含むように
- Enhance: チャットルームの最大メンバー数を 30 人から 50 人に調整
- Enhance: ノートのレスポンスにアンケートが添付されているかどうかを示すフラグ`hasPoll`を追加
- Enhance: チャットルームのレスポンスに招待されているかどうかを示すフラグ`invitationExists`を追加
- Enhance: レートリミットの計算方法を調整 (#13997)
- Enhance: 外部サイトの OGP のキャッシュ期間を調整
- Fix: チャットルームが削除された場合・チャットルームから抜けた場合に、未読状態が残り続けることがあるのを修正
- Fix: ユーザ除外アンテナをインポートできない問題を修正
- Fix: アンテナのセンシティブなチャンネルのノートを含むかどうかの情報がエクスポートされない問題を修正
- Fix: ミュート対象ユーザーが引用されているノートが RN されたときにミュートを貫通してしまう問題を修正 #16009
- Fix: 連合モードが「なし」の場合に、生成される HTML 内の activity json へのリンクタグを省略するように
- Fix: コントロールパネルから招待コードを作成すると作成者の情報が記録されない問題を修正
- Fix: コントロールパネルのジョブキューページから Paused なジョブ一覧を閲覧できない問題を修正

## 2025.5.0-1.1.0

### Note

- Docker の Node.js が 22.15.0 に更新されました

### Client

- Feat: マウスで中ボタンドラッグによりタイムラインを引っ張って更新できるように
  - アクセシビリティ設定からオフにすることもできます
- Enhance: タイムラインのパフォーマンスを向上
- Enhance: バックアップされた設定のプロファイルを削除できるように
- Fix: 一部のブラウザでアコーディオンメニューのアニメーションが動作しない問題を修正
- Fix: ダイアログのお知らせが画面からはみ出ることがある問題を修正
- Fix: ユーザーポップアップでエラーが生じてもインジケーターが表示され続けてしまう問題を修正

### Server

- Enhance: 凍結されたユーザのノートが各種タイムラインで表示されないように `#15775`
- Enhance: 連合先のソフトウェア及びバージョン名により配信停止を行えるように `#15727`
- Enhance: 2025.4.1 で追加されたインデックスの再生成をノートの追加しながら行えるようになりました。 `#15915`
  - `MISSKEY_MIGRATION_CREATE_INDEX_CONCURRENTLY` 環境変数を `1` にセットしていると、巨大なテーブルの既存のカラムに関するインデックス再生成が`CREATE INDEX CONCURRENTLY`を使用するようになりました。
  - 複数のサーバープロセスをクラスタリングしているサーバーにおいて、一部のプロセスが起動している状態でこのオプションを有効にしてマイグレーションすることにより、ダウンタイムを削減することができます。
  - ただし、このオプションを有効にする場合、インデックスの作成にかかる時間が倍~3 倍以上になることがあります。
  - また、大きなインスタンスである場合にはインデックスの作成に失敗し、複数回再試行する必要がある可能性があります。
- Fix: チャンネルのフォロー一覧の結果が一部正しくないのを修正 (#12175)
- Fix: ファイルをアップロードした際にファイル名が常に untitled になる問題を修正
- Fix: ファイルのアップロードに失敗することがある問題を修正
  - 投稿フォーム上で画像のクロップを行うと、`Invalid Param.`エラーでノートが投稿出来なくなる問題も解決されます。
    - この事象によって既にノートが投稿出来ない状態になっている場合は、投稿フォーム右上のメニューから、下書きデータの「リセット」を行ってください。

## 2025.4.1-1.1.0

### General

- Feat: bull-board に代わるジョブキューの管理ツールが実装されました
- Feat: アップロード可能な最大ファイルサイズをロールごとに設定可能に
  - デフォルトで 10MB になっています
- Enhance: チャットの新規メッセージをプッシュ通知するように
- Enhance: サーバーブロックの対象になっているサーバーについて、当該サーバーのユーザーや既知投稿を見えないように
- Enhance: 依存関係の更新
- Enhance: 翻訳の更新
- Fix: セキュリティに関する修正

### Client

- Feat: チャットウィジェットを追加
- Feat: デッキにチャットカラムを追加
- Feat: タイトルバーを表示できるように
- Enhance: Unicode 絵文字を slug から入力する際に`:ok:`のように最後の`:`を入力したあとに Unicode 絵文字に変換できるように
- Enhance: コントロールパネルでジョブキューをクリアできるように
- Enhance: テーマでページヘッダーの色を変更できるように
- Enhance: スワイプでのタブ切り替えを強化
- Enhance: デザインのブラッシュアップ
- Fix: ログアウトした際に処理が終了しない問題を修正
- Fix: 自動バックアップが設定されている環境でログアウト直前に設定をバックアップするように
- Fix: フォルダを開いた状態でメニューからアップロードしてもルートフォルダにアップロードされる問題を修正 #15836
- Fix: タイムラインのスクロール位置を記憶するように修正
- Fix: ノートの直後のノートを表示する機能で表示が逆順になっていた問題を修正 #15841
- Fix: アカウントの移行時にアンテナのフィルターのユーザが更新されない問題を修正 #15843
- Fix: タイムラインでノートが重複して表示されることがあるのを修正

### Server

- Enhance: ジョブキューの成功/失敗したジョブも一定数・一定期間保存するようにし、後から問題を調査することを容易に
- Enhance: フォローしているユーザーならフォロワー限定投稿のノートでもアンテナで検知できるように  
  (Cherry-picked from <https://github.com/yojo-art/cherrypick/pull/568> and <https://github.com/team-shahu/misskey/pull/38>)
- Enhance: ユーザーごとにノートの表示が高速化するように
- Fix: システムアカウントの名前がサーバー名と同期されない問題を修正
- Fix: 大文字を含むユーザの URL で照会された場合に 404 エラーを返す問題 #15813
- Fix: リードレプリカ設定時にレコードの追加・更新・削除を伴うクエリを発行した際は master ノードで実行されるように調整( #10897 )
- Fix: ファイルアップロード時の挙動を一部調整(#15895)

## 2025.4.0-1.1.0

### General

- Feat: チャット(ダイレクトメッセージ)がリニューアルして復活しました
  - 既存の DM 機能よりも便利で効率的な実装になっています
  - チャットを受け付ける相手を制限可能です
    - 誰でも / フォローユーザーのみ / フォロワーのみ / 相互のみ / 受け付けないから選択できます
    - 自分からメッセージを送った相手とは上記の設定に関わらずチャット可能です
  - チャット機能を開放するかどうかをロールで制御可能です
  - ルームを作成して、複数人でのチャットも可能です
  - 過去自分が送ったメッセージ・自分に送られたメッセージの検索が可能です
  - 参加中のルームをミュートして通知が来ないように設定可能です
  - メッセージにはリアクションも可能です
  - 現在、リモートユーザーがチャットを受け付ける設定になっているかどうかを取得する術がないため、ローカルユーザー間でのみ利用可能です
- Feat: アカウントの移行時に古いアカウントからあたらしいアカウントにロールをコピーできるようになりました。
  - 管理者がロールの設定でマイグレーション時にコピーするかを指定できるようになります。
- Enhance: セキュリティを強化するため、ジョブキューのダッシュボード(bull-board)統合が削除されました。
  - Misskey ネイティブでダッシュボードを実装予定です
- Enhance: フロントエンドのエラートラッキングができるように
  - `.config/default.yml`中の項目`sentryForFrontend`を適宜設定してください。
  - 外部サービスである Sentry へエラー情報が送信されます。ご利用の地域の法令に従い、適切なプライバシーポリシーを策定の上で運用してください。
- Enhance: ミュートしているユーザーをユーザー検索の結果から除外するように
- Enhance: アンテナでセンシティブなチャンネルのノートを除外できるように `#14177`
- Fix: 通知のページネーションで２つ以上読み込めなくなることがある問題を修正

### Client

- Feat: 設定の管理が強化されました
  - 内部処理が一新され、安定性とパフォーマンスが向上しました
  - 全てのクライアント設定がエクスポート(バックアップ)/インポート対象に含まれるようになりました
    - プラグイン、テーマ、クライアントに追加されたすべてのアカウント情報も含まれるようになりました
  - 自動で設定データをサーバーにバックアップできるように
    - 設定 → 設定のプロファイル → 自動バックアップで有効にできます
    - 新しいデバイスからログインしたり、ブラウザから設定データが消えてしまったときに自動で復元されます(復元をスキップすることも可能)
  - 任意の設定項目をデバイス間で同期できるように
    - 設定項目の「...」メニュー →「デバイス間で同期」
    - 同期をオンにした際にサーバーに保存された値とローカルの値が競合する場合はどちらを優先するか選択できます
  - 任意の設定項目を初期値にリセットできるように
    - 設定項目の「...」メニュー →「初期値にリセット」
  - アカウントごとに設定値が分離される設定とそうでないクライアント設定が混在していた(かつ分離するかどうかを設定不可だった)のを、基本的に一律でクライアント全体に適用されるようにし、個別でアカウントごとに異なる設定を行えるように
    - 設定項目の「...」メニュー →「アカウントで上書き」をオンにすることで、設定値をそのアカウントでだけ適用するようにできます
  - ログアウトすると設定データもブラウザから消去されるようになりプライバシーが向上しました
    - 再度ログインすればサーバーのバックアップから設定データを復元可能です
  - エクスポートした設定データを他のサーバーでインポートして適用すること(設定の持ち運び)が可能になりました
  - 設定情報の移行は自動で行われますが、何らかの理由で失敗した場合、設定 → その他 → 旧設定情報を移行で再試行可能です
  - 過去に作成されたバックアップデータとは現在互換性がありませんのでご注意ください
- Feat: 画面を重ねて表示するオプションを実装(実験的)
  - 設定 → その他 → 実験的機能 → Enable stacking router view
- Enhance: プラグインの管理が強化されました
  - インストール/アンインストール/設定の変更時にリロード不要になりました
- Enhance: ログアウト時、ブラウザに保存された Web クライアントのデータを全て消去するように
- Enhance: デッキ UI でカラム間のマージンを設定できるように
- Enhance: デッキ UI でデッキメニューの位置を設定できるように
- Enhance: デッキ UI でナビゲーションバーの位置を設定できるように
- Enhance: アイコンのスクロール追従を無効化してパフォーマンス向上できるように
- Enhance: CW の注釈テキストが入力されていない場合, Post ボタンを非アクティブに
- Enhance: CW を無効にした場合, 注釈テキストが最大入力文字数を超えていても投稿できるように
- Enhance: テーマ設定画面のデザインを改善
- Enhance: 投稿フォームの設定メニューを改良
  - 投稿フォームをリセットできるように
  - 文字数カウントを復活
- Enhance: 2 段階認証時のリカバリーコードのファイル名にサーバー URL を含めるように
- Enhance: 全体的なブラッシュアップ
- Enhance 全体的なパフォーマンス向上
- Enhance: ファイルのアップロードでデフォルトで圧縮するかどうかのオプションが廃止され、アップロード時に圧縮するかどうかを選択するようになりました
  - 画像データの貼り付け、ドロップ時は圧縮されるようになりました
- Fix: 読み込み直後にスクロールしようとすると途中で止まる場合があるのを修正
- Fix: テーマ切り替え時に一部の色が変わらない問題を修正
- Fix: iPadOS で deck ui をマウスカーソルによってスクロールできない問題を修正
- NOTE: 構造上クラシック UI を新しいデザインシステムに移行することが困難なため、クラシック UI が削除されました
  - デッキ UI でカラムを中央寄せにし、メインカラムの左右にウィジェットカラムを配置し、ナビゲーションバーを上部に表示することである程度クラシック UI を再現できます

### Server

- Enhance 全体的なパフォーマンス向上
- Fix: プロフィール追加情報で無効な URL に入力された場合に照会エラーを出るのを修正
- Fix: ActivityPub リクエスト URL チェック実装は仕様に従っていないのを修正
- Fix: 連合無しモードでも外部から照会可能だった問題を修正
- Fix: テスト用 WebHook のペイロードの`emojis`パラメータが実際のものと異なる問題を修正
- Fix: 非ログインでタイムラインのストリームに接続した際、表示にログイン必須のノートが流れる場合がある問題を修正

## 2025.3.1-1.1.0

### General

- pnpm を v10 に更新
- Corepack を削除

### Client

- Feat: 設定の検索を追加(実験的)
- Enhance: 設定項目の再配置

### Server

- Fix: DB マイグレーション際にシステムアカウントのユーザー ID 判定が正しくない問題を修正
- Fix: user.featured 列が状況によって JSON 文字列になっていたのを修正

## 2025.3.0

リリース日: 2025/03/06

### General

- Enhance: プロキシアカウントをシステムアカウントとして作成するように
- Enhance: OAuth で外部アプリからロゴが提供されている場合、それを表示できるように  
  書式は <https://indieauth.spec.indieweb.org/20220212/#example-2> に準じます。
- Fix: システムアカウントが削除できる問題を修正

### Client

- Enhance: モデレーターがセンシティブ設定を変更する際に確認ダイアログを出すように
- Enhance:「UI のアニメーションを減らす」で画面上のエフェクトも減らせるように
- Enhance: 投稿フォームにおける、メディアの添付可能個数のカウントを反転しました
  - これまでの表示は`添付可能残り個数/上限数`でしたが、`添付個数/上限数`としました
- Fix: フォローされたときのメッセージがちらつくことがある問題を修正
- Fix: 投稿ダイアログがサイズ限界を超えた際にスクロールできない問題を修正

### Server

- Fix: 特定のケースで ActivityPub の処理がデッドロックになることがあるのを修正
- Fix: S3 互換オブジェクトストレージでファイルのアップロードに失敗することがある問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/895>)

## 2025.2.1-1.1.0

### General

- Feat: アクセストークン発行時に通知するように
- Feat: 実験的な GoogleAnalytics サポートを追加
- 依存関係の更新

### Client

- Feat: 投稿フォームで画像をプレビュー可能に
- Enhance: 投稿フォームの「迷惑になる可能性があります」のダイアログを表示する条件において CW を考慮するように
- Enhance: アンテナ、リスト等の名前をカラム名のデフォルト値にするように `#13992`
- Enhance: クライアントエラー画面の多言語対応
- Enhance: 開発者モードでメニューからファイル ID をコピー出来るように `#15441'
- Enhance: ノートに埋め込まれたメディアのコンテキストメニューから管理者用のファイル管理画面を開けるように ( #15440 )
- Enhance: リアクションする際に確認ダイアログを表示できるように
- Enhance: コントロールパネルのユーザ検索で入力された情報をページ遷移で損なわないように `#15437`
- Enhance: CW の注釈で入力済みの文字数を表示
- Enhance: ノート検索ページのデザイン調整  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/273>)
- Fix: ノートページで、クリップ一覧が表示されないことがある問題を修正
- Fix: コンディショナルロールを手動で割り当てできる導線を削除 `#13529`
- Fix: 埋め込みプレイヤーから外部ページに移動できない問題を修正
- Fix: Play の再読込時に UI が以前の状態を引き継いでしまう問題を修正 `#14378`
- Fix: カスタム絵文字管理画面(beta)にて isSensitive/localOnly の絞り込みが上手くいかない問題の修正 ( #15445 )
- Fix: ユーザのサジェスト中に@を入力してもサジェスト結果が消えないように `#14385`
- Fix: CW の注釈が 100 文字を超えている場合、ノート投稿ボタンを非アクティブに
- Fix: テーマ選択で現在のテーマが初期表示されていない問題を修正
- 翻訳の更新

### Server

- Enhance: 成り済まし対策として、ActivityPub 照会された時にリモートのリダイレクトを拒否できるように (config.disallowExternalApRedirect)
- Fix: `following/invalidate`でフォロワーを解除しようとしているユーザーの情報を返すように
- Fix: オブジェクトストレージの設定で Prefix を設定していなかった場合 null または空文字になる問題を修正
- Fix: HTTP プロキシとその除外設定を行った状態でカスタム絵文字の一括インポートをしたとき、除外設定が効かないのを修正( #8766 )
- Fix: pgroonga での検索時にはじめのキーワードのみが検索に使用される問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/886>)
- Fix: メールアドレスの形式が正しくなければ以降の処理を行わないように
- Fix: `update-meta`で objectStoragePrefix に S3_SAFE かつ URL-safe でない文字列を使えないように
- Fix: クリップの説明欄を更新する際に空にできない問題を修正
- Fix: フォロワーではないユーザーにリノートもしくは返信された場合にノートの Delete アクティビティが送られていない問題を修正

## 2025.2.0-1.1.0

### General

- Fix: Docker のビルドに失敗する問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/883>)

### Client

- Fix: パスキーでパスワードレスログインが出来ない問題を修正
- Fix: 一部環境でセンシティブなファイルを含むノートの非表示が効かない問題
- Fix: データセーバー有効時にもユーザーページの「ファイル」タブで画像が読み込まれてしまう問題を修正
- Fix: MFM の `sparkle` エフェクトが正しく表示されない問題を修正
- Fix: ページの URL にスラッシュが含まれている場合にページが正しく表示されない問題を修正
- Fix: デッキのプロファイルが新規作成できない問題を修正
- Fix: セキュリティに関する修正
- ローカライゼーションの更新
- Play が実装されたため、ページ機能の「ソースを見る」は削除されました

### Server

- Enhance: ページの URL に使用可能な文字を限定するように
- Fix: 個別お知らせページの meta タグ出力の条件が間違っていたのを修正

## 2025.1.0-1.1.0

### Note

- [重要]ノート検索プロバイダの追加に伴い、config ファイル（default.yml など）の構成が少し変わります.
  - 新しい設定項目"fulltextSearch.provider"が追加されました. sqlLike, sqlPgroonga, meilisearch のいずれかを設定出来ます.
  - すでに Meilisearch をお使いの場合、 **"fulltextSearch.provider"を"meilisearch"に設定する必要** があります.
  - 詳細は #14730 および `.config/example.yml` または `.config/docker_example.yml`の'Fulltext search configuration'をご参照願います.
- 【開発者向け】従来の開発モードで HMR が機能しない問題が修正されたため、バックエンド・フロントエンド分離型の開発モードが削除されました。開発環境において config の変更が必要となる可能性があります。

### General

- Feat: カスタム絵文字管理画面をリニューアル #10996
  - β 版として公開のため、旧画面も引き続き利用可能です

### Client

- Enhance: PC 画面でチャンネルが複数列で表示されるように  
  (Cherry-picked from <https://github.com/Otaku-Social/maniakey/pull/13>)
- Enhance: 照会に失敗した場合、その理由を表示するように
- Enhance: ワードミュートで検知されたワードを表示できるように
- Enhance: リモートのノートのリンクをコピーできるように
- Enhance: 連合がホワイトリスト化・無効化されているサーバー向けのデザイン修正
- Enhance: AiScript のセーブデータを明示的に削除する関数`Mk:remove`を追加
- Enhance: ノートの添付ファイルを一覧で遡れる「ファイル」タブを追加  
  (Based on <https://github.com/Otaku-Social/maniakey/pull/14>)
- Enhance: AiScript の拡張 API 関数において引数の型チェックをより厳格に
- Enhance: クエリパラメータで ui を一時的に変更できるように #15240
- Enhance: リモート絵文字のインポート時に詳細を確認できるように #15336
- Fix: 画面サイズが変わった際にナビゲーションバーが自動で折りたたまれない問題を修正
- Fix: サーバー情報メニューに区切り線が不足していたのを修正
- Fix: ノートがログインしているユーザーしか見れない場合にログインダイアログを閉じるとその後の動線がなくなる問題を修正
- Fix: 公開範囲がホームのノートの埋め込みウィジェットが読み込まれない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/803>)
- Fix: 絵文字管理画面で一部の絵文字が表示されない問題を修正
- Fix: プラグイン `register_note_view_interruptor` でノートのサーバー情報の書き換えができない問題を修正
- Fix: Bot プロテクションの設定変更時は実際に検証を通過しないと保存できないように( #15137 )
- Fix: ノート検索が使用できない場合でもチャンネルのノート検索欄がでていた問題を修正
- Fix: `Ui:C:select`で値の変更が画面に反映されない問題を修正
- Fix: MiAuth 認可画面で、認可処理に失敗した場合でもコールバック URL に遷移してしまう問題を修正  
  (Cherry-picked from <https://github.com/TeamNijimiss/misskey/commit/800359623e41a662551d774de15b0437b6849bb4>)
- Fix: ノート作成画面でファイルの添付可能個数を超えてもノートボタンが押せていた問題を修正
- Fix:「アカウントを管理」画面で、ユーザー情報の取得に失敗したアカウント（削除されたアカウントなど）が表示されない問題を修正
- Fix: MacOS で Chrome 系ブラウザを使用している場合に、Misskey を閉じた際に他のタブのオーディオ機能と干渉する問題を修正
- Fix: 言語データのキャッシュ状況によっては、埋め込みウィジェットが正しく起動しない問題を修正
- Fix:「削除して編集」でノートの引用を解除出来なかった問題を修正( #14476 )
- Fix: RSS ウィジェットが正しく表示されない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/857>)
- Fix: ワードミュートの保存失敗時に API エラーが握りつぶされる事があるのを修正
- Fix: アンケートでリモートの絵文字が正しく描画できない問題の修正
  (Cherry-picked from <https://github.com/yojo-art/cherrypick/pull/153>)
- Fix: 非ログイン時のサーバー概要画面のメニューボタンが押せないことがあるのを修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/656>)
- Fix: URL にはじめから`#pswp`が含まれている場合に画像ビューワーがブラウザの戻るボタンで閉じられない問題を修正
- Fix: ロール作成画面で設定できるアイコンデコレーションの最大取付個数を 16 に制限
- Fix: Firefox Nightly などでアイコンが読み込めない問題を修正

### Server

- Enhance: pg_bigm が利用できるよう、ノートの検索を ILIKE 演算子でなく LIKE 演算子で LOWER()をかけたテキストに対して行うように
- Enhance: ノート検索の選択肢として pgroonga に対応 ( #14730 )
- Enhance: チャート更新時に DB に同時接続しないように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/830>)
- Enhance: config(default.yml)から SQL ログ全文を出力するか否かを設定可能に ( #15266 )
- Fix: ユーザーのプロフィール画面をアドレス入力などで直接表示した際に概要タブの描画に失敗する問題の修正( #15032 )
- Fix: 起動前の疎通チェックが機能しなくなっていた問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/737>)
- Fix: ノートの閲覧にログイン必須にしても Feed でノートが表示されてしまう問題を修正
- Fix: 絵文字の連合でライセンス欄を相互にやり取りするように ( #10859, #14109 )
- Fix: ロックダウンされた期間指定のノートが Streaming 経由で LTL に出現するのを修正 ( #15200 )
- Fix: disableClustering 設定時の初期化ロジックを調整( #15223 )
- Fix: URL と URI が異なるエンティティの照会に失敗する問題を修正( #15039 )
- Fix: ActivityPub リクエストかどうかの判定が正しくない問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/869>)
- Fix: `/api/pages/update`にて`name`を指定せずにリクエストするとエラーが発生する問題を修正
- Fix: AI センシティブ判定が arm64 環境で動作しない問題を修正
- Fix: 非 Misskey 系のソフトウェアから HTML`<ruby>`タグを含むノートを受信した場合、MFM の読み仮名（ルビ）文法に変換して表示
- Fix: 連合 OFF で投稿されたノートに対する冗長な処理を抑止 ( #15018 )
- Fix: `/api.json`のレスポンスが 2 回目のリクエスト以降おかしくなる問題を修正

### Misskey.js

- Feat: allow setting `binaryType` of WebSocket connection

## 2024.11.0-1.1.0

### Note

- Node.js 20.x は非推奨になりました。Node.js 22.x (LTS)の利用を推奨します。
  - なお、Node.js 23.x は対応していません。
- Docker の Node.js が 22.11.0 に更新されました

### General

- Feat: コンテンツの表示にログインを必須にできるように
- Feat: 過去のノートを非公開化/フォロワーのみ表示可能にできるように
- Enhance: 依存関係の更新
- Enhance: l10n の更新
- Fix: お知らせ作成時に画像 URL 入力欄を空欄に変更できないのを修正 ( #14976 )

### Client

- Enhance: Bull Dashboard で Relationship Queue の状態も確認できるように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/751>)
- Enhance: ドライブでソートができるように
- Enhance: アイコンデコレーション管理画面の改善
- Enhance:「単なるラッキー」の取得条件を変更
- Enhance: 投稿フォームで Esc キーを押したとき IME 入力中ならフォームを閉じないように（#10866）
- Enhance: MiAuth, OAuth の認可画面の改善
  - どのアカウントで認証しようとしているのかがわかるように
  - 認証するアカウントを切り替えられるように
- Enhance: Self-XSS 防止用の警告を追加
- Enhance: カタルーニャ語 (ca-ES) に対応
- Enhance: 個別お知らせページでは Meta タグを出力するように
- Enhance: ノート詳細画面にロールのバッジを表示
- Enhance: 過去に送信したフォローリクエストを確認できるように  
  (Based on <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/663>)
- Enhance: サイドバーを簡単に展開・折りたたみできるように ( #14981 )
- Enhance: リノートメニューに「リノートの詳細」を追加
- Enhance: 非ログイン状態で Misskey を開いた際のパフォーマンスを向上
- Fix: 通知の範囲指定の設定項目が必要ない通知設定でも範囲指定の設定がでている問題を修正
- Fix: Turnstile が失敗・期限切れした際にも成功扱いとなってしまう問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/768>)
- Fix: デッキのタイムラインカラムで「センシティブなファイルを含むノートを表示」設定が使用できなかった問題を修正
- Fix: Encode RSS urls with escape sequences before fetching allowing query parameters to be used
- Fix: リンク切れを修正
- Fix: ノート投稿ボタンにホバー時のスタイルが適用されていないのを修正  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/305>)
- Fix: メールアドレス登録有効化時の「完了」ダイアログボックスの表示条件を修正
- Fix: 画面幅が狭い環境でデザインが崩れる問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/815>)
- Fix: TypeScript の型チェック対象ファイルを限定してビルドを高速化するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/725>)

### Server

- Enhance: Docker の Node.js を 22.11.0 に更新
- Enhance: 起動前の疎通チェックで、DB とメイン以外の Redis の疎通確認も行うように  
  (Based on <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/588>)  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/715>)
- Enhance: リモートユーザーの照会をオリジナルにリダイレクトするように
- Fix: sharedInbox が無い Actor に紐づくリモートユーザーを照会できない
- Fix: Aproving request from GtS appears with some delay
- Fix: フォロワーへのメッセージの絵文字を emojis に含めるように
- Fix: Nested proxy requests を検出した際にブロックするように
  [ghsa-gq5q-c77c-v236](https://github.com/misskey-dev/misskey/security/advisories/ghsa-gq5q-c77c-v236)
- Fix: 招待コードの発行可能な残り数算出に使用すべきロールポリシーの値が違う問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/706>)
- Fix: 連合への配信時に、acct の大小文字が区別されてしまい正しくメンションが処理されないことがある問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/711>)
- Fix: ローカルユーザーへのメンションを含むノートが連合される際に正しい URL に変換されないことがある問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/712>)
- Fix: FTT 無効時にユーザーリストタイムラインが使用できない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/709>)
- Fix: User Webhook テスト機能の Mock Payload を修正
- Fix: アカウント削除のモデレーションログが動作していないのを修正 (#14996)
- Fix: リノートミュートが新規投稿通知に対して作用していなかった問題を修正
- Fix: Inbox の処理で生じるエラーを誤って Activity として処理することがある問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/730>)
- Fix: セキュリティに関する修正

### Misskey.js

- Fix: Stream 初期化時、別途 WebSocket を指定する場合の型定義を修正

## 2024.10.1-1.1.0

### Note

- スパム対策として、モデレータ権限を持つユーザのアクティビティが 7 日以上確認できない場合は自動的に招待制へと切り替え（コントロールパネル -> モデレーション -> "誰でも新規登録できるようにする"をオフに変更）るようになりました。 ( #13437 )
  - 切り替わった際はモデレーターへお知らせとして通知されます。登録をオープンな状態で継続したい場合は、コントロールパネルから再度設定を行ってください。

### General

- Feat: ユーザーの名前に禁止ワードを設定できるように

### Client

- Enhance: タイムライン表示時のパフォーマンスを向上
- Enhance: アーカイブした個人宛のお知らせを表示・編集できるように
- Enhance: l10n の更新
- Fix: メールアドレス不要で Captcha が有効な場合にアカウント登録完了後自動でのログインに失敗する問題を修正

### Server

- Feat: モデレータ権限を持つユーザが全員 7 日間活動しなかった場合は自動的に招待制へと切り替えるように ( #13437 )
- Enhance: 個人宛のお知らせは「わかった」を押すと自動的にアーカイブされるように
- Fix: `admin/emoji/update`エンドポイントの id のみ指定した時不正なエラーが発生するバグを修正
- Fix: RBT 有効時、リノートのリアクションが反映されない問題を修正
- Fix: キューのエラーログを簡略化するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/649>)

## 2024.10.0-1.1.0

### Note

- セキュリティ向上のため、サーバー初期設定時に使用する初期パスワードを設定できるようになりました。今後 Misskey サーバーを新たに設置する際には、初回の起動前にコンフィグファイルの`setupPassword`をコメントアウトし、初期パスワードを設定することをおすすめします。（すでに初期設定を完了しているサーバーについては、この変更に伴い対応する必要はありません）
  - ホスティングサービスを運営している場合は、コンフィグファイルを構築する際に`setupPassword`をランダムな値に設定し、ユーザーに通知するようにシステムを更新することをおすすめします。
  - なお、初期パスワードが設定されていない場合でも初期設定を行うことが可能です（UI 上で初期パスワードの入力欄を空欄にすると続行できます）。
- ユーザーデータを読み込む際の型が一部変更されました。
  - `twoFactorEnabled`, `usePasswordLessLogin`, `securityKeys`: 自分とモデレーター以外のユーザーからは取得できなくなりました

### General

- Feat: サーバー初期設定時に初期パスワードを設定できるように
- Feat: 通報にモデレーションノートを残せるように
- Feat: 通報の解決種別を設定できるように
- Enhance: 通報の解決と転送を個別に行えるように
- Enhance: セキュリティ向上のため、サインイン時も CAPTCHA を求めるようになりました
- Enhance: 依存関係の更新
- Enhance: l10n の更新
- Enhance: Play の「人気」タブで 10 件以上表示可能に #14399
- Fix: 連合のホワイトリストが正常に登録されない問題を修正

### Client

- Enhance: デザインの調整
- Enhance: ログイン画面の認証フローを改善
- Fix: クライアント上での時間ベースの実績獲得動作が実績獲得後も発動していた問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/657>)

### Server

- Enhance: セキュリティ向上のため、ログイン時にメール通知を行うように
- Enhance: 自分とモデレーター以外のユーザーから二要素認証関連のデータが取得できないように
- Enhance: 通報および通報解決時に送出される SystemWebhook にユーザ情報を含めるように ( #14697 )
- Fix: `admin/abuse-user-reports`エンドポイントのスキーマが間違っていた問題を修正

## 2024.9.0-1.1.0

### General

- Feat: ノート単体・ユーザーのノート・クリップのノートの埋め込み機能
  - 埋め込みコードやウェブサイトへの実装方法の詳細は <https://misskey-hub.net/docs/for-users/features/embed/> をご覧ください
- Feat: パスキーでログインボタンを実装 (#14574)
- Feat: フォローされた際のメッセージを設定できるように
- Feat: 連合をホワイトリスト制にできるように
- Feat: UserWebhook と SystemWebhook のテスト送信機能を追加 (#14445)
- Feat: モデレーターはユーザーにかかわらずファイルが添付されているノートを検索できるように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/680>)
- Feat: データエクスポートが完了した際に通知を発行するように
- Enhance: ユーザーによるコンテンツインポートの可否をロールポリシーで制御できるように
- Enhance: 依存関係の更新
- Enhance: l10n の更新

### Client

- Enhance: サイズ制限を超過するファイルをアップロードしようとした際にエラーを出すように
- Enhance: アイコンデコレーション管理画面にプレビューを追加
- Enhance: コントロールパネル内のファイル一覧でセンシティブなファイルを区別しやすく
- Enhance: Scratchpad に UI インスペクターを追加
- Enhance: Play 編集画面の項目の並びを少しリデザイン
- Enhance: 各種メニューをドロワー表示するかどうか設定可能に
- Enhance: AiScript の Mk:C:container のオプションに`borderStyle`と`borderRadius`を追加
- Enhance: CW でも絵文字をクリックしてメニューを表示できるように
- Fix: サーバーメトリクスが 2 つ以上あるとリロード直後の表示がおかしくなる問題を修正
- Fix: コントロールパネル内の Ap requests 内のチャートの表示がおかしかった問題を修正
- Fix: 月の違う同じ日はセパレータが表示されないのを修正
- Fix: タッチ画面でレンジスライダーを操作するとツールチップが複数表示される問題を修正  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/265>)
- Fix: 縦横比が極端なカスタム絵文字を表示する際にレイアウトが崩れる箇所があるのを修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/725>)
- Fix: 設定変更時のリロード確認ダイアログが複数個表示されることがある問題を修正
- Fix: ファイルの詳細ページのファイルの説明で改行が正しく表示されない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/commit/bde6bb0bd2e8b0d027e724d2acdb8ae0585a8110>)
- Fix: 一部画面のページネーションが動作しにくくなっていたのを修正 ( #12766 , #11449 )

### Server

- Feat: Misskey® Reactions Boost Technology™ (RBT)により、リアクションの作成負荷を低減することが可能に
- Fix: アンテナの書き込み時にキーワードが与えられなかった場合のエラーを ApiError として投げるように
  - この変更により、公式フロントエンドでは入力の不備が内部エラーとして報告される代わりに一般的なエラーダイアログで報告されます
- Fix: ファイルがサイズの制限を超えてアップロードされた際にエラーを返さなかった問題を修正
- Fix: 外部ページを解析する際に、ページに紐づけられた関連リソースも読み込まれてしまう問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/commit/26e0412fbb91447c37e8fb06ffb0487346063bb8>)
- Fix: Continue importing from file if single emoji import fails
- Fix: `Retry-After`ヘッダーが送信されなかった問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/commit/8a982c61c01909e7540ff1be9f019df07c3f0624>)
- Fix: サーバーサイドの DOM 解析完了時にリソースを開放するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/634>)
- Fix: `<link rel="alternate">`を追って照会するのは OK レスポンスが返却された場合のみに  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/633>)
- Fix: メールにスタイルが適用されていなかった問題を修正

## 2024.8.0-1.1.0

### Server

- Enhance: レートリミットを緩和(一部強化したものもあります)

## 2024.8.0-1.0.1

### General

- Enhance: モデレーターはすべてのユーザーのフォロー・フォロワーの一覧を見られるように
- Enhance: アカウントの削除のモデレーションログを残すように
- Enhance: 不適切なページ、ギャラリー、Play を管理者権限で削除できるように
- Fix: リモートユーザのフォロー・フォロワーの一覧が非公開設定の場合も表示できてしまう問題を修正

### Client

- Enhance:「自分の Play」ページにおいて Play が非公開かどうかが一目でわかるように
- Enhance: 不適切なページ、ギャラリー、Play を通報できるように
- Fix: Play 編集時に公開範囲が「パブリック」にリセットされる問題を修正
- Fix: ページ遷移に失敗することがある問題を修正
- Fix: iOS でユーザー名などがリンクとして誤検知される現象を抑制
- Fix: mCaptcha を使用していても bot プロテクションに関する警告が消えないのを修正
- Fix: ユーザーのモデレーションページにおいてユーザー名にドットが入っているとシステムアカウントとして表示されてしまう問題を修正
- Fix: 特定の条件下でノートの削除ボタンが出ないのを修正

### Server

- Enhance: 照会時に URL が html かつ head タグ内に`rel="alternate"`, `type="application/activity+json"`の`link`タグがある場合に追ってリンク先を照会できるように
- Enhance: 凍結されたアカウントのフォローリクエストを表示しないように
- Fix: WS の`readAllNotifications` メッセージが `body` を持たない場合に動作しない問題 #14374
  - 通知ページや通知カラム(デッキ)を開いている状態において、新たに発生した通知が既読されない問題が修正されます。
  - これにより、プッシュ通知が有効な同条件下の環境において、プッシュ通知が常に発生してしまう問題も修正されます。
- Fix: Play 各種エンドポイントの返り値に`visibility`が含まれていない問題を修正
- Fix: サーバー情報取得の際にモデレーター限定の情報が取得できないことがあるのを修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/582>)
- Fix: 公開範囲がダイレクトのノートをユーザーアクティビティのチャート生成に使用しないように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/679>)
- Fix: ActivityPub のエンティティタイプ判定で不明なタイプを受け取った場合でも処理を継続するように
  - キュー処理のつまりが改善される可能性があります
- Fix: リバーシの対局設定の変更が反映されないのを修正
- Fix: 無制限にストリーミングのチャンネルに接続できる問題を修正
- Fix: ベースロールのポリシーを変更した際にモデログに記録されないのを修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/700>)
- Fix: Prevent memory leak from memory caches (#14310)
- Fix: More reliable memory cache eviction (#14311)

## 2024.7.0-1.0.1

### Note

- デッキ UI の新着ノートをサウンドで通知する機能の追加（v2024.5.0-1.0.1）に伴い、以前から動作しなくなっていたクライアント設定内の「アンテナ受信」「チャンネル通知」サウンドを削除しました。
- Streaming API にて入力が不正な場合にはそのメッセージを無視するようになりました。 #14251

### General

- Feat: 通報を受けた際、または解決した際に、予め登録した宛先に通知を飛ばせるように(mail or webhook) #13705
- Feat: ユーザーのアイコン/バナーの変更可否をロールで設定可能に
  - 変更不可となっていても、設定済みのものを解除してデフォルト画像に戻すことは出来ます
- Feat: ユーザ作成時に SystemWebhook を送信可能に #14281
- Feat: メディアサイレンスを実装 #13842
  - メディアサイレンスされたサーバーに所属するアカウントによるファイルはすべてセンシティブとして扱われ、カスタム絵文字が使用できないようになります。
- Enhance: 管理画面でアーカイブにしたお知らせを表示・編集できるように
- Fix: 配信停止したインスタンス一覧が見れなくなる問題を修正
- Fix: Docker コンテナの立ち上げ時に`pnpm`のインストールで固まることがある問題
- Fix: デフォルトテーマに無効なテーマコードを入力すると UI が使用できなくなる問題を修正
- 翻訳の更新
- 依存関係の更新

### Client

- Feat: ユーザーページから「このユーザーのノートを検索」できるように (#14128)
- Feat: 検索ページはクエリを受け付けるようになりました (#14128)
- Enhance: 検索ページの UI 改善 (#14128)
- Enhance: 内蔵 API ドキュメントのデザイン・パフォーマンスを改善
- Enhance: 非ログイン時に他サーバーに遷移するアクションを追加
- Enhance: 非ログイン時のハイライト TL のデザインを改善
- Enhance: フロントエンドのアクセシビリティ改善  
  (Based on <https://github.com/taiyme/misskey/pull/226>)
- Enhance: サーバー情報ページ・お問い合わせページを改善  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/238>)
- Enhance: AiScript を 0.19.0 にアップデート
- Enhance: Allow negative delay for MFM animation elements
  (`tada`, `jelly`, `twitch`, `shake`, `spin`, `jump`, `bounce`, `rainbow`)
- Enhance: センシティブなメディアを開く際に確認ダイアログを出せるように
- Enhance: 検索(ノート/ユーザー)で `#` から始まる文字列を入力すると、そのハッシュタグのノート/ユーザー一覧ページが表示できるように
- Enhance: 検索(ノート/ユーザー)において、入力に空白が含まれている場合は照会を行わないように
- Enhance: 検索(ノート/ユーザー)において、照会を行うかどうか、ハッシュタグのノート/ユーザー一覧ページを表示するかどうかの確認ダイアログを出すように
- Enhance: 検索(ノート/ユーザー)で `@` から始まる文字列(`@user@host`など)を入力すると、そのユーザーを照会できるように
- Enhance: ドライブのファイル・フォルダをドラッグしなくても移動できるように  
  (Cherry-picked from <https://github.com/nafu-at/misskey/commit/b89c2af6945c6a9f9f10e83f54d2bcf0f240b0b4>,
  <https://github.com/nafu-at/misskey/commit/8a7d710c6acb83f50c83f050bd1423c764d60a99>)
- Enhance: デッキのアンテナ・リスト選択画面からそれぞれを新規作成できるように
- Enhance: ブラウザのコンテキストメニューを使用できるように
- Enhance: 連合の「連合中」,「購読中」,「配信中」に対してブロックしているサーバー、配信停止しているサーバーを含めないように
- Fix: `/about#federation` ページなどで各インスタンスのチャートが表示されなくなっていた問題を修正
- Fix: ユーザーページの追加情報のラベルを投稿者のサーバーの絵文字で表示する (#13968)
- Fix: リバーシの対局を正しく共有できないことがある問題を修正
- Fix: コントロールパネルでベースロールのポリシーを編集しても UI 上では変更が反映されない問題を修正
- Fix: アンテナの編集画面のボタンに隙間を追加
- Fix: テーマプレビューが見れない問題を修正
- Fix: ショートカットキーが連打できる問題を修正  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/234>)
- Fix: MkSignin.vue の credentialRequest から Reactivity を削除（Proxy が Passkey 認証処理に渡ることを避けるため）
- Fix:「アニメーション画像を再生しない」がオンのときでもサーバーのバナー画像・背景画像がアニメーションしてしまう問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/574>)
- Fix: Twitch の埋め込みが開けない問題を修正
- Fix: 子メニューの高さがウィンドウからはみ出ることがある問題を修正
- Fix: 個人宛てのダイアログ形式のお知らせが即時表示されない問題を修正
- Fix: 一部の画像がセンシティブ指定されているときに画面に何も表示されないことがあるのを修正
- Fix: リアクションしたユーザー一覧のユーザー名がはみ出る問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/672>)
- Fix: `/share`ページにおいて絵文字ピッカーを開くことができない問題を修正
- Fix: deck ui の通知音が重なる問題 (#14029)
- Fix: ダイレクト投稿の"削除して編集"において、宛先が保持されていなかった問題を修正
- Fix: 投稿フォームへの URL 貼り付けによる引用が下書きに保存されていなかった問題を修正
- Fix: "削除して編集"や下書きにおいて、リアクションの受け入れ設定が保持/保存されていなかった問題を修正
- Fix: 照会に `#` から始まる文字列を入力してそのハッシュタグのページを表示する際、入力が `#` のみの場合に「指定された URL に該当するページはありませんでした。」が表示されてしまう問題を修正
- Fix: 照会に `@` から始まる文字列を入力してユーザーを照会する際、入力が `@` のみの場合に「問題が発生しました」が表示されてしまう問題を修正
- Fix: 投稿フォームにノートの URL を貼り付けて"引用として添付"した場合、投稿文を空にすることによる Renote 化が出来なかった問題を修正
- Fix: フォロー中のユーザーに関する"TL に他の人への返信を含める"の設定が分かりづらい問題を修正
- Fix: タイムラインページを開いた時、`TLに他の人への返信を含める`がオフのときに`ファイル付きのみ`をオンにできない問題を修正
- Fix: deck ui でタイムラインを切り替えた際に TL の設定項目が更新されず、`TLに他の人への返信を含める`のトグルが表示されない問題を修正
- Fix: ウィジェットのタイムライン選択欄に無効化されたタイムラインが表示される問題を修正
- Fix: サウンドにドライブの音声を使用している際にドライブの音声が再生できなくなると設定が変更できなくなる問題を修正

### Server

- Feat: レートリミット制限に引っかかったときに`Retry-After`ヘッダーを返すように (#13949)
- Enhance: エンドポイント`clips/update`の必須項目を`clipId`のみに
- Enhance: エンドポイント`admin/roles/update`の必須項目を`roleId`のみに
- Enhance: エンドポイント`pages/update`の必須項目を`pageId`のみに
- Enhance: エンドポイント`gallery/posts/update`の必須項目を`postId`のみに
- Enhance: エンドポイント`i/webhook/update`の必須項目を`webhookId`のみに
- Enhance: エンドポイント`admin/ad/update`の必須項目を`id`のみに
- Enhance: `default.yml`内の`url`, `db.db`, `db.user`, `db.pass`を環境変数から読み込めるように
- Enhance: エンドポイント`api/meta`にプロパティ`noteSearchableScope`が増え、`string`値`local`または`global`を返却します
- Fix: チャート生成時に instance.suspensionState に置き換えられた instance.isSuspended が参照されてしまう問題を修正
- Fix: ユーザーのフィードページの MFM を HTML に展開するように (#14006)
- Fix: アンテナ・クリップ・リスト・ウェブフックがロールポリシーの上限より一つ多く作れてしまうのを修正 (#14036)
- Fix: notRespondingSince が実装される前に不通になったインスタンスが自動的に配信停止にならない (#14059)
- Fix: FTT 有効時、タイムライン用エンドポイントで`sinceId`にキャッシュ内最古のものより古いものを指定した場合に正しく結果が返ってこない問題を修正
- Fix: 自分以外のクリップ内のノート個数が見えることがあるのを修正
- Fix: 空文字列のリアクションはフォールバックされるように
- Fix: リノートにリアクションできないように
- Fix: ユーザー名の前後に空白文字列がある場合は省略するように
- Fix: プロフィール編集時に名前を空白文字列のみにできる問題を修正
- Fix: ユーザ名のサジェスト時に表示される内容と順番を調整(以下の順番になります) #14149

  1. フォロー中かつアクティブなユーザ
  2. フォロー中かつ非アクティブなユーザ
  3. フォローしていないアクティブなユーザ
  4. フォローしていない非アクティブなユーザ

  また、自分自身のアカウントもサジェストされるようになりました。

- Fix: 一般ユーザーから見たユーザーのバッジの一覧に公開されていないものが含まれることがある問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/652>)
- Fix: ユーザーのリアクション一覧でミュート/ブロックが機能していなかった問題を修正
- Fix: FTT 有効時にリモートユーザーのノートが HTL にキャッシュされる問題を修正
- Fix: 一部の通知がローカル上のリモートユーザーに対して行われていた問題を修正
- Fix: エラーメッセージの誤字を修正 (#14213)
- Fix: ソーシャルタイムラインにローカルタイムラインに表示される自分へのリプライが表示されない問題を修正
- Fix: リノートのミュートが適用されるまでに時間がかかることがある問題を修正  
  (Cherry-picked from <https://github.com/Type4ny-Project/Type4ny/commit/e9601029b52e0ad43d9131b555b614e56c84ebc1>)
- Fix: Steaming API が不正なデータを受けた場合の動作が不安定である問題 #14251
- Fix: `users/search`において `@` から始まる文字列が与えられた際の処理が正しくなかった問題を修正
  - 名前や自己紹介に `@` から始まる文言が含まれるユーザーも検索できるようになります
- Fix: 一部の Misskey 以外のソフトウェアからファイルを受け取れない問題
  (Cherry-picked from <https://github.com/Secineralyr/misskey.dream/pull/73/commits/652eaff1e8aa00b890d71d2e1e52c263c1e67c76>)
  - NOTE: `drive_file`の`url`, `uri`, `src`の上限が 512 から 1024 に変更されます
    Migration ではカラム定義の変更のみが行われます。
    サーバー管理者は各サーバーの必要に応じ`drive_file` `("uri")`に対するインデックスを張りなおすことでより安定し DB の探索が行われる可能性があります。
    詳細は [GitHub](https://github.com/misskey-dev/misskey/pull/14323#issuecomment-2257562228)で確認可能です
- Fix: 自分のフォロワー限定投稿に対するリプライがホームタイムラインで見えないことが有る問題を修正
- Fix: フォローしていないユーザによるフォロワー限定投稿に対するリプライがソーシャルタイムラインで表示されることがある問題を修正

### Misskey.js

- Feat: `/drive/files/create` のリクエストに対応（`multipart/form-data`に対応）
- Feat: `/admin/role/create` のロールポリシーの型を修正

## 2024.5.0-1.0.1

### Note

- コントロールパネル内にあるサマリープロキシの設定個所がセキュリティから全般へ変更となります。
- 悪意のある第三者がリモートユーザーになりすましたアクティビティを受け取れてしまう問題を修正しました。詳しくは[GitHub security advisory](https://github.com/misskey-dev/misskey/security/advisories/GHSA-2vxv-pv3m-3wvj)をご覧ください。
- 管理者向け権限 `read:admin:show-users` は `read:admin:show-user` に統合されました。必要に応じて API トークンを再発行してください。

### General

- Feat: エラートラッキングに Sentry を使用できるようになりました
- Enhance: URL プレビューの有効化・無効化を設定できるように #13569
- Enhance: アンテナで Bot によるノートを除外できるように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/545>)
- Enhance: クリップのノート数を表示するように
- Enhance: コンディショナルロールの条件として以下を新たに追加 (#13667)
  - 猫ユーザーか
  - bot ユーザーか
  - サスペンド済みユーザーか
  - 鍵アカウントユーザーか
  - 「アカウントを見つけやすくする」が有効なユーザーか
- Enhance: Gone を出さずに終了したサーバーへの配信停止を自動的に行うように
  - もしそのようなサーバーからから配信が届いた場合には自動的に配信を再開します
- Enhance: 配信停止の理由を表示するように
- Enhance: サーバーのお問い合わせ先 URL を設定できるようになりました
- Fix: Play 作成時に設定した公開範囲が機能していない問題を修正
- Fix: 正規化されていない状態の hashtag が連合されてきた html に含まれていると hashtag が正しく hashtag に復元されない問題を修正
- Fix: みつけるのアンケート欄にてチャンネルのアンケートが含まれてしまう問題を修正

### Client

- Feat: アップロードするファイルの名前をランダム文字列にできるように
- Feat: 個別のお知らせにリンクで飛べるように  
  (Based on <https://github.com/MisskeyIO/misskey/pull/639>)
- Enhance: 自分のノートの添付ファイルから直接ファイルの詳細ページに飛べるように
- Enhance: 広告が Misskey と同一ドメインの場合は Router で遷移するように
- Enhance: リアクション・いいねの総数を表示するように
- Enhance: リアクション受け入れが「いいねのみ」の場合はリアクション絵文字一覧を表示しないように
- Enhance: 設定>プラグインのページからプラグインの簡易的なログやエラーを見られるように
  - 実装の都合により、プラグインは１つエラーを起こした時に即時停止するようになりました
- Enhance: ページのデザインを変更
- Enhance: 2 要素認証（ワンタイムパスワード）の入力欄を改善
- Enhance:「今日誕生日のフォロー中ユーザー」ウィジェットを手動でリロードできるように
- Enhance: 映像・音声の再生にブラウザのネイティブプレイヤーを使用できるように
- Enhance: 映像・音声の再生メニューに「再生速度」「ループ再生」「ピクチャインピクチャ」を追加
- Enhance: 映像・音声の再生にキーボードショートカットが使えるように
- Enhance: ノートについているリアクションの「もっと！」から、リアクションの一覧を表示できるように
- Enhance: リプライにて引用がある場合テキストが空でもノートできるように
  - 引用したいノートの URL をコピーしリプライ投稿画面にペーストして添付することで達成できます
- Enhance: フォローするかどうかの確認ダイアログを出せるように
- Enhance: Play を手動でリロードできるように
- Enhance: 通報のコメント内のリンクをクリックした際、ウィンドウで開くように
- Enhance: `Ui:C:postForm` および `Ui:C:postFormButton` に
  `localOnly` と `visibility` を設定できるように
- Enhance: AiScript を 0.18.0 にバージョンアップ
- Enhance: 通常のノートでも、お気に入りに登録したチャンネルにリノートできるように
- Enhance: 長いテキストをペーストした際にテキストファイルとして添付するかどうかを選択できるように
- Enhance: 新着ノートをサウンドで通知する機能を deck UI に追加しました
- Enhance: コントロールパネルのクイックアクションからファイルを照会できるように
- Enhance: コントロールパネルのクイックアクションから通常の照会を行えるように
- Fix: 一部のページ内リンクが正しく動作しない問題を修正
- Fix: 周年の実績が閏年を考慮しない問題を修正
- Fix: ローカル URL のプレビューポップアップが左上に表示される
- Fix: WebGL2 をサポートしないブラウザで「季節に応じた画面の演出」が有効になっているとき、Misskey が起動できなくなる問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/459>)
- Fix: ページタイトルでローカルユーザーとリモートユーザーの区別がつかない問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/528>)
- Fix: コードブロックのシンタックスハイライトで使用される定義ファイルを CDN から取得するように #13177
  - CDN から取得せず Misskey 本体にバンドルする場合は`pacakges/frontend/vite.config.ts`を修正してください。
- Fix: タイムゾーンによっては、「今日誕生日のフォロー中ユーザー」ウィジェットが正しく動作しない問題を修正
- Fix: CW のみの引用リノートが詳細ページで純粋なリノートとして誤って扱われてしまう問題を修正
- Fix: ノート詳細ページにおいて CW 付き引用リノートの CW ボタンのラベルに「引用」が含まれていない問題を修正
- Fix: ダイアログの入力で字数制限に違反していても Enter キーが押せてしまう問題を修正
- Fix: ダイレクト投稿の宛先が保存されない問題を修正
- Fix: Play のページを離れたときに、Play が正常に初期化されない問題を修正
- Fix: ページの OGP URL が間違っているのを修正
- Fix: リバーシの対局を正しく共有できないことがある問題を修正
- Fix: 通知をグループ化している際に、人数が正常に表示されないことがある問題を修正
- Fix: 連合なしの状態の読み書きができない問題を修正
- Fix: `/share` で日本語等を含む url が url エンコードされない問題を修正
- Fix: ファイルを 5 つ以上添付してもテキストがないとノートが折りたたまれない問題を修正

### Server

- Enhance: エンドポイント`antennas/update`の必須項目を`antennaId`のみに
- Enhance: misskey-dev/summaly@5.1.0 の取り込み（プレビュー生成処理の効率化）
- Enhance: ドライブのファイルが NSFW かどうか個別に連合されるように (#13756)
  - 可能な場合、ノートの添付ファイルのセンシティブ判定がファイル単位になります
- Fix: リモートから配送されたアクティビティに JSON-LD compaction をかける
- Fix: フォローリクエストを作成する際に既存のものは削除するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/440>)
- Fix: エンドポイント`notes/translate`のエラーを改善
- Fix: CleanRemoteFilesProcessorService report progress from 100% (#13632)
- Fix: 一部の音声ファイルが映像ファイルとして扱われる問題を修正
- Fix: リプライのみの引用リノートと、CW のみの引用リノートが純粋なリノートとして誤って扱われてしまう問題を修正
- Fix: 登録にメール認証が必須になっている場合、登録されているメールアドレスを削除できないように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/606>)
- Fix: Add Cache-Control to Bull Board
- Fix: nginx 経由で/files/に Range リクエストされた場合に正しく応答できないのを修正
- Fix: 一部のタイムラインのストリーミングでインスタンスミュートが効かない問題を修正
- Fix: グローバルタイムラインで返信が表示されないことがある問題を修正
- Fix: リノートをミュートしたユーザの投稿のリノートがミュートされる問題を修正
- Fix: AP Link 等は添付ファイル扱いしないようになど (#13754)
- Fix: FTT が有効かつ sinceId のみを指定した場合に帰って来るレスポンスが逆順である問題を修正
- Fix: `/i/notifications`に `includeTypes`か`excludeTypes`を指定しているとき、通知が存在するのに空配列を返すことがある問題を修正
- Fix: 複数 id を指定する`users/show`が関係ないユーザを返すことがある問題を修正
- Fix: `/tags` と `/user-tags` が検索エンジンにインデックスされないように
- Fix: もともとセンシティブではないと連合されていたファイルがセンシティブとして連合された場合にセンシティブとしてそのファイルを扱うように
  - センシティブとして連合したファイルは非センシティブとして連合されてもセンシティブとして扱われます

## 2024.3.1-custom-1

- 関西弁の翻訳を一部修正

## 2024.3.1 およびそれ以前

- <https://misskey-hub.net/ja/docs/releases/> を確認してください。
