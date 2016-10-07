import Color from 'color';

let primary = Color('#ffffff');
let secondary = Color('#161616');
let sidebar = Color('#252932');
let dark = Color('rgba(0,0,0,0.8)');
let light = Color('rgba(255,255,255,0.8)');

let darken = primary.darken(0.2).hexString().toString();

module.exports = {
  brandPrimary: primary.hexString().toString(),
  darker: darken,
  brandSecondary: secondary.hexString().toString(),
  brandSidebar: sidebar.hexString().toString(),
  dark: dark.hexString().toString(),
  light: light.hexString().toString()
}
