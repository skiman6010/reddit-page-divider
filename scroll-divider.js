// From https://gist.github.com/broquaint/52c14900f45bee3816997e48ebdabee4
const dividerCls   = 'gm-section-divider',
      dividerStyle = `
.${dividerCls} {
    text-align:    center;
    border-top:    solid 1px black;
    border-bottom: solid 1px black;
    margin-bottom: 7px;
    font-weight:   bold;
}
`;

const sheet = document.head.appendChild(document.createElement('style')).sheet;
sheet.insertRule(dividerStyle, 0);

var count  = 1;
function addMarker() {
  // Get the div containing posts.
  const posts   = document.querySelector('.scrollerItem').parentNode.parentNode.parentNode,
        lastKid = posts.childNodes[posts.childNodes.length - 1];

  // Add a divider which shows the number of sections added.
  if(!lastKid.classList.contains(dividerCls)) {
    const div = document.createElement('div');
    div.className   = dividerCls;
    div.textContent = count++;
    posts.appendChild(div);
  }
}

setInterval(addMarker, 1000);