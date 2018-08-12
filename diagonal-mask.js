(function (exports) {
    let diagonalId = 0;
    const defaultConfig = {
        selector: '.diagonal',
        direction: 'down-left',
    }
    let decimals

    function _diagonalIn(config = defaultConfig) {
        const _config = Object.assign({}, defaultConfig, config);
        const content = document.querySelectorAll(_config.selector)
        content.forEach(function (item, index) {
            const mask = _initializeMask(item)
            mask.style.transform = _calTransform('cover', _config.direction)
            _generateAnimation(mask, index, _config)
        })
    }

    function _initializeMask(item) {
        const el = document.createElement('div')
        el.className = 'diagonal-mask'
        item.appendChild(el)

        const cWidth = item.offsetWidth // includes border
        const cHeight = item.offsetHeight
        const mSize = (cWidth + cHeight) * Math.sqrt(2) / 2 // calculate square mask size
        el.style.width = `${mSize}px`
        el.style.height = `${mSize}px`

        const coverPath = cWidth * Math.sqrt(2) / 2 // shortest path to cover
        decimals = {
            cover: coverPath / mSize,
            downLeft: (mSize - coverPath) / mSize,
            topRight: (mSize + coverPath) / mSize,
        }

        return el
    }

    function _decimalToPCT(decimal) {
        const val = Math.round(decimal * 100)
        return `${val}%`
    }

    function _calTransform(status, direction) {
        let translateX = 0;
        let translateY = 0;
        const {
            cover,
            downLeft,
            topRight
        } = decimals

        switch (direction) {
            case 'down-left': // from top right to bottom left
                if (status === 'cover') {
                    translateY = _decimalToPCT(-cover)
                } else if (status === 'out') {
                    translateY = _decimalToPCT(downLeft)
                }
                break

            case 'down-right': // from top left to bottom bottom
                translateY = _decimalToPCT(-cover)
                if (status === 'out') {
                    translateX = '100%'
                }
                break

            case 'top-left': // from bottom right to top left
                translateY = _decimalToPCT(-cover)
                if (status === 'out') {
                    translateX = '-100%'
                }
                break

            case 'top-right': // from bottom left to top right
                if (status === 'cover') {
                    translateY = _decimalToPCT(-cover)
                } else if (status === 'out') {
                    translateY = _decimalToPCT(-topRight)
                }
                break
        }

        const translateCSS = `translate(${translateX}, ${translateY})`
        return `rotate(45deg) ${translateCSS}`
    }

    function _generateAnimation(el, index, config) {
        const aniName = `diagonal-${diagonalId++}-${index}`
        el.style.animation = `${aniName} 0.5s ease-in 0.5s forwards`

        // insert keyframe
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML =
            `
                @keyframes ${aniName} {
                    from { 
                        transform: ${_calTransform('cover', config.direction)}
                    }
                    to  { 
                        transform: ${_calTransform('out', config.direction)}
                    }
                }'
            `
        document.head.appendChild(style);
    }

    exports.diagonalIn = _diagonalIn;
})(window)