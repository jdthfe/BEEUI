module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'eslint:recommended',
    // required to lint *.vue files
    plugins: [
        'html',
    ],
    ecmaFeatures: {
        "js": true
    },
    // check if imports actually resolve
    // 'settings': {
    //     'import/resolver': {
    //         'webpack': {
    //             'config': 'build/webpack.base.conf.js'
    //         }
    //     }
    // },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        // 'import/extensions': ['error', 'always', {
        //     'js': 'never',
        //     'vue': 'never'
        // }],
        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'import/no-unresolved': 0,
        'import/no-unassigned-import': 0,
        // @off 函数定义时括号前的空格规则
        'space-before-function-paren': 0,
        // @off 强制注释第一个字母大写规则
        'capitalized-comments': 0,
        // @off 强制文件命名规则
        'unicorn/filename-case': 0,
        // @off 箭头函数的模式设置规则
        'arrow-parens': 0,
        // @off 否定的表达式可以把逻辑表达的更清楚
        'no-negated-condition': 0,
        // @off 禁止使用外部包
        'import/no-extraneous-dependencies': 0,
        // @off 乱用禁止eslint规则
        'unicorn/no-abusive-eslint-disable': 0,
        // @off 引号
        'semi': 0,
        // @off 当需要写一系列属性的时候，可以更统一
        'dot-notation': 0,
        // @off 单独的 if 可以把逻辑表达的更清楚
        'no-lonely-if': 0

    }
}
