$(function(){
  $(".icon_add").click(function(){
    var epic_num = $(".scrum-grid").length;
    for(var i = 1; i <= $(".scrum-grid").length; i++){
      if(!$("#epics"+i).length){
        epic_num = i;
      }
    }
    var target = this.parentElement.parentElement.children[1];
    $(target).append(`
      <div class="item new">
        <div class="item-head">
          <div class="title-itemHead">
            <button id="checkbox"></button>
            <div class="list-title" contenteditable="true">New Item</div>
            <button class="toggle button-style"><i class="material-icons color" id="expand">expand_more</i></button>
            <button class="delete button-style"><i class="material-icons color">clear</i></button>
          </div>
          <div class="item-content">
            <div class="list-content" contenteditable="true">New Item</div>
          </div>
        </div>
      </div>
      </div>
    `);
    // $(".new", target.this).addClass("zoomIn animated");
    // $(".new", target.this).on("animationend webkitAnimationEnd oAnimationEnd", function(){
    //   $(this).removeClass("zoomIn animated");
    // });
    $(".delete").click(function(){
      let parent = $(this).parent(".title-itemHead").parent(".item-head").parent(".item");
      console.log(parent);
      parent.addClass("zoomOut animated");
      parent.remove();
    });
    $(".toggle").click(function(){
      let toggleParent = $(this).parent(".title-itemHead").parent(".item-head").children(".item-content");
      let toggleChild = $(this).children("#expand");
      toggleParent.show("slow");
      toggleChild.text(function(i, text){
        return text === "expand_more" ? "expand_less" : "expand_more";
      });
    });
  });
  // $( ".container" ).sortable({
  //   connectWith: ".container",
  //   handle: ".item",
  //   cancel: ".item-toggle",
  //   placeholder: "portlet-placeholder ui-corner-all"
  // });
  //
  // $( ".item" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" ).find( ".item" ).addClass( "ui-widget-header ui-corner-all" ).prepend( "<span class='ui-icon ui-icon-minusthick item-toggle'></span>");
  //
  // $( "item-toggle" ).on( "click", function() {
  //   var icon = $( this );
  //   icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
  //   icon.closest( ".item" ).find( ".list-content" ).toggle();
  // });
});
