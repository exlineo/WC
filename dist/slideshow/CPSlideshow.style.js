export function setStyle(h) {
    return `
    :host{
      position: relative;
      width:100%;
    }
    * {box-sizing:border-box}
    section {
      width: 100%;
      height:${h};
      position: relative;
      margin: auto;
      overflow:hidden;
    }
    nav{
      width:10vw;
      text-align:center;
      position:absolute;
      bottom:5px;
      z-index:99;
    }
    article {
      display:none;
      width:100%;
      height:100%;
      background:50% no-repeat;
      background-size:cover;
      overflow:hidden;
      position:relative;
    }
    article > img{
      min-height:100%;
      min-width:100%;
    }
    .prev, .next{
      position:absolute;
      top:calc(50% - 20px);
      width:40px;
      height:40px;
      z-index:999;
    }
    .prev{
      left:0;
      transform:rotate(-90deg);
    }
    .next{
      right:0;
      transform:rotate(90deg);
    }
    .arrow-up {
      background-color: #111;
      height: 40px;
      width: 40px;
      display: block;
      border: 1px solid #666;
      position: relative;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
      overflow: hidden;
    }
    .arrow-slide {
      left: 0;
      top: -100%;
      width: 100%;
      height: 100%;
      background: #666;
      position: absolute;
      display: block;
      z-index: 0;
    }
    .left-arm {
      position: absolute;
      z-index: 1;
      background-color: transparent;
      top: 19px;
      left: 3px;
      width: 20px;
      display: block;
      transform: rotate(-45deg);
    }
    .left-arm:after {
        content: "";
        background-color: #CCC;
        width: 20px;
        height: 1px;
        display: block;
        border-radius: 1px;
        transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
        transform-origin: right center;
        z-index: -1;
    }
    .right-arm {
      position: absolute;
      z-index: 1;
      background-color: transparent;
      top: 19px;
      left: 17px;
      width: 20px;
      display: block;
      transform: rotate(45deg);
      border-radius: 2px;
    }
    .right-arm:after {
        content: "";
        background-color: #CCC;
        width: 20px;
        height: 1px;
        display: block;
        border-radius: 1px;
        transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
        transform-origin: left center;
        z-index: -1;
    }
    .arrow-up:hover {
      transition: all .1s;
    }
    .arrow-up:hover  .left-arm:after {
        transform: rotate(-10deg);
      }
    .arrow-up:hover  .right-arm:after {
        transform: rotate(10deg);
      }
    .arrow-up:hover  .arrow-slide {
        transition: all .4s ease-in-out;
        transform: translateY(200%);
    }
    .text {
      color: #f2f2f2;
      position:absolute;
      bottom:0;
      width:100%;
      font-size:150%;
      text-align: center;
      display:flex;
      justify-content:center;
    }
    .text > p{
      background:rgba(0,0,0,.8);
      width:60%;
      padding: 12px 20px;
    }
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
    }
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }
    .active, .dot:hover {
      background-color: #717171;
    }
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }
    .block{
      display:flex;
    }
    @-webkit-keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }
    @keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }
    `;
}
