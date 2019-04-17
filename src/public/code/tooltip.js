let code = {};

code.base = `
<template>
    <div style="position:relative">
      <div style="float:left;margin-left:30px;margin-top:50px;">
        <ga-tooltip content="企鹅全文企鹅企鹅企鹅企鹅企鹅企鹅企鹅企鹅请问请问企鹅企鹅企鹅企鹅全文请问请问请问请问请问">
          <ga-button>123123</ga-button>
        </ga-tooltip>
      </div>
    </div>
    <div>
      <div class="top">
        <ga-tooltip :content="showTip">
          <ga-button>上左</ga-button>
        </ga-tooltip>
        <ga-tooltip content="Top Center 文字提示" placement="top">
          <ga-button>上边</ga-button>
        </ga-tooltip>
        <ga-tooltip content="Top Right 文字提示" placement="top-end">
          <ga-button>上右</ga-button>
        </ga-tooltip>
      </div>
      <div class="center">
        <div class="center-left">
          <ga-tooltip content="Left Top 文字提示" placement="left-start">
            <ga-button>左上</ga-button>
          </ga-tooltip>
          <br>
          <br>
          <ga-tooltip content="Left Center 文字提示" placement="left">
            <ga-button>左边</ga-button>
          </ga-tooltip>
          <br>
          <br>
          <ga-tooltip content="Left Bottom 文字提示" placement="left-end">
            <ga-button>左下</ga-button>
          </ga-tooltip>
        </div>
        <div class="center-right">
          <ga-tooltip content="Right Top 文字提示" placement="right-start">
            <ga-button>右上</ga-button>
          </ga-tooltip>
          <br>
          <br>
          <ga-tooltip content="Right Center 文字提示" placement="right">
            <ga-button>右边</ga-button>
          </ga-tooltip>
          <br>
          <br>
          <ga-tooltip content="Right Bottom 文字提示" placement="right-end">
            <ga-button>右下</ga-button>
          </ga-tooltip>
        </div>
      </div>
      <div class="bottom">
        <ga-tooltip content="Bottom Left 文字提示" placement="bottom-start">
          <ga-button>下左</ga-button>
        </ga-tooltip>
        <ga-tooltip content="Bottom Center 文字提示" placement="bottom">
          <ga-button>下边</ga-button>
        </ga-tooltip>
        <ga-tooltip content="Bottom Right 文字提示" placement="bottom-end">
          <ga-button>下右</ga-button>
        </ga-tooltip>
      </div>
    </div>
</template>
`;

code.zdy = `
  <template>
    <ga-tooltip placement="top" @on-popper-hide="popperHide">
      <ga-button>多行</ga-button>
      <div slot="content">
        <p>显示多行信息</p>
        <p><i>可以自定义样式</i></p>
      </div>
    </ga-tooltip>
    <ga-tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
      <ga-button @on-click="disabled = true">延时1秒显示</ga-button>
    </ga-tooltip>
  </template>
  <script>
    export default {
      methods: {
        popperHide() {
          /**
           * do something
           */
        },
      }
    }
  </script>
`;


export default code;
