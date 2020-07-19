console.log("Ian123");

// 渲染區域
// 變數Vue1=new Vue(); 新增一個Vue物件
// el 指定元素 "選取器"
// data 資料
// { 物件名稱: 物件值 }
var vue1 = new Vue({
    el: "#vue1",
    data: {
        text: "哈囉，我是 Vue !!!",
        a: 999,
        b: 3
        // 數字加字串會串接:9993；數字加數字則加在一起:1002
    }
});



var vue2 = new Vue({
    el: "#vue2",
    data: {
        aligment: "center",
        yahoo: "https://tw.yahoo.com/"
    }
});

var vue3 = new Vue({
    el: "#vue3",
    data: {
        // 布林值
        test: true,
        activity: true
    }
});

var vue4 = new Vue({
    el: "#vue4",
    data:{
        products:[
            {name:"奶茶", price:45},
            {name:"紅茶", price:45},
            {name:"綠茶", price:45},
            {name:"麥茶", price:45}
        ]
    }
});
var vue5= new Vue({
    el:"#vue5",
    data:{
        text:"",
        count:0,
        msg:""
    },
    methods:{
        show:function(){
            this.text = "點到囉!!"
        },
        add:function(){
            this.count++;
        },
        sub:function(){
            this.count--;
        },
        change: function(){
            this.msg="點我!!"
        }
    }
});

var vue6= new Vue({
    el:"#vue6",
    data:{
        name:""
    }
});