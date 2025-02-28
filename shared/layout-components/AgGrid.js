import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // AG Grid 기본 스타일
import 'ag-grid-community/styles/ag-theme-alpine.css'; // 알파인 테마 스타일

const AgGrid = ({ columnDefs, rowData }) => {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Corolla', price: 25000 },
    { make: 'Ford', model: 'Focus', price: 22000 },
    { make: 'BMW', model: '320d', price: 35000 },
  ]);

  const [columnDefs] = useState([
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
      />
    </div>
  );
};

export default AgGrid;
