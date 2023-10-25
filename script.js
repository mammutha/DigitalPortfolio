<scirpt>
document.querySelectorAll('a[href^="#"]').forEach(anchor=>
{
   anchor.addEventListener('click',function(e){
       e.preventDefault();
       const targetId=this.getAttribute('href').substring(1);
       const targetElementById(targetId);
       if(targetElement)
       {
           window.scrollTo({
               top:targetElement.offsetTop,behavior:'smooth'
           })
       }
   })
})
</scirpt>