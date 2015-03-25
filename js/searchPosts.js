 function searchPosts(list){
       var user_query = document.getElementById("search-input").value;
       var combined = getLists('uscclubapp', '.posts.updates').concat(getLists('uscclubappcal', '.posts.calendar'));
       var length = combined.length;
       $(combined).each(data.data.children, function(i, v) {
               console.log(v.data.title);
           }

           // for (var i = 0; i < length; i++) {
           //     if (combined[i].name.indexOf(user_query) > -1) {
           //         $(list).append(i);
           //     }
           // }

       )};
