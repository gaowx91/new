/*
 * @Author: yuzm
 * @Date:   2017-08-24 10:07:47
 * @Last Modified by:   yuzm
 * @Last Modified time: 2017-09-04 10:47:36
 */
function stopPropagation(ev) {

    ev.stopPropagation();
}

// function preventDefault(ev) {
//     ev.preventDefault();
// }

// document.getElementsByClassName('header')[0].addEventListener('touchmove', preventDefault, false);
// document.getElementsByClassName('footer')[0].addEventListener('touchmove', preventDefault, false);


//  document.getElementsByClassName('header')[0].addEventListener('touchmove', preventDefault, false);
//     document.getElementsByClassName('footer')[0].addEventListener('touchmove', preventDefault, false);
// function stopPropagation(ev) {

//         ev.stopPropagation();
//     }

//     function preventDefault(ev) {
//         ev.preventDefault();
//     }

function overScroll() {
    // function stopPropagation(ev) {
    //     ev.stopPropagation();
    // }
    var clicktag = 0;
    // function preventDefault(ev) {
    //     ev.preventDefault();
    // }
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
        // el.addEventListener('touchend', function(evt) {
        //     if (el.offsetHeight <= el.scrollHeight)
        //         evt._isScroller = true;

        // }, false);
    };


    // }
    clearTimeout(ss);
    if (clicktag === 0) {
        clicktag = 1;
        ss()
    }
    // overscroll(document.querySelector('.header'));
    // overscroll(document.querySelector('.footer'));

    // overscroll(document.querySelector('.content'));

    // if(clicktag==0){
    //     clicktag=1
    document.body.addEventListener('touchmove', function(evt) {
        if (evt.offsetHeight = evt.scrollHeight) {
            evt.preventDefault();
        }
        if (!evt._isScroller) {
            evt.preventDefault();
        }
        // setTimeout(function () { clicktag = 0 }, 100);
    }, false);



    // document.getElementsByClassName('header')[0].addEventListener('touchmove', preventDefault, false);
    // document.getElementsByClassName('footer')[0].addEventListener('touchmove', preventDefault, false);
    function ss() {
        setTimeout(function() {


            // if(clicktag==0){
            //     clicktag=1
            //   document.body.addEventListener('touchmove', function(evt) {
            //     if (evt.offsetHeight = evt.scrollHeight) {
            //         evt.preventDefault();
            //     }
            //     if (!evt._isScroller) {
            //         evt.preventDefault();
            //     }
            //     // setTimeout(function () { clicktag = 0 }, 100);
            // }, false);

            clicktag = 0;
            overscroll(document.querySelector('.content'));
            // document.body.addEventListener('touchstart', function(evt) {
            //     evt.stopPropagation();
            // });


        }, 100);
    }



}



export default overScroll;

// document.body.addEventListener('touchstart', function(e) {

//   e.preventDefault();

// }, false)

// document.body.addEventListener('touchmove', preventDefault, false)
// document.addEventListener('touchmove', preventDefault, false)

// function restoreEvent(ev) {
//     // var _target = ev.target,
//     // _ss = $(_target).parents().slice(-3)[0],
//     var
//     _point = ev.touches[0],
//     _top = _ss.scrollTop;

//     // 什么时候到底部
//     var _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;

//     if(_ss.id === 'app'){
//         // 到达顶端
//         if(_top === 0) {
//             // 阻止向下滑动
//             if(_point.clientY > Y) {
//                 ev.preventDefault();
//             } else {
//                 // 阻止冒泡
//                 // 正常执行
//                 ev.stopPropagation();
//             }
//         } else if(_top === _bottomFaVal) {
//             // 到达底部
//             // 阻止向上滑动
//             if(_point.clientY < Y) {
//                 ev.preventDefault();
//             } else {
//                 // 阻止冒泡
//                 // 正常执行
//                 ev.stopPropagation();
//             }
//     } else if(_top > 0 && _top < _bottomFaVal) {
//              ev.stopPropagation();
//     }
// }
// }
// restoreEvent()

// document.body.addEventListener('touchmove', dd, false)

// function dd(ev){
//     if(document.getElementsByClassName('content')[0].scrollTop==0){
//     ev.preventDefault();
//     }
// }



// document.getElementsByClassName('content')[0].addEventListener('touchmove',

//     ss
//     , false)



// function ss(ev){
//     // document.getElementsByClassName('content')[0].addEventListener('touchend',

//     // stopPropagation
//     // , false)
//     var  _target = ev.target,
//     _point = ev.touches[0],
// startY=_point.pageY;
//     document.getElementById('c').innerHTML=_point.pageY

// ev.stopPropagation();
//     if(document.getElementsByClassName('content')[0].scrollTop==0){
//       ev.preventDefault();

//     }
//     // document.getElementsByClassName('content')[0].addEventListener('touchstart',

//     // stopPropagation
//     // , false)
//     // if(document.body.scrollTop === 0) {
//             // 阻止向下滑动
//             // if(_point.pageY-startY ==0 ) {

//             //     ev.preventDefault();
//             // } else {
//             //     // 阻止冒泡
//             //     // 正常执行
//             //     ev.stopPropagation();
//             // }
//     //     } else if(_top === _bottomFaVal) {
//     //         // 到达底部
//     //         // 阻止向上滑动
//     //         if(_point.clientY < document.body.scrollHeight) {
//     //             ev.preventDefault();
//     //         } else {
//     //             // 阻止冒泡
//     //             // 正常执行
//     //             ev.stopPropagation();
//     //         }
//     // } else if(_top > 0 && _top < document.body.scrollHeight) {
//     //          ev.stopPropagation();
//     // }


//     // document.getElementsByClassName('content').scrollTop
//     // if(document.getElementsByClassName('content').scrollTop<0){

//     //     document.body.addEventListener('touchmove', preventDefault, false)
//     // }else{
//     //     document.body.addEventListener('touchmove', stopPropagation, false)
//     // }
// };
// ss();
// else{
//     document.body.addEventListener('touchmove', stopPropagation, false)
// }
// document.body.addEventListener('touchmove', preventDefault, false)
// document.getElementsByClassName('content')[0].addEventListener('touchmove', stopPropagation, false)