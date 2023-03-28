import request from '@/utils/request'

export function getErpPlanColdreductionstripList(params) {
  return request({
    url: '/erpPlanColdreductionstrip/list',
    method: 'get',
    params
  })
}
export const formJson6={"widgetList":[{"type":"card","category":"container","icon":"card","widgetList":[{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"coldreductionstripNum","label":"冷轧带材计划编号","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input21034"}],"options":{"name":"gridCol43356","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-43356"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"productuse","label":"产品用途","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input25266"}],"options":{"name":"gridCol45948","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-45948"}],"options":{"name":"grid84841","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid84841"}],"options":{"name":"card19286","label":"基础信息","hidden":false,"folded":false,"showFold":true,"cardWidth":"100%","shadow":"never","customClass":[]},"id":"card19286"},{"type":"card","category":"container","icon":"card","widgetList":[{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"productQuality","label":"成品管芯材质","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input60546"}],"options":{"name":"gridCol34603","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-34603"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"productArea","label":"成品卷径范围(mm)","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input39202"}],"options":{"name":"gridCol17905","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-17905"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"singleHeight","label":"单卷重量(吨)","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input56339"}],"options":{"name":"gridCol108672","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-108672"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"volumeTotal","label":"卷数","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input75984"}],"options":{"name":"gridCol88415","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-88415"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"heightTotal","label":"总重量(吨)","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input60558"}],"options":{"name":"gridCol80327","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-80327"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"productionUnitA","label":"生产单位A","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input93351"}],"options":{"name":"gridCol25208","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-25208"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"productionUnitB","label":"生产单位B","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input93324"}],"options":{"name":"gridCol110626","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-110626"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"packing","label":"包装完成日期","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input110713"}],"options":{"name":"gridCol62473","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-62473"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"deliveredTimeA","label":"交货日期A","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input60605"}],"options":{"name":"gridCol58407","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-58407"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"deliveredTimeB","label":"交货日期B","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input65618"}],"options":{"name":"gridCol25638","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-25638"}],"options":{"name":"grid76687","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid76687"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext64226","columnWidth":"200px","hidden":false,"htmlContent":"<b>冷轧带坯力学性能，尺寸及允许偏差</b>","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext64226"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext60239","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext60239"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"tensileStrength","label":"抗拉强度ob/Mpa","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input92656"}],"options":{"name":"gridCol24818","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-24818"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"elongation","label":"延伸率","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input87808"}],"options":{"name":"gridCol31034","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-31034"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"bendingPerformance","label":"折弯性能","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input94888"}],"options":{"name":"gridCol37100","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-37100"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"endwiseHeight","label":"纵向厚度偏差mm","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input28484"}],"options":{"name":"gridCol30514","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-30514"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"warpWidth","label":"宽度偏差mm","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input72016"}],"options":{"name":"gridCol42244","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-42244"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"convexRate","label":"凸面率%","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input98629"}],"options":{"name":"gridCol38095","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-38095"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"wedge","label":"楔形率%","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input17148"}],"options":{"name":"gridCol30909","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-30909"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"same","label":"同板差%","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input55868"}],"options":{"name":"gridCol67616","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-67616"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol50329","hidden":false,"span":8,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-50329"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"stringLayer","label":"卷材端面串层","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input14923"}],"options":{"name":"gridCol32200","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-32200"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"roughness","label":"坯料表面粗糙度","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input53471"}],"options":{"name":"gridCol72210","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-72210"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"otherrequirement","label":"卷端面其他要求","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input26564"}],"options":{"name":"gridCol82413","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-82413"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"dagoba","label":"卷材端面塔","labelAlign":"label-right-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"120","labelHidden":false,"readonly":true,"disabled":false,"hidden":false,"clearable":false,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input93905"}],"options":{"name":"gridCol25919","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-25919"}],"options":{"name":"grid44504","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid44504"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext72401","columnWidth":"200px","hidden":false,"htmlContent":"<b>产品要求</b>","customClass":["text-color","text-size","text-weizhi"],"onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext72401"},{"type":"html-text","icon":"html-text","formItemFlag":false,"options":{"name":"htmltext59653","columnWidth":"200px","hidden":false,"htmlContent":"<hr  color=#9 size=2>","customClass":"","onCreated":"","onMounted":"","label":"html-text"},"id":"htmltext59653"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"appearanceReq","label":"产品外观质量及轧制要求","labelAlign":"","rows":3,"defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"textarea40242"}],"options":{"name":"gridCol30928","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-30928"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"type":"textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"productCheck","label":"产品质检","labelAlign":"label-right-align","rows":3,"defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":"170","labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"textarea112887"}],"options":{"name":"gridCol31169","hidden":false,"span":24,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-31169"}],"options":{"name":"grid22504","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid22504"}],"options":{"name":"card29883","label":"生产标准","hidden":false,"folded":false,"showFold":true,"cardWidth":"100%","shadow":"never","customClass":[]},"id":"card29883"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":".text-color{\n  color: blue;\n}\n.text-color{\n  color: black;\n}\n.text-size{\n  font-size: 15px;\n}\n\n.text-weizhi{\n  text-align: center;\n}\n.text-size1{\n  font-size: 20px;\n}","customClass":"","functions":"","layoutType":"PC","onFormCreated":"","onFormMounted":"","onFormDataChange":""}}

