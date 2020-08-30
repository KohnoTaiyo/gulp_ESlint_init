## gulp-init
### npx gulpコマンドで
- scssをwacthで自動コンパイル
- prefixの自動追加
- css,js,htmlそれぞれのファイル更新でlocalServer自動更新

## ESlint-init
### ./node_modules/.bin/eslint チェックしたいファイル　で
- .eslintrc.jsonの設定内容でチェック
- その際はpacage.jsonの変更を忘れずに
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint public/assets/js --fix"
}
```
