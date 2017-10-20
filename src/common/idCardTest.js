/**  
* 身份證15位編碼規則：dddddd yymmdd xx p   
* dddddd：地區碼   
* yymmdd: 出生年月日   
* xx: 順序類編碼，無法確定   
* p: 性別，奇數為男，偶數為女  
* <p />  
* 身份證18位編碼規則：dddddd yyyymmdd xxx y   
* dddddd：地區碼   
* yyyymmdd: 出生年月日   
* xxx:順序類編碼，無法確定，奇數為男，偶數為女   
* y: 校驗碼，該位數值可通過前17位計算獲得  
* <p />  
* 18位號碼加權因子為(從右到左) Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,1 ]  
* 驗證位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]   
* 校驗位計算公式：Y_P = mod( ∑(Ai×Wi),11 )   
* i為身份證號碼從右往左數的 2...18 位; Y_P為腳丫校驗碼所在校驗碼數組位置  
*   
*/
function checkParseIdCard(val, type) {
    var val = trim(val);
    var msg = checkIdcard(val);
    if (msg != "驗證通過!") {
        if (type != "") {
            return -1;
        } else {
            alert(msg);
        }
        return false;
    } else {
        if (type != "") {
            return 1;
        } else {
            return true;
        }

    }

    //    var birthdayValue;
    //    var sexId;
    //    var sexText;
    //    var age;

    //    if (15 == val.length) { //15位身份證號碼
    //        birthdayValue = val.charAt(6) + val.charAt(7);
    //        if (parseInt(birthdayValue) < 10) {
    //            birthdayValue = '20' + birthdayValue;
    //        } else {
    //            birthdayValue = '19' + birthdayValue;
    //        }
    //        birthdayValue = birthdayValue + '-' + val.charAt(8) + val.charAt(9)
    //				+ '-' + val.charAt(10) + val.charAt(11);
    //        if (parseInt(val.charAt(14) / 2) * 2 != val.charAt(14)) {
    //            sexId = "1";
    //            sexText = "男";
    //        } else {
    //            sexId = "2";
    //            sexText = "女";
    //        }
    //    }
    //    if (18 == val.length) { //18位身份證號碼
    //        birthdayValue = val.charAt(6) + val.charAt(7) + val.charAt(8)
    //				+ val.charAt(9) + '-' + val.charAt(10) + val.charAt(11) + '-'
    //				+ val.charAt(12) + val.charAt(13);
    //        if (parseInt(val.charAt(16) / 2) * 2 != val.charAt(16)) {
    //            sexId = "1";
    //            sexText = "男";
    //        } else {
    //            sexId = "2";
    //            sexText = "女";
    //        }
    //    }
    //    //年齡
    //    var dt1 = new Date(birthdayValue.replace("-", "/"));
    //    var dt2 = new Date();
    //    var age = dt2.getFullYear() - dt1.getFullYear();
    //    var m = dt2.getMonth() - dt1.getMonth();
    //    if (m < 0)
    //        age--;
    //    alert(birthdayValue + sexId + sexText + age);
}
function checkIdcard(idcard) {

    idcard = idcard.toUpperCase();

    var Errors = new Array("驗證通過!", "身份證號碼位數不對!", "身份證號碼出生日期超出范圍或含有非法字符!",
			"身份證號碼校驗錯誤!", "身份證地區非法!");
    var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "內蒙古", 21: "遼寧", 22: "吉林",
        23: "黑龍江", 31: "上海", 32: "江蘇", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山東",
        41: "河南", 42: "湖北", 43: "湖南", 44: "廣東", 45: "廣西", 46: "海南", 50: "重慶", 51: "四川",
        52: "貴州", 53: "云南", 54: "西藏", 61: "陜西", 62: "甘肅", 63: "青海", 64: "寧夏", 65: "新疆",
        71: "臺灣", 81: "香港", 82: "澳門", 91: "國外"
    }
    var idcard, Y, JYM;
    var S, M;
    var idcard_array = new Array();
    idcard_array = idcard.split("");
    //地區檢驗 
    if (area[parseInt(idcard.substr(0, 2))] == null)
        return Errors[4];
    //身份號碼位數及格式檢驗 
    switch (idcard.length) {
        case 15:
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0
				|| ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard
						.substr(6, 2)) + 1900) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //測試出生日期的合法性 
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //測試出生日期的合法性 
            }
            if (ereg.test(idcard))
                return Errors[0];
            else
                return Errors[2];
            break;
        case 18:
            //18位身份號碼檢視 
            //出生日期的合法性檢查  
            //閏年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
            //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
            if (parseInt(idcard.substr(6, 4)) % 4 == 0
				|| (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard
						.substr(6, 4)) % 4 == 0)) {
                //ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //閏年出生日期的合法性正則表達式 
                ereg = /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/; //閏年出生日期的合法性正則表達式 
            } else {
                //ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正則表達式 
                ereg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
            }
            if (ereg.test(idcard)) {//測試出生日期的合法性 
                //計算校驗位 
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
					+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
					+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
					+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
					+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
					+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
					+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
					+ parseInt(idcard_array[7]) * 1
					+ parseInt(idcard_array[8]) * 6
					+ parseInt(idcard_array[9]) * 3;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y, 1); //判斷校驗位 
                if (M == idcard_array[17])
                    return Errors[0]; //檢視ID的校驗位 
                else
                    return Errors[3];
            } else
                return Errors[2];
            break;
        default:
            return Errors[1];
            break;
    }
}

/**  
* 驗證18位數身份證號碼中的生日是否是有效生日  
* @param idCard 18位書身份證字符串  
* @return  
*/
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 這里用getFullYear()獲取年份，避免千年蟲問題   
    if (temp_date.getFullYear() != parseFloat(year)
          || temp_date.getMonth() != parseFloat(month) - 1
          || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
/**  
* 驗證15位數身份證號碼中的生日是否是有效生日  
* @param idCard15 15位書身份證字符串  
* @return  
*/
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 對于老身份證中的你年齡則不需考慮千年蟲問題而使用getYear()方法   
    if (temp_date.getYear() != parseFloat(year)
              || temp_date.getMonth() != parseFloat(month) - 1
              || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
//去掉字符串頭尾空格   
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}