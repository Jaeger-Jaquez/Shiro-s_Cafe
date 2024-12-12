import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Visit Us</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              27 Snuff Mill Street
              <br />
              Belgharia, Kolkata 700056
            </p>
          </div>

          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">(+91) 8017879597</p>
          </div>

          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">
              Mon-Sat: 10:00 AM - 10:00 PM
              <br />
              Sun: 12:00 PM - 9:00 PM
            </p>
          </div>

          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">biprendupoddar@gmail.com</p>
          </div>
        </div>

        <div className="mt-16">
          {/* <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2891728925904!2d-122.3483772!3d47.6205553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM3JzE0LjAiTiAxMjLCsDIwJzU0LjIiVw!5e0!3m2!1sen!2sus!4v1625097453216!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.8626951021192!2d88.38294556093754!3d22.65757240133181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dca97605a21%3A0x35ebda19abf0083a!2sKESTO%20CABIN!5e0!3m2!1sen!2sin!4v1734029077022!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
