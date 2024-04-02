document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = encodeURIComponent(window.location.href);
    var currentTitle = encodeURIComponent(document.title);
  
    var linkedinShare = document.querySelector('.share-linkedin');
    var twitterShare = document.querySelector('.share-twitter');
    var copyLink = document.querySelector('#copy-link');
  
    if(linkedinShare) {
      linkedinShare.href = 'https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}';
    }
  
    if(twitterShare) {
      twitterShare.href = 'https://twitter.com/intent/tweet?text=${currentTitle}&url=${currentUrl}';
    }
    
    if(copyLink) {
      copyLink.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(function() {
          alert('링크 복사 완료');
        }, function() {
          alert('링크 복사 실패');
        });
      });
    }
  });
  