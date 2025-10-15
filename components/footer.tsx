import { LinkIcon, Github, Twitter, Diamond as Discord, Youtube, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const footerSections = [
    {
      title: "Learn",
      links: [
        { name: "Blockchain Basics", href: "/blockchain" },
        { name: "Bitcoin", href: "/bitcoin" },
        { name: "Ethereum", href: "/ethereum" },
        { name: "Cryptography", href: "/cryptography" },
        { name: "Web3 Integration", href: "/web3" },
      ],
    },
    {
      title: "Platform",
      links: [
        { name: "Courses", href: "/courses" },
        { name: "Learning Paths", href: "/learning-paths" },
        { name: "Community", href: "/community" },
        { name: "Resources", href: "/resources" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Guides", href: "/guides" },
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 to-purple-950 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <LinkIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BlockWiser
                </div>
                <div className="text-xs text-gray-400 -mt-1">Learn • Build • Deploy</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of blockchain developers with comprehensive education and hands-on
              experience.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/blockwiser" },
                { icon: Twitter, href: "https://twitter.com/blockwiser" },
                { icon: Discord, href: "https://discord.gg/blockwiser" },
                { icon: Youtube, href: "https://youtube.com/blockwiser" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-purple-500/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>hello@blockwiser.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-5 h-5 text-pink-400" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 BlockWiser. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
