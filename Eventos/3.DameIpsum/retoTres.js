const ipsum = document.querySelector('.text');
const ipsumtwo = document.querySelector('.newtext');

const paragraph = () => ipsumtwo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint et eligendi optio earum dolor quos odit dignissimos dolorum veritatis corrupti iusto tenetur, laudantium hic odio error nam repudiandae maiores?'

ipsum.addEventListener('mouseover', paragraph);