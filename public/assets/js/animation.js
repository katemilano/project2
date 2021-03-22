// HTML CSS JSResult Skip Results Iframe
let current = null;

document.querySelector('#email').addEventListener('focus', function (e) {
  if (current) current.pause();
  // eslint-disable-next-line no-undef
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#user_password').addEven`tListener('focus', function (e) {
  if (current) current.pause();
  // eslint-disable-next-line no-undef
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#login').addEventListener('focus', function(e) {
  if (current) current.pause();
  // eslint-disable-next-line no-undef
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
