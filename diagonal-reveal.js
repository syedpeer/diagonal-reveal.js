(function (exports) {
    let diagonalId = 0;
    const defaultConfig = {
        selector: '.diagonal',
        direction: 'left',
        degree: 45,
    }
    let _config

    function _diagonalIn(config = defaultConfig) {
        _config = Object.assign({}, defaultConfig, config)
        const content = document.querySelectorAll(_config.selector)

        content.forEach(function (item, index) {
            const geometric = {
                cWidth: item.offsetWidth,
                cHeight: item.offsetHeight,
                offsetX: parseFloat(item.offsetHeight * getTanDeg(_config.degree).toFixed(2))
            }

            const layer = _initializeLayer(item, geometric)
            layer.style.transform = _calTransform(geometric)
            const styleEle = _generateAnimation(layer, index, geometric)

            layer.addEventListener('animationend', function () {
                item.removeChild(layer)
                document.head.removeChild(styleEle)
            })
        })
    }

    function _initializeLayer(item, geometric) {
        const el = document.createElement('div')
        el.className = 'diagonal-layer'
        item.appendChild(el)

        el.style.height = `${geometric.cHeight}px`
        el.style.width = `${geometric.cWidth + geometric.offsetX}px`

        return el
    }

    function getTanDeg(deg) {
        const rad = deg * Math.PI / 180
        return Math.tan(rad)
    }

    function _calTransform(geometric, status) {
        let translateX = `${-geometric.offsetX}px`
        let {
            direction,
            degree,
        } = _config

        if (status === 'out') {
            if (direction === 'left') {
                translateX = `-${geometric.cWidth + geometric.offsetX * 2}px`
            } else if (direction === 'right') {
                translateX = `${geometric.cWidth}px`
            }
        }

        return `skew(${degree}deg) translateX(${translateX})`
    }

    function _generateAnimation(el, index, geometric) {
        const aniName = `diagonal-${diagonalId++}-${index}`
        el.style.animation = `${aniName} 0.5s ease-in forwards`

        // insert keyframe
        let style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML =
            `
                @keyframes ${aniName} {
                    from { 
                        transform: ${_calTransform(geometric, 'cover')}
                    }
                    to  { 
                        transform: ${_calTransform(geometric, 'out')}
                    }
                }'
            `
        document.head.appendChild(style)
        return style
    }

    exports.diagonalIn = _diagonalIn;
})(window)