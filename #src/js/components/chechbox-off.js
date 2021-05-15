/* $(function(){

  $('.checkbox-off__checkmark').on('click', function(event) {
  	if($(this).hasClass('active')){
  		$(this).find('input').prop('checked',false);
  	}else{
  		$(this).find('input').prop('checked',true);
  	}
  	$(this).toggleClass('active');
  	$('body').toggleClass('night');
  	return false;
  });

}); */

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const input = document.getElementById('switch');

toggle.addEventListener('click', function() {
	const isChecked = input.checked;
	if (isChecked) {
		body.classList.remove('night');
		toggle.classList.remove('active');
	} else {
		body.classList.add('night');
		toggle.classList.add('active');
	}
});
