import{_ as e,e as t,b as n}from"../exmg-form-drawer-d21b21bf.js";import{s as a,x as s}from"../lit-element-775ec931.js";import"../paper-input-9a5ebbc3.js";import"../exmg-paper-combobox-1a85b830.js";let o=class extends a{constructor(){super(...arguments),this.opened=!1,this.shouldFail=!1,this.keepOpenedOnSubmitSuccess=!1,this.resetFormOnSubmitSuccess=!1,this.noCancelOnOutsideClick=!1}handleOpenedChanged(e){this.opened=e.detail.value}openDialog(){this.opened=!0}handleShouldFailChange(e){this.shouldFail=e.composedPath()[0].checked}handleKeepOpenedOnSubmitSuccess(e){this.keepOpenedOnSubmitSuccess=e.composedPath()[0].checked}handleResetFormOnSubmitSuccess(e){this.resetFormOnSubmitSuccess=e.composedPath()[0].checked}handleNoCancelOnOutsideClick(e){this.noCancelOnOutsideClick=e.composedPath()[0].checked}onSubmit(e){setTimeout((t=>{this.shouldFail?e.path[0].error("Internal error occurred"):e.path[0].done()}),1e3)}onCancel(e){}render(){return s`
      <style>
        exmg-form-drawer {
          --mdc-theme-primary: green;
          --mdc-theme-surface: black;
          --mdc-theme-on-surface: white;
        }
      </style>
      <div style="padding: 20px">
        <input type="button" @click="${this.openDialog}" value="Open dialog" />
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="shouldFail"
            value="${this.shouldFail}"
            @change="${this.handleShouldFailChange}"
          />
          Should Fail
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="keepOpenedOnSubmitSuccess"
            value="${this.keepOpenedOnSubmitSuccess}"
            @change="${this.handleKeepOpenedOnSubmitSuccess}"
          />
          Keep opened on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="resetFormOnSubmitSuccess"
            value="${this.resetFormOnSubmitSuccess}"
            @change="${this.handleResetFormOnSubmitSuccess}"
          />
          Reset form on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="noCancelOnOutsideClick"
            value="${this.noCancelOnOutsideClick}"
            @change="${this.handleNoCancelOnOutsideClick}"
          />
          No cancel on outside click
        </label>
      </div>
      <exmg-form-drawer
        ?opened="${this.opened}"
        ?keep-opened-on-submit-success="${this.keepOpenedOnSubmitSuccess}"
        ?reset-form-on-submit-success="${this.resetFormOnSubmitSuccess}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        @exmg-drawer-opened-changed="${this.handleOpenedChanged}"
        autofocus-on-open
        submit-btn-title="Create"
        @submit="${this.onSubmit}"
        @cancel="${this.onCancel}"
      >
        <span slot="title">New event</span>
        <exmg-paper-combobox label="Type" name="type" selected="0" always-float-label>
          <paper-item>Trivia</paper-item>
          <paper-item>Other</paper-item>
        </exmg-paper-combobox>
        <paper-input
          name="question"
          label="Question"
          value="Who's Dylan Hartigan's favorite artist?"
          required
        ></paper-input>
        <paper-input name="answer_a" label="Answer A" value="Beyoncé"></paper-input>
        <paper-input name="answer_b" label="Answer B" value="Eminem"></paper-input>
        <paper-input name="answer_c" label="Answer C" value="Ariana Grande"></paper-input>
        <br />
        <exmg-button unelevated> + Add answer </exmg-button>
      </exmg-form-drawer>
    `}};e([t({type:Boolean})],o.prototype,"opened",void 0),e([t({type:Boolean})],o.prototype,"shouldFail",void 0),e([t({type:Boolean})],o.prototype,"keepOpenedOnSubmitSuccess",void 0),e([t({type:Boolean})],o.prototype,"resetFormOnSubmitSuccess",void 0),e([t({type:Boolean})],o.prototype,"noCancelOnOutsideClick",void 0),o=e([n("exmg-drawer-demo-styled")],o);export{o as Drawer};
