var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/**
 * 這是一個 singleton 物件
 */
var AppActionCreators = {

    /**
     * app 啟動後，從 server 取回一包初始資料
     * 這支目前沒用到
     */
    load: function(){
      // AppDispatcher.handleServerAction({
      //     actionType: AppConstants.TODO_READ,
      //     items: [] // 送一包假資料進去
      // });
    },

    // dummy
    noop: function(){}
};

module.exports = AppActionCreators;
