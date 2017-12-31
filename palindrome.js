function palindrome(str) {
  var forwards = str.toLowerCase();
  var backwards = "";

  for (var end = forwards.length -1; end >= 0; end--) {
    backwards += forwards[end];
  }
  //console.log(forwards);
  //console.log(backwards);

  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }

}

palindrome("racecar");
palindrome("animal");
