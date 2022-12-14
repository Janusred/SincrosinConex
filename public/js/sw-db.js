// Utilidades para grabar PouchDB
const db = new PouchDB('mensajes');
function guardarMensaje( mensaje ) {

    return db.put( mensaje ).then( () => {
        self.registration.sync.register('nuevo-post');
        const newResp = { ok: true, offline: true };
        return new Response( JSON.stringify(newResp) );
    });
}