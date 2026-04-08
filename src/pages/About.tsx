import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../constants';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            금융 가이드의 새로운 기준, 바로상품권
          </motion.h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            바로상품권은 디지털 자산의 효율적인 활용을 고민하는 고객님들께 최적의 비교 분석과 가이드를 제공합니다.<br />
            정식 사업자 등록 업체로서 투명한 절차와 정직한 상담을 약속드립니다.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="relative rounded-3xl overflow-hidden h-80 bg-blue-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(59,130,246,0.1)_20px,rgba(59,130,246,0.1)_40px)]" />
            </div>
            <ShieldCheck size={120} className="text-primary/20 relative z-10" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">고객 중심의 가치 실현</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">100% 안전 거래 보장</h4>
                  <p className="text-gray-600 text-sm">모든 거래는 철저한 보안 시스템 하에 안전하게 진행됩니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">정식 등록 업체</h4>
                  <p className="text-gray-600 text-sm">관련 법규를 준수하며 투명하게 운영되는 믿을 수 있는 기업입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-3xl p-12 text-white mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-2">50,000+</div>
              <div className="text-blue-100 text-sm">누적 이용 고객</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">98%</div>
              <div className="text-blue-100 text-sm">고객 만족도</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">24/7</div>
              <div className="text-blue-100 text-sm">연중무휴 운영</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">3min</div>
              <div className="text-blue-100 text-sm">평균 상담 시간</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">우리의 핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
              <Users className="text-primary mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">고객 우선</h3>
              <p className="text-gray-600 text-sm">고객님의 상황을 깊이 이해하고<br />최적의 해결책을 제시합니다.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
              <HeartHandshake className="text-primary mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">정직과 신뢰</h3>
              <p className="text-gray-600 text-sm">수수료와 절차를 투명하게 공개하여 신뢰를 쌓아갑니다.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="text-primary mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">안전 최우선</h3>
              <p className="text-gray-600 text-sm">어떠한 경우에도 고객님의 개인정보와 자산을 보호합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
