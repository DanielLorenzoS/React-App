import React, { useState } from 'react';

// export default function Formularios() {
//     const [Nombre, setNombre] = useState("");
//     const [Sabor, setSabor] = useState("");
//     const [Lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('El formulario se ha enviado')
//     }

//     return (
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='Nombre'>Nombre</label>
//                 <input type="text"
//                     id='Nombre'
//                     name='Nombre'
//                     value={Sabor}
//                     onChange={(e) => setNombre(e.target.value)}
//                 />

//                 <h4>Elige tu sabor fav</h4>
//                 <input type="radio"
//                     id='vanilla'
//                     name='sabor'
//                     value="vanilla"
//                     onChange={(e) => setSabor(e.target.value)}
//                     defaultChecked
//                 />
//                 <label htmlFor='vanilla'>Vanilla</label>
//                 <input type="radio"
//                     id='react'
//                     name='sabor'
//                     value="react"
//                     onChange={(e) => setSabor(e.target.value)}
//                 />
//                 <label htmlFor='react'>React</label>
//                 <input type="radio"
//                     id='angular'
//                     name='sabor'
//                     value="angular"
//                     onChange={(e) => setSabor(e.target.value)}
//                 />
//                 <label htmlFor='angular'>Angular</label>
//                 <input type="radio"
//                     id='vue'
//                     name='sabor'
//                     value="vue"
//                     onChange={(e) => setSabor(e.target.value)}
//                 />
//                 <label htmlFor='vue'>Vue</label>

//                 <p>Elige un lenguaje de programación</p>
//                 <select name='lenguaje'
//                     onChange={(e) => setLenguaje(e.target.value)}
//                     defaultValue="">
//                     <option value="">---</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Python</option>
//                     <option value="go">Go</option>
//                     <option value="rb">Ruby</option>
//                 </select>
//                 <h3>{Lenguaje}</h3>
//                 {/* {Lenguaje === "" ? <h2>Está vació</h2> : <h2>No está vacío</h2>} */}
//                 <br />
//                 <label htmlFor='temrinos'>Acepto términos y condiciones</label>
//                 <input type="checkbox" id='temrinos' name='terminos'
//                     onChange={(e) => setTerminos(e.target.checked)} />
//                 {terminos ? <h3>Aceptaste los términos</h3> : 
//                             <h3>No aceptaste los términos</h3>}

//                 <br/>
//         <input type="submit" />
//             </form>
//         </>

//     )
// }

export default function Formularios() {
    const [form, setForm] = useState({});

    
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.cheked
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('El formulario se ha enviado')
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Nombre'>Nombre</label>
                <input type="text"
                    id='Nombre'
                    name='Nombre'
                    value={form.sabor}
                    onChange={handleChange}
                />

                <h4>Elige tu sabor fav</h4>
                <input type="radio"
                    id='vanilla'
                    name='sabor'
                    value="vanilla"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor='vanilla'>Vanilla</label>
                <input type="radio"
                    id='react'
                    name='sabor'
                    value="react"
                    onChange={handleChange}
                />
                <label htmlFor='react'>React</label>
                <input type="radio"
                    id='angular'
                    name='sabor'
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor='angular'>Angular</label>
                <input type="radio"
                    id='vue'
                    name='sabor'
                    value="vue"
                    onChange={handleChange}
                />
                <label htmlFor='vue'>Vue</label>

                <p>Elige un lenguaje de programación</p>
                <select name='lenguaje'
                    onChange={handleChange}
                    defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
                {/* {Lenguaje === "" ? <h2>Está vació</h2> : <h2>No está vacío</h2>} */}
                <br />
                <label htmlFor='terminos' >Acepto términos y condiciones</label>
                <input type="checkbox" id='terminos' name='terminos'
                    onChange={handleChecked} />

                <br/>
        <input type="submit" />
            </form>
        </>

    )
}