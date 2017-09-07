/*
 * @Author: yuzm
 * @Date:   2017-05-31 10:37:24
 * @Last Modified by:   yuzm
 * @Last Modified time: 2017-08-31 15:25:03
 */
import Vue from 'vue'
import vsDialog from './dialog.vue'

const DialogConstructor = Vue.extend(vsDialog);

var defaults = {

    title: '',
    okClass: 'primary',
    okContent: '',
    cancelClass: 'icon icon-remove-sign text-danger',
    okText: '確認',
    visb: 'hidden',
    msg: '',
    imgs: '',
    inputValue: null,
    inputId: 'phoneCode',
    yzm: false,
    codeImgId: 'Code'
}



var msgQueue = [];
var instance, currentMsg;

var merge = function(target) {
    for (var i = 1, j = arguments.length; i < j; i++) {
        var source = arguments[i];
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                var value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }

    // console.log(source)
    return target;
};

const defaultCallback = action => {
    if (currentMsg) {
        var callback = currentMsg.callback;
        if (typeof callback === 'function') {
            if (instance.showInput) {
                callback(instance.inputValue, action);
            } else {
                callback(action);
            }
        }

        if (currentMsg.resolve) {
            if (action === 'ok' && currentMsg.reject) {
                if (instance.showInput) {
                    currentMsg.resolve({
                        value: instance.inputValue,
                        action
                    });
                } else {
                    currentMsg.resolve(action);
                }
                // console.log(currentMsg.options)
                // currentMsg.resolve(action);
                // console.log(currentMsg.options)
            } else if (action === 'cancel' && currentMsg.reject) {
                // Dialog.ok();
                currentMsg.resolve(action);
            } else {

                currentMsg.resolve(action);
            }
        }
    }
};

var initInstance = function() {
    instance = new DialogConstructor({
        el: document.createElement('div')
    });

    instance.callback = defaultCallback;
};

var showNextMsg = function() {
    if (!instance) {
        initInstance();
    }

    if (!instance.value || instance.closeTimer) {
        if (msgQueue.length > 0) {
            currentMsg = msgQueue.shift();

            var options = currentMsg.options;
            for (var prop in options) {
                if (options.hasOwnProperty(prop)) {
                    instance[prop] = options[prop];
                }
            }
            if (options.callback === undefined) {
                instance.callback = defaultCallback;
            }
            // [ 'title','okClass','modal', 'cancelClass'].forEach(prop => {
            //     if (instance[prop] === undefined) {
            //         instance[prop] = true;
            //     }
            // });
            document.body.appendChild(instance.$el);

            Vue.nextTick(() => {
                // document.body.appendChild(instance.$el);
                instance.modal = true;
            });
        }
    }
};


// var Dialog = function(options, callback) {
//     if (typeof options === 'string') {
//         options = {
//             title: options
//         };
//         if (arguments[1]) {
//             options.message = arguments[1];
//         }
//         if (arguments[2]) {
//             options.type = arguments[2];
//         }
//     } else if (options.callback && !callback) {
//         callback = options.callback;
//     }
var Dialog = function(options, callback) {

    // if (typeof options === 'string') {
    // options = {
    //     title: options
    // };
    // this.options = this.extend({},defaults,options);


    // alert(options.title)
    // }
    // else
    // if (options.callback && !callback) {
    //     callback = options.callback;
    // }

    // console.log(options)

    if (typeof Promise !== 'undefined') {
        return new Promise(function(resolve, reject) { // eslint-disable-line
            msgQueue.push({
                // options:options,
                options: merge({}, defaults, Dialog.defaults || {}, options),
                callback: callback,
                resolve: resolve,
                reject: reject
            });

            showNextMsg();
        });
    } else {
        msgQueue.push({
            // options:options,
            options: merge({}, defaults, Dialog.defaults || {}, options),
            callback: callback
        });

        showNextMsg();
    }
};


// Dialog.prompt = function(message, title, options) {
//   if (typeof title === 'object') {
//     options = title;
//     title = '';
//   }
//   return Dialog(merge({
//     title: title,
//     message: message,
//     showCancelButton: true,
//     showInput: true
//   }, options));
// };

Dialog.setDefaults = function(defaults) {
    Dialog.defaults = defaults;
};

Dialog.cancel = function() {
    instance.modal = false;
    msgQueue = [];
    currentMsg = null;
    alert(1)
};
Dialog.ok = function() {

    //     return new Promise((resolve, reject) => {
    // resolve(someValue);
    //     })
    // instance.modal = false;
    // msgQueue = [];
    // currentMsg = null;

};

export default Dialog;
export {
    Dialog
};



// export default function(options = {}, callback) {

//     var defaultOption = {
//         dialogObj: {
//             title: '',
//             okClass: 'primary',
//             cancelClass: 'icon icon-remove-sign text-danger',
//             okText: '確認'
//         }
//     };


//     let  dialogObj  = Obj
//     ect.assign(defaultOption, options);

//     // const instance = new Dialog({
//     //     el: document.createElement('div')
//     // });
// const instance = new Dialog({
//         el: document.createElement('div')
//     });

// if (options.callback && !callback) {
//     callback = options.callback;
//   }
// if (typeof Promise !== 'undefined') {
//     return new Promise(function(resolve, reject) { // eslint-disable-line
// msgQueue.push({
//     options:,
//     callback: callback,
//     resolve: resolve,
//         reject: reject})
//     });
//   }

//     instance.dialogObj = dialogObj;

//     Vue.nextTick(() => {
//         document.body.appendChild(instance.$el);
//         instance.modal = true;
//     });
// }



// export default function(options = {}, callback) {

//     var defaultOption = {
//         dialogObj: {
//             title: '',
//             okClass: 'primary',
//             cancelClass: 'icon icon-remove-sign text-danger',
//             okText: '確認'
//         }
//     };


//     let  dialogObj  = Object.assign(defaultOption, options);

//     // const instance = new Dialog({
//     //     el: document.createElement('div')
//     // });
// const instance = new Dialog({
//         el: document.createElement('div')
//     });


//     instance.dialogObj = dialogObj;

//     Vue.nextTick(() => {
//         document.body.appendChild(instance.$el);
//         instance.modal = true;
//     });
// }