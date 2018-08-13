# diagonal-reveal.js

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FrontendSophie/diagonal-mask.js/blob/master/LICENSE)

> 📐45 degree reveal animation.

[View demo](http://frontendsophie.com/diagonal-reveal.js/)

## Usage

1. import `diagonal-reveal.min.js`
2. add `.diagonal` to target element
3. set required css style:

```
    .diagonal {
        position: relative;
        overflow: hidden;
    }

    .diagonal-reveal {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: top left;
    }
```

4. run `diagonalIn()` when needed

## Options

| key       | description                                                      | default     | type   |
| :-------- | ---------------------------------------------------------------- | ----------- | ------ |
| selector  | to specify target, e.g. `.diagonal.first`                        | `.diagonal` | string |
| direction | four options: `down-left`, `down-right`, `top-left`, `top-right` | `down-left` | string |

## Q & A

Q: 1. How to amend style and animation?  
A: Add style to `.diagonal-reveal`, do not cover required css set in Usage.  
For example, when amending animation delay time, set `animation-delay` instead of rewrite `animation`. Meanwhile add `!important` to force cover.

Q: 2. How to amend reveal direction?  
A: pass parameter like `diagonalIn({direction: 'down-right'})`.
