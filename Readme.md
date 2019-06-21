# dxNumberBox - How to allow entering only integer/float numbers
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/e4941)**
<!-- run online end -->


<p>This example demonstrates how to allow entering only numbers in dxNumberBox. For this task we need to handle the <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#onKeyPress">dxNumberBox.onKeyPress</a> event and check whether the typed symbol is a number. If this is not a number, prevent the default action of the event by calling the <a href="http://api.jquery.com/event.preventDefault/"><u>preventDefault</u></a> method of the event object that is passed to the <strong>onKeyPress </strong>event handler.</p>
<p><strong>See also:</strong><br> <a href="http://www.w3schools.com/jsref/jsref_obj_regexp.asp"><u>JavaScript RegExp</u></a></p>

<br/>


