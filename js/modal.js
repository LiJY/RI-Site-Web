function remplir_modal(data){
  var item = data.response.docs[0];
  $('#myModalLabel').html('#'+ item.NumGP + ' - ' + item.NomGP);
  $('#projetDetail').html(
    'BudgetGlobalInitial :' + item.BudgetGlobalInitial +'<br/>'
    + 'BudgetGlobalReel :' + item.BudgetGlobalReel +'<br/>'
    + 'confidentiel :' + item.Confidentiel +'<br/>'
    + 'Envergure :' + item.Envergure +'<br/>'
    + 'FicheActionDD :' + item.FicheActionDD +'<br/>'
    + 'ActionInnovante :' + item.ActionInnovante +'<br/>'
    + 'Origine :' + item.Origine);

  $('#avancementDetail').html('Ordre_Avancement :' + item.Ordre_Avancement +'<br/>'
   + 'Avancement :' + item.Avancement +'<br/>'
   + 'Date1Avanc :' + item.Date1Avanc);

  $('#thematiqueDetail').html('Nature :' + item.CodNature +'<br/>'
   + 'CodThem1 :' + item.CodThem1 +'<br/>'
   + 'IntitThem1 :' + item.IntitThem1 +'<br/>'
   + 'CodThem2 :' + item.CodThem2 +'<br/>'
   + 'IntitThem2 :' + item.IntitThem2);

  $('#thematiqueDDDetail').html('CodThem1DD :' + item.CodThem1DD +'<br/>'
   + 'IntitThem1DD :' + item.IntitThem1DD +'<br/>'
   + 'CodThem2DD :' + item.CodThem2DD +'<br/>'
   + 'IntitThem2DD :' + item.IntitThem2DD ); 

  $('#localisationDetail').html('CodeDécoup :' + item.CodeDecoup +'<br/>'
   + 'IntituléDécoupage :' + item.IntituleDecoupage +'<br/>'   );
  $('#financementDetail').html('Typfinanceur :' + item.Typfinanceur +'<br/>'
   + 'NomFinanceur :' + item.NomFinanceur +'<br/>'
   + 'FormeFinanc :' + item.FormeFinanc +'<br/>'
   + 'Annee :' + item.Annee +'<br/>'
   + 'NumPo :' + item.NumPo +'<br/>'
   + 'NomPolitique :' + item.NomPolitique );

/*   + 'Typartenaire :' + item.Typartenaire +'<br/><br/>'

   + 'MaitreOuvrage :' + item.MaitreOuvrage +'<br/>'
   + 'MaitreOuvrageNom :' + item.MaitreOuvrageNom +'<br/>'*/
 }