## ARRAYS

Algumas operações em array tem complexidades diferentes... Vejamos

os métodos .push() e .pop() que adicionam e removem itens no final do array respectivamente tem complexidade O(1),
já os métodos .shift() e unshift() que removem e adicionam elementos no início do array tem complexidade O(n) e isso acontece pois ao inserirmos ou removermos items no começo do array, precisamos reajustar o index de todo o restante novamente.

Adicionar e remover items no meio do array tem esse mesmo problema.

Arrays são boas estruturas para buscar pelo index, pois consigo acessar diretamente o valor naquele index, com complexidade O(1)

Procurar pelo valor já não é interessante, pois preciso percorrer todo o array O(n)

https://www.bigocheatsheet.com/

![Screenshot](./assets/WhatsApp%20Image%202025-07-08%20at%2016.02.46.jpeg)
