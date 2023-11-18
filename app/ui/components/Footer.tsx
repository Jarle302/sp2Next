import Link from "next/link"

const Footer = () => {
    return (
        <footer>
            <ul className="temporary-footer">
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/terms">Terms and Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/support">Help/Support</Link></li>
                <li><Link href="/login">User Registration/Login</Link></li>
                <li><Link href="/sitemap">Site Map</Link></li>
                <li><Link href="/accessibility">Accessibility Statement</Link></li>
            </ul>
        </footer>
    )
}








export default Footer