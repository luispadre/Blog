import React from 'react'

export default function NoMatch({ location }) {
    return (
      <div className="jumbotron align-items-center">
        <h3>
          Pagina no encontrada <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
