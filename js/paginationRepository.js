var show_per_pageRepository = 10; 
var current_pageRepository = 0;

function set_displayRepository(first, last) {
	$('#documents').children().css('display', 'none');
	$('#documents').children().slice(first, last).css('display', 'block');
}

function previousRepository(){
 if($('.active').prev('.page_link').length) go_to_pageRepository(current_pageRepository - 1);
}

function nextRepository(){
 if($('.active').next('.page_link').length) go_to_pageRepository(current_pageRepository + 1);
}

function go_to_pageRepository(page_num){
	current_pageRepository = page_num;
	start_from = current_pageRepository * show_per_pageRepository;
	end_on = start_from + show_per_pageRepository;
	set_displayRepository(start_from, end_on);
	$('.pageRepoActive').removeClass('active');
	$('#idRepo' + page_num).addClass('active');
}  

function paginationRepository(){
  var number_of_pages = Math.ceil($('#documents').children().size() / show_per_pageRepository);
  var nav = '<div>'
  /*  nav+=$('#documents').children().size() + ' documents trouvés page ' + (current_pageRepository+1) +' sur ' + number_of_pages*/
  nav += '<ul class="pagination pagination-sm"">';
  nav += '<li class="previous_link">';
  nav += '<a href="javascript:previousRepository();"><<</a>';
  nav += '';
  var i = -1;
  while(number_of_pages > ++i){
    nav += '<li class="page_link'
    if(!i) nav += ' active pageRepoActive';
    nav += '" idRepo="id' + i +'">';
    nav += '<a href="javascript:go_to_pageRepository(' + i +')">'+ (i + 1) +'</a>';
    nav += '';
  }
  nav += '<li class="next_link" >';
  nav += '<a href="javascript:nextRepository();">>></a>';
  nav += '';
  nav += '</ul>';
  nav += '</div>';

  $('#page_navigationRepo').html(nav);
  set_displayRepository(0, show_per_pageRepository);
};