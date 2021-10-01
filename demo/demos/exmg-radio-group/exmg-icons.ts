import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.innerHTML = `<iron-iconset-svg name="exmg-icons" size="24">
	<svg>
		<defs>
			<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
		</defs>
	</svg>
</iron-iconset-svg>`;

document.head.appendChild(documentContainer);
