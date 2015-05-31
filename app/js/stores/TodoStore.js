
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
var EventEmitter = require('events').EventEmitter;

//========================================================================
//
// Private vars

// 假資料
// item: {name: '', uid: null, created: null}

//========================================================================
//
// Public API

var Store = {};

// 建立 Store class，並且繼承 EventEMitter 以擁有廣播功能
Object.assign( Store, EventEmitter.prototype, {

	// Public API
	// 供外界取得 store 內部資料
    getAll: function(){
        return {
          // return data 給 component 使用
        }
    },

    //
    noop: function(){}
});




//========================================================================
//
// event handlers

// 向 Dispatcher 註冊自已，才能偵聽到系統發出的事件
// 並且取回 dispatchToken 供日後 async 操作用
Store.dispatchToken = AppDispatcher.register( function eventHandlers(evt){

    // evt.action 就是 view 當時廣播出來的整包物件
    // 它內含 actionType
    var action = evt.action;

    switch (action.actionType) {

        case AppConstants.OBJECT_SERVER_RESULT:

          // 廣播更新
          Store.emit( AppConstants.CHANGE_EVENT );

          break;



        default:
            //
    }

})

//========================================================================
//
// private


// 為了 RWD 偷放的 screenSize 判斷
window.addEventListener('resize', handleResize );
handleResize();
var idResize;
var screenSize;

function handleResize(){

    clearTimeout( idResize );

    idResize = setTimeout(function(){

        var body = document.body;
        var size;

        if(body.scrollWidth > 1024){
            size = 'desktop';
        }else if(body.scrollWidth > 480){
            size = 'tablet';
        }else{
            size = 'phone';
        }

        console.log( 'resize: ', body.scrollWidth, body.scrollHeight, ' >size: ', size );

        screenSize = size;

    }.bind(this), 0)

}


//
module.exports = Store;
