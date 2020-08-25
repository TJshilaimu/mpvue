export default  function throttle(fn, delay, immediate) {
    if (immediate) { //是否第一次时立即执行一次
        let t; //t为上一次执行的时间
        return function () {
            if (!t || Date.now() - t > delay) {
                fn();
                t = Date.now()
            }
        }
    } else {
        let timer;
        return function () {
            if (timer) {
                return
            }
            timer = setTimeout(() => {
                fn()
                timer = null; //计时器到时见执行后得把timer值修改，否则会一直进入if判断里
            }, delay)
        }
    }

}
