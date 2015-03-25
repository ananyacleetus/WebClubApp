    var getLists = function(subreddit, list, callback) {
        var subredditURL = 'http://www.reddit.com/r/' + subreddit + '.json';
        $.ajax(subredditURL).done(function(data, status, xhr) {
            if (data && data.data.children.length === 0) {
                $(list).append('<li><h2>No posts for now!</h2><p>Check back later!</p></li>')
            }
            $.each(data.data.children, function(i, v) {
                var title = v.data.title;
                var text = v.data.selftext;
                var id = text.substring(0, 4);
                var name = clubarray[parseInt(id) - 1];
                $(list).append('<li><h2>' + v.data.title + '</h2><h4>' + name + '</h4><p>' + v.data.selftext.substring(4) + '</p></li>');
            });
        });
        return callback(null, $(list));
    };