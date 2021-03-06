import Vue from 'vue'
export default {
    pwd:/^(?![A-Za-z]+$)(?![0-9]+$)(?![^A-Za-z0-9]+$)[\x21-x7e*y*z]{6,16}$/,
    validate: function(value, attribute, tipMessage) {
        let obj = {
            message: tipMessage,
            required: false,
        }
        // let message='';
        if (value == '') {
            // message ='請輸入'+attribute;
            // return message;
            obj.message = '請輸入' + attribute;
            obj.required = true;
        }
        return obj;
    },
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)){
            return unescape(arr[2]);
        }else
            return null;
    },
    setCookie(c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    },
    getUserCookie(key) {
      var User_Cookie_Name = this.getCookie('User_Cookie_Name');
      if (User_Cookie_Name === null || User_Cookie_Name === "") {
        return false;
      }
      var arr = User_Cookie_Name.split('&');
      var result = [];
      for (var i in arr) {
        var valueArray = arr[i].split('=');
        result[valueArray[0]] = valueArray[1];
      }
      if (result[key] === undefined) {
        return false;
      } else {
        return result[key];
      }

   }, 
   plusXing (str,frontLen,endLen) { //str：字符串，frontLen：前面保留位数，endLen：后面保留位数
        if(str){
            var len = str.length-frontLen-endLen;
            var xing = '';
            for (var i=0;i<len;i++) {
                xing+='*';
            }
            return str.substr(0,frontLen)+xing+str.substr(str.length-endLen);
        } 
    },



    //  //請輸入長度為6~16個字元的帳號，以字母開頭，包含字母、數字、下劃線，不區分大小寫
    //  checkUserName: function(str) {
    //      var reg = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
    //      return reg.test(str);
    //  },
    //  //請輸入長度為6~16個字元的密碼，不能有中文！
    //  check_pwd: function(str) {
    //      var reg = /^[^\u4e00-\u9fa5]{6,16}$/;
    //      return reg.test(str);
    //  },
    //  randomAlphanumeric: function(dstObj, charsLength, chars) {
    //      // var dstElem = document.getElementById(dstObj);
    //      var length = charsLength ? charsLength : 8;
    //      if (!chars)
    //          var chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ0123456789";
    //      var randomChars = "";
    //      for (let x = 0; x < length; x++) {
    //          var i = Math.floor(Math.random() * chars.length);
    //          randomChars += chars.charAt(i);
    //      }
    //      return randomChars;
    //      // dstElem.value = randomChars;
    //  },

    //  _int2ip: function(row, column) { //_int2ip 把整数转换为IP格式
    //      if (row) {
    //          let cellvalue = typeof row == 'object' ? eval("row." + column.property) : row;
    //          if (cellvalue) {
    //              var str;
    //              var tt = [];
    //              tt[0] = (cellvalue >>> 24) >>> 0;
    //              tt[1] = ((cellvalue << 8) >>> 24) >>> 0;
    //              tt[2] = (cellvalue << 16) >>> 24;
    //              tt[3] = (cellvalue << 24) >>> 24;
    //              str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);
    //              return str;
    //          }
    //      }
    //  },
    //  //Status：状态（1：展示  0：隐藏）
    //  formatIs: function(row, column) {
    //      let item = eval("row." + column.property);
    //      return item == '1' ? '展示' : '隐藏';
    //  },
    //  //日期显示
    //  formatDate: function(row, column) {
    //      if (row) {
    //          let timestamp = typeof row == 'object' ? eval("row." + column.property) : row;
    //          if (timestamp) {
    //              return new Date(parseInt(timestamp) * 1000).toLocaleString('chinese', {
    //                  hour12: false
    //              });
    //          }
    //      }
    //  },
    // imageuploading(){
    //    Message('图片上传中...，请耐心等待');
    // }
}
