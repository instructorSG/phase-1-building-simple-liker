// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const modal = document.getElementById ('modal');
modal.classList.add ('hidden');

const doSomething = el => {
  if (el.target.innerHTML === EMPTY_HEART) {
    mimicServerCall ()
      .then (() => {
        el.target.innerHTML = FULL_HEART;
        el.target.classList.add ('activated-heart');
      })
      .catch (error => {
        modal.classList.remove ('hidden');
        let p = document.getElementById ('modal-message');
        p.innerHTML = error;
        setTimeout (() => {
          modal.classList.add ('hidden');
        }, '3000');
      });
  } else {
    el.target.innerHTML = EMPTY_HEART;
    // console.log ('el.target', el.target);
    el.target.classList.remove ('activated-heart');
  }
};

const likeGlyphs = document.querySelectorAll ('.like-glyph');
likeGlyphs.forEach (el => {
  el.innerHTML = EMPTY_HEART;
  el.addEventListener ('click', doSomething);
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall (url = 'http://mimicServer.example.com', config = {}) {
  return new Promise (function (resolve, reject) {
    setTimeout (function () {
      let isRandomFailure = Math.random () < 0.2;
      if (isRandomFailure) {
        reject ('Random server error. Try again.');
      } else {
        resolve ('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
