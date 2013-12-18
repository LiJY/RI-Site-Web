var show_per_page = 10; 
var current_page = 0;
var number_of_pages = 0;

function set_displayAccess(first, last) {
	$('#projets').children().css('display', 'none');
	$('#projets').children().slice(first, last).css('display', 'block');
}

function previousAccess(){
 if(current_page > 0) go_to_pageAccess(current_page - 1);
}

function nextAccess(){
 if(current_page < number_of_pages - 1) go_to_pageAccess(current_page + 1);
}

function go_to_pageAccess(page_num){
  current_page = page_num;
  start_from = current_page * show_per_page;
  end_on = start_from + show_per_page;
  set_displayAccess(start_from, end_on);
  $('#current_pageAccess').html(page_num+1);
}  

function paginationAccess(){
  number_of_pages = Math.ceil($('#projets').children().size() / show_per_page);
  var nav = '<ul class="pagination pagination-sm">'
  nav += '<li><span>'
  nav += '<span>'
  nav += $('#projets').children().size()
  nav +='</span>'
  nav += '  projets trouvés'
  nav += '</span></li>'
  nav += '<li class="previous"><a href="javascript:previousAccess();">&larr; Précédent</a></li>'
  nav += '<li><span>page '
  nav += '<span id="current_pageAccess">'
  nav += (current_page + 1)
  nav +='</span>'
  nav += ' / ' 
  nav += '<span>'
  nav += number_of_pages
  nav +='</span>'
  nav += '</span></li>'
  nav += '<li class="next"><a href="javascript:nextAccess();">Suivant &rarr;</a></li>'
  nav += '</ul>'

  $('#page_navigationAccess').html(nav);
  set_displayAccess(0, show_per_page);
};