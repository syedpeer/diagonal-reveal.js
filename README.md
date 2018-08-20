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

## FAQ

##### How to modify layer style and animation?  
Extend `.diagonal-layer` but do not override `diagonal-reveal.css`.  
For instance, set `animation-delay: xx !important;` instead of rewrite `animation` when amending animation delay time.  


##### How to modify reveal direction and degree?  
pass options like `diagonalIn({direction: 'right', degree: 60})`.
