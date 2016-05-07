
$('#btn-new').fadeIn(2000);
// FadeIn des boutons du menu NOUVELLE PARTIE
$('#btn-new').click(function() {
	$("#btn-culture:hidden").fadeIn(2000);
	$("#btn-code:hidden").fadeIn(3000);
});
// FadeIn des boutons du menu CODE
$('#btn-code').click(function() {
	$("#btn-ruby:hidden").fadeIn(2000);
	$("#btn-php:hidden").fadeIn(3000);
	$("#btn-javascript:hidden").fadeIn(4000);
	$("#btn-warrior:hidden").fadeIn(2000);
	$("#btn-indecis:hidden").fadeIn(4000);
});