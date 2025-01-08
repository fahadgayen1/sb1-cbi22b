import React from 'react';
import { Calendar, Clock, Coffee, ArrowRight } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Chat About Your Project</h2>
            <p className="text-xl text-gray-600">Book a free 30-minute strategy call to discuss your goals</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Free Strategy Session</h4>
                      <p className="text-gray-600">Deep dive into your business goals and target audience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">30 Minutes of Value</h4>
                      <p className="text-gray-600">Get actionable insights and a custom copy strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Casual Conversation</h4>
                      <p className="text-gray-600">No pressure, just honest discussion about your needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <a 
                  href="https://calendly.com/fahad-clivao/15min"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Call <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600">
                  Or email me directly at: <a href="mailto:fahad@clivao.com" className="text-blue-600 hover:underline">fahad@clivao.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}