// TASK 3. Fetch browse page information from the endpoint and displaying it.

$(function () {
    let url = "http://private-anon-a5e83390d2-wad20postit.apiary-mock.com/profiles";

    $.get(url, function (response) {
        for (profile of response) {

            //whole account div
            let each_account = $('<div class="account">');

            //account image
            let account_pic = $('<img class="account-image">').attr('src', profile.avatar);

            //account name div
            let account_name = $('<div class ="account-name">');
            let name = $('<strong>').text(profile.firstname +" "+ profile.lastname);
            account_name.append(name)



            // browse action div
            let browse_actions = $('<div class=follow-actions>');
            let btn = $('<button class=follow-button>').text("Follow");
            browse_actions.append(btn);

            // append al subnodes into main node
            each_account.append(account_pic);
            each_account.append(account_name);
            each_account.append(browse_actions);


            // append post div into container section
            $('.browse-container').append(each_account);
        }
    });
    //Follow button changing on click
    $(document).on('click','.follow-button',function () {
        var $this = $(this);
        $(this).toggleClass('followed');
        if($this.hasClass('followed')){
            $this.text('Followed');
        } else {
            $this.text('Follow');
        }
    });

});