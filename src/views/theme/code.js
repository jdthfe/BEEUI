let code = {};

code.base = `
  @import '../components/index.less';
  @import "../custom.less";
  @import "../mixins/index.less";
  @import "../common/index.less";
  @import "../animation/index.less";

  @primary-color: #3276b1;
  @background-color-base: #6e966d;
`;

code.theme = `
  npm run lib:theme
`;

export default code;
