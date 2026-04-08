import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Smartphone, CreditCard, Ticket, ShieldCheck, Zap, Clock, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { IMAGES, SERVICES, STEPS, FAQS } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden bg-[#0a192f]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [0, -40, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[150px]" 
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-secondary font-bold px-4 py-1 rounded-full text-xs mb-6 uppercase tracking-widest shadow-xl">
                  Trusted Digital Platform
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-2xl">
                  최적의 혜택비교,<br />
                  전문가와 함께하는<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-300">티켓거래소</span>
                </h1>
                <p className="text-xl text-blue-100/70 mb-12 leading-relaxed font-medium max-w-xl">
                  복잡한 정책 비교부터 안전한 활용 방안까지 전문가가 안내합니다.<br />
                  정식 등록 업체로서 투명한 수수료와 1:1 맞춤형 가이드로 압도적인 깊이의 신뢰를 드립니다.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <button
                    onClick={() => (window as any).fcWidget?.open()}
                    className="relative group overflow-hidden bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all shadow-[0_20px_50px_rgba(30,58,138,0.5)] hover:shadow-[0_25px_60px_rgba(30,58,138,0.7)] hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                    지금 바로 상담하기
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="text-white text-sm">
                      <p className="font-bold text-lg">누적 이용 고객 5만 명+</p>
                      <p className="opacity-60">실시간 상담 전문가 대기 중</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotateY: 45, z: -100 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 0, 
                z: 0,
                y: [0, -20, 0] 
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="hidden lg:flex lg:w-2/5 justify-center items-center perspective-2000"
            >
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-blue-500 blur-[150px] opacity-30 animate-pulse group-hover:opacity-60 transition-opacity" />
                <motion.div 
                  whileHover={{ rotateY: 20, rotateX: -10, scale: 1.05 }}
                  className="relative transform-gpu transition-transform duration-700 ease-out"
                >
                  <Logo 
                    showText={false} 
                    light 
                    className="w-[420px] h-[420px] drop-shadow-[0_50px_50px_rgba(0,0,0,0.6)] filter brightness-110 contrast-110" 
                  />
                  {/* Decorative 3D Ring */}
                  <div className="absolute inset-0 border-[10px] border-white/5 rounded-full scale-110 -z-10 blur-sm" />
                  <div className="absolute inset-0 border-[2px] border-white/10 rounded-full scale-125 -z-10 blur-[2px]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Floating Style */}
      <section className="relative z-20 -mt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                <ShieldCheck size={28} />
              </div>
              <span className="font-bold text-gray-800">전문가 맞춤 가이드</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-secondary shadow-inner">
                <Zap size={28} />
              </div>
              <span className="font-bold text-gray-800">실시간 혜택 비교</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                <Clock size={28} />
              </div>
              <span className="font-bold text-gray-800">24시간 무료 상담</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 shadow-inner">
                <CheckCircle2 size={28} />
              </div>
              <span className="font-bold text-gray-800">정식 등록 업체</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group"
              >
                <div className="text-8xl font-black text-blue-50/50 absolute -top-4 -right-4 transition-transform group-hover:scale-110">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-inner">
                  {idx === 0 ? <Phone size={32} /> : idx === 1 ? <Smartphone size={32} /> : <Zap size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10 text-lg">{step.description}</p>
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
                디지털 자산 활용,<br />
                <span className="text-primary">전문가와 비교</span>하세요
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-xl">
                티켓거래소는 고객님의 소중한 자산을 가장 가치 있게 활용할 수 있도록 
                실시간 시세 비교와 정책 분석 서비스를 제공합니다.
              </p>
              
              <div className="grid gap-6">
                {SERVICES.map((service, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 10 }}
                    className="group flex gap-6 p-8 bg-white rounded-[24px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-primary rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-inner">
                      {service.icon === 'Smartphone' ? <Smartphone size={32} /> : service.icon === 'CreditCard' ? <CreditCard size={32} /> : <Ticket size={32} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2 text-gray-900">{service.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
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
                      <p className="text-gray-500 font-medium">평균 상담 및 비교 완료 시간</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">전문가에게 직접 물어보세요</h2>
            <p className="text-gray-600 mb-12 text-lg">
              어떤 서비스가 나에게 가장 유리할지 고민되시나요? <br className="hidden md:block" />
              24시간 대기 중인 전문가가 실시간으로 비교 분석해 드립니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a
                href="tel:010-5029-1777"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">대표 전화 상담</p>
                  <p className="text-2xl font-black text-primary">010-5029-1777</p>
                </div>
              </a>
              
              <button
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all group"
                onClick={() => (window as any).fcWidget?.open()}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">실시간 채팅 상담</p>
                  <p className="text-2xl font-black text-primary">지금 바로 상담하기</p>
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
