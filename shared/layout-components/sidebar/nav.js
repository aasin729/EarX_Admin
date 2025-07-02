import { AiOutlineFileDone } from 'react-icons/ai';

const path = `/assets/img/svgicons/sidebar`;

export const MENUITEMS = [
  {
    Items: [
      {
        type: 'link',
        path: '/dashboard',
        selected: false,
        active: false,
        title: 'Dashboard',
        // icon: <img src={`${path}/home-inactive.svg`} />,
        // activeIcon: <img src={`${path}/home-active.svg`} />,
      },
      {
        type: 'link',
        path: '/admin',
        selected: false,
        active: false,
        title: 'Admin',
        // icon: <img src={`${path}/order-inactive.svg`} />,
        // activeIcon: <img src={`${path}/order-active.svg`} />,
      },
      {
        type: 'link',
        path: '/users',
        selected: false,
        active: false,
        title: 'Users',
        // icon: <img src={`${path}/washing-inactive.svg`} />,
        // activeIcon: <img src={`${path}/washing-active.svg`} />,
      },
      {
        type: 'link',
        path: '/device',
        selected: false,
        active: false,
        title: 'Device',
        // icon: <img src={`${path}/calc-inactive.svg`} />,
        // activeIcon: <img src={`${path}/calc-active.svg`} />,
      },
      {
        type: 'link',
        path: '/run-histories',
        selected: false,
        active: false,
        title: 'Run Histories',
        // icon: <img src={`${path}/announce-inactive.svg`} />,
        // activeIcon: <img src={`${path}/announce-active.svg`} />,
      },
      {
        type: 'link',
        path: '/terms',
        selected: false,
        active: false,
        title: 'Terms',
        // icon: <AiOutlineFileDone className="fs-5 text-gray" />,
        // activeIcon: <AiOutlineFileDone className="fs-5 text-primary" />,
      },
    ],
  },
];
