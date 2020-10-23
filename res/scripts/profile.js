
// TASK 1. Fetch user profile information from users endpoint

$(function () {

	let url = "https://private-anon-454dca17cb-wad20postit.apiary-mock.com/users/1";

	$.get(url, function (response) {
		let name = response.firstname + " " + response.lastname;
		let email = response.email;

		let avatarurl = response.avatar;
		$('.avatar').attr('src', avatarurl);

		$('#name').text(name);
		$('#email').text(email);
	});

	$('.avatar').click(function () {
		$('.drop-down-menu').toggle();
	});


})