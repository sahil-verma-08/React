function customRender(reacteElement,mainContainer){
    const domElement =document.createElement(reacteElement.type)
    domElement.innerHTML= reacteElement.children
               // for line to line 
    
    // domElement.setAttribute("href",reacteElement.props.href)
    // domElement.setAttribute("target",reacteElement.props.target)
   

                    // by use loops
      
    for (const prop in reacteElement.props){
        if (prop==="children") continue;
        domElement.setAttribute(prop,reacteElement.props[prop])
    }
     mainContainer.appendChild(domElement)
    
}
const reacteElement={
    type : "a",
    props:{
          href : "https://google.com",
          target : "_blank"
    },
    children :"click me to visit google"
}




const mainContainer = document.querySelector("#root")
customRender(reacteElement,mainContainer)