//import "babel-polyfill";
import {bootstrap} from 'zaitun';
//import devTool from 'zaitun/devTool/devTool';

 import {mainCom}  from './mainCom';
 import Home from './Home';

const routes=[
    {path:"/Home", component:Home},
    {path:'/Arabic', loadComponent:()=>System.import('./arabic/Arabic')},    
    {path:'/Quran', loadComponent:()=>System.import('./Quran')}, 
  ];
bootstrap({
  containerDom:'#app',
  mainComponent:mainCom,  
  routes:routes,
  activePath:'Home',
  //devTool:devTool
});

