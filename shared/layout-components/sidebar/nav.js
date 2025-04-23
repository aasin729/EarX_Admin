import { basePath } from '@/next.config';
import { AiOutlineFileDone } from 'react-icons/ai';

const path = `${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/img/svgicons/sidebar`;

export const MENUITEMS = [
  {
    Items: [
      {
        type: 'link',
        path: '/dashboard',
        selected: false,
        active: false,
        title: '대시보드',
        icon: <img src={`${path}/home-inactive.svg`} />,
        activeIcon: <img src={`${path}/home-active.svg`} />,
      },
      {
        type: 'link',
        path: '/order-management',
        selected: false,
        active: false,
        title: '주문 관리',
        icon: <img src={`${path}/order-inactive.svg`} />,
        activeIcon: <img src={`${path}/order-active.svg`} />,
      },
      {
        type: 'link',
        path: '/washing-management',
        selected: false,
        active: false,
        title: '세탁 관리',
        icon: <img src={`${path}/washing-inactive.svg`} />,
        activeIcon: <img src={`${path}/washing-active.svg`} />,
      },
      {
        type: 'link',
        path: '/calc-management',
        selected: false,
        active: false,
        title: '정산 관리',
        icon: <img src={`${path}/calc-inactive.svg`} />,
        activeIcon: <img src={`${path}/calc-active.svg`} />,
      },
      {
        type: 'link',
        path: '/announcement',
        selected: false,
        active: false,
        title: '공지사항',
        icon: <img src={`${path}/announce-inactive.svg`} />,
        activeIcon: <img src={`${path}/announce-active.svg`} />,
      },
      {
        type: 'link',
        path: '/report-management',
        selected: false,
        active: false,
        title: '리포트 관리',
        icon: <AiOutlineFileDone className="fs-5 text-gray" />,
        activeIcon: <AiOutlineFileDone className="fs-5 text-primary" />,
      },
    ],
  },
];
