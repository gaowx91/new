/*
 * @Author: yuzm
 * @Date:   2017-08-24 10:07:47
 * @Last Modified by:   yuzm
 * @Last Modified time: 2017-09-05 10:20:20
 */
function stopPropagation(ev) {

    ev.stopPropagation();
}

function overScroll() {
    var clicktag = 0;
    var overscroll = function(el) {

        el.addEventListener('touchstart', function() {
            var top = el.scrollTop,
                totalScroll = el.scrollHeight,
                currentScroll = top + el.offsetHeight;
            if (top === 0) {
                el.scrollTop = 1;
            } else if (currentScroll === totalScroll) {
                el.scrollTop = top - 1;
            }
        }, false);
        el.addEventListener('touchmove', function(evt) {
            if (el.offsetHeight < el.scrollHeight)
                evt._isScroller = true;
        }, false);
    };

    clearTimeout(changeClickTag);
    if (clicktag === 0) {
        clicktag = 1;
        changeClickTag()
    }
    document.body.addEventListener('touchmove', function(evt) {
        if (evt.offsetHeight = evt.scrollHeight) {
            evt.preventDefault();
        }
        if (!evt._isScroller) {
            evt.preventDefault();
        }
    }, false);

    function changeClickTag() {
        setTimeout(function() {
            clicktag = 0;
            overscroll(document.querySelector('.content'));
        }, 100);
    }



}



export default overScroll;