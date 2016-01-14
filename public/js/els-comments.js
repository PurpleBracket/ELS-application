function commentsUi(){
    var messageContainerElem = $('#message-board'),
        messageItemElem = $('message-container#Opost'),
        commentsModal = $('#comments-modal'),
        commentItems = $('message-container.comment'),
        newCommentItem = $('message-container.new-comment'),
        inputForm = $('textarea#message');
    function activeState() {
      $(this).toggleClass('active');
      newCommentItem.toggleClass('active');
      $(this).parent().toggleClass('new-comment--active');
      messageItemElem.toggleClass('hidden');
      commentItems.toggleClass('hidden');
    }
    function passiveState() {
      $(this).toggleClass('active');
      newCommentItem.toggleClass('active');
      $(this).parent().toggleClass('new-comment--active');
      messageItemElem.toggleClass('hidden');
      commentItems.toggleClass('hidden');
    }

    inputForm.focus(function() {
      activeState();
      $(this).attr('rows',6);
    }).blur(function() {
      passiveState();
      $(this).attr('rows',2);
    });
}

function loginBlock() {
  var target = $('dd.accordion-navigation#login-block > .content.section');

  $('dd.accordion-navigation#login-block > .content.section').addClass('active');
  $('dd.accordion-navigation#login-block > .accordion.accordion-section').addClass('active');
}
