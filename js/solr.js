var accessURL='http://localhost:8983/solr/access/select/?wt=json&callback=?';
var repoUrl='http://localhost:8983/solr/repository/select/?wt=json&callback=?';

function on_dataRepo(data) {
  $('#documents').empty();
  var docs = data.response.docs;
  $.each(docs, function(i, item) {
    $('#documents').append($(
      '<div class="panel panel-default row">'
      +'<div class ="col-lg-11">'
      + '<a href="'+ item.id + '">' + item.id + '</a>'+ '<br/>'
      + item.title
      +'</div>'
      + '<button class="modalbutton btn btn-info btn-sm col-lg-1" data-toggle="modal" data-target="#myModal">details</button>'
      +'</div>'));
  });
  paginationRepository();
}

function on_dataAccess(data) {
  var docs = data.response.docs;
  var facets = data.facet_counts.facet_fields;

  $('#projets').empty();
  $('#facet').empty();

  $.each(docs, function(i, item) {
    $('#projets').append($(
      '<div class="panel panel-default row">'
      +'<div class="col-lg-1">'
      + '#' + item.NumGP
      +'</div>'
      +'<div class="col-lg-9">'
      + item.NomGP
      +'</div>'
      + '<button id="'+item.NumGP+ '" class="modalbutton btn btn-info btn-sm col-lg-1" data-toggle="modal" data-target="#myModal">details</button>'
      + '<button class="googleButton btn btn-primary btn-sm col-lg-1">google</button>'));
  });


  $.each(facets, function(i, item) {

    var facet = '<div class="panel panel-default">' ;
    facet +='<div class=" panel-header">' ;
    facet += '<span>' + item + '</span>'

    facet +='</div>';
    facet +='<div class="panel-body">';
      /*$.each(facet, function(i, facetList){
        facet+='<span>' + facetList +'</span>';
      })*/
    facet +='</div>';
    facet +='</div>';

    $('#facet').append(facet);
  });

  paginationAccess();
}

function on_search() {
  var query = $('#query').val();
  if (query.length == 0) {
    return;
  }

  $.getJSON(accessURL + "&json.wrf=on_dataAccess&facet.field=IntituleDecoupage_s&facet.field=IntitThem1_s",{
    q : query,
    start : '0',
    rows : '50',
    facet : "true",
    indent : "true"
  });
  $.getJSON(repoUrl + "&json.wrf=on_dataRepo",{
    q : query,
    start : '0',
    rows : '50'
  });
}

function on_detailSearch(NumGP) {
  $.getJSON(accessURL + "&json.wrf=remplir_modal",{
    q : "NumGP:" +NumGP,
  });
}

function googleSearch(data) {
  var item = data.response.docs[0];
  window.open("https://www.google.fr/#q="+item.NomGP);
}

function on_ready() {
  $('#search').click(on_search());
  /* Hook enter to search */
  $('body').keypress(function(e) {
    if (e.keyCode == '13') {
      on_search();
    }
  });
}

$('#projets').on('click', '.modalbutton', function(){
  var NumGP = $( this ).attr("id");
  on_detailSearch(NumGP)
});

$('#projets').on('click', '.googleButton', function(){
  var NumGP = $( this ).attr("id");
    on_searchNumGP(NumGP,"googleSearch")
  // var query = googleSearch();
  //   window.open("https://www.google.fr/#q="+query);
  //   alert(query);
});

$(document).ready(on_ready);