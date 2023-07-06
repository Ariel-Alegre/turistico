import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import LoginAndSecurity from "../components/login-and-security/login-and-security";

export default function Security() {
    return (
        <div>
            <Header/>
            <div>
                <LoginAndSecurity/>
            </div>
            <Footer/>
        </div>
    )
}