import request from '@/utils/request'

export function getColdRereelerRecordList(params) {
  return request({
    url: '/lmdpColdRereelerRecord/list',
    method: 'get',
    params
  })
}
export const formJson9={"widgetList":[{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext40121","columnWidth":"200px","hidden":false,"htmlContent":"<b>重卷信息</b>","customClass":["text-color","text-weizhi","text-size"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext40121"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext75623","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext75623"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"batchNum","label":"加工后冷轧卷号","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"110","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input11341"}],"options":{"name":"gridCol48484","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-48484"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"rereelerCardNumber","label":"重卷工艺卡编号","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"110","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input72720"}],"options":{"name":"gridCol5062","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-5062"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"operateType","label":"操作类型","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"110","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input66919"}],"options":{"name":"gridCol67122","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-67122"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"recordDate","label":"日期","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"110","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input105672"}],"options":{"name":"gridCol18787","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-18787"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"recordNum","label":"道次","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"110","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input87002"}],"options":{"name":"gridCol92053","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-92053"}],"options":{"name":"grid92437","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid92437"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext81022","columnWidth":"200px","hidden":false,"htmlContent":"<b>切片信息</b>\n","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext81022"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext69203","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext69203"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"trimmingTime","label":"切边时间","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input87028"}],"options":{"name":"gridCol80572","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-80572"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"mainOperator","label":"主操","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input102041"}],"options":{"name":"gridCol75543","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-75543"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"startTime","label":"班次","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input80170"}],"options":{"name":"gridCol25472","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-25472"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"produceOrder","label":"生产顺序","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input71994"}],"options":{"name":"gridCol76446","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-76446"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"workGroup","label":"班组","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input24945"}],"options":{"name":"gridCol33180","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-33180"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"originWidth","label":"来料宽度（mm）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input71727"}],"options":{"name":"gridCol16825","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-16825"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"knifeGap","label":"刀缝间隙MM","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input30115"}],"options":{"name":"gridCol37472","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-37472"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"finishedTrimmingWidth","label":"成品切边宽度（mm）","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input31024"}],"options":{"name":"gridCol48448","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-48448"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"shearTension","label":"剪切张力N/m²","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input57448"}],"options":{"name":"gridCol102798","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-102798"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input53831","label":"剪切速度m/min","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"130","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input53831"}],"options":{"name":"gridCol47889","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-47889"}],"options":{"name":"grid95178","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid95178"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext56642","columnWidth":"200px","hidden":false,"htmlContent":"<b>金属平衡</b>","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext56642"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext43763","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext43763"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"originWeight","label":"投料量Kg","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input87619"}],"options":{"name":"gridCol27534","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-27534"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"processedWeight","label":"成品量Kg","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input88101"}],"options":{"name":"gridCol56310","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-56310"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wasteMaterialHead","label":"头料M","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input85110"}],"options":{"name":"gridCol31963","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-31963"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wasteMaterialTail","label":"尾料M","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input66214"}],"options":{"name":"gridCol96132","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-96132"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wasteMaterialElse","label":"其它Kg","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input38318"}],"options":{"name":"gridCol101071","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-101071"}],"options":{"name":"grid24423","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid24423"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext113500","columnWidth":"200px","hidden":false,"htmlContent":"<b>成品甩除</b>","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext113500"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext70761","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext70761"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"rereelerFinishedWeight","label":"重卷成品重量（kg）","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input120095"}],"options":{"name":"gridCol32707","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-32707"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"headRejectReason","label":"头料甩除原因","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input85356"}],"options":{"name":"gridCol93277","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-93277"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"tailRejectReason","label":"尾料甩除原因","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input49693"}],"options":{"name":"gridCol7812","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-7812"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"headTailWasteMeters","label":"头尾料甩除米数","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input42550"}],"options":{"name":"gridCol40655","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-40655"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"abnormalWasteReason","label":"异常甩除原因","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input46302"}],"options":{"name":"gridCol60745","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-60745"}],"options":{"name":"grid44535","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid44535"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext33987","columnWidth":"200px","hidden":false,"htmlContent":"<b>质量状况</b>","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext33987"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext36306","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext36306"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"quality","label":"质量情况","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input43887"}],"options":{"name":"gridCol82317","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-82317"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"result","label":"判定结果","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input30776"}],"options":{"name":"gridCol11242","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-11242"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"confirmer","label":"确认人","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input92295"}],"options":{"name":"gridCol72230","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-72230"}],"options":{"name":"grid108884","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid108884"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext81652","columnWidth":"200px","hidden":false,"htmlContent":"<b>其他废料</b>","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext81652"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext28511","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext28511"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wasteOffLineWeight","label":"下线重量kg","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input42957"}],"options":{"name":"gridCol86492","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-86492"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wasteProductWeight","label":"成品重量kg","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input92377"}],"options":{"name":"gridCol31866","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-31866"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wasteTrimmingWeight","label":"切边重量kg","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input82699"}],"options":{"name":"gridCol61794","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-61794"}],"options":{"name":"grid27823","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid27823"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":".text-color{\n  color: blue;\n}\n.text-color{\n  color: black;\n}\n.text-size{\n  font-size: 15px;\n}\n\n.text-weizhi{\n  text-align: center;\n}","customClass":[],"functions":"","layoutType":"PC","onFormCreated":"","onFormMounted":"","onFormDataChange":""}}
