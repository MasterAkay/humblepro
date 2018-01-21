console.log("hey this is akshay");
$.ajax({
    type:"GET",
    dataType:"json",
    url:"/movie/all",
    success:function(response){
        //console.log("Data from server",response);
var data=formObject(response.data);
constructDOM(data);
},
    error:function(err){console.log("error in Get method",err);}
});
function formObject(response){
    var flags=[], categoryObject=[];
    var length=response.length;
    for(i=0;i<length;i++){
var movie=response[i];
//        console.log("movie",movie);
//console.log("language",movie.language);


var index=flags.indexOf(movie.language);
if(index >= 0){
//console.log("hey");
    categoryObject[index].movies.push(movie);


    continue;
}

else
{

flags.push(movie.language);
//   console.log(flags);
//}
//    }
//    console.log("formObject response",response);

}
var objectSchema={
    "category":movie.language,
"movies": []
}
objectSchema.movies.push(movie);
categoryObject.push(objectSchema);
console.log("categoryObject",categoryObject);
}
console.log(flags);

return categoryObject;

}

function constructDOM(data){
    var categoryContent=[];
    for(var i=0;i<data.length;i++){
            var objectSchema=data[i];
        var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
          categoryContent.push(categoryTitle);
for(var j=0;j<objectSchema.movies.length;j++){


    console.log(objectSchema.movies[j].name);
    categoryContent.push('<div classs="clearfix category">');

    var categoryMovie=$('<div class="movie fleft"><a href="#"><div class="poster"><img src="'+objectSchema.movies[j].thumbnailUrl+'" alt=""></div></a><div class="details"><p class="yearOfRelease">'+objectSchema.movies[j].releaseYear+'</p><h4 class="name">'+objectSchema.movies[j].name+'</h4></div>');
    console.log("constructorDOM data", objectSchema);


  categoryContent.push(categoryMovie);   categoryContent.push('</div>');
//   console.log("final:",categoryContent);
}

}
//for(var j=0;j<data.length;j++)
  //{
    //  var objectSchema=data[j];

//console.log(objectSchema.movies[j].name);
//categoryContent.push('<div classs="clearfix category">');
//    var categoryMovie=$('<div class="movie fleft"><a href="#"><div class="poster"><img src="'+objectSchema.movies[j].thumbnailUrl+'" alt=""></div></a><div class="details"><p class="yearOfRelease">'+objectSchema.movies[j].releaseYear+'</p><h4 class="name">'+objectSchema.movies[j].name+'</h4></div>');
//    categoryContent.push(categoryMovie);
//    categoryContent.push('</div>');
//}

$('.content').html(categoryContent);
}
