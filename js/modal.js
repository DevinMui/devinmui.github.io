$('#modals section').each(function(){
	$(this).hide();
	console.log($(this))
})

var esc_modal;

$(".projects .col-md-4").click(function(){
	var id = $(this).attr("id");
	id = id.replace("project-", "");
	var modal = "#modal-" + id;
	esc_modal = modal
	$(modal).slideDown(500, function(){
		$(this).addClass('color-change');
	})
})

$(document).keyup(function(e) {
	 if (e.keyCode == 27) { 
		$(esc_modal).slideUp(500)
	}
});

$(".btn-modal").click(function(){
	var id = $(this).attr("id");
	id = id.replace("btn-modal-","");
	var modal = "#modal-" + id;
	$(modal).slideUp(500, function(){
		$(this).removeClass('color-change');
	});
})