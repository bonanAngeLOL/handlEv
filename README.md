# handlEv

Iterate throught NodeList of selector and attaches an event listener per node when a selector is passed as argument.
If selector has not elements yet (when element will be dynamically genereted), it will attach the event listener to document waiting for being dispatched on dinamic genereted element (target element should be compared in function)
If element is passed as argument it will attach event listener to element

Add event.

  _$("[selector]","onEvent",function(){})

It lacks of error catching for some errors I haven't looking for
