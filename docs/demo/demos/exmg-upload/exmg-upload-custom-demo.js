import{i as o,_ as e,s,x as d,e as a}from"../gestures-5d82c3ec.js";import"../exmg-upload-dialog-6ad0cc09.js";window.uploadDefaults={customAdapterPath:"/demo/demos/exmg-upload/xhr-json-adapter.js",uploadUrl:"http://localhost:3000/upload",headers:{"x-adminSession":"sessionid","Allow-Access-Control-Origin":"*"}};let l=class extends s{render(){return d` <h2>Custom Upload Adpater Example</h2>
      <pre>
window.uploadDefaults = {
    customAdapterPath: '/demo/demos/exmg-upload/xhr-json-adapter.js',
    uploadUrl: 'http://localhost:3000/upload',
    headers: {
        'x-adminSession': 'sessionid',
        'Allow-Access-Control-Origin': '*',
    },
};
    </pre
      >
      <exmg-upload multiple serverType="custom"> </exmg-upload>`}};l.styles=[o`
      :host {
        display: block;
      }
    `],l=e([a("exmg-upload-custom-demo")],l);export{l as ExmgUploadCustomDemo};
