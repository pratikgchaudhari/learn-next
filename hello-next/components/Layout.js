import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    margin: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout;