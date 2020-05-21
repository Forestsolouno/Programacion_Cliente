function functions() {
    let numbers = /^[0-9]+$/;
    let alertas = "";
    let letters = /^[A-Za-z]+$/;
    let entrar = false;
    let completo = true;
    let area = document.getElementById("problema");
    let ele = document.getElementsByTagName('input');
    let checkboxElements = new Array();
    let c = 0;
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox') {
            checkboxElements.push(ele[i]);
        }
    }
    for (let i = 0; i < checkboxElements.length; i++) {
        if (checkboxElements[i].checked == true) {
            c++;
        }
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formulario.correo.value) && (formulario.correo.value.length > 0)) {
        alertas += `El correo es invalido. \n`;
        entrar = true;
        completo = false;
    }
    if (!formulario.matricula.value.match(numbers) && formulario.matricula.value.length > 0) {
        alertas += `La matricula no es valida debe tener solo números.\n`
        entrar = true;
        completo = false;
    }
    if (!formulario.nombre.value.match(letters) && (formulario.nombre.value.length > 0)) {
        alertas += `El nombre es invalido no debe de contener números\n`
        entrar = true;
        completo = false;
    }
    if (!formulario.telefono.value.match(numbers) && formulario.matricula.value.length > 0) {
        alertas += `El número telefónico no es valida debe tener solo números.\n`
        entrar = true;
        completo = false;
    }
    if (!formulario.codigo.value.match(numbers) && formulario.codigo.value.length > 0) {
        alertas += `El código postal no es valido debe tener solo números.\n`
        entrar = true;
        completo = false;
    }

    if (formulario.nombre.value.length < 1) {
        alertas += `Debes ingresar tu nombre\n`;
        entrar = true;
        completo = false;
    }
    if (formulario.correo.value.length < 1) {
        alertas += `Debes ingresar tu correo electrónico.\n`;
        entrar = true;
        completo = false;
    }
    if (document.formulario.municipio.value == 0 ||
        document.formulario.municipio.value == "") {
        alertas += `Selecciona uno de los municipios que corresponda con la lada de tu teléfono.\n`;
        entrar = true;
        completo = false;
    }
    if (formulario.telefono.value.length < 1) {
        alertas += `Completa tu número de teléfono.\n`;
        entrar = true;
        completo = false;
    }
    if (c < 1) {
        alertas += `Selecciona al menos una de las unidades de aprendizaje.\n`;
        entrar = true;
        completo = false;
    }
    if (c > 3) {
        alertas += `Solo puedes seleccionar tres unidades como máximo.\n`;
        entrar = true;
        completo = false;
    }
    if (problema.value.length < 1) {
        alertas += `Debes de ingresar un mensaje.\n`;
        entrar = true;
        completo = false;
    }

    if (entrar === true) {
        alert(alertas);
    } else if (completo) {
        alert("Has completado el Formulario");
        document.formulario.submit();
    } else {
        alert("Te Faltan Datos Para Completar el Formulario");
    }
}