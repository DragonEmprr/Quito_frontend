// import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";
import AboutSection from "../about/about";
import LocationSection from "../location/location";
import ContactSection from "../contact/contact";
import ProductDisplay from "../productdisplay/productdisplay";
import CategoryBrowser from "../categorybrowser/categorybrowser";

export default function Home() {
    return (
        <div className="site-container">
            {/* <Navbar /> */}
                <Hero />
                <ProductDisplay />
                <CategoryBrowser />

                <section className="about-location-wrapper">
                  <AboutSection />
                  <LocationSection />
                </section>

                <ContactSection />
        </div>
    );
}