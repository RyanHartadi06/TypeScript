"use strict";
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MARCH"] = 2] = "MARCH";
    Month[Month["APRIL"] = 3] = "APRIL";
})(Month || (Month = {}));
console.log(Month.JAN);
