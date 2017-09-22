import Vue from 'vue'
export default {
    validate:function(value,attribute,tipMessage){
        let obj = {
            message:tipMessage,
            required:false,
        }
        // let message='';
        if(value == ''){
            // message ='請輸入'+attribute;
            // return message;
            obj.message='請輸入'+attribute;
            obj.required = true;
        }
        return obj;
    }

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
