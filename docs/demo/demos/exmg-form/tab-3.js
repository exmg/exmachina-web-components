import{i as e,_ as t,s as r,x as i,a as p}from"../query-assigned-elements-3c47ed19.js";import"../exmg-markdown-editor-519175fd.js";import"../exmg-form-6b163fa7.js";let l=class extends r{render(){return i`
      <h1>Controlled height</h1>
      <exmg-form id="controlledHeight" @submit="${this.onSubmit}" @cancel="${this.onCancel}">
        <paper-input label="text input" required></paper-input>
        <paper-input label="text input" value="pre-filled"></paper-input>
        <paper-input label="text input" required></paper-input>
        <paper-input label="text input" value="pre-filled"></paper-input>
        <paper-input label="text input" required></paper-input>
        <paper-input label="text input" value="pre-filled"></paper-input>
      </exmg-form>
    `}onSubmit(e){setTimeout((()=>{this.resetForm1()}),1500)}onCancel(e){}displayFormDirty(e){const t=e.target;t.handleError(`You changed a value, form is dirty: ${t.isDirty}`)}validateForm1(){this.shadowRoot.querySelector("#form1").validate()}resetForm1(){this.shadowRoot.querySelector("#form1").reset()}};l.styles=[e`
      #controlledHeight {
        --exmg-form-internal-height: 150px;
      }

      #horizontal {
        display: flex;
        flex-direction: column;
      }
      #horizontal > * {
        flex: 1;
      }
    `],l=t([p("tab-3")],l);export{l as Tab3El};
