
//setting up hamburger navigation
let $nav = $("#nav")

$nav.on('click', ()=>{
  $("nav").css('display', 'block')
}
)

let $projects = $("#projects")
//getting data from json
let url = 'https://docs.google.com/spreadsheets/d/1rSCXAKx7Pvd_FTYy3JIBdVTJTm-KZongre1eOOFiX9Y/edit#gid=0'
let id = '1rSCXAKx7Pvd_FTYy3JIBdVTJTm-KZongre1eOOFiX9Y'

let source = `https://spreadsheets.google.com/feeds/list/1rSCXAKx7Pvd_FTYy3JIBdVTJTm-KZongre1eOOFiX9Y/od6/public/values?alt=json`
fetch(source)
  .then( response => response.json() ) // this parses the data from string back into an object
  .then( data => {
   console.log('data', data)
  //data.feed.entry is the array that stores our projects
   let project = data.feed.entry.map( project =>{
     // console.log('project', project.gsx$title.$t)
     return {
       title: project.gsx$title.$t,
       image: project.gsx$image.$t,
       descrip: project.gsx$description.$t,
       url: project.gsx$url.$t
     }
   })
   app(project)
})
function app(project) {
  for(j=0; j<project.length; j++){
    let $img = $("<img>")
    $img.html('project here')
    console.log(project[j])
    let $image = project[j]
    $img.attr('src', $image.image)
    $projects.append($img)
  }
  console.log('app-projects', projects)
}
