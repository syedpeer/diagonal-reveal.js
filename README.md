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

3. run `diagonalIn()` when needed -->

```
diagonalIn()
```

## Options

| key       | description                               | default     | type   |
| :-------- | ----------------------------------------- | ----------- | ------ |
| selector  | to specify target, e.g. `.diagonal.first` | `.diagonal` | string |
| direction | animation direction: `left`, `right`      | `left`      | string |
| degree    | angle of inclination                      | 45          | number |

## Q & A

Q: 1. How to amend layer style and animation?  
A: Add style to `.diagonal-layer`, do not cover required css set in Usage.  
For instance, when amending animation delay time, set `animation-delay` instead of rewrite `animation` and add `!important` to force cover.

Q: 2. How to amend reveal direction and degree?  
A: pass parameter like `diagonalIn({direction: 'right', degree: 60})`.
