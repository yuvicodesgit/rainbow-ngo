export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>Rainbow Dhamma Foundation</h3>
                    <p>Register No: 12345/Section-8</p>
                    <p>123 Peace Avenue, Serenity City, 400001</p>
                </div>
                <div className="footer-col">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Legal</h3>
                    <ul className="footer-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2026 Rainbow Dhamma Foundation. All rights reserved.</p>
            </div>
        </footer>
    );
}
