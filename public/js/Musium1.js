//클래식
function classicBtn() {
    const elementsToFadeOut = ['total', 'romance', 'drama', 'comedy'];
    elementsToFadeOut.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
        }, 500);
      }
    });
  
    const classic = document.getElementById('classic');
    if (classic) {
      classic.style.transition = 'opacity 0.5s ease';
      classic.style.opacity = '1';
      setTimeout(() => {
        classic.style.display = 'block';
      }, 500);
    }
  }
  
  //코미디
  
  function comedyBtn() {
    const elementsToFadeOut = ['total', 'romance', 'drama', 'classic'];
    elementsToFadeOut.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
        }, 500);
      }
    });
  
  
    const comedy = document.getElementById('comedy');
    if (comedy) {
      comedy.style.transition = 'opacity 0.5s ease';
      comedy.style.opacity = '1';
      comedy.style.display = 'block';
    }
  }
  
  //드라마
  function dramaBtn() {
    const elementsToFadeOut = ['total', 'romance', 'comedy', 'classic'];
    elementsToFadeOut.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
        }, 500);
      }
    });
  
    // for (var i = 0; i < elementsToFadeOut.length; i++) {
    // var elementId = elementsToFadeOut[i];
    // var element = document.getElementById(elementId);
    //if (element) {
    // element.style.transition = 'opacity 0.5s ease';
    //  element.style.opacity = '0';
    // setTimeout(function(elem) {
    //   return function() {
    //   elem.style.display = 'none';
    //  };
    // }(element), 500);
    // }
  
    const drama = document.getElementById('drama');
    if (drama) {
      drama.style.transition = 'opacity 0.5s ease';
      drama.style.opacity = '1';
      drama.style.display = 'block';
    }
  }
  
  //로맨스
  function romanceBtn() {
    const elementsToFadeOut = ['total', 'drama', 'comedy', 'classic'];
    elementsToFadeOut.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
        }, 500);
      }
    });
  
    const romance = document.getElementById('romance');
    if (romance) {
      romance.style.transition = 'opacity 0.5s ease';
      romance.style.opacity = '1';
      romance.style.display = 'block';
    }
  }
     // 모든 p 태그를 선택
     const paragraphs = document.querySelectorAll('.detail .aa div p');
          
     // "뮤지컬제목"인 p 태그에 클래스 추가
     paragraphs.forEach(paragraph => {
         if (paragraph.textContent === '뮤지컬제목') {
             paragraph.classList.add('musical-title');
         }
     });