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
    title: '휴대폰 소액결제',
    description: '통신사 한도 내에서 모바일 상품권을 구매하여 즉시 현금화하는 서비스입니다.',
    icon: 'Smartphone',
  },
  {
    title: '정보이용료(콘텐츠이용료)',
    description: '구글 플레이스토어, 원스토어 등에서 콘텐츠를 결제하여 현금화하는 서비스입니다.',
    icon: 'CreditCard',
  },
  {
    title: '모바일 상품권 매입',
    description: '컬쳐랜드, 해피머니 등 각종 모바일 상품권을 업계 최고가로 매입합니다.',
    icon: 'Ticket',
  },
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: '상담 신청',
    description: '카카오톡이나 전화를 통해 24시간 언제든 상담을 신청하세요.',
  },
  {
    number: '02',
    title: '본인 확인 및 한도 조회',
    description: '간단한 본인 확인 후 이용 가능한 한도를 즉시 확인해 드립니다.',
  },
  {
    number: '03',
    title: '결제 및 입금 완료',
    description: '결제 완료 후 3분 이내에 고객님의 계좌로 즉시 송금됩니다.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '이용 시간은 어떻게 되나요?',
    answer: '티켓거래소는 365일 24시간 연중무휴로 운영됩니다. 언제든 상담 및 신청이 가능합니다.',
  },
  {
    question: '입금까지 얼마나 걸리나요?',
    answer: '상담부터 입금까지 평균 3분~5분 이내에 모든 절차가 완료됩니다.',
  },
  {
    question: '수수료는 어느 정도인가요?',
    answer: '업계 최저 수준의 수수료를 지향하며, 상담 시 투명하게 안내해 드립니다. 숨겨진 추가 비용은 없습니다.',
  },
  {
    question: '미납이나 연체가 있어도 이용 가능한가요?',
    answer: '통신사 정책에 따라 다를 수 있으므로, 정확한 확인을 위해 상담원에게 문의해 주시기 바랍니다.',
  },
];

export const IMAGES = {
  HERO_BG: 'https://loremflickr.com/1600/900/finance,speed',
  SERVICE_ICON_1: 'https://loremflickr.com/1600/900/smartphone,payment',
  SERVICE_ICON_2: 'https://loremflickr.com/1600/900/ticket,voucher',
  TRUST_BADGE: 'https://loremflickr.com/1600/900/shield,security',
};
