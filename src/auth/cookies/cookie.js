export class Cookies {
  static set(cookieName, cookieValue, expiresIn = 1) {
    const date = new Date()
    date.setTime(date.getTime() + (expiresIn * 23 * 60 * 60 * 1000))
    let expires = `expires=${date . toUTCString()}`
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`
  }

  static get(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
