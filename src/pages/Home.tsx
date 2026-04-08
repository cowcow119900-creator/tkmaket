import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Smartphone, CreditCard, Ticket, ShieldCheck, Zap, Clock, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, SERVICES, STEPS, FAQS } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_BG}
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-secondary text-primary-dark font-bold px-4 py-1 rounded-full text-xs mb-6 uppercase tracking-widest">
                Trusted Digital Platform
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
                3분 이내 빠른 송금,<br />
                <span className="text-secondary">안전하고 투명한</span> 티켓거래소
              </h1>
              <p className="text-xl text-blue-50/80 mb-10 leading-relaxed font-medium">
                복잡한 서류 없이 스마트폰 하나로 3분 만에 해결하세요.<br />
                정식 등록 업체로 사기 걱정 없는 100% 안전 거래를 보장합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/50"
                >
                  지금 바로 무료 상담하기
                  <ArrowRight size={20} />
                </Link>
                <div className="flex items-center gap-4 px-4">
                  <div className="text-white text-sm">
                    <p className="font-bold">누적 이용 고객 5만 명+</p>
                    <p className="opacity-80">실시간 상담 대기 중</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="text-primary" size={32} />
              <span className="font-bold text-gray-700">100% 안전 보장</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Zap className="text-secondary" size={32} />
              <span className="font-bold text-gray-700">3분 이내 송금</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="text-primary" size={32} />
              <span className="font-bold text-gray-700">24시간 연중무휴</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="text-green-500" size={32} />
              <span className="font-bold text-gray-700">정식 등록 업체</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">간편한 이용 절차</h2>
            <p className="text-gray-600">복잡한 과정 없이 단 3단계면 충분합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
              >
                <div className="text-6xl font-black text-blue-50 absolute -top-2 -right-2">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 relative z-10">
                  {idx === 0 ? <Phone size={24} /> : idx === 1 ? <Smartphone size={24} /> : <Zap size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight text-gray-900">
                다양한 결제 수단을<br />
                <span className="text-primary">즉시 현금으로</span> 전환
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-xl">
                티켓거래소는 국내 모든 통신사와 다양한 상품권 매입 서비스를 제공합니다. 
                투명한 수수료와 업계 최고가 매입을 약속드립니다.
              </p>
              
              <div className="grid gap-4">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="group flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    <div className="w-14 h-14 bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-primary rounded-xl flex items-center justify-center shrink-0 transition-colors">
                      {service.icon === 'Smartphone' ? <Smartphone size={28} /> : service.icon === 'CreditCard' ? <CreditCard size={28} /> : <Ticket size={28} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-gray-900">{service.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
              <div className="relative aspect-square max-w-xl mx-auto flex items-center justify-center">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute inset-0 border border-gray-100 rounded-[40px] rotate-3" />
                <div className="absolute inset-0 border border-primary/10 rounded-[40px] -rotate-3" />
                
                {/* Main Stats Card */}
                <div className="relative z-10 bg-white p-10 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-md">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 animate-pulse" />
                      <div className="w-24 h-24 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center relative z-10">
                        <Zap size={48} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Live Performance</span>
                      </div>
                      <p className="text-gray-500 font-medium">평균 입금 완료 시간</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-6xl font-black text-gray-900 tracking-tighter">2</span>
                        <span className="text-2xl font-bold text-gray-400 mr-2">분</span>
                        <span className="text-6xl font-black text-primary tracking-tighter">45</span>
                        <span className="text-2xl font-bold text-gray-400">초</span>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-50 w-full grid grid-cols-2 gap-4">
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">오늘 처리 건수</p>
                        <p className="text-lg font-bold text-gray-900">1,284건+</p>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">고객 만족도</p>
                        <p className="text-lg font-bold text-gray-900">99.9%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-cards */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 z-20 hidden sm:block animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 text-primary rounded-lg flex items-center justify-center">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-xs font-bold text-gray-700">보안 1등급</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <ShieldCheck size={400} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">왜 티켓거래소인가요?</h2>
            <p className="text-blue-100">사기 걱정 없는 정식 등록 업체, 투명한 수수료로 신뢰를 드립니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-secondary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">100% 안전 보장</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                개인정보 유출 및 사기 피해 걱정 없이 안전하게 이용하실 수 있는 정식 사업자 등록 업체입니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-secondary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">초고속 즉시 입금</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                결제 완료 확인 즉시 3분 이내에 고객님의 계좌로 정확하게 송금해 드립니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-secondary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">365일 24시간 상담</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                주말, 공휴일 상관없이 24시간 전문 상담원이 대기하며 친절하게 안내해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50" id="contact-info">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">지금 바로 상담하세요</h2>
            <p className="text-gray-600 mb-12 text-lg">
              365일 24시간 전문 상담원이 대기하고 있습니다. <br className="hidden md:block" />
              전화 또는 카카오톡으로 문의하시면 1분 이내에 답변해 드립니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a
                href="tel:1600-0000"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">대표 전화 상담</p>
                  <p className="text-2xl font-black text-primary">1600-0000</p>
                </div>
              </a>
              
              <button
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-all group"
                onClick={() => alert('카카오톡 상담으로 연결됩니다.')}
              >
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">카카오톡 1:1 상담</p>
                  <p className="text-2xl font-black text-green-600">ticket_exchange</p>
                </div>
              </button>
            </div>
            
            <p className="mt-12 text-sm text-gray-400">
              * 모든 상담 내용은 비밀이 보장되며 안전하게 관리됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-gray-600">궁금하신 점을 확인해 보세요.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-2xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-lg list-none">
                  {faq.question}
                  <span className="text-primary transition-transform group-open:rotate-180">
                    <ArrowRight size={20} className="rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
