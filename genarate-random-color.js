var myName = 'VAIBHAV LAXMAN PATIL';
var coloredName = myName.split("");

let randomColor = ()=> {
  let color = Math.floor(Math.random() * 0xFFFFFF);
  color = color.toString(16).padStart(6,'0');
  return '#' + color;
};

for (var i = 0; i < coloredName.length; i++) {
  document.write("<span style='color:" + randomColor() + "'>" + coloredName[i] + "</span>");
}
