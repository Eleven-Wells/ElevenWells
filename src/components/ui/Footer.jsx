export default function Footer() {
    const footerLinks = {
        'About us': [
            'Our mission',
            'Our vision',
            'Press',
            'Payment info'
        ],
        'Partnerships': [
            'Partners',
            'Vendors'
        ],
        'Terms': [
            'Our Terms',
            'Our Policies'
        ],
        'Social links': [
            'Twitter',
            'LinkedIn',
            'Facebook',
            'Instagram'
        ],
        'Help': [
            'Help Center',
            'Community'
        ]
    };

    return (
        <footer className="bg-linear-to-br from-green-800 to-green-700 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-orange-400 mb-4">LUMEBLOG.</h2>
                        <p className="text-green-100 text-sm leading-relaxed">
                            Fuel your curiosity. Stay inspired, stay connected.
                        </p>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="text-orange-400 font-semibold mb-4 text-sm">About us</h3>
                        <ul className="space-y-2">
                            {footerLinks['About us'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Partnerships */}
                    <div>
                        <h3 className="text-orange-400 font-semibold mb-4 text-sm">Partnerships</h3>
                        <ul className="space-y-2">
                            {footerLinks['Partnerships'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Terms */}
                    <div>
                        <h3 className="text-orange-400 font-semibold mb-4 text-sm">Terms</h3>
                        <ul className="space-y-2">
                            {footerLinks['Terms'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links & Help */}
                    <div>
                        <h3 className="text-orange-400 font-semibold mb-4 text-sm">Social links</h3>
                        <ul className="space-y-2 mb-6">
                            {footerLinks['Social links'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-orange-400 font-semibold mb-4 text-sm">Help</h3>
                        <ul className="space-y-2">
                            {footerLinks['Help'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}