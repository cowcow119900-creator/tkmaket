import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo light />
            <p className="text-sm leading-relaxed opacity-70">
              티켓거래소는 정식 사업자 등록 업체로서 고객님의 소중한 자산을 안전하고 신속하게 현금화해 드립니다. 365일 24시간 친절 상담을 약속드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">빠른 링크</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/details" className="hover:text-primary transition-colors">이용 안내</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">서비스 종류</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">회사 소개</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">고객 센터</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">고객 센터</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>대표번호: 010-5029-1777 (24시간)</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <button 
                  onClick={() => (window as any).fcWidget?.open()}
                  className="hover:text-primary transition-colors text-left"
                >
                  실시간 채팅 상담 (24시간)
                </button>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>충청남도 천안시 서북구 쌍용대로 121, 3030호</span>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-white font-bold mb-6">사업자 정보</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>상호명: 바로상품권</li>
              <li>대표자: 전윤수외1명</li>
              <li>사업자등록번호: 125-62-00331</li>
              <li>주소: 충청남도 천안시 서북구 쌍용대로 121, 3030호</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 바로상품권. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-300">개인정보처리방침</Link>
            <Link to="/terms" className="hover:text-gray-300">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
