/* 
    handlEv.
        
        Iterate throught NodeList of selector and attaches an event lisneter per node when
        a selector is passed as argument.
        If selector has not elements yet (when element will be dynamically genereted), it will
        attach the event listener to document waiting for being dispatched on genereted element
        If element is passed as argument it will attach event listener to element
        
        Add event.
            _$("[selector]","onEvent",function(){})

        Add new errors to catch if found
*/

const e$ = (()=>
    (Attach = (x, e, f)=>x.addEventListener(e, f),
    iterAt = (s, e, f)=>document.querySelectorAll(s).forEach(x=>Attach(x, e, f)),
    isNode = (s, t, R=0)=>(document.querySelectorAll(s).forEach(x=>R=R||x==t),R),
    handEv = (s, e, f, R=0)=>
    {
        try{
            typeof s == "string" ? 
            ( 
                document.querySelectorAll(s).length ? 
                iterAt(s, e, f)
                : Attach(document, e, O=>O.target&&isNode(s, O.target)?f(O):0)
            )
            : Attach(s, e, f)
        }
        catch(e){
            e instanceof DOMException?R=s+" is not a valid selector":" Fatal error : this Error is no documented, kindly search the Error origin and catch it on handlEv.js"
        }
        finally{
            R?console.error("handlEv : "+R):{}
        }
    })
)()
