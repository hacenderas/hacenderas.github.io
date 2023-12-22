$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function random_color_masthead()
{
  
  colors = ["#007bff","#6610f2"
  ,"#6f42c1"
  ,"#e83e8c"
  ,"#dc3545"
  ,"#fd7e14"
  ,"#ffc107"
  ,"#28a745"
  ,"#0085A1"
  ,"#17a2b8"]
  colors = ["#547691"]
  random_color_indx = Math.floor(Math.random() * colors.length)
  if($(".masthead-no-img").length > 0){
    
    $(".masthead-no-img").css("background-color","var(--hc1)")
    $(".nav-item a").css("color","var(--hc2)")
  }
  $(".nav-item a").css("color","var(--hc2)")
}
random_color_masthead()

$(function () {
  $('[data-toggle="popover"]').popover({
    "trigger":"hover"
  })
})