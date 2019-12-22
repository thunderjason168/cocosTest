
var httpUtils = require("httpUtils");
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // onLoad () {},

    start () {

    },

    loginReqBtnClick: function(){
        var szCustomServiceUrl = "http://192.168.177.2:8003/api/touristLogin";
        var params = "device_id=" + "Kkwm9Xwd1WYJ" + "&device_type=2"; //+ objInfo.szSign ;//objInfo.dwUserID;

        httpUtils.getInstance().httpPost(szCustomServiceUrl, params, function (data) {
            if (data === -1) {
                cc.log('请检查网络！');
            } else {
                var jsonD = JSON.parse(data);
                cc.log('jsonD: '+jsonD);
                // if (jsonD['status'] === 1) {
                //     cc.log('发送成功');
                // } else {
                //     cc.log('发送失败' + ':' + eval("'" + jsonD['message'] + "'"));
                // }
            }
        });
        
    },
    // update (dt) {},
});
