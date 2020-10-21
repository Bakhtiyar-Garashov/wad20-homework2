// TASK 3. Fetch browse page information from the endpoint.

$(function () {
    let url = "http://private-anon-a5e83390d2-wad20postit.apiary-mock.com/profiles";

    $.get(url, function (response) {
        for (profile of response) {

            let each_person = $('<div class=person>');
            let author_info = $('<span class=post-author-info>');

            let author = $('<div class=post-author>');
            let profile_pic = $('<img>').attr('src', profile.avatar);
            let author_name = $('<small>').text(profile.firstname +" "+ profile.lastname);
            author_info.append(profile_pic);
            author_info.append(author_name);
            author.append(author_info);

            // post action div
            let post_actions = $('<div class=post-actions>');
            let btn = $('<button class=subscribe-button>').text("Follow");
            post_actions.append(btn);

            // append al subnodes into main node
            each_person.append(author);
            each_person.append(post_actions);


            // append post div into container section
            $('.browse-container').append(each_person);
        }
    });
    $(document).on('click','.subscribe-button',function () {
        $(this).toggleClass('liked')
    });

});