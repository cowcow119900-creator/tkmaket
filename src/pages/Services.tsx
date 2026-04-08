import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, CreditCard, Ticket, Zap, CheckCircle2 } from 'lucide-react';

interface Transaction {
  id: number;
  name: string;
  type: string;
  amount: string;
  time: string;
}

const NAMES = ['김*훈', '이*서', '박*준', '최*아', '정*우', '강*윤', '조*현', '윤*지', '장*호', '임*은'];
const TYPES = ['소액결제', '정보이용료', '상품권 매입'];
const AMOUNTS = ['5만원', '10만원', '15만원', '20만원', '30만원', '50만원'];

export default function Services() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Initial data
    const initialData = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() - i * 10000,
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      type: TYPES[Math.floor(Math.random() * TYPES.length)],
      amount: AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)],
      time: '방금 전',
    }));
    setTransactions(initialData);

    // Update interval
    const interval = setInterval(() => {
      const newTransaction = {
        id: Date.now(),
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        type: TYPES[Math.floor(Math.random() * TYPES.length)],
        amount: AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)],
        time: '방금 전',
      };

      setTransactions((prev) => [newTransaction, ...prev.slice(0, 3)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const serviceList = [
    {
      title: '소액결제 활용 상담',
      price: '80~90%',
      items: ['SKT, KT, LG 정책 분석', '최적의 활용 방안 제안', '실시간 한도 가이드'],
      icon: <Smartphone size={32} />,
    },
    {
      title: '콘텐츠이용료 최적화',
      price: '60~70%',
      items: ['구글/원스토어 비교', '플랫폼별 혜택 분석', '맞춤형 이용 설계'],
      icon: <CreditCard size={32} />,
    },
    {
      title: '상품권 가치 비교',
      price: '85~92%',
      items: ['실시간 시세 모니터링', '업계 최고가 비교 안내', '다양한 상품권 취급'],
      icon: <Ticket size={32} />,
    },
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">서비스 비교 및 맞춤 상담</h1>
          <p className="text-gray-600 text-lg">실시간 시세 비교와 전문가 분석을 통해 가장 유리한 선택을 도와드립니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-8 bg-blue-50 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center shadow-sm mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-3xl font-black text-primary">
                  최대 <span className="text-secondary">{service.price}</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 size={18} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  상담 신청하기
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">스마트 가이드 프로세스</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">전문가 맞춤 상담</h4>
                    <p className="text-gray-400 text-sm">24시간 전문 상담원이 1:1로 상세히 안내합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">혜택 비교 및 분석</h4>
                    <p className="text-gray-400 text-sm">고객님께 가장 유리한 방안을 비교 분석해 드립니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">안전한 서비스 이행</h4>
                    <p className="text-gray-400 text-sm">결정하신 방안에 따라 신속하고 안전하게 처리됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Zap className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">실시간 매입 현황</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Live</span>
                  </div>
                </div>
                
                <div className="flex-grow relative overflow-hidden h-[280px]">
                  <div className="relative">
                    <AnimatePresence initial={false} mode="popLayout">
                      {transactions.map((tx, idx) => (
                        <motion.div
                          key={tx.id}
                          layout
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1 - idx * 0.25, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ 
                            opacity: { duration: 0.3 },
                            layout: { duration: 0.4, ease: "easeInOut" },
                            y: { duration: 0.4 }
                          }}
                          className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/10 transition-colors mb-3 h-[72px] shrink-0"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                              {tx.name[0]}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold truncate">{tx.name} 고객님</p>
                              <p className="text-[10px] text-gray-500 uppercase tracking-tighter truncate">{tx.type}</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-black text-secondary">{tx.amount}</p>
                            <p className="text-[10px] text-gray-500">완료</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  {/* Bottom fade effect for cleaner look */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10" />
                </div>
                
                <p className="mt-6 text-center text-[10px] text-gray-500 font-medium">
                  * 실제 거래 데이터를 기반으로 실시간 갱신됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
