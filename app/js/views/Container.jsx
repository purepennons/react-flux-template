
var TodoStore = require('../stores/TodoStore');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');

//
var comp = React.createClass({

	// 重要：root view 建立後第一件事，就是偵聽 store 的 change 事件
	componentWillMount: function() {
	    TodoStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
	},

  //
  render: function() {

  	var o = this.state;

    return (
			<div>
				Hello World
			</div>
    );

  },

  // 這是 component API, 在 mount 前會跑一次，取值做為 this.state 的預設值
  getInitialState: function() {
      return this.getTruth();
  },

   // controller-view 偵聽到 model change 後
   // 執行這支，它操作另一支 private method 去跟 model 取最新值
   // 然後操作 component life cycle 的 setState() 將新值灌入元件體系
   // 就會觸發一連串 child components 跟著重繪
  _onChange: function(){
      // 重要：從 root view 觸發所有 sub-view 重繪
      this.setState( this.getTruth() );
  },


  // 為何要獨立寫一支？因為會有兩個地方會用到，因此抽出來
	// 目地：向各個 store 取回資料，然後統一 setState() 再一層層往下傳遞
  getTruth: function() {
      // 是從 TodoStore 取資料(as the single source of truth)
      return TodoStore.getAll();
  },

  //
  noop: function(){}

});

module.exports = comp;
