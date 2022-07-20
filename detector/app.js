function getOS() {
    let userAgent = window.navigator.userAgent.toLowerCase(),
      macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
      windowsPlatforms = /(win32|win64|windows|wince)/i,
      iosPlatforms = /(iphone|ipad|ipod)/i,
      os = null;
  
    if (macosPlatforms.test(userAgent)) {
      window.location.replace("https://apps.apple.com/mx/app/conexi%C3%B3n-f%C3%A1cil-2-0/id1493011924");
    } else if (iosPlatforms.test(userAgent)) {
      window.location.replace("https://apps.apple.com/mx/app/conexi%C3%B3n-f%C3%A1cil-2-0/id1493011924");
    } else if (windowsPlatforms.test(userAgent)) {
      os = "windows";
    } else if (/android/.test(userAgent)) {
      window.location.replace("https://play.google.com/store/apps/details?id=com.conexionfacil");
    } else if (!os && /linux/.test(userAgent)) {
      window.location.replace("https://play.google.com/store/apps/details?id=com.conexionfacil");
    }
  
    return os;
  }
  
  document.getElementById('your-os').textContent = getOS();