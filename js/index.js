var bookdata=[ {
    name: "在咖啡冷掉之前 ",
    author: " 川口俊和",
    publish_house: "悅知文化",
    img: "http://pic.eslite.com/Upload/Product/201704/l/636287059877291250.jpg",
    price: 360,
    is_discount: true,
    discount: 0.79,
    date: "2017/05/01"
  },{
    name: "便利店人間",
    author: "村田沙耶香",
    publish_house: "悅知文化",
    img: "http://pic.eslite.com/Upload/Product/201707/l/636366840759527500.jpg",
    price: 330,
    is_discount: true,
    discount: 0.79,
    date: "2017/07/31"
  },{
    name: "山茶花文具店",
    author: "小川糸",
    publish_house: "圓神出版社有限公司",
    img: "http://pic.eslite.com/Upload/Product/201708/l/636371730140637500.jpg",
    price: 400,
    is_discount: true,
    discount: 0.79,
    date: "2016/06/21"
  }];
var vm=new Vue({
  el: "#app",
  data:{
    books: bookdata
  },
  
  
  
});