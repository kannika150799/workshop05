var arrayText = [];

// Contanner Text
function contannerText() {
  var text = "";
  for (var i = 0; i < arrayText.length; i++) {
    text += `<div id="${i}" class="boxText">
              <p class="show-text">${arrayText[i]}</p>
              <button class="button edit-bt" onClick="editText(${i})">Edit</button>
              <button class="button delete-bt" onClick="deleteText(${i})">Delete</button>
            </div>`;
  }
  return text;
}

function contannerUpdate(index_Update) {
  var showUpdate = "";
  showUpdate = `<div id="${index_Update}" class="boxText">
              <p class="show-text show-box">${arrayText[index_Update]}</p>
              <button class="button edit-bt" onClick="editText(${index_Update})">Edit</button>
              <button class="button delete-bt" onClick="deleteText(${index_Update})">Delete</button>
              </div>`;
  return showUpdate;
}

// Submit
function SubmitName() {
  var textError1 = "You have not entered a message.";

  if (document.getElementById("titleName").value == "") {
    document.getElementById("error").innerHTML = textError1;
  } else {
    textError1 = "";
    document.getElementById("error").innerHTML = textError1;

    var input = document.getElementById("titleName").value;
    arrayText.push(input);
    document.getElementById("showOutput").innerHTML = contannerText();
    document.getElementById("titleName").value = "";
  }
}

// Edit
function editText(id_Edit) {
  var inputEdit = `<div class="edit-box" id = "edit${id_Edit}">
                    <input class="input-box edit-update" id="inputUpdate${id_Edit}" type='text' value='${arrayText[id_Edit]}'/>
                    <button class="button update-bt" onClick="updateText(${id_Edit})">Confirm</button> 
                   </div>
                   <div id="errorEdit${id_Edit}" class="errorMessage"></div>`;
  document.getElementById(id_Edit).innerHTML = inputEdit;
}
// Update Text
function updateText(id_update) {
  var textError2 = "You have not entered a message.";

  if (document.getElementById("inputUpdate" + id_update).value == "") {
    document.getElementById("errorEdit"+ id_update).innerHTML = textError2;
  } else {
    textError2 = "";
    document.getElementById("errorEdit"+ id_update).innerHTML = textError2;

    var newText = document.getElementById("inputUpdate" + id_update).value;
    arrayText.splice(id_update, 1, newText);
    console.log(arrayText);
    document.getElementById("edit" + id_update).innerHTML = contannerUpdate(id_update);
  }
}

// Delete
function deleteText(id_Delete) {
  arrayText.splice(id_Delete, 1);
  console.log(arrayText);
  document.getElementById("showOutput").innerHTML = contannerText();
}
