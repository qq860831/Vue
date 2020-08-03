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

// 定義元件
// ("元件名稱"，{樣板:"元件內容"})
Vue.component("test-a",{
    template:"<h2>測試元件123</h2>"
})

var vue7 = new Vue({
    el:"#vue7"
})

// `` 多行 html
// '' "" 單行html
// 必須使用一個父元素包覆 
Vue.component("vue-content",{
    template:   `<div>    
                <h3>標題三</h3>
                <p>段落文字</p>
                <hr>
                </div>`
})

var vue8  = new Vue({
    el:"#vue8"
})

// 元素應用: 分頁重複內容、導覽列、頁尾
Vue.component("navbar",{
    template:
    `<nav>
        <a href="./about.html">關於我</a>
        <a href="#">作品集</a>
        <a href="./index.html">LOGO</a>
        <a href="#">產品資訊</a>
        <a href="#">聯絡我們</a>
    </nav>`
})

var navbar = new Vue({
    el:"#navbar"
})