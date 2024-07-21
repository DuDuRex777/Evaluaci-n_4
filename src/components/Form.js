import React, { useState, useEffect } from 'react';

function Formulario({ agregarJugador, jugadorEditado }) {
  const [nombre, setNombre] = useState('');
  const [equipo, setEquipo] = useState('');
  const [posicion, setPosicion] = useState('');
  const [numero, setNumero] = useState('');
  const [fecha_nacimiento, setFecha_Nacimiento] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [error, setError] = useState('');




  useEffect(() => {
    if (jugadorEditado) {
      setNombre(jugadorEditado.nombre);
      setEquipo(jugadorEditado.equipo);
      setPosicion(jugadorEditado.posicion);
      setNumero(jugadorEditado.numero);
      setFecha_Nacimiento(jugadorEditado.fecha_nacimiento);
      setExperiencia(jugadorEditado.experiencia);
    }
  }, [jugadorEditado]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !equipo || !posicion || !numero || !fecha_nacimiento || !experiencia) {
      setError('Rellene todos los campos!!');
      return;
    }
    setError('');
    const nuevoJugador = {
      id: jugadorEditado ? jugadorEditado.id : Date.now(),
      nombre,
      equipo,
      posicion,
      numero,
      fecha_nacimiento,
      experiencia: parseInt(experiencia, 10)
    };
    agregarJugador(nuevoJugador);
    setNombre('');
    setEquipo('');
    setPosicion('');
    setNumero('');
    setFecha_Nacimiento('');
    setExperiencia('');
  };
  return (
    <form onSubmit={handleSubmit} className="bg-orange-900 p-6 rounded-lg shadow-md">
      {error && <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-white">Nombre</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-orange-600 text-white border border-gray-600"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        <div className="mb-4">
          <label className="block text-white">Equipo</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-orange-600 text-white border border-gray-600"
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Posición</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-orange-600 text-white border border-gray-600"
            value={posicion}
            onChange={(e) => setPosicion(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Número de Camiseta</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-orange-600 text-white border border-gray-600"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Fecha Nacimiento</label>
          <input
              type="date"
              className="w-full p-2 rounded bg-orange-600 text-white border border-gray-600"
              value={fecha_nacimiento}
              onChange={(e) => setFecha_Nacimiento(e.target.value)}
            />
        </div>
          <div className="mb-4">
            <label className="block text-white">Años de Experiencia</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-orange-600 text-white border border-gray-600"
              value={experiencia}
              onChange={(e) => setExperiencia(e.target.value)}
              min="0"
            />
          </div>
      </div>
      <div className="flex">
        <button type="submit" className="bg-orange-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          {jugadorEditado ? 'Guardar Cambios' : 'Añadir jugador'}
        </button>
      </div>
    </form>
  );
}

export default Formulario;