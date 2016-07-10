export function thousandsFormatter(num) {
  let isNegative = false;
  let formattedNumber;

  if (num < 0) {
      isNegative = true
  }
  num = Math.abs(num)
  if (num >= 1000000000) {
      formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  } else if (num >= 1000000) {
      formattedNumber =  (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else  if (num >= 1000) {
      formattedNumber =  (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
      formattedNumber = num;
  }
  if(isNegative) { formattedNumber = '-' + formattedNumber }
  return formattedNumber;
}

export function textToLinks(text) {
  let re = /(https?:\/\/(([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?))/g;
  return text.replace(re, "<a href=\"$1\">$1</a>");
}

export function identifyFirstHashTag(text) {
  let hashTag = text.match(/#\S+/g);


  if(hashTag){
    return hashTag[0].replace('#', '');
  } else {
    return false;
  }
}

export function stringShortener(text) {
  var length = 5;
  if (text.length > length) {
    text = text.substring(0, length)+'...';
  }
  return text;
}
