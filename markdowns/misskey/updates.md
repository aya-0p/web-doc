<!-- title 更新情報 -->
<!-- create 2024-05-20 16:45 -->
<!-- update 2025-02-03 11:00 -->
<!-- license misskeyの更新情報: GNU Affero General Public License v3.0, その他: なし -->

# 更新情報

- バージョンは `yyyy.mm.patch-major.minor.patch` の形式で表記しています。この表記は今後変更される場合があります。
- `#[number]`は[misskey-dev/misskey](https://github.com/misskey-dev/misskey)でのissue番号です。

## 2025.1.0-1.1.0

### Note

- [重要] ノート検索プロバイダの追加に伴い、configファイル（default.ymlなど）の構成が少し変わります.
  - 新しい設定項目"fulltextSearch.provider"が追加されました. sqlLike, sqlPgroonga, meilisearchのいずれかを設定出来ます.
  - すでにMeilisearchをお使いの場合、 **"fulltextSearch.provider"を"meilisearch"に設定する必要** があります.
  - 詳細は #14730 および `.config/example.yml` または `.config/docker_example.yml`の'Fulltext search configuration'をご参照願います.
- 【開発者向け】従来の開発モードでHMRが機能しない問題が修正されたため、バックエンド・フロントエンド分離型の開発モードが削除されました。開発環境においてconfigの変更が必要となる可能性があります。

### General

- Feat: カスタム絵文字管理画面をリニューアル #10996
  - β版として公開のため、旧画面も引き続き利用可能です

### Client

- Enhance: PC画面でチャンネルが複数列で表示されるように  
  (Cherry-picked from <https://github.com/Otaku-Social/maniakey/pull/13>)
- Enhance: 照会に失敗した場合、その理由を表示するように
- Enhance: ワードミュートで検知されたワードを表示できるように
- Enhance: リモートのノートのリンクをコピーできるように
- Enhance: 連合がホワイトリスト化・無効化されているサーバー向けのデザイン修正
- Enhance: AiScriptのセーブデータを明示的に削除する関数`Mk:remove`を追加
- Enhance: ノートの添付ファイルを一覧で遡れる「ファイル」タブを追加  
  (Based on <https://github.com/Otaku-Social/maniakey/pull/14>)
- Enhance: AiScriptの拡張API関数において引数の型チェックをより厳格に
- Enhance: クエリパラメータでuiを一時的に変更できるように #15240
- Enhance: リモート絵文字のインポート時に詳細を確認できるように #15336
- Fix: 画面サイズが変わった際にナビゲーションバーが自動で折りたたまれない問題を修正
- Fix: サーバー情報メニューに区切り線が不足していたのを修正
- Fix: ノートがログインしているユーザーしか見れない場合にログインダイアログを閉じるとその後の動線がなくなる問題を修正
- Fix: 公開範囲がホームのノートの埋め込みウィジェットが読み込まれない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/803>)
- Fix: 絵文字管理画面で一部の絵文字が表示されない問題を修正
- Fix: プラグイン `register_note_view_interruptor` でノートのサーバー情報の書き換えができない問題を修正
- Fix: Botプロテクションの設定変更時は実際に検証を通過しないと保存できないように( #15137 )
- Fix: ノート検索が使用できない場合でもチャンネルのノート検索欄がでていた問題を修正
- Fix: `Ui:C:select`で値の変更が画面に反映されない問題を修正
- Fix: MiAuth認可画面で、認可処理に失敗した場合でもコールバックURLに遷移してしまう問題を修正  
  (Cherry-picked from <https://github.com/TeamNijimiss/misskey/commit/800359623e41a662551d774de15b0437b6849bb4>)
- Fix: ノート作成画面でファイルの添付可能個数を超えてもノートボタンが押せていた問題を修正
- Fix: 「アカウントを管理」画面で、ユーザー情報の取得に失敗したアカウント（削除されたアカウントなど）が表示されない問題を修正
- Fix: MacOSでChrome系ブラウザを使用している場合に、Misskeyを閉じた際に他のタブのオーディオ機能と干渉する問題を修正
- Fix: 言語データのキャッシュ状況によっては、埋め込みウィジェットが正しく起動しない問題を修正
- Fix: 「削除して編集」でノートの引用を解除出来なかった問題を修正( #14476 )
- Fix: RSSウィジェットが正しく表示されない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/857>)
- Fix: ワードミュートの保存失敗時にAPIエラーが握りつぶされる事があるのを修正
- Fix: アンケートでリモートの絵文字が正しく描画できない問題の修正
  (Cherry-picked from <https://github.com/yojo-art/cherrypick/pull/153>)
- Fix: 非ログイン時のサーバー概要画面のメニューボタンが押せないことがあるのを修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/656>)
- Fix: URLにはじめから`#pswp`が含まれている場合に画像ビューワーがブラウザの戻るボタンで閉じられない問題を修正
- Fix: ロール作成画面で設定できるアイコンデコレーションの最大取付個数を16に制限
- Fix: Firefox Nightlyなどでアイコンが読み込めない問題を修正

### Server

- Enhance: pg_bigmが利用できるよう、ノートの検索をILIKE演算子でなくLIKE演算子でLOWER()をかけたテキストに対して行うように
- Enhance: ノート検索の選択肢としてpgroongaに対応 ( #14730 )
- Enhance: チャート更新時にDBに同時接続しないように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/830>)
- Enhance: config(default.yml)からSQLログ全文を出力するか否かを設定可能に ( #15266 )
- Fix: ユーザーのプロフィール画面をアドレス入力などで直接表示した際に概要タブの描画に失敗する問題の修正( #15032 )
- Fix: 起動前の疎通チェックが機能しなくなっていた問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/737>)
- Fix: ノートの閲覧にログイン必須にしてもFeedでノートが表示されてしまう問題を修正
- Fix: 絵文字の連合でライセンス欄を相互にやり取りするように ( #10859, #14109 )
- Fix: ロックダウンされた期間指定のノートがStreaming経由でLTLに出現するのを修正 ( #15200 )
- Fix: disableClustering設定時の初期化ロジックを調整( #15223 )
- Fix: URLとURIが異なるエンティティの照会に失敗する問題を修正( #15039 )
- Fix: ActivityPubリクエストかどうかの判定が正しくない問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/869>)
- Fix: `/api/pages/update`にて`name`を指定せずにリクエストするとエラーが発生する問題を修正
- Fix: AIセンシティブ判定が arm64 環境で動作しない問題を修正
- Fix: 非Misskey系のソフトウェアからHTML`<ruby>`タグを含むノートを受信した場合、MFMの読み仮名（ルビ）文法に変換して表示
- Fix: 連合OFFで投稿されたノートに対する冗長な処理を抑止 ( #15018 )
- Fix: `/api.json`のレスポンスが2回目のリクエスト以降おかしくなる問題を修正

### Misskey.js

- Feat: allow setting `binaryType` of WebSocket connection

## 2024.11.0-1.1.0

### Note

- Node.js 20.xは非推奨になりました。Node.js 22.x (LTS)の利用を推奨します。
  - なお、Node.js 23.xは対応していません。
- DockerのNode.jsが22.11.0に更新されました

### General

- Feat: コンテンツの表示にログインを必須にできるように
- Feat: 過去のノートを非公開化/フォロワーのみ表示可能にできるように
- Enhance: 依存関係の更新
- Enhance: l10nの更新
- Fix: お知らせ作成時に画像URL入力欄を空欄に変更できないのを修正 ( #14976 )

### Client

- Enhance: Bull DashboardでRelationship Queueの状態も確認できるように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/751>)
- Enhance: ドライブでソートができるように
- Enhance: アイコンデコレーション管理画面の改善
- Enhance: 「単なるラッキー」の取得条件を変更
- Enhance: 投稿フォームでEscキーを押したときIME入力中ならフォームを閉じないように（ #10866 ）
- Enhance: MiAuth, OAuthの認可画面の改善
  - どのアカウントで認証しようとしているのかがわかるように
  - 認証するアカウントを切り替えられるように
- Enhance: Self-XSS防止用の警告を追加
- Enhance: カタルーニャ語 (ca-ES) に対応
- Enhance: 個別お知らせページではMetaタグを出力するように
- Enhance: ノート詳細画面にロールのバッジを表示
- Enhance: 過去に送信したフォローリクエストを確認できるように  
  (Based on <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/663>)
- Enhance: サイドバーを簡単に展開・折りたたみできるように ( #14981 )
- Enhance: リノートメニューに「リノートの詳細」を追加
- Enhance: 非ログイン状態でMisskeyを開いた際のパフォーマンスを向上
- Fix: 通知の範囲指定の設定項目が必要ない通知設定でも範囲指定の設定がでている問題を修正
- Fix: Turnstileが失敗・期限切れした際にも成功扱いとなってしまう問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/768>)
- Fix: デッキのタイムラインカラムで「センシティブなファイルを含むノートを表示」設定が使用できなかった問題を修正
- Fix: Encode RSS urls with escape sequences before fetching allowing query parameters to be used
- Fix: リンク切れを修正
- Fix: ノート投稿ボタンにホバー時のスタイルが適用されていないのを修正  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/305>)
- Fix: メールアドレス登録有効化時の「完了」ダイアログボックスの表示条件を修正
- Fix: 画面幅が狭い環境でデザインが崩れる問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/815>)
- Fix: TypeScriptの型チェック対象ファイルを限定してビルドを高速化するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/725>)

### Server

- Enhance: DockerのNode.jsを22.11.0に更新
- Enhance: 起動前の疎通チェックで、DBとメイン以外のRedisの疎通確認も行うように  
  (Based on <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/588>)  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/715>)
- Enhance: リモートユーザーの照会をオリジナルにリダイレクトするように
- Fix: sharedInboxが無いActorに紐づくリモートユーザーを照会できない
- Fix: Aproving request from GtS appears with some delay
- Fix: フォロワーへのメッセージの絵文字をemojisに含めるように
- Fix: Nested proxy requestsを検出した際にブロックするように
  [ghsa-gq5q-c77c-v236](https://github.com/misskey-dev/misskey/security/advisories/ghsa-gq5q-c77c-v236)
- Fix: 招待コードの発行可能な残り数算出に使用すべきロールポリシーの値が違う問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/706>)
- Fix: 連合への配信時に、acctの大小文字が区別されてしまい正しくメンションが処理されないことがある問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/711>)
- Fix: ローカルユーザーへのメンションを含むノートが連合される際に正しいURLに変換されないことがある問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/712>)
- Fix: FTT無効時にユーザーリストタイムラインが使用できない問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/709>)
- Fix: User Webhookテスト機能のMock Payloadを修正
- Fix: アカウント削除のモデレーションログが動作していないのを修正 (#14996)
- Fix: リノートミュートが新規投稿通知に対して作用していなかった問題を修正
- Fix: Inboxの処理で生じるエラーを誤ってActivityとして処理することがある問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/730>)
- Fix: セキュリティに関する修正

### Misskey.js

- Fix: Stream初期化時、別途WebSocketを指定する場合の型定義を修正

## 2024.10.1-1.1.0

### Note

- スパム対策として、モデレータ権限を持つユーザのアクティビティが7日以上確認できない場合は自動的に招待制へと切り替え（コントロールパネル -> モデレーション -> "誰でも新規登録できるようにする"をオフに変更）るようになりました。 ( #13437 )
  - 切り替わった際はモデレーターへお知らせとして通知されます。登録をオープンな状態で継続したい場合は、コントロールパネルから再度設定を行ってください。

### General

- Feat: ユーザーの名前に禁止ワードを設定できるように

### Client

- Enhance: タイムライン表示時のパフォーマンスを向上
- Enhance: アーカイブした個人宛のお知らせを表示・編集できるように
- Enhance: l10nの更新
- Fix: メールアドレス不要でCaptchaが有効な場合にアカウント登録完了後自動でのログインに失敗する問題を修正

### Server

- Feat: モデレータ権限を持つユーザが全員7日間活動しなかった場合は自動的に招待制へと切り替えるように ( #13437 )
- Enhance: 個人宛のお知らせは「わかった」を押すと自動的にアーカイブされるように
- Fix: `admin/emoji/update`エンドポイントのidのみ指定した時不正なエラーが発生するバグを修正
- Fix: RBT有効時、リノートのリアクションが反映されない問題を修正
- Fix: キューのエラーログを簡略化するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/649>)

## 2024.10.0-1.1.0

### Note

- セキュリティ向上のため、サーバー初期設定時に使用する初期パスワードを設定できるようになりました。今後Misskeyサーバーを新たに設置する際には、初回の起動前にコンフィグファイルの`setupPassword`をコメントアウトし、初期パスワードを設定することをおすすめします。（すでに初期設定を完了しているサーバーについては、この変更に伴い対応する必要はありません）
  - ホスティングサービスを運営している場合は、コンフィグファイルを構築する際に`setupPassword`をランダムな値に設定し、ユーザーに通知するようにシステムを更新することをおすすめします。
  - なお、初期パスワードが設定されていない場合でも初期設定を行うことが可能です（UI上で初期パスワードの入力欄を空欄にすると続行できます）。
- ユーザーデータを読み込む際の型が一部変更されました。
  - `twoFactorEnabled`, `usePasswordLessLogin`, `securityKeys`: 自分とモデレーター以外のユーザーからは取得できなくなりました

### General

- Feat: サーバー初期設定時に初期パスワードを設定できるように
- Feat: 通報にモデレーションノートを残せるように
- Feat: 通報の解決種別を設定できるように
- Enhance: 通報の解決と転送を個別に行えるように
- Enhance: セキュリティ向上のため、サインイン時もCAPTCHAを求めるようになりました
- Enhance: 依存関係の更新
- Enhance: l10nの更新
- Enhance: Playの「人気」タブで10件以上表示可能に #14399
- Fix: 連合のホワイトリストが正常に登録されない問題を修正

### Client

- Enhance: デザインの調整
- Enhance: ログイン画面の認証フローを改善
- Fix: クライアント上での時間ベースの実績獲得動作が実績獲得後も発動していた問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/657>)

### Server

- Enhance: セキュリティ向上のため、ログイン時にメール通知を行うように
- Enhance: 自分とモデレーター以外のユーザーから二要素認証関連のデータが取得できないように
- Enhance: 通報および通報解決時に送出されるSystemWebhookにユーザ情報を含めるように ( #14697 )
- Fix: `admin/abuse-user-reports`エンドポイントのスキーマが間違っていた問題を修正

## 2024.9.0-1.1.0

### General

- Feat: ノート単体・ユーザーのノート・クリップのノートの埋め込み機能
  - 埋め込みコードやウェブサイトへの実装方法の詳細は <https://misskey-hub.net/docs/for-users/features/embed/> をご覧ください
- Feat: パスキーでログインボタンを実装 (#14574)
- Feat: フォローされた際のメッセージを設定できるように
- Feat: 連合をホワイトリスト制にできるように
- Feat: UserWebhookとSystemWebhookのテスト送信機能を追加 (#14445)
- Feat: モデレーターはユーザーにかかわらずファイルが添付されているノートを検索できるように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/680>)
- Feat: データエクスポートが完了した際に通知を発行するように
- Enhance: ユーザーによるコンテンツインポートの可否をロールポリシーで制御できるように
- Enhance: 依存関係の更新
- Enhance: l10nの更新

### Client

- Enhance: サイズ制限を超過するファイルをアップロードしようとした際にエラーを出すように
- Enhance: アイコンデコレーション管理画面にプレビューを追加
- Enhance: コントロールパネル内のファイル一覧でセンシティブなファイルを区別しやすく
- Enhance: ScratchpadにUIインスペクターを追加
- Enhance: Play編集画面の項目の並びを少しリデザイン
- Enhance: 各種メニューをドロワー表示するかどうか設定可能に
- Enhance: AiScriptのMk:C:containerのオプションに`borderStyle`と`borderRadius`を追加
- Enhance: CWでも絵文字をクリックしてメニューを表示できるように
- Fix: サーバーメトリクスが2つ以上あるとリロード直後の表示がおかしくなる問題を修正
- Fix: コントロールパネル内のAp requests内のチャートの表示がおかしかった問題を修正
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
- Fix: アンテナの書き込み時にキーワードが与えられなかった場合のエラーをApiErrorとして投げるように
  - この変更により、公式フロントエンドでは入力の不備が内部エラーとして報告される代わりに一般的なエラーダイアログで報告されます
- Fix: ファイルがサイズの制限を超えてアップロードされた際にエラーを返さなかった問題を修正
- Fix: 外部ページを解析する際に、ページに紐づけられた関連リソースも読み込まれてしまう問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/commit/26e0412fbb91447c37e8fb06ffb0487346063bb8>)
- Fix: Continue importing from file if single emoji import fails
- Fix: `Retry-After`ヘッダーが送信されなかった問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/commit/8a982c61c01909e7540ff1be9f019df07c3f0624>)
- Fix: サーバーサイドのDOM解析完了時にリソースを開放するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/634>)
- Fix: `<link rel="alternate">`を追って照会するのはOKレスポンスが返却された場合のみに  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/633>)
- Fix: メールにスタイルが適用されていなかった問題を修正

## 2024.8.0-1.1.0

### Server

- Enhance: レートリミットを緩和(一部強化したものもあります)

## 2024.8.0-1.0.1

### General

- Enhance: モデレーターはすべてのユーザーのフォロー・フォロワーの一覧を見られるように
- Enhance: アカウントの削除のモデレーションログを残すように
- Enhance: 不適切なページ、ギャラリー、Playを管理者権限で削除できるように
- Fix: リモートユーザのフォロー・フォロワーの一覧が非公開設定の場合も表示できてしまう問題を修正

### Client

- Enhance: 「自分のPlay」ページにおいてPlayが非公開かどうかが一目でわかるように
- Enhance: 不適切なページ、ギャラリー、Playを通報できるように
- Fix: Play編集時に公開範囲が「パブリック」にリセットされる問題を修正
- Fix: ページ遷移に失敗することがある問題を修正
- Fix: iOSでユーザー名などがリンクとして誤検知される現象を抑制
- Fix: mCaptchaを使用していてもbotプロテクションに関する警告が消えないのを修正
- Fix: ユーザーのモデレーションページにおいてユーザー名にドットが入っているとシステムアカウントとして表示されてしまう問題を修正
- Fix: 特定の条件下でノートの削除ボタンが出ないのを修正

### Server

- Enhance: 照会時にURLがhtmlかつheadタグ内に`rel="alternate"`, `type="application/activity+json"`の`link`タグがある場合に追ってリンク先を照会できるように
- Enhance: 凍結されたアカウントのフォローリクエストを表示しないように
- Fix: WSの`readAllNotifications` メッセージが `body` を持たない場合に動作しない問題 #14374
  - 通知ページや通知カラム(デッキ)を開いている状態において、新たに発生した通知が既読されない問題が修正されます。
  - これにより、プッシュ通知が有効な同条件下の環境において、プッシュ通知が常に発生してしまう問題も修正されます。
- Fix: Play各種エンドポイントの返り値に`visibility`が含まれていない問題を修正
- Fix: サーバー情報取得の際にモデレーター限定の情報が取得できないことがあるのを修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/582>)
- Fix: 公開範囲がダイレクトのノートをユーザーアクティビティのチャート生成に使用しないように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/679>)
- Fix: ActivityPubのエンティティタイプ判定で不明なタイプを受け取った場合でも処理を継続するように
  - キュー処理のつまりが改善される可能性があります
- Fix: リバーシの対局設定の変更が反映されないのを修正
- Fix: 無制限にストリーミングのチャンネルに接続できる問題を修正
- Fix: ベースロールのポリシーを変更した際にモデログに記録されないのを修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/700>)
- Fix: Prevent memory leak from memory caches (#14310)
- Fix: More reliable memory cache eviction (#14311)

## 2024.7.0-1.0.1

### Note

- デッキUIの新着ノートをサウンドで通知する機能の追加（v2024.5.0-1.0.1）に伴い、以前から動作しなくなっていたクライアント設定内の「アンテナ受信」「チャンネル通知」サウンドを削除しました。
- Streaming APIにて入力が不正な場合にはそのメッセージを無視するようになりました。 #14251

### General

- Feat: 通報を受けた際、または解決した際に、予め登録した宛先に通知を飛ばせるように(mail or webhook) #13705
- Feat: ユーザーのアイコン/バナーの変更可否をロールで設定可能に
  - 変更不可となっていても、設定済みのものを解除してデフォルト画像に戻すことは出来ます
- Feat: ユーザ作成時にSystemWebhookを送信可能に #14281
- Feat: メディアサイレンスを実装 #13842
  - メディアサイレンスされたサーバーに所属するアカウントによるファイルはすべてセンシティブとして扱われ、カスタム絵文字が使用できないようになります。
- Enhance: 管理画面でアーカイブにしたお知らせを表示・編集できるように
- Fix: 配信停止したインスタンス一覧が見れなくなる問題を修正
- Fix: Dockerコンテナの立ち上げ時に`pnpm`のインストールで固まることがある問題
- Fix: デフォルトテーマに無効なテーマコードを入力するとUIが使用できなくなる問題を修正
- 翻訳の更新
- 依存関係の更新

### Client

- Feat: ユーザーページから「このユーザーのノートを検索」できるように (#14128)
- Feat: 検索ページはクエリを受け付けるようになりました (#14128)
- Enhance: 検索ページのUI改善 (#14128)
- Enhance: 内蔵APIドキュメントのデザイン・パフォーマンスを改善
- Enhance: 非ログイン時に他サーバーに遷移するアクションを追加
- Enhance: 非ログイン時のハイライトTLのデザインを改善
- Enhance: フロントエンドのアクセシビリティ改善  
  (Based on <https://github.com/taiyme/misskey/pull/226>)
- Enhance: サーバー情報ページ・お問い合わせページを改善  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/238>)
- Enhance: AiScriptを0.19.0にアップデート
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
- Fix: コントロールパネルでベースロールのポリシーを編集してもUI上では変更が反映されない問題を修正
- Fix: アンテナの編集画面のボタンに隙間を追加
- Fix: テーマプレビューが見れない問題を修正
- Fix: ショートカットキーが連打できる問題を修正  
  (Cherry-picked from <https://github.com/taiyme/misskey/pull/234>)
- Fix: MkSignin.vueのcredentialRequestからReactivityを削除（ProxyがPasskey認証処理に渡ることを避けるため）
- Fix: 「アニメーション画像を再生しない」がオンのときでもサーバーのバナー画像・背景画像がアニメーションしてしまう問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/574>)
- Fix: Twitchの埋め込みが開けない問題を修正
- Fix: 子メニューの高さがウィンドウからはみ出ることがある問題を修正
- Fix: 個人宛てのダイアログ形式のお知らせが即時表示されない問題を修正
- Fix: 一部の画像がセンシティブ指定されているときに画面に何も表示されないことがあるのを修正
- Fix: リアクションしたユーザー一覧のユーザー名がはみ出る問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/672>)
- Fix: `/share`ページにおいて絵文字ピッカーを開くことができない問題を修正
- Fix: deck uiの通知音が重なる問題 (#14029)
- Fix: ダイレクト投稿の"削除して編集"において、宛先が保持されていなかった問題を修正
- Fix: 投稿フォームへのURL貼り付けによる引用が下書きに保存されていなかった問題を修正
- Fix: "削除して編集"や下書きにおいて、リアクションの受け入れ設定が保持/保存されていなかった問題を修正
- Fix: 照会に `#` から始まる文字列を入力してそのハッシュタグのページを表示する際、入力が `#` のみの場合に「指定されたURLに該当するページはありませんでした。」が表示されてしまう問題を修正
- Fix: 照会に `@` から始まる文字列を入力してユーザーを照会する際、入力が `@` のみの場合に「問題が発生しました」が表示されてしまう問題を修正
- Fix: 投稿フォームにノートのURLを貼り付けて"引用として添付"した場合、投稿文を空にすることによるRenote化が出来なかった問題を修正
- Fix: フォロー中のユーザーに関する"TLに他の人への返信を含める"の設定が分かりづらい問題を修正
- Fix: タイムラインページを開いた時、`TLに他の人への返信を含める`がオフのときに`ファイル付きのみ`をオンにできない問題を修正
- Fix: deck uiでタイムラインを切り替えた際にTLの設定項目が更新されず、`TLに他の人への返信を含める`のトグルが表示されない問題を修正
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
- Fix: チャート生成時にinstance.suspensionStateに置き換えられたinstance.isSuspendedが参照されてしまう問題を修正
- Fix: ユーザーのフィードページのMFMをHTMLに展開するように (#14006)
- Fix: アンテナ・クリップ・リスト・ウェブフックがロールポリシーの上限より一つ多く作れてしまうのを修正 (#14036)
- Fix: notRespondingSinceが実装される前に不通になったインスタンスが自動的に配信停止にならない (#14059)
- Fix: FTT有効時、タイムライン用エンドポイントで`sinceId`にキャッシュ内最古のものより古いものを指定した場合に正しく結果が返ってこない問題を修正
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
- Fix: FTT有効時にリモートユーザーのノートがHTLにキャッシュされる問題を修正
- Fix: 一部の通知がローカル上のリモートユーザーに対して行われていた問題を修正
- Fix: エラーメッセージの誤字を修正 (#14213)
- Fix: ソーシャルタイムラインにローカルタイムラインに表示される自分へのリプライが表示されない問題を修正
- Fix: リノートのミュートが適用されるまでに時間がかかることがある問題を修正  
  (Cherry-picked from <https://github.com/Type4ny-Project/Type4ny/commit/e9601029b52e0ad43d9131b555b614e56c84ebc1>)
- Fix: Steaming APIが不正なデータを受けた場合の動作が不安定である問題 #14251
- Fix: `users/search`において `@` から始まる文字列が与えられた際の処理が正しくなかった問題を修正
  - 名前や自己紹介に `@` から始まる文言が含まれるユーザーも検索できるようになります
- Fix: 一部のMisskey以外のソフトウェアからファイルを受け取れない問題
  (Cherry-picked from <https://github.com/Secineralyr/misskey.dream/pull/73/commits/652eaff1e8aa00b890d71d2e1e52c263c1e67c76>)
  - NOTE: `drive_file`の`url`, `uri`, `src`の上限が512から1024に変更されます
    Migrationではカラム定義の変更のみが行われます。
    サーバー管理者は各サーバーの必要に応じ`drive_file` `("uri")`に対するインデックスを張りなおすことでより安定しDBの探索が行われる可能性があります。
    詳細 は [GitHub](https://github.com/misskey-dev/misskey/pull/14323#issuecomment-2257562228)で確認可能です
- Fix: 自分のフォロワー限定投稿に対するリプライがホームタイムラインで見えないことが有る問題を修正
- Fix: フォローしていないユーザによるフォロワー限定投稿に対するリプライがソーシャルタイムラインで表示されることがある問題を修正

### Misskey.js

- Feat: `/drive/files/create` のリクエストに対応（`multipart/form-data`に対応）
- Feat: `/admin/role/create` のロールポリシーの型を修正

## 2024.5.0-1.0.1

### Note

- コントロールパネル内にあるサマリープロキシの設定個所がセキュリティから全般へ変更となります。
- 悪意のある第三者がリモートユーザーになりすましたアクティビティを受け取れてしまう問題を修正しました。詳しくは[GitHub security advisory](https://github.com/misskey-dev/misskey/security/advisories/GHSA-2vxv-pv3m-3wvj)をご覧ください。
- 管理者向け権限 `read:admin:show-users` は `read:admin:show-user` に統合されました。必要に応じてAPIトークンを再発行してください。

### General

- Feat: エラートラッキングにSentryを使用できるようになりました
- Enhance: URLプレビューの有効化・無効化を設定できるように #13569
- Enhance: アンテナでBotによるノートを除外できるように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/545>)
- Enhance: クリップのノート数を表示するように
- Enhance: コンディショナルロールの条件として以下を新たに追加 (#13667)
  - 猫ユーザーか
  - botユーザーか
  - サスペンド済みユーザーか
  - 鍵アカウントユーザーか
  - 「アカウントを見つけやすくする」が有効なユーザーか
- Enhance: Goneを出さずに終了したサーバーへの配信停止を自動的に行うように
  - もしそのようなサーバーからから配信が届いた場合には自動的に配信を再開します
- Enhance: 配信停止の理由を表示するように
- Enhance: サーバーのお問い合わせ先URLを設定できるようになりました
- Fix: Play作成時に設定した公開範囲が機能していない問題を修正
- Fix: 正規化されていない状態のhashtagが連合されてきたhtmlに含まれているとhashtagが正しくhashtagに復元されない問題を修正
- Fix: みつけるのアンケート欄にてチャンネルのアンケートが含まれてしまう問題を修正

### Client

- Feat: アップロードするファイルの名前をランダム文字列にできるように
- Feat: 個別のお知らせにリンクで飛べるように  
  (Based on <https://github.com/MisskeyIO/misskey/pull/639>)
- Enhance: 自分のノートの添付ファイルから直接ファイルの詳細ページに飛べるように
- Enhance: 広告がMisskeyと同一ドメインの場合はRouterで遷移するように
- Enhance: リアクション・いいねの総数を表示するように
- Enhance: リアクション受け入れが「いいねのみ」の場合はリアクション絵文字一覧を表示しないように
- Enhance: 設定>プラグインのページからプラグインの簡易的なログやエラーを見られるように
  - 実装の都合により、プラグインは１つエラーを起こした時に即時停止するようになりました
- Enhance: ページのデザインを変更
- Enhance: 2要素認証（ワンタイムパスワード）の入力欄を改善
- Enhance: 「今日誕生日のフォロー中ユーザー」ウィジェットを手動でリロードできるように
- Enhance: 映像・音声の再生にブラウザのネイティブプレイヤーを使用できるように
- Enhance: 映像・音声の再生メニューに「再生速度」「ループ再生」「ピクチャインピクチャ」を追加
- Enhance: 映像・音声の再生にキーボードショートカットが使えるように
- Enhance: ノートについているリアクションの「もっと！」から、リアクションの一覧を表示できるように
- Enhance: リプライにて引用がある場合テキストが空でもノートできるように
  - 引用したいノートのURLをコピーしリプライ投稿画面にペーストして添付することで達成できます
- Enhance: フォローするかどうかの確認ダイアログを出せるように
- Enhance: Playを手動でリロードできるように
- Enhance: 通報のコメント内のリンクをクリックした際、ウィンドウで開くように
- Enhance: `Ui:C:postForm` および `Ui:C:postFormButton` に
  `localOnly` と `visibility` を設定できるように
- Enhance: AiScriptを0.18.0にバージョンアップ
- Enhance: 通常のノートでも、お気に入りに登録したチャンネルにリノートできるように
- Enhance: 長いテキストをペーストした際にテキストファイルとして添付するかどうかを選択できるように
- Enhance: 新着ノートをサウンドで通知する機能をdeck UIに追加しました
- Enhance: コントロールパネルのクイックアクションからファイルを照会できるように
- Enhance: コントロールパネルのクイックアクションから通常の照会を行えるように
- Fix: 一部のページ内リンクが正しく動作しない問題を修正
- Fix: 周年の実績が閏年を考慮しない問題を修正
- Fix: ローカルURLのプレビューポップアップが左上に表示される
- Fix: WebGL2をサポートしないブラウザで「季節に応じた画面の演出」が有効になっているとき、Misskeyが起動できなくなる問題を修正  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/459>)
- Fix: ページタイトルでローカルユーザーとリモートユーザーの区別がつかない問題を修正  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/528>)
- Fix: コードブロックのシンタックスハイライトで使用される定義ファイルをCDNから取得するように #13177
  - CDNから取得せずMisskey本体にバンドルする場合は`pacakges/frontend/vite.config.ts`を修正してください。
- Fix: タイムゾーンによっては、「今日誕生日のフォロー中ユーザー」ウィジェットが正しく動作しない問題を修正
- Fix: CWのみの引用リノートが詳細ページで純粋なリノートとして誤って扱われてしまう問題を修正
- Fix: ノート詳細ページにおいてCW付き引用リノートのCWボタンのラベルに「引用」が含まれていない問題を修正
- Fix: ダイアログの入力で字数制限に違反していてもEnterキーが押せてしまう問題を修正
- Fix: ダイレクト投稿の宛先が保存されない問題を修正
- Fix: Playのページを離れたときに、Playが正常に初期化されない問題を修正
- Fix: ページのOGP URLが間違っているのを修正
- Fix: リバーシの対局を正しく共有できないことがある問題を修正
- Fix: 通知をグループ化している際に、人数が正常に表示されないことがある問題を修正
- Fix: 連合なしの状態の読み書きができない問題を修正
- Fix: `/share` で日本語等を含むurlがurlエンコードされない問題を修正
- Fix: ファイルを5つ以上添付してもテキストがないとノートが折りたたまれない問題を修正

### Server

- Enhance: エンドポイント`antennas/update`の必須項目を`antennaId`のみに
- Enhance: misskey-dev/summaly@5.1.0の取り込み（プレビュー生成処理の効率化）
- Enhance: ドライブのファイルがNSFWかどうか個別に連合されるように (#13756)
  - 可能な場合、ノートの添付ファイルのセンシティブ判定がファイル単位になります
- Fix: リモートから配送されたアクティビティにJSON-LD compactionをかける
- Fix: フォローリクエストを作成する際に既存のものは削除するように  
  (Cherry-picked from <https://activitypub.software/TransFem-org/Sharkey/-/merge_requests/440>)
- Fix: エンドポイント`notes/translate`のエラーを改善
- Fix: CleanRemoteFilesProcessorService report progress from 100% (#13632)
- Fix: 一部の音声ファイルが映像ファイルとして扱われる問題を修正
- Fix: リプライのみの引用リノートと、CWのみの引用リノートが純粋なリノートとして誤って扱われてしまう問題を修正
- Fix: 登録にメール認証が必須になっている場合、登録されているメールアドレスを削除できないように  
  (Cherry-picked from <https://github.com/MisskeyIO/misskey/pull/606>)
- Fix: Add Cache-Control to Bull Board
- Fix: nginx経由で/files/にRangeリクエストされた場合に正しく応答できないのを修正
- Fix: 一部のタイムラインのストリーミングでインスタンスミュートが効かない問題を修正
- Fix: グローバルタイムラインで返信が表示されないことがある問題を修正
- Fix: リノートをミュートしたユーザの投稿のリノートがミュートされる問題を修正
- Fix: AP Link等は添付ファイル扱いしないようになど (#13754)
- Fix: FTTが有効かつsinceIdのみを指定した場合に帰って来るレスポンスが逆順である問題を修正
- Fix: `/i/notifications`に `includeTypes`か`excludeTypes`を指定しているとき、通知が存在するのに空配列を返すことがある問題を修正
- Fix: 複数idを指定する`users/show`が関係ないユーザを返すことがある問題を修正
- Fix: `/tags` と `/user-tags` が検索エンジンにインデックスされないように
- Fix: もともとセンシティブではないと連合されていたファイルがセンシティブとして連合された場合にセンシティブとしてそのファイルを扱うように
  - センシティブとして連合したファイルは非センシティブとして連合されてもセンシティブとして扱われます

## 2024.3.1-custom-1

- 関西弁の翻訳を一部修正

## 2024.3.1およびそれ以前

- <https://misskey-hub.net/ja/docs/releases/> を確認してください。
