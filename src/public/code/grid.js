let code = {};

code.base = `
  <ga-row>
    <ga-col span="12">col-12</ga-col>
    <ga-col span="12">col-12</ga-col>
  </ga-row>
  <br>
  <ga-row>
    <ga-col span="8">col-8</ga-col>
    <ga-col span="8">col-8</ga-col>
    <ga-col span="8">col-8</ga-col>
  </ga-row>
  <br>
  <ga-row>
    <ga-col span="6">col-6</ga-col>
    <ga-col span="6">col-6</ga-col>
    <ga-col span="6">col-6</ga-col>
    <ga-col span="6">col-6</ga-col>
  </ga-row>
  <ga-row type="flex">
    <ga-col span="6" order="4">1 | order-4</ga-col>
    <ga-col span="6" order="3">2 | order-3</ga-col>
    <ga-col span="6" order="2">3 | order-2</ga-col>
    <ga-col span="6" order="1">4 | order-1</ga-col>
  </ga-row>
  <ga-row>
    <ga-col span="8">col-8</ga-col>
    <ga-col span="8" offset="8">col-8 | offset-8</ga-col>
  </ga-row>
  <br>
  <ga-row>
    <ga-col span="6" offset="8">col-6 | offset-8</ga-col>
    <ga-col span="6" offset="4">col-6 | offset-4</ga-col>
  </ga-row>
  <br>
  <ga-row>
    <ga-col span="12" offset="8">col-12 | offset-8</ga-col>
  </ga-row>
`;

export default code;
