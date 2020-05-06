export const isIEOrEdge: boolean = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
export const isFirefox: boolean = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
