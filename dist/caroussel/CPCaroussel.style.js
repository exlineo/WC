export function setStyle(h) {
    return `
    main{
        margin:auto;
        position:relative;
        width:100%;
        height: ${h};
      }
      section {
          width: 100%;
          height: ${h};
          margin: auto;
          overflow:hidden;
          display:flex;
          flex-flow:row nowrap;
      }
      article{
        width:100%;
        height: ${h};
        display:flex;
        flex-shrink:0;

        margin:0;
        padding: 0;
        border:0;

        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      article > div:nth-child(1){
        width:40%;
        display:flex;
        flex-flow:column nowrap;
        padding:20px 10px 20px 40px;
      }
      article > div:nth-child(2){
        width:60%;
        position:relative;
      }
      button{
        width:max-content;
        border:none;
        padding:6px;
        transition:all .3s ease;
      }
      .carousel-corner {
          position: absolute;
          bottom: 0;
          right: 0;
      }
      .carousel-img {
          object-fit: cover;
      }
      .prev, .next{
        position:absolute;
        top:calc(50% - 20px);
        width:40px;
        height:40px;
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
          background-color: #666;
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
          background-color: #666;
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
      }
    `;
}
