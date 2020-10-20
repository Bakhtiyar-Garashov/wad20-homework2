

// TASK 2. Fetching and rendering posts from api /posts endpoint

$(function () {
    let url = "https://private-anon-33cef5ca9f-wad20postit.apiary-mock.com/posts"

    $.get(url, function (response) {
        for (post of response) {

            // whole post div
            let each_post = $('<div class=post>');

            // post author div
            let author = $('<div class=post-author>');
            let author_info = $('<span class=post-author-info>');
            let profile_pic = $('<img>').attr('src', post.author.avatar);
            let author_name = $('<small>').text(post.author.firstname + post.author.lastname);
            let post_date = $('<small>').text(post.createTime);
            author_info.append(profile_pic)
            author_info.append(author_name)
            author.append(author_info)
            author.append(post_date)

            // post image div
            let post_image = $('<div class=post-image>')

            // check if post has any media
            // render different html elements based on media type
            if (post.media) {
                if (post.media.type === 'image') {
                    let post_pic = $('<img>').attr('src', post.media.url)
                    post_image.append(post_pic);
                } else if (post.media.type === 'video') {
                    let post_video = $('<video controls>').attr('src', post.media.url)
                    post_image.append(post_video);
                } else {
                    alert("Unsupported media type for post")
                }
            }

            // post title div
            let post_title = $('<div class=post-title>')
            let title = $('<h3>').text(post.text)
            post_title.append(title);

            // post action div
            let post_actions = $('<div class=post-actions>')
            let btn = $('<button class=like-button>').text("100k")
            post_actions.append(btn);

            // append al subnodes into main node
            each_post.append(author);
            each_post.append(post_image);
            each_post.append(post_title);
            each_post.append(post_actions);

            // append post div into container section
            $('.main-container').append(each_post);
        }
    });
    
    // Toggle class when button clicked to change style dynamically
    $(document).on('click','.like-button',function () {
        $(this).toggleClass('liked')
    });

});


