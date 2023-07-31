import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import ProfileShow from "../components/Profile/ProfileShow";

export default function Profile() {
    return (
        <div>
            <Header/>
            <div>
                <ProfileShow/>
            </div>
            <Footer/>
        </div>
    )
}