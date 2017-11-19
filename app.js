const express = require('express');

const port = process.env.PORT || 3000;

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')
app.listen(port)

console.log('server success ' + port);

app.get('/', (req, res) => {
	res.render('index', {
		title: '电影 首页'
	})
})

app.get('/movie/:id', (req, res) => {
	res.render('detail', {
		title: '电影 详情页'
	})
})

app.get('/admin/list', (req, res) => {
	res.render('list', {
		title: '电影 列表页'
	})
})

app.get('/admin/movie', (req, res) => {
	res.render('admin', {
		title: '后台录入页'
	})
})