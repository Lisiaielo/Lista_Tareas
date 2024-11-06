export const Personas = ({ personas }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-md mx-1">
        <p className="font-semibold text-gray-700 mb-2">Proyecto: <span className="font-normal">{personas.proyecto}</span></p>
        <p className="font-semibold text-gray-700 mb-2">Persona Asignada: <span className="font-normal">{personas.nombreDesarrollador}</span></p>
        <p className="font-semibold text-gray-700 mb-2">Story Points: <span className="font-normal">{personas.storyPoints}</span></p>
        <p className="font-semibold text-gray-700 mb-2">Prioridad: <span className="font-normal">{personas.prioridad}</span></p>
        <p className="font-semibold text-gray-700">Resumen: <span className="font-normal">{personas.resumen}</span></p>
      </div>
    );
  }