
var url = document.URL;
var data = "https://docs.google.com/forms/d/e/1FAIpQLSfdvQc52CaFwyDZUpB3srNSewb56CUt8jbN53dNaAOdn-Fz1g/formResponse?usp=pp_url&entry.1541732625="+url+"&submit=SUBMIT";
  
var iframe = document.createElement('iframe');
var html = '';
iframe.src = data;
document.body.appendChild(iframe);
console.log('iframe.contentWindow =', iframe.contentWindow);
 
