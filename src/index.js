import _ from 'lodash';
import './home.css';
import ImgUrl from './Snipaste_2021-11-25_17-46-07.png'

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引W入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('color-red');


  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  console.log(ImgUrl);
  myIcon.src = ImgUrl;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
