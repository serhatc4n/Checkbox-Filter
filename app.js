var valueList = document.getElementById('valueList');
var text = '<span> you have selected : </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for (var checkbox of checkboxes) {
  checkbox.addEventListener('click',function() {
    if (this.checked == true) {
      listArray.push(this.value);
      valueList.innerHTML = text + listArray.join(' , ');
    } else {
      listArray = listArray.filter(e => e !== this.value);
      valueList.innerHTML = text +listArray.join(' , ');
    }
  })
}

function deselectAll() {
  let language = document.getElementsByName("language");
  let languageLen = language.length;
  for (var x = 0; x < languageLen; x++) {
    language[x].checked = false;
    listArray = listArray.filter(e => e == false);
    valueList.innerHTML = "";
  }
}
