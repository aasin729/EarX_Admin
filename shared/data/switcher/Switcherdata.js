// Direction
export const LtrtoRtl = () => {
  document.querySelector('.app').classList.add('rtl');
  document.querySelector('html[lang=en]').setAttribute('dir', 'rtl');
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
  document.querySelector('.app').classList.remove('ltr');

  localStorage.setItem('nowartl', true);
  localStorage.removeItem('nowaltr');
};
export const RtltoLtr = () => {
  document.querySelector('.app').classList.add('ltr');
  document.querySelector('html[lang=en]').setAttribute('dir', 'ltr');
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css")
  document.querySelector('.app').classList.remove('rtl');

  localStorage.setItem('nowaltr', true);
  localStorage.removeItem('nowartl');
};
// Header
export const Lightheader = () => {
  document.querySelector('.app').classList.remove('color-header');
  document.querySelector('.app').classList.remove('gradient-header');
  document.querySelector('.app').classList.remove('dark-header');
  document.querySelector('.app').classList.add('light-header');
};
export const Colorheader = () => {
  document.querySelector('.app').classList.remove('gradient-header');
  document.querySelector('.app').classList.remove('dark-header');
  document.querySelector('.app').classList.remove('light-header');
  document.querySelector('.app').classList.add('color-header');
};
export const gradientheader = () => {
  document.querySelector('.app').classList.remove('color-header');
  document.querySelector('.app').classList.remove('dark-header');
  document.querySelector('.app').classList.remove('light-header');
  document.querySelector('.app').classList.add('gradient-header');
};
export const Darkheader = () => {
  document.querySelector('.app').classList.remove('color-header');
  document.querySelector('.app').classList.remove('gradient-header');
  document.querySelector('.app').classList.remove('light-header');
  document.querySelector('.app').classList.add('dark-header');
};
// menu
export const LightMenu = () => {
  document.querySelector('.app').classList.remove('color-menu');
  document.querySelector('.app').classList.remove('dark-menu');
  document.querySelector('.app').classList.remove('gradient-menu');
  document.querySelector('.app').classList.add('light-menu');
};
export const ColorMenu = () => {
  document.querySelector('.app').classList.remove('light-menu');
  document.querySelector('.app').classList.remove('dark-menu');
  document.querySelector('.app').classList.remove('gradient-menu');
  document.querySelector('.app').classList.add('color-menu');
};
export const DarkMenu = () => {
  document.querySelector('.app').classList.remove('light-menu');
  document.querySelector('.app').classList.remove('color-menu');
  document.querySelector('.app').classList.remove('gradient-menu');
  document.querySelector('.app').classList.add('dark-menu');
};
export const GradientMenu = () => {
  document.querySelector('.app').classList.remove('light-menu');
  document.querySelector('.app').classList.remove('color-menu');
  document.querySelector('.app').classList.remove('dark-menu');
  document.querySelector('.app').classList.add('gradient-menu');
};
//
export const FullWidth = () => {
  document.querySelector('.app').classList.remove('layout-boxed');
  document.querySelector('.app').classList.add('layout-fullwidth');
};
export const Boxed = () => {
  document.querySelector('.app').classList.remove('layout-fullwidth');
  document.querySelector('.app').classList.add('layout-boxed');
};
export const Fixed = () => {
  document.querySelector('.app').classList.remove('scrollable-layout');
  document.querySelector('.app').classList.add('fixed-layout');
};
export const Scrollable = () => {
  document.querySelector('.app').classList.remove('fixed-layout');
  document.querySelector('.app').classList.add('scrollable-layout');
};

// layout
export const VerticalMenu = () => {
  document.querySelector('.app').classList.add('sidebar-mini');
  document.querySelector('.main-header').classList.add('side-header');
  document.querySelector('.main-content').classList.add('app-content');
  document.querySelector('.main-container').classList.add('container-fluid');
  document.querySelector('.side-app').classList.remove('container');
  document.querySelector('.app').classList.remove('horizontal');

  document.querySelector('.app').classList.remove('horizontal-hover');
  document.querySelector('.app-sidebar').classList.remove('horizontal-main');
  document.querySelector('.main-header').classList.remove('hor-header');
  document.querySelector('.main-sidemenu').classList.remove('container');
  document.querySelector('.main-container').classList.remove('container');
  document
    .querySelector('.main-content')
    .classList.remove('horizontal-content');
  name();
  localStorage.setItem('nowavertical', true);
  localStorage.removeItem('nowahorizontal');
  localStorage.removeItem('nowahorizontalHover');

  // 		$('#slide-left').remove('d-none');
  // 		$('#slide-right').remove('d-none');
};
export const horizontal = () => {
  document.querySelector('.main-header')?.classList.add('hor-header');
  document.querySelector('.app').classList.remove('sidebar-mini');
  document.querySelector('.main-header').classList.remove('side-header');
  document.querySelector('.main-content').classList.remove('app-content');
  document.querySelector('.main-container').classList.remove('container-fluid');
  document.querySelector('.app').classList.remove('sidenav-toggled');
  document.querySelector('.app').classList.remove('horizontal-hover');
  document.querySelector('.app').classList.add('horizontal');
  document.querySelector('.main-container').classList.add('container');
  document.querySelector('.main-sidemenu').classList.add('container');
  document.querySelector('.main-content').classList.add('horizontal-content');
  document.querySelector('.app-sidebar').classList.add('horizontal-main');
  document.querySelector('.side-app').classList.add('container');

  // $('#slide-left').remove('d-none');
  // $('#slide-right').remove('d-none');
  document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap';

  checkHoriMenu();
  Horizontalmenudefultclose();
  switcherArrowFn();

  localStorage.removeItem('nowavertical');
  localStorage.setItem('nowahorizontal', true);
  localStorage.removeItem('nowahorizontalHover');
};
// };
export const HorizontalHoverMenu = () => {
  document.querySelector('.app').classList.add('horizontal-hover');
  document.querySelector('.app').classList.add('horizontal');
  document.querySelector('.main-content').classList.add('horizontal-content');
  document.querySelector('.main-container').classList.add('container');
  document.querySelector('.main-header').classList.add('hor-header');
  document.querySelector('.app-sidebar').classList.add('horizontal-main');
  document.querySelector('.main-sidemenu').classList.add('container');
  document.querySelector('.side-app').classList.add('container');

  document.querySelector('#slide-left').classList.remove('d-none');
  document.querySelector('#slide-right').classList.remove('d-none');
  document.querySelector('.main-content').classList.remove('app-content');
  document.querySelector('.main-container').classList.remove('container-fluid');
  document.querySelector('.app').classList.remove('sidebar-mini');
  document.querySelector('.app').classList.remove('sidenav-toggled');

  document
    .querySelector('.horizontal-hover', '.side-menu')
    ?.classList.add('flex-nowrap');
  let li = document.querySelectorAll('.side-menu', 'li');
  li.forEach((e, i) => {
    if (e.classList.contains('is-expaned')) {
      let ele = [...e.children];
      ele.forEach((el, i) => {
        el.classList.remove('active');
        if (el.classList.contains('slide-menu')) {
          el.style = '';
          el.style.display = 'none';
        }
      });
      e.classList.remove('is-expaned');
    }
  });
  checkHoriMenu();
  Horizontalmenudefultclose();
  switcherArrowFn();

  localStorage.removeItem('nowavertical');
  localStorage.setItem('nowahorizontalHover', true);
  localStorage.removeItem('nowahorizontal');
};
// Color theme
export const LightTheme = () => {
  document.querySelector('body').classList.add('light-theme');
  document.querySelector('#myonoffswitch3').checked = true;
  document.querySelector('#myonoffswitch6').checked = true;

  document.querySelector('body').classList.remove('transparent-theme');
  document.querySelector('body').classList.remove('dark-theme');
  document.querySelector('body')?.classList.remove('dark-header');
  document.querySelector('body')?.classList.remove('color-header');
  document.querySelector('body')?.classList.remove('gradient-header');
  document.querySelector('body')?.classList.remove('dark-menu');
  document.querySelector('body')?.classList.remove('color-menu');
  document.querySelector('body')?.classList.remove('gradient-menu');
  document.querySelector('body')?.classList.remove('bg-img1');
  document.querySelector('body')?.classList.remove('bg-img2');
  document.querySelector('body')?.classList.remove('bg-img3');
  document.querySelector('body')?.classList.remove('bg-img4');

  document.querySelector('html').style = '';
  name();

  localStorage.removeItem('nowadark');
  localStorage.setItem('nowalighttheme', true);
  localStorage.removeItem('nowatransparent');
  localStorage.removeItem('nowaBgImage');
  localStorage.removeItem('');
};
export const dark = () => {
  document.querySelector('body').classList.add('dark-theme');
  document.querySelector('#myonoffswitch8').checked = true;
  document.querySelector('#myonoffswitch5').checked = true;

  document.querySelector('body').classList.remove('transparent-theme');
  document.querySelector('body').classList.remove('light-theme');
  document.querySelector('body')?.classList.remove('light-header');
  document.querySelector('body')?.classList.remove('color-header');
  document.querySelector('body')?.classList.remove('gradient-header');
  document.querySelector('body')?.classList.remove('light-menu');
  document.querySelector('body')?.classList.remove('color-menu');
  document.querySelector('body')?.classList.remove('gradient-menu');

  document.querySelector('html').style = '';
  name();
  localStorage.removeItem('nowalighttheme');
  localStorage.setItem('nowadark', true);
  localStorage.removeItem('nowatransparent');
  localStorage.removeItem('nowaBgImage');
};
export const transparent = () => {
  document.querySelector('.app').classList.add('transparent-theme');

  document.querySelector('.app').classList.remove('light-theme');
  document.querySelector('.app').classList.remove('dark-theme');
  document.querySelector('.app').classList.remove('bg-img1');
  document.querySelector('.app').classList.remove('bg-img2');
  document.querySelector('.app').classList.remove('bg-img3');
  document.querySelector('.app').classList.remove('bg-img4');

  document.querySelector('.app').classList.remove('light-menu');
  document.querySelector('.app').classList.remove('color-menu');
  document.querySelector('.app').classList.remove('dark-menu');
  document.querySelector('.app').classList.remove('gradient-menu');

  document.querySelector('.app').classList.remove('color-header');
  document.querySelector('.app').classList.remove('gradient-header');
  document.querySelector('.app').classList.remove('light-header');
  document.querySelector('.app').classList.remove('dark-header');
  document.querySelector('#myonoffswitch3').checked = false;
  document.querySelector('#myonoffswitch6').checked = false;
  document.querySelector('#myonoffswitch8').checked = false;
  document.querySelector('#myonoffswitch5').checked = false;
  document.querySelector('html').style = '';
  localStorage.removeItem('nowalighttheme');
  localStorage.setItem('nowatransparent', true);
  localStorage.removeItem('nowadark');
  localStorage.removeItem('nowaBgImage');
};

/*Transparent Bg-Image Style Start*/

export function bgimage1() {
  document.querySelector('body').classList.add('bg-img1');
  document.querySelector('body').classList.remove('bg-img2');
  document.querySelector('body').classList.remove('bg-img3');
  document.querySelector('body').classList.remove('bg-img4');
  document.querySelector('body').classList.add('transparent-theme');
  localStorage.setItem('nowaBgImage', 'bg-img1');
  transparentStyle();

  document.querySelector('.app').classList.remove('light-theme');
  document.querySelector('.app').classList.remove('dark-theme');
  localStorage.removeItem('nowaPrimaryColor');
  localStorage.removeItem('nowaprimaryHoverColor');
  localStorage.removeItem('nowaprimaryBorderColor');
  localStorage.removeItem('nowaprimaryTransparent');
  localStorage.removeItem('nowadarkPrimaryColor');
  localStorage.removeItem('nowatransparentPrimaryColor');
  localStorage.removeItem('nowatransparentBgColor');

  document.querySelector('#myonoffswitch2').checked = false;
  document.querySelector('#myonoffswitch1').checked = false;
  document.querySelector('#myonoffswitchTransparent').checked = true;

  document.querySelector('html').style.removeProperty('--transparent-body');
}

export function bgimage2() {
  transparentStyle();
  document.querySelector('body').classList.add('bg-img2');
  document.querySelector('body').classList.remove('bg-img1');
  document.querySelector('body').classList.remove('bg-img3');
  document.querySelector('body').classList.remove('bg-img4');
  document.querySelector('body').classList.add('transparent-theme');
  document.querySelector('.app').classList.remove('light-theme');
  document.querySelector('.app').classList.remove('dark-theme');
  localStorage.setItem('nowaBgImage', 'bg-img2');
  document.querySelector('html').style.removeProperty('--transparent-body');

  localStorage.removeItem('nowaPrimaryColor');
  localStorage.removeItem('nowaprimaryHoverColor');
  localStorage.removeItem('nowaprimaryBorderColor');
  localStorage.removeItem('nowaprimaryTransparent');
  localStorage.removeItem('nowadarkPrimaryColor');
  localStorage.removeItem('nowatransparentPrimaryColor');
  localStorage.removeItem('nowatransparentBgColor');

  document.querySelector('#myonoffswitch2').checked = false;
  document.querySelector('#myonoffswitch1').checked = false;
  document.querySelector('#myonoffswitchTransparent').checked = true;
}

export function bgimage3() {
  document.querySelector('body').classList.add('bg-img3');
  document.querySelector('body').classList.remove('bg-img1');
  document.querySelector('body').classList.remove('bg-img2');
  document.querySelector('body').classList.remove('bg-img4');
  document.querySelector('body').classList.add('transparent-theme');
  document.querySelector('.app').classList.remove('light-theme');
  document.querySelector('.app').classList.remove('dark-theme');
  localStorage.setItem('nowaBgImage', 'bg-img3');
  document.querySelector('html').style.removeProperty('--transparent-body');
  transparentStyle();

  localStorage.removeItem('nowaPrimaryColor');
  localStorage.removeItem('nowaprimaryHoverColor');
  localStorage.removeItem('nowaprimaryBorderColor');
  localStorage.removeItem('nowaprimaryTransparent');
  localStorage.removeItem('nowadarkPrimaryColor');
  localStorage.removeItem('nowatransparentPrimaryColor');
  localStorage.removeItem('nowatransparentBgColor');

  document.querySelector('#myonoffswitch2').checked = false;
  document.querySelector('#myonoffswitch1').checked = false;
  document.querySelector('#myonoffswitchTransparent').checked = true;
}

export function bgimage4() {
  document.querySelector('body').classList.add('bg-img4');
  document.querySelector('body').classList.remove('bg-img1');
  document.querySelector('body').classList.remove('bg-img2');
  document.querySelector('body').classList.remove('bg-img3');
  document.querySelector('body').classList.add('transparent-theme');
  document.querySelector('.app').classList.remove('light-theme');
  document.querySelector('.app').classList.remove('dark-theme');
  localStorage.setItem('nowaBgImage', 'bg-img4');
  document.querySelector('html').style.removeProperty('--transparent-body');
  transparentStyle();

  localStorage.removeItem('nowaPrimaryColor');
  localStorage.removeItem('nowaprimaryHoverColor');
  localStorage.removeItem('nowaprimaryBorderColor');
  localStorage.removeItem('nowaprimaryTransparent');
  localStorage.removeItem('nowadarkPrimaryColor');
  localStorage.removeItem('nowatransparentPrimaryColor');
  localStorage.removeItem('nowatransparentBgColor');

  document.querySelector('#myonoffswitch2').checked = false;
  document.querySelector('#myonoffswitch1').checked = false;
  document.querySelector('#myonoffswitchTransparent').checked = true;
}

/*Transparent Bg-Image Style End*/

export function checkHoriMenu() {
  let menuWidth = document.querySelector('.horizontal-main');
  let menuItems = document.querySelector('.side-menu');
  let mainSidemenuWidth = document.querySelector('.main-sidemenu');
  let menuContainerWidth =
    menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
  let marginLeftValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0]),
  );
  let marginRightValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginRight.split('px')[0]),
  );
  let check =
    menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

  if (document.querySelector('.app')?.classList.contains('ltr')) {
    menuItems.style.marginRight = 0;
  } else {
    menuItems.style.marginLeft = 0;
  }

  if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
  } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector('.slide-right')?.classList.remove('d-none');
    document.querySelector('.slide-rightRTL')?.classList.remove('d-none');
  } else if (marginLeftValue !== -check || marginRightValue !== -check) {
    document.querySelector('.slide-left')?.classList.remove('d-none');
    document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
  }
  if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector('.slide-left')?.classList.remove('d-none');
    document.querySelector('.slide-right')?.classList.remove('d-none');
    document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
    document.querySelector('.slide-rightRTL')?.classList.remove('d-none');
  }
  if (marginLeftValue === 0 || marginRightValue === 0) {
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
  }
  if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector('.slide-left')?.classList.remove('d-none');
    document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
  }
}

export function handleThemeUpdate(cssVars) {
  const root = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st, chunkSize) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTransparentBackground(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName1 = `--transparent-${item.getAttribute('data-id5')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;

    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

function transparentStyle() {
  document.querySelector('.app').classList.remove('light-menu');
  document.querySelector('.app').classList.remove('dark-menu');
  document.querySelector('.app').classList.remove('color-menu');
  document.querySelector('.app').classList.remove('gradient-menu');
  document.querySelector('.app').classList.remove('light-header');
  document.querySelector('.app').classList.remove('color-header');
  document.querySelector('.app').classList.remove('dark-header');
  document.querySelector('.app').classList.remove('gradient-header');
}
export function resetData() {
  document.querySelector('#myonoffswitch1').checked = true; //lighttheme
  document.querySelector('#myonoffswitch11').checked = true; //fixed
  document.querySelector('#myonoffswitch3').checked = true; //lightmenu
  document.querySelector('#myonoffswitch6').checked = true; //lightheader
  document.querySelector('#myonoffswitch9').checked = true; //fullwidth
  document.querySelector('#myonoffswitch54').checked = true; //Ltr
  document.querySelector('#myonoffswitch34').checked = true; //Vertail
  document.querySelector('#myonoffswitch111').checked = false;
  document.querySelector('.app')?.classList.remove('bg-img4');
  document.querySelector('.app')?.classList.remove('bg-img1');
  document.querySelector('.app')?.classList.remove('bg-img2');
  document.querySelector('.app')?.classList.remove('bg-img3');
  document.querySelector('.app')?.classList.remove('transparent-theme');
  document.querySelector('.app')?.classList.remove('dark-theme');
  document.querySelector('.app')?.classList.remove('dark-menu');
  document.querySelector('.app')?.classList.remove('color-menu');
  document.querySelector('.app')?.classList.remove('gradient-menu');
  document.querySelector('.app')?.classList.remove('dark-header');
  document.querySelector('.app')?.classList.remove('color-header');
  document.querySelector('.app')?.classList.remove('gradient-header');
  document.querySelector('.app')?.classList.remove('layout-boxed');
  document.querySelector('.app')?.classList.remove('icontext-menu');
  document.querySelector('.app')?.classList.remove('icon-overlay');
  document.querySelector('.app')?.classList.remove('closed-leftmenu');
  document.querySelector('.app')?.classList.remove('hover-submenu');
  document.querySelector('.app')?.classList.remove('hover-submenu1');
  document.querySelector('.app')?.classList.remove('sidenav-toggled');
  document.querySelector('.app')?.classList.remove('scrollable-layout');

  document.querySelector('.app').classList.add('sidebar-mini');
  document.querySelector('.main-header').classList.add('side-header');
  document.querySelector('.main-content').classList.add('app-content');
  document.querySelector('.main-container').classList.add('container-fluid');

  document.querySelector('.app').classList.remove('horizontal');
  document.querySelector('.app').classList.remove('horizontal-hover');
  document.querySelector('.app-sidebar').classList.remove('horizontal-main');
  document.querySelector('.main-header').classList.remove('hor-header');
  document.querySelector('.main-sidemenu').classList.remove('container');
  document.querySelector('.main-container').classList.remove('container');
  document.querySelector('.side-app').classList.remove('container');
  document
    .querySelector('.main-content')
    .classList.remove('horizontal-content');

  document.querySelector('.app').classList.add('ltr');
  document.querySelector('html[lang=en]').setAttribute('dir', 'ltr');
  document.querySelector('.app').classList.remove('rtl');
  name();
}

export function name() {
  if (typeof window !== 'undefined') {
    let primaryColorVal = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-bg-color')
      .trim();

    //get variable
    let myVarVal =
      localStorage.getItem('nowaPrimaryColor') ||
      localStorage.getItem('nowadarkPrimaryColor') ||
      localStorage.getItem('nowatransparentPrimaryColor') ||
      localStorage.getItem('nowatransparent-bgImgPrimaryColor') ||
      localStorage.getItem('nowatransparentBgImgPrimary') ||
      primaryColorVal;

    let colorData = hexToRgba(myVarVal || '#38cab3', 0.1);
    document.querySelector('html').style.setProperty('--primary01', colorData);

    let colorData1 = hexToRgba(myVarVal || '#38cab3', 0.2);
    document.querySelector('html').style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || '#38cab3', 0.3);
    document.querySelector('html').style.setProperty('--primary03', colorData2);

    let colorData3 = hexToRgba(myVarVal || '#38cab3', 0.6);
    document.querySelector('html').style.setProperty('--primary06', colorData3);

    let colorData4 = hexToRgba(myVarVal || '#38cab3', 0.9);
    document.querySelector('html').style.setProperty('--primary09', colorData4);
  }
}
name();

export function localStorageBackUp() {
  let html = document.querySelector('html')?.style;
  let body = document.querySelector('body');

  if (localStorage.getItem('nowaBgImage') !== null) {
    document.body.classList.add(localStorage.getItem('nowaBgImage'));
    document.body.classList.add('transparent-theme');
    localStorage.removeItem('nowalighttheme');
    localStorage.removeItem('nowadark');
    localStorage.removeItem('nowatransparent');
  }
  if (localStorage.getItem('nowaPrimaryColor') !== null) {
    body?.classList.add('light-theme');

    document.getElementById('myonoffswitch1').checked = true;

    body?.classList.remove('dark-theme');
    body?.classList.remove('transparent-theme');

    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('nowaPrimaryColor'),
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('nowaprimaryHoverColor'),
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('nowaprimaryBorderColor'),
    );
  }
  if (localStorage.getItem('nowadarkPrimaryColor') !== null) {
    body?.classList.add('dark-theme');

    document.getElementById('myonoffswitch2').checked = true;

    body?.classList.remove('light-theme');
    body?.classList.remove('transparent-theme');

    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('nowadarkPrimaryColor'),
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('nowadarkPrimaryColor'),
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('nowadarkPrimaryColor'),
    );
  }
  if (localStorage.getItem('nowatransparentPrimaryColor') !== null) {
    body?.classList.add('transparent-theme');
    document.getElementById('myonoffswitchTransparent').checked = true;

    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('nowatransparentPrimaryColor'),
    );
  }
  if (localStorage.getItem('nowatransparentBgColor') !== null) {
    body?.classList.add('transparent-theme');
    document.getElementById('myonoffswitchTransparent');

    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    html?.setProperty(
      '--transparent-body',
      localStorage.getItem('nowatransparentBgColor'),
    );
  }
  if (
    localStorage.getItem('nowatransparent-bgImgPrimaryColor') !== null ||
    localStorage.getItem('nowaBgImage') !== null
  ) {
    body?.classList.add('transparent-theme');
    document.getElementById('myonoffswitchTransparent');

    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    let img = localStorage.getItem('nowaBgImage');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('nowatransparent-bgImgPrimaryColor'),
    );
    body?.classList.add(img);
  }
  if (localStorage.nowartl) {
    document.querySelector('body').classList.add('rtl');
    document.querySelector('html[lang=en]').setAttribute('dir', 'rtl');
    // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css")
    document.querySelector('body').classList.remove('ltr');
    document.querySelector('#myonoffswitch55').checked = true;
  }

  if (localStorage.nowahorizontal) {
    document.querySelector('.main-header')?.classList.add('hor-header');
    document.querySelector('.app').classList.remove('sidebar-mini');
    document.querySelector('.main-header').classList.remove('side-header');
    document.querySelector('.main-content').classList.remove('app-content');
    document
      .querySelector('.main-container')
      .classList.remove('container-fluid');
    document.querySelector('.app').classList.remove('sidenav-toggled');
    document.querySelector('.app').classList.remove('horizontal-hover');
    document.querySelector('.app').classList.add('horizontal');
    document.querySelector('.main-container').classList.add('container');
    document.querySelector('.main-sidemenu').classList.add('container');
    document.querySelector('.main-content').classList.add('horizontal-content');
    document.querySelector('.app-sidebar').classList.add('horizontal-main');
    document.querySelector('.side-app').classList.add('container');

    // $('#slide-left').remove('d-none');
    // $('#slide-right').remove('d-none');
    document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap';
    document.querySelector('#myonoffswitch35').checked = true;
    checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }

  if (localStorage.nowahorizontalHover) {
    document.querySelector('.app').classList.add('horizontal-hover');
    document.querySelector('.app').classList.add('horizontal');
    document.querySelector('.main-content').classList.add('horizontal-content');
    document.querySelector('.main-container').classList.add('container');
    document.querySelector('.main-header').classList.add('hor-header');
    document.querySelector('.app-sidebar').classList.add('horizontal-main');
    document.querySelector('.main-sidemenu').classList.add('container');
    document.querySelector('.side-app').classList.add('container');

    document.querySelector('#slide-left').classList.remove('d-none');
    document.querySelector('#slide-right').classList.remove('d-none');
    document.querySelector('.main-content').classList.remove('app-content');
    document
      .querySelector('.main-container')
      .classList.remove('container-fluid');
    document.querySelector('.app').classList.remove('sidebar-mini');
    document.querySelector('.app').classList.remove('sidenav-toggled');
    document.querySelector('#myonoffswitch111').checked = true;
    document
      .querySelector('.horizontal-hover', '.side-menu')
      ?.classList.add('flex-nowrap');
    let li = document.querySelectorAll('.side-menu', 'li');
    li.forEach((e, i) => {
      if (e.classList.contains('is-expaned')) {
        let ele = [...e.children];
        ele.forEach((el, i) => {
          el.classList.remove('active');
          if (el.classList.contains('slide-menu')) {
            el.style = '';
            el.style.display = 'none';
          }
        });
        e.classList.remove('is-expaned');
      }
    });
    checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }
  if (localStorage.nowadark) {
    document.querySelector('#myonoffswitch2').checked = true;
    dark();
  }
  if (localStorage.nowatransparent) {
    document.querySelector('#myonoffswitchTransparent').checked = true;
    transparent();
  }
  if (localStorage.nowalighttheme) {
    document.querySelector('#myonoffswitch1').checked = true;
    LightTheme();
  }
}

export function switcherArrowFn() {
  let slideLeft = document.querySelector('.slide-left');
  let slideRight = document.querySelector('.slide-right');
  // used to remove is-expanded class and remove class on clicking arrow buttons
  function slideClick() {
    let slide = document.querySelectorAll('.slide');
    let sideMenuitem = document.querySelectorAll('.slide-menu__item');
    let slideMenu = document.querySelectorAll('.slide-menu');
    slide.forEach((element, _index) => {
      if (element.classList.contains('is-expanded') === true) {
        element.classList.remove('is-expanded');
      }
    });
    sideMenuitem.forEach((element, _index) => {
      if (element.classList.contains('active') === true) {
        element.classList.remove('active');
      }
    });
    slideMenu.forEach((element, _index) => {
      if (element) {
        element.style.display = 'none';
      }
    });
  }
  // horizontal arrows
  window.addEventListener('resize', () => {
    let menuWidth = document.querySelector('.horizontal-main');
    let menuItems = document.querySelector('.side-menu');
    let mainSidemenuWidth = document.querySelector('.main-sidemenu');
    let menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0]),
    );
    let marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginRight.split('px')[0]),
    );
    let check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
      document.querySelector('.slide-left')?.classList.add('d-none');
      document.querySelector('.slide-right')?.classList.add('d-none');
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;
    } else {
      document.querySelector('.slide-right')?.classList.remove('d-none');
    }

    if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
      if (
        Math.abs(marginRightValue) < Math.abs(check) === false &&
        menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
      ) {
        menuItems.style.marginRight = -check + 'px';
        document.querySelector('.slide-left')?.classList.remove('d-none');
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (
        Math.abs(marginLeftValue) < Math.abs(check) === false &&
        menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
      ) {
        menuItems.style.marginLeft = -check + 'px';
        document.querySelector('.slide-right')?.classList.add('d-none');
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  });

  if (
    !document.querySelector('body').classList.contains('login-img') &&
    !document.querySelector('body').classList.contains('error-bg')
  ) {
    checkHoriMenu();
  }

  slideLeft.addEventListener('click', () => {
    slideClick();
    let menuWidth = document.querySelector('.horizontal-main');
    let menuItems = document.querySelector('.side-menu');
    let mainSidemenuWidth = document.querySelector('.main-sidemenu');
    let menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0]),
      ) + 100;
    let marginRightValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split('px')[0]),
      ) + 100;

    if (document.querySelector('html').getAttribute('dir') === 'rtl') {
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = '0px';
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split('px')[0]) + 100 + 'px';
        document.querySelector('.slide-right')?.classList.remove('d-none');
        document.querySelector('.slide-left')?.classList.remove('d-none');
      } else {
        document.querySelector('.slide-left')?.classList.add('d-none');
      }

      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = '0px';
        menuItems.style.marginRight = '0px';
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll('.sub-nav-sub');
      subNavSub.forEach((e) => {
        e.style.display = '';
      });
      let subNav = document.querySelectorAll('.nav-sub');
      subNav.forEach((e) => {
        e.style.display = '';
      });
    } else {
      if (marginLeftValue < 0) {
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split('px')[0]) + 100 + 'px';
        if (
          menuWidth?.offsetWidth - menuContainerWidth <
          menuItems.scrollWidth
        ) {
          document.querySelector('.slide-left')?.classList.remove('d-none');
          document.querySelector('.slide-right')?.classList.remove('d-none');
        }
      } else {
        document.querySelector('.slide-left')?.classList.add('d-none');
      }

      if (marginLeftValue >= 0) {
        menuItems.style.marginLeft = '0px';
        if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
          document.querySelector('.slide-left')?.classList.add('d-none');
        }
      }

      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll('.sub-nav-sub');
      subNavSub.forEach((e) => {
        e.style.display = '';
      });
      let subNav = document.querySelectorAll('.nav-sub');
      subNav.forEach((e) => {
        e.style.display = '';
      });
    }
  });
  slideRight.addEventListener('click', () => {
    slideClick();
    let menuWidth = document.querySelector('.horizontal-main');
    let menuItems = document.querySelector('.side-menu');
    let mainSidemenuWidth = document.querySelector('.main-sidemenu');
    let menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0]),
      ) - 100;
    let marginRightValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split('px')[0]),
      ) - 100;
    let check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector('html').getAttribute('dir') === 'rtl') {
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = '0px';
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split('px')[0]) - 100 + 'px';
      } else {
        menuItems.style.marginLeft = '0px';
        menuItems.style.marginRight = -check + 'px';
        document.querySelector('.slide-right')?.classList.add('d-none');
        document.querySelector('.slide-left')?.classList.remove('d-none');
      }

      if (marginRightValue !== 0) {
        document.querySelector('.slide-left')?.classList.remove('d-none');
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll('.sub-nav-sub');
      subNavSub.forEach((e) => {
        e.style.display = '';
      });
      let subNav = document.querySelectorAll('.nav-sub');
      subNav.forEach((e) => {
        e.style.display = '';
      });
    } else {
      if (marginLeftValue > -check) {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split('px')[0]) - 100 + 'px';
      } else {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = -check + 'px';
        document.querySelector('.slide-right')?.classList.add('d-none');
      }
      if (marginLeftValue !== 0) {
        document.querySelector('.slide-left')?.classList.remove('d-none');
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll('.sub-nav-sub');
      subNavSub.forEach((e) => {
        e.style.display = '';
      });
      let subNav = document.querySelectorAll('.nav-sub');
      subNav.forEach((e) => {
        e.style.display = '';
      });
      //
    }
  });
}

export const responsiveSidebarclose = () => {
  //leftsidemenu
  document.querySelector('.app').classList.remove('sidenav-toggled');
  //rightsidebar
  document.querySelector('.sidebar-right').classList.remove('sidebar-open');
  //swichermainright
  document.querySelector('.demo_changer').classList.remove('active');
  document.querySelector('.demo_changer').style.right = '-270px';
};

//horizontalmenusticky
export const horizontalmenusticky = () => {
  if (document.querySelector('.main-header')) {
    if (window.scrollY > 30) {
      document
        .querySelector('.main-header')
        .classList.add('fixed-header', 'visible-title');
      let Scolls = document.querySelectorAll('.sticky');
      Scolls.forEach((e) => {
        e.classList.add('sticky-pin');
      });
    } else {
      document
        .querySelector('.main-header')
        .classList.remove('fixed-header', 'visible-title');
      let Scolls = document.querySelectorAll('.sticky');
      Scolls.forEach((e) => {
        e.classList.remove('sticky-pin');
      });
    }
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', horizontalmenusticky);
}

export function Horizontalmenudefultclose() {
  if (document.querySelector('.horizontal')) {
    let slide = document.querySelectorAll('.slide');
    let sideMenuitem = document.querySelectorAll('.slide-menu__item');
    let slideMenu = document.querySelectorAll('.slide-menu');
    slide.forEach((element) => {
      if (element.classList.contains('is-expanded') === true) {
        element.classList.remove('is-expanded');
      }
    });
    sideMenuitem.forEach((element) => {
      if (element.classList.contains('active') === true) {
        element.classList.remove('active');
      }
    });
    slideMenu.forEach((element) => {
      if (element) {
        element.style.display = 'none';
      }
    });
  }
}
