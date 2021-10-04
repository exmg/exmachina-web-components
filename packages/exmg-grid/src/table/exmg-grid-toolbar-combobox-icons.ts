import '@polymer/iron-iconset-svg/iron-iconset-svg';
const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');

documentContainer.innerHTML = `<iron-iconset-svg name="exmg-grid-toolbar-combobox-icons" size="24">
<svg>
  <defs>
    <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
  </defs>
</svg>
</iron-iconset-svg>`;

document.head.appendChild(documentContainer);
