function genInput() {
    // Pega os valores dos campos do formulário
    const attrName = document.getElementById('attrName').value;
    const attrTitle = document.getElementById('attrTitle').value;
    const isRequired = document.getElementById('isRequired').checked ? 'Sim' : 'Não';
    const IsSearchable = document.getElementById('IsSearchable').checked ? 'Sim' : 'Não';
    const attrType = document.getElementById('attrType').value;
    const attrLimit = document.getElementById('attrLimit').value;
    // Gera o texto para o index.md

    if(attrName && attrTitle && attrType) {

        const code = `
    ${attrName}: ${attrType}(${attrLimit || " "})
        @
            column
                ${attrName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}
            title
                pt-br
                    ${attrTitle}
            ${isRequired == 'Sim'?'required':''}
            ${IsSearchable == 'Sim'?'searchable':''}
        `;
        // Exibe o texto gerado em uma div ou textarea (adicione um elemento com id="output" no seu HTML)
        document.getElementById('output').value = code;

         document.querySelector('label[for="nome"]').textContent = attrTitle;
         const label = document.querySelector("label[for='nome']");
      if (label){
          label.textContent = novoNome;
          label.isRequired = isRequired == 'Sim' ? true : false;
          

      }

    }
}

