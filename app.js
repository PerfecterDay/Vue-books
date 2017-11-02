// new Vue({
//     el:'#app',
//     data: {
//         message:'hello vue.js.'
//     }
// });

var app = new Vue({
    el: '#app',
    data: {
        sortparam: '',
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: [{
            id: 1,
            author: '曹雪芹',
            name: '红楼梦',
            price: 32.0
        }, {
            id: 2,
            author: '施耐庵',
            name: '水浒传',
            price: 30.0
        }, {
            id: '3',
            author: '罗贯中',
            name: '三国演义',
            price: 24.0
        }, {
            id: 4,
            author: '吴承恩',
            name: '西游记',
            price: 20.0
        }]
    },
    methods: {
        addBook: function() {
            //计算书的id
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            //将input中的数据重置
            this.book = new Object;
            this.book.author = '';
            this.book.name = '';
            this.book.price = '';
            // this.book='';
        },
        delBook: function(book) {
            this.books.splice(book.id - 1, 1);
        },
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
            // this.books.sort();
        }
    },
    computed: {
        sum: function() {
            var result = 0;
            for (var i = 0; i < this.books.length; i++) {
                result = Number(this.books[i].price) + result;
            };
            return result;
        }
    }
});