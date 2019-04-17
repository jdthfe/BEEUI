export default {
  name: 'TableRenderHeader',
  functional: true,
  props: {
      render: Function,
      column: Object,
      index: Number,
      row: Object
  },
  render: (h, ctx) => {
      const params = {
          column: ctx.parent.column,
          row: ctx.parent.row,
          index: ctx.parent.index
      };
      return ctx.props.render(h, params);
  }
};