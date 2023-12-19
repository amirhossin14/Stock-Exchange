let timerId = setInterval(() => {
  let tedad = "5000"; /*تعداد**/
  let price = "19567"; /*فیمت**/

  document.getElementById("send_order_txtCount").value = tedad;

  $("#send_order_btnSendOrder").click();
}, 150); /*(♦♦♦♦♦ ♦♦♦ ♦♦♦♦♦ ♦♦ (♦♦♦♦ ♦♦♦♦♦)**/

//stop zamane tavaghof bar hasbe mili sanie

let stop = 10000; /*(مدت زمان ارسال)**/
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, stop);
