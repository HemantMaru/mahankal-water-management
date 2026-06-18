import React from "react";
import { Droplets, Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA Section */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Droplets size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Mahankal RO + UV</h3>

                <p className="text-sm text-slate-400">Chilled Water</p>
              </div>
            </div>

            <p className="text-slate-400 leading-7">
              Premium RO drinking water delivery service for homes, offices,
              weddings and commercial customers.
            </p>

            <div className="flex gap-3 mt-8">
              {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, index) => (
                <div
                  key={index}
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>

            <ul className="space-y-4 text-slate-400">
              <li>Home Water Delivery</li>
              <li>Office Water Supply</li>
              <li>Wedding Water Supply</li>
              <li>Bulk Water Orders</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>

            <ul className="space-y-4 text-slate-400">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone size={18} className="text-blue-500 mt-1" />

                <span className="text-slate-400">+91 7987550928</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-blue-500 mt-1" />

                <span className="text-slate-400">info@mahankalwater.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />

                <span className="text-slate-400">Indore, Madhya Pradesh</span>
              </div>

              <div className="flex gap-3">
                <Clock3 size={18} className="text-blue-500 mt-1" />

                <span className="text-slate-400">Open Daily: 6 AM - 10 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Mahankal RO + UV Chilled Water. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
