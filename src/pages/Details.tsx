import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, CreditCard, Ticket, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Details() {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">스마트 자산 활용 가이드</h1>
            <p className="text-gray-600 text-lg">전문가와 함께하는 안전한 디지털 자산 활용 및 비교 분석 가이드입니다.</p>
          </div>

          <div className="space-y-16">
            {/* Section 1: 소액결제란? */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
                  <Smartphone size={24} />
                </div>
                <h2 className="text-2xl font-bold">휴대폰 소액결제 서비스</h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p className="mb-6">
                  휴대폰 소액결제는 통신사(SKT, KT, LG U+)에서 부여한 월 한도 내에서 온/오프라인 상품을 결제하고, 그 대금을 다음 달 통신 요금과 함께 납부하는 서비스입니다.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                  <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
                    <Info size={18} /> 한도 조회 방법
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• SKT: T월드 앱 접속 {'>'} 나의 요금 {'>'} 소액결제</li>
                    <li>• KT: 마이케이티 앱 접속 {'>'} 마이 {'>'} 요금/서비스 {'>'} 소액결제</li>
                    <li>• LG U+: 당신의U+ 앱 접속 {'>'} 마이페이지 {'>'} 휴대폰 결제</li>
                  </ul>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">이용 절차</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 border border-gray-100 rounded-xl text-center">
                      <p className="text-primary font-bold mb-1">STEP 01</p>
                      <p className="text-sm">전문가 맞춤 상담</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-xl text-center">
                      <p className="text-primary font-bold mb-1">STEP 02</p>
                      <p className="text-sm">혜택 비교 및 분석</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-xl text-center">
                      <p className="text-primary font-bold mb-1">STEP 03</p>
                      <p className="text-sm">안전한 서비스 완료</p>
                    </div>
                  </div>
              </div>
            </section>

            {/* Section 2: 정보이용료란? */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
                  <CreditCard size={24} />
                </div>
                <h2 className="text-2xl font-bold">정보이용료 (콘텐츠이용료)</h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p className="mb-6">
                  정보이용료는 구글 플레이스토어, 애플 앱스토어, 원스토어 등에서 유료 앱이나 게임 아이템 등을 결제할 때 사용되는 한도입니다. 소액결제 한도와는 별개로 운영됩니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    <p className="text-sm">소액결제 한도를 다 썼어도 추가 이용 가능</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    <p className="text-sm">게임 아이템, 유료 콘텐츠 등 폭넓은 활용</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 주의사항 */}
            <section className="bg-red-50 p-8 md:p-12 rounded-3xl border border-red-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                  <AlertCircle size={24} />
                </div>
                <h2 className="text-2xl font-bold text-red-900">이용 전 주의사항</h2>
              </div>
              <ul className="space-y-4 text-red-800">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <p>반드시 본인 명의의 휴대폰과 계좌를 사용하셔야 합니다. 타인 명의 도용은 법적 처벌 대상입니다.</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <p>과도한 이용은 다음 달 통신 요금 부담으로 이어질 수 있으니 계획적으로 이용하시기 바랍니다.</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <p>정식 사업자 등록 여부를 반드시 확인하여 사기 피해를 예방하세요. 바로상품권은 100% 안전을 보장합니다.</p>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
