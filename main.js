

$('#save').click(function () {
  var saveList = $('.task-list').html();
  localStorage.app = saveList;
  console.log('aaa');
});

var add = document.getElementById('add');
var newTask = document.getElementById('task-text');
var list = document.querySelector('.task-list');
var showHide = document.getElementById('showHide');
var sort = document.getElementById('sort');



if (localStorage.app) {
  list.innerHTML = localStorage.app;
};

sort.addEventListener('click', function () {
  var taskDone = document.querySelectorAll('.made')
  for (var i = 0; i < taskDone.length; i++) {
    list.appendChild(taskDone[i]);
  }
})

showHide.addEventListener('click', function () {
  list.classList.toggle('hide');
  if(list.classList.contains('hide')) {
    showHide.innerText = 'Show';
  } else {
    showHide.innerText = 'Hide';
  }
})

add.addEventListener('click', function () {
  console.log('aaa');

  var el = document.createElement('li');
  el.innerHTML = newTask.value + `
      <button class="done">✔</button>
      <button class="remove">✖</button>`;
  list.appendChild(el);
})

list.addEventListener('click', function (e) {
  if (e.target.classList.contains('done')) {
    e.target.closest('li').classList.toggle('made');

    if (e.target.closest('li').classList.contains('made')) {
      list.appendChild(e.target.closest('li'));
    }
  }

  if (e.target.classList.contains('remove')){
    console.log('bbb');
    e.target.closest('li').remove();
  }
})
