let express = require('express')
let app = express()
let exphbs = require('express-handlebars')
let path = require('path')
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  })
)
app.set('view engine', '.hbs')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/admin/', require('./routes/admin/index'));
app.use('/admin/products', require('./routes/admin/products'));
app.use('/admin/marcas', require('./routes/admin/marcas'));
app.use('/admin/pedidos', require('./routes/admin/pedidos'));
app.use('/admin/categorias', require('./routes/admin/categorias'));
app.use('/admin/inventario', require('./routes/admin/inventario'));
app.use('/admin/empleadosyproovedores', require('./routes/admin/empleadosyproovedores'));


app.listen(3000, () => {
  console.log("sever start in localhost:3000")
})