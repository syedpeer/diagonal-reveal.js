# diagonal-reveal.js

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FrontendSophie/diagonal-mask.js/blob/master/LICENSE)

> a diagonal reveal animation library.

[View demo](http://frontendsophie.com/diagonal-reveal.js/)  

## Usage

1. import `diagonal-reveal.min.js` and `diagonal-reveal.css`

```
<script src="./diagonal-reveal.min.js"></script>

import "./diagonal-reveal.css";
```

2.  add `.diagonal` to target element

```
<div class="diagonal"></div>
```

3. run `diagonalIn()` when needed

```
diagonalIn()
```

## Options

| key       | description                               | default     | type   |
| :-------- | ----------------------------------------- | ----------- | ------ |
| selector  | to specify target, e.g. `.diagonal.first` | `.diagonal` | string |
| direction | animation direction: `left`, `right`      | `left`      | string |
| degree    | angle of inclination                      | 45          | number |

## FAQ  

#### How to modify reveal direction and degree?  

Pass options like `diagonalIn({direction: 'right', degree: 60})`.  

#### How to modify layer style and animation?  
Extend `.diagonal-layer` but do not override `diagonal-reveal.css`.  
For instance, set `animation-delay: xx !important;` instead of rewrite `animation` when amending animation delay time.  

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions
