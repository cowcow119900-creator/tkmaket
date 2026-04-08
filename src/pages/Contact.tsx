import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { FAQS } from '../constants';

export default function Contact() {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">고객 센터</h1>
            <p className="text-gray-600 text-lg">궁금하신 점이나 상담이 필요하시면 언제든 연락주세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Phone size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">대표 전화</h3>
              <p className="text-2xl font-black text-primary mb-1">1600-0000</p>
              <p className="text-gray-500 text-sm">365일 24시간 상담 가능</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MessageCircle size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">카카오톡 상담</h3>
              <p className="text-2xl font-bold text-gray-900 mb-1">ticket_exchange</p>
              <p className="text-gray-500 text-sm">실시간 1:1 채팅 상담</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">운영 시간</h3>
              <p className="text-2xl font-bold text-gray-900 mb-1">연중무휴 24시간</p>
              <p className="text-gray-500 text-sm">주말 및 공휴일 정상 운영</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">자주 질문하는 Q&A</h2>
              <p className="text-gray-600">이용 전 궁금하신 사항들을 확인해 보세요.</p>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group bg-white border border-gray-100 rounded-2xl p-6 cursor-pointer shadow-sm">
                  <summary className="flex items-center justify-between font-bold text-lg list-none">
                    {faq.question}
                    <span className="text-primary transition-transform group-open:rotate-180">
                      <ArrowRight size={20} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
