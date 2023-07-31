import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main id = "main-content">{children}</main>
            <Footer />
        </>
    );
}
export default Layout;