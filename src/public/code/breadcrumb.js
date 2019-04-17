let code = {};

code.base = `
<template>
    <ga-breadcrumb>
      <ga-breadcrumb-item href="/" target="_blank">Home</ga-breadcrumb-item>
      <ga-breadcrumb-item href="/components/breadcrumb" target="_blank">Components</ga-breadcrumb-item>
      <ga-breadcrumb-item>Breadcrumb</ga-breadcrumb-item>
    </ga-Breadcrumb>
    <ga-breadcrumb>
      <ga-breadcrumb-item href="/">
        <ga-icon type="ios-home-outline"></ga-icon> Home
      </ga-breadcrumb-item>
      <ga-breadcrumb-item href="/components/breadcrumb">
        <ga-icon type="social-buffer-outline"></ga-icon> Components
      </ga-breadcrumb-item>
      <ga-breadcrumb-item>
        <ga-icon type="pound"></ga-icon> Breadcrumb
      </ga-breadcrumb-item>
    </ga-breadcrumb>
    <ga-breadcrumb separator=">">
      <ga-breadcrumb-item href="/">Home</ga-breadcrumb-item>
      <ga-breadcrumb-item href="/components/breadcrumb">Components</ga-breadcrumb-item>
      <ga-breadcrumb-item>Breadcrumb</ga-breadcrumb-item>
    </ga-breadcrumb>
    <ga-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
      <ga-breadcrumb-item href="/">Home</ga-breadcrumb-item>
      <ga-breadcrumb-item href="/components/breadcrumb">Components</ga-breadcrumb-item>
      <ga-breadcrumb-item>Breadcrumb</ga-breadcrumb-item>
    </ga-breadcrumb>
</template>

`;

export default code;
