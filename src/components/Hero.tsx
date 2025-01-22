import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section className="hero min-h-[60vh] bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover opacity-70"
                    src="https://varthana.com/student/wp-content/uploads/2023/05/B360-Student.jpg"
                    alt="Legal Consultation"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="hero-content text-center text-white relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Your Trusted Legal Partner
                    </h1>
                    <p className="text-lg mb-8 text-gray-200">
                        Connect with expert lawyers and manage appointments seamlessly. Schedule
                        consultations in just a few clicks.
                    </p>
                    <Link to={'/search'} className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;