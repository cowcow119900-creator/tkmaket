import { NavItem, ServiceItem, StepItem, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { title: '홈', path: '/' },
  { title: '상세 정보', path: '/details' },
  { title: '기능/서비스', path: '/services' },
  { title: '소개/안내', path: '/about' },
  { title: '문의/지원', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: '휴대폰 소액결제 상담',
    description: '통신사 정책 및 한도를 분석하여 고객님께 가장 유리한 활용 방안을 제안해 드립니다.',
    icon: 'Smartphone',
  },
  {
    title: '콘텐츠이용료 최적화',
    description: '구글 플레이, 원스토어 등 다양한 플랫폼의 이용료 활용법을 비교 분석해 드립니다.',
    icon: 'CreditCard',
  },
  {
    title: '상품권 가치 비교 매입',
    description: '컬쳐랜드, 해피머니 등 각종 모바일 상품권의 실시간 시세를 비교하여 안내합니다.',
    icon: 'Ticket',
  },
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: '전문가 맞춤 상담',
    description: '24시간 대기 중인 전문 상담원과 1:1 상담을 통해 최적의 방안을 찾습니다.',
  },
  {
    number: '02',
    title: '혜택 비교 및 분석',
    description: '고객님의 상황에 맞는 다양한 서비스의 수수료와 혜택을 상세히 비교해 드립니다.',
  },
  {
    number: '03',
    title: '안전한 서비스 이행',
    description: '결정하신 방안에 따라 투명하고 신속하게 서비스를 완료해 드립니다.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '상담 시 어떤 내용을 안내받나요?',
    answer: '현재 이용 가능한 한도, 통신사별 정책, 서비스별 수수료 비교 등 가장 효율적인 자산 활용 방안을 안내해 드립니다.',
  },
  {
    question: '비교 분석 서비스는 무료인가요?',
    answer: '네, 티켓거래소의 모든 상담 및 비교 분석 서비스는 24시간 무료로 제공됩니다.',
  },
  {
    question: '가장 유리한 방법을 어떻게 알 수 있나요?',
    answer: '상담원에게 문의하시면 실시간 시세와 정책을 바탕으로 고객님께 가장 높은 가치를 드릴 수 있는 방법을 추천해 드립니다.',
  },
  {
    question: '안전한 거래를 위한 팁이 있나요?',
    answer: '정식 사업자 등록 여부를 확인하고, 지나치게 높은 혜택을 제시하는 곳은 주의해야 합니다. 티켓거래소는 투명한 가이드를 제공합니다.',
  },
];

export const IMAGES = {
  HERO_BG: 'https://loremflickr.com/1600/900/consultation,business,friendly',
  SERVICE_ICON_1: 'https://loremflickr.com/1600/900/smartphone,payment',
  SERVICE_ICON_2: 'https://loremflickr.com/1600/900/ticket,voucher',
  TRUST_BADGE: 'https://loremflickr.com/1600/900/customer-service,support,consultant',
};
